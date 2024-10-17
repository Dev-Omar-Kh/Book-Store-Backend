import express from "express";

import {
	addProductToCart,
	deleteProductFromCart,
	getUserCart,
	getUserCartCount,
	updateProductCountInCart,
} from "../controllers/cart.controller.js";
const router = express.Router();

router.post("/add", addProductToCart);

router.get("/allProducts", getUserCart);

router.get("/count-cart-elements", getUserCartCount);

router.delete("/delete", deleteProductFromCart);

router.patch("/update", updateProductCountInCart);

export default router;
