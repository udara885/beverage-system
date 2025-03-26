import { NextFunction, Request, Response } from "express"
import Order from "../model/order.model"

interface customError extends Error {
  statusCode?: Number
}

export const getAllOrders = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const orders = await Order.find()

    res.status(200).json({ success: true, data: orders })
  } catch (error) {
    next(error)
  }
}

export const getOrder = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const order = await Order.findById(req.params.id)

    if (!order) {
      const error: customError = new Error("Order not found")
      error.statusCode = 404
      throw error
    }

    res.status(200).json({ success: true, data: order })
  } catch (error) {
    next(error)
  }
}

export const createOrder = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    if (!req.body.orderNo || !req.body.items || !req.body.amount) {
      const error: customError = new Error("Order cannot be placed.")
      error.statusCode = 406
      throw error
    }

    const order = await Order.create(req.body)

    res.status(201).json({ success: true, data: order })
  } catch (error) {
    next(error)
  }
}

export const updateOrder = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const order = await Order.findById(req.params.id)

    if (!order) {
      const error: customError = new Error("Order not found")
      error.statusCode = 404
      throw error
    }

    const updatedOrder = await Order.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    )

    res.status(200).json({ success: true, data: updatedOrder })
  } catch (error) {
    next(error)
  }
}

export const cancelOrder = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const order = await Order.findById(req.params.id)

    if (!order) {
      const error: customError = new Error("Order not found")
      error.statusCode = 404
      throw error
    }

    await Order.findByIdAndDelete(req.params.id)

    res.status(200).json({ success: true, message: "Order Cancelled" })
  } catch (error) {
    next(error)
  }
}
