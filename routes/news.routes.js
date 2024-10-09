import express from "express";
import {
	addNews,
	deleteNews,
	getNews,
	updateNews,
} from "../controllers/news.controller.js";

const router = express.Router();

router.get("/getNews", getNews);
router.post("/add", addNews);
router.patch("/update/:id", updateNews);
router.delete("/delete/:id", deleteNews);

export default router;
