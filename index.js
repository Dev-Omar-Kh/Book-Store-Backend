import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRoutes from "./routes/user.routes.js";
import authRoutes from "./routes/auth.routes.js";
import bookRoutes from "./routes/book.routes.js";
import newsRoutes from "./routes/news.routes.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import isAuth from "./middleware/isAuth.js";
// Load environment variables from .env file
dotenv.config();

const allowedOrigins = [
    'http://localhost:3000',
    'https://book-store-five-swart.vercel.app'
];

const app = express();
app.use(cors({
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true
}));

app.use(express.json());
app.use(cookieParser());

app.use("/user", userRoutes);
app.use("/book", bookRoutes);
app.use("/authentication", authRoutes);
app.use("/news", isAuth, newsRoutes);
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
