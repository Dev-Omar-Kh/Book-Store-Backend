import express from "express";
const router = express.Router();
import {
	addBook,
	deleteBook,
	getAllBooks,
	getBook,
	updateBook,
} from "../controllers/book.controllers.js";
import isAuth from "../middleware/isAuth.js";

router.post("/add", isAuth, addBook);
router.get("/single/:id", getBook);
router.get("/all", getAllBooks);
router.patch("/update/:id", updateBook);
router.delete("/delete/:id", deleteBook);

export default router;
