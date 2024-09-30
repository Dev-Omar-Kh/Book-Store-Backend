import { errorHandler } from "./errorHandler.js";
import jwt from "jsonwebtoken";
const isAuth = (req, res, next) => {
	const token = req.cookie.access_token;
	if (!token) {
		return next(errorHandler(401, "Authentication required"));
	}
	try {
		const decoded = jwt.verify(token, process.env.SECRET_KEY);
		req.user = decoded;
		next();
	} catch (error) {
		return next(errorHandler(403, "Authentication failed"));
	}
};
export default isAuth;