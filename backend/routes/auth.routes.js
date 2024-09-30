import express from "express";

import { emailSignIn } from "../controllers/auth.controllers.js";
import User from "../models/user.js";
import { errorHandler } from "../middleware/errorHandler.js";

const router = express.Router();

router.post("/signin", emailSignIn);
router.post("/signout", async (req, res, next) => {
	const { _id } = req.body;
	if (!_id) {
		return next(errorHandler(404, "missing user id"));
	}
	try {
		const user = await User.findOneAndUpdate(
			{ _id },
			{
				$set: {
					isSigned: false,
				},
			},
			{ new: true }
		);
		if (!user) {
			return next(errorHandler(404, "user not found"));
		}
		return res.json(user);
	} catch (error) {
		return next(errorHandler(400, "something went wrong"));
	}
});

export default router;
