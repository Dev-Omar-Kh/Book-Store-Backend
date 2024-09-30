import express from "express";
import {
	deleteUser,
	getUser,
	postUser,
	updateUser,
} from "../controllers/user.controllers.js";
const router = express.Router();

router.get("/single/:id", getUser);
router.post("/add-user", postUser);
router.patch("/update/:id", updateUser);
router.delete("/delete/:id", deleteUser);

export default router;
