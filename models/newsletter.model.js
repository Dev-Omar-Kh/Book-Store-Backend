import mongoose from "mongoose";

const newsSchema = new mongoose.Schema(
	{
		title: String,
		date: Date,
		description: String,
	},
	{ timestamps: true }
);

const News = mongoose.model("news", newsSchema);
export default News;
