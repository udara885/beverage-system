import { Router } from "express"
import { addFeedback, getAllFeedback } from "../controller/feedback.controller"

const feedbackRouter = Router()

feedbackRouter.get("/", getAllFeedback)
feedbackRouter.post("/", addFeedback)

export default feedbackRouter
