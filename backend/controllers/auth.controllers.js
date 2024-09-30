import User from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import validator from "validator";
import { errorHandler } from "../middleware/errorHandler.js";

export const emailSignIn = async (req, res, next) => {
	const { email, password } = req.body;
	if (!email || !password) {
		return next(errorHandler(400, "no data provided"));
	}
	if (!validator.isEmail(email)) {
		return next(errorHandler(400, "invalid email"));
	}
	const user = await User.findOne({ email });
	if (!user) {
		return next(errorHandler(404, "no such email is signed up"));
	}
	const isMatchPassword = bcrypt.compareSync(password, user.password);
	if (!isMatchPassword) {
		return next(errorHandler(400, "invalid  password"));
	}
	try {
		//sign the user in and persist the changes in the database
		user.isSigned = true;
		await user.save();

		const token = jwt.sign(
			{ id: user._id, email: user.email },
			process.env.SECRET_KEY,
			{ expiresIn: "1h" }
		);

		const { password, ...rest } = user._doc;

		res.cookie("access_token", token, {
			httpOnly: true,
			maxAge: 60 * 60 * 1000,
		});
		return res.status(200).json({
			success: true,
			message: "Logged in successfully",
			data: rest,
		});
	} catch (error) {
		return next(errorHandler(400, error.message));
	}
};
