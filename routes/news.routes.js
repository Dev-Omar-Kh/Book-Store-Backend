import express from "express";
import {
	addNews,
	deleteNews,
	getNews,
	updateNews,
} from "../controllers/news.controller.js";
import isAdmin from "../middleware/isAdmin.js";

const router = express.Router();

router.get("/getNews", getNews);
router.post("/add", isAdmin, addNews);
router.patch("/update/:id", isAdmin, updateNews);
router.delete("/delete/:id", isAdmin, deleteNews);

export default router;
