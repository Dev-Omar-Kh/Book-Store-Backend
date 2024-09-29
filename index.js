import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
// import userRoutes from "./routes/user.routes.js";
// import authRoutes from "./routes/auth.routes.js";
// import bookRoutes from "./routes/book.routes.js";
import cors from "cors";
// Load environment variables from .env file
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// app.use("/user", userRoutes);
// app.use("/book", bookRoutes);
// app.use("/authentication", authRoutes);

app.get('/' , (req , res , next) => {

	return res.json({message : "Successfully"});

});

//Error handler route
app.use((err, req, res, next) => {
	const statusCode = err.statusCode || 500;
	const message = err.message || "Internal Server Error";
	return res.status(statusCode).json({
		success: false,
		statusCode,
		message,
	});
});

mongoose
	.connect(process.env.DB_URL, {
		dbName: process.env.NAME,
	})
	.then(() => {
		app.listen(process.env.PORT || 3000, () => {
			console.log(`server is running at port: ${process.env.PORT}`);
		});
	});
