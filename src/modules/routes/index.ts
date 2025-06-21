import { Router } from "express";
import bookRoute from "../book/book.route";
import borrowRoute from "../borrow/borrow.route";

const route = Router();

route.use("/api/books", bookRoute)
route.use("/api/borrow", borrowRoute)




export default route;