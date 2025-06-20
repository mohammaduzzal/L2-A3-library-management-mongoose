import { Request, Response } from "express";
import Book from "./book.model";

const createBook = async (req: Request, res: Response) => {
    try {
        const data = await Book.create(req.body)
        res.status(201).send({
            success: true,
            message: "book created successfully",
            data
        })

    } catch (error) {
        res.status(500).send({
            success: false,
            message: "Something went wrong",
            error
        });

    }
};

const getBooks = async (req: Request, res: Response) => {
    try {
        // const data = await Book.find();
        const data = await Book.find().sort({"createdAt" : "asc"}).limit(10);
        res.status(200).send({
            success: true,
            message: "Books retrieved successfully",
            data
        })


    } catch (error) {
        res.status(500).send({
            success: false,
            message: "Something went wrong",
            error
        });
    }
};

const getBookById = async (req: Request, res: Response) => {
    try {
        const bookId = req.params.bookId;
        const data = await Book.findById(bookId);
        if(!data){
            return res.status(404).send({
                success :false,
                message:"Book not found"
            })
        }
        res.status(200).send({
            success: true,
            message: "book retrieved successfully",
            data
        })

    } catch (error) {
        res.status(500).send({
            success: false,
            message: "Something went wrong",
            error
        });

    }

};

const updateBook = async (req: Request, res: Response) => {
    try {
        const bookId = req.params.bookId;
        const data = await Book.findByIdAndUpdate(bookId, req.body, {
            new: true,
            runValidators: true
        })
        res.status(200).send({
            success: true,
            message: "Book updated successfully",
            data
        })


    } catch (error) {
        res.status(500).send({
            success: false,
            message: "Something went wrong",
            error
        });
    }
};

const deleteBook = async(req: Request, res: Response) =>{
    try {
        const bookId = req.params.bookId;
        const data = await Book.findByIdAndDelete(bookId);
         res.status(200).send({
            success : true,
            message : "Book deleted successfully",
            data
        })
        
    } catch (error) {
         res.status(500).send({
            success: false,
            message: "Something went wrong",
            error
        });
        
    }
};

export const bookController = {
    createBook,
    getBooks,
    getBookById,
    updateBook,
    deleteBook
};