import { Request, Response } from "express";
import Book from "./book.model";
import { z } from "zod";

const createBookZodSchema = z.object({
    title: z.string(),
    author: z.string(),
    genre: z.string(),
    isbn: z.string(),
    description: z.string().optional(),
    copies: z.number(),
    available: z.boolean().optional()
})

const createBook = async (req: Request, res: Response) => {
    try {
        const zodBody = await createBookZodSchema.parseAsync(req.body)
        const data = await Book.create(zodBody)
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
        const { genre, sort = "asc", limit = "10" } = req.query;
        const filter: any = {}
        if (genre) {
            filter.genre = genre
        }

        //    sort
        const sortOrder = sort === 'desc' ? -1 : 1;
        // query db
        const data = await Book.find(filter)
            .sort({ createdAt: sortOrder })
            .limit(Number(limit));


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

const deleteBook = async (req: Request, res: Response) => {
    try {
        const bookId = req.params.bookId;
        const data = await Book.findByIdAndDelete(bookId);
        res.status(200).send({
            success: true,
            message: "Book deleted successfully",
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