import { NextFunction, Request, Response } from "express"
import Feedback from "../model/feedback.model"

interface customError extends Error {
  statusCode?: Number
}

export const getAllFeedback = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const feedback = await Feedback.find()
    res.status(200).json({ success: true, data: feedback })
  } catch (error) {
    next(error)
  }
}

export const addFeedback = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    if (!req.body.user || !req.body.rating || !req.body.comment) {
      const error: customError = new Error("Please fill all the fields")
      error.statusCode = 406
      throw error
    }
    const feedback = await Feedback.create(req.body)
    res.status(201).json({ success: true, data: feedback })
  } catch (error) {
    next(error)
  }
}
