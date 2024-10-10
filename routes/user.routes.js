import express from "express";
import {
	deleteUser,
	getUser,
	postUser,
	updateUser,
} from "../controllers/user.controllers.js";
import isAuth from "../middleware/isAuth.js";
import isAdmin from "../middleware/isAdmin.js";
const router = express.Router();

router.get("/single/:id", isAuth, isAdmin, getUser);
router.post("/add-user", postUser);
router.patch("/update/:id", isAuth, isAdmin,updateUser);
router.delete("/delete/:id", isAuth, isAdmin, deleteUser);

export default router;
