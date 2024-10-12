import express from "express";
const router = express.Router();
import {
	addBook,
	getAllBooks,
	getBook,
} from "../controllers/book.controllers.js";
import isAuth from "../middleware/isAuth.js";
import Book from "../models/book.js";

router.post("/add", isAuth, addBook);
router.get("/single/:id", getBook);
router.get("/all", getAllBooks);
router.patch("/update/:id", async (req, res, next) => {
	const { id } = req.params;
	try {
		const book = await Book.findByIdAndUpdate({ _id: id }, req.body, {
			new: true,
		});
	} catch (error) {
		return next(errorHandler(400, "updating book failed"));
	}
});

export default router;
