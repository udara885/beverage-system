import { Router } from "express"
import {
  cancelOrder,
  createOrder,
  getAllOrders,
  getOrder,
  updateOrder,
} from "../controller/order.controller"

const orderRouter = Router()

orderRouter.get("/", getAllOrders)
orderRouter.get("/:id", getOrder)
orderRouter.post("/", createOrder)
orderRouter.put("/:id", updateOrder)
orderRouter.delete("/:id", cancelOrder)

export default orderRouter
