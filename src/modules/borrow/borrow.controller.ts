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