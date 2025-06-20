import { Request, Response } from "express";
import Book from "./book.model";

const createBook = async (req: Request, res: Response) => {
    try {
        const data = await Book.create(req.body)
        res.status(201).send({
            success : true,
            message : "book created successfully",
            data
        })

    } catch (error) {
        res.status(500).send({
            success: false,
            message: "Something went wrong",
            error
        });

    }
}

export const bookController = {
    createBook
}