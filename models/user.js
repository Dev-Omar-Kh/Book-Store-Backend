import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
	{
		username: {
			type: String,
			required: true,
			trim: true,
		},
		email: {
			type: String,
			required: true,
			trim: true,
			lowercase: true,
			unique: true,
		},
		phone: {
			type: Number,
			required: true,
			unique: true,
		},
		password: {
			type: String,
			required: true,
			trim: true,
			minLength: 6,
		},
		confirmPassword: {
			type: String,
			required: true,
			trim: true,
			minLength: 6,
		},
		isSigned: {
			type: Boolean,
			default: false,
		},
		isAdmin: {
			type: Boolean,
			default: false,
		},
	},
	{ timestamps: true }
);
const User = mongoose.model("user", userSchema);
export default User;
