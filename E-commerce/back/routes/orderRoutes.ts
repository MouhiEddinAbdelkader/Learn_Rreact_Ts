
import express from "express";
import {
// Get all products
addOrderItems,
getOrderById,
updateOrderToPaid,
updateOrderToDelivered,
getMyOrders,
getOrders,

} from "../controllers/orderController";

const router = express.Router();

router.route("/").get(getOrders);

export default router;