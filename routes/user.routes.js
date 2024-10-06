import express from "express";
import {
	deleteUser,
	getUser,
	postUser,
	updateUser,
} from "../controllers/user.controllers.js";
import isAuth from "../middleware/isAuth.js";
const router = express.Router();

router.get("/single/:id", isAuth, getUser);
router.post("/add-user", postUser);
router.patch("/update/:id", isAuth, updateUser);
router.delete("/delete/:id", isAuth, deleteUser);

export default router;
