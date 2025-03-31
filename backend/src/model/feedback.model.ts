import mongoose from "mongoose"

const feedbackSchema = new mongoose.Schema(
  {
    user: {
      type: String,
      require: true,
    },
    rating: {
      type: Number,
      require: true,
    },
    comment: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  }
)

const Feedback = mongoose.model("Feedback", feedbackSchema)

export default Feedback
