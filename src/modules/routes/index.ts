import { Router } from "express";
import bookRoute from "../book/book.route";

const route = Router();

route.use("/api/books", bookRoute)




export default route;