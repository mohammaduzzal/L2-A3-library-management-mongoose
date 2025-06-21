import { Request, Response } from "express";
import Borrow from "./borrow.model";


const createBorrow = async(req:Request, res: Response) =>{
    try {
        const payload = req.body;
        // handle book quantity logic
        await Borrow.handleBookStock(payload);

        const data = await Borrow.create(payload);
        res.status(201).send({
            success : true,
            message:"Book borrowed successfully",
            data
        })
        
    } catch (error :any) {
        res.status(500).send({
            success: false,
            message: "Something went wrong",
            error : error.message
        });
        
    }

}

const getBorrow = async(req:Request, res:Response)=>{
    try {
        const data = await Borrow.aggregate([
            // group--step-1
            {
                $group :{
                    _id : "$book",
                    totalQuantity : {$sum : "$quantity"}
                }
            },
            // lookup book details --step-2
            {
                $lookup:{
                    from : "books", //collection name (case sensitive)
                    localField : "_id",
                    foreignField : "_id",
                    as : "bookDetails"
                }
            },
            // unwind the book details array- step-3
            {
                $unwind : "$bookDetails"
            },
            // reshape the desire format step-4
            {
                $project :{
                    _id : 0, //exclude group id
                    book :{
                        title : "$bookDetails.title",
                        isbn : "$bookDetails.isbn"
                    },
                    totalQuantity : 1
                }
            }
        ])
         res.status(200).send({
            success: true,
            message: "Borrowed books summary retrieved successfully",
            data
        });
        
    } catch (error) {
        res.status(500).send({
            success: false,
            message: "Something went wrong",
            error
        });
        
    }
}


export const borrowController ={
    createBorrow,
    getBorrow
}