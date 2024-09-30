import express from "express";
const router = express.Router();
import {
	addBook,
	getAllBooks,
	getBook,
	getFilteredBooks,
} from "../controllers/book.controllers.js";
import isAuth from "../middleware/isAuth.js";

router.post("/add", isAuth, addBook);
router.get("/single/:id", getBook);
router.get("/all", getAllBooks);
router.get("/filter", getFilteredBooks);

export default router;
