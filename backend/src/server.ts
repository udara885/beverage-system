import express from "express"
import dotenv from "dotenv"
import { connectDB } from "./database/db"
import beverageRouter from "./routes/beverage.routes"
import arcjetMiddleware from "./middlewares/arcjet.middleware"
import errorMiddleware from "./middlewares/error.middleware"
import orderRouter from "./routes/order.routes"
import feedbackRouter from "./routes/feedback.routes"

dotenv.config()

const app = express()

const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
// app.use(arcjetMiddleware)

app.use("/api/v1/beverages", beverageRouter)
app.use("/api/v1/orders", orderRouter)
app.use("/api/v1/feedback", feedbackRouter)

app.use(errorMiddleware)

app.use("/", (req, res) => {
  res.send("API is active")
})

app.listen(PORT, async () => {
  console.log(`Server is running on http://localhost:${PORT}`)
  await connectDB()
})
