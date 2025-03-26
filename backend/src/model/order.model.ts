import mongoose from "mongoose"

const orderSchema = new mongoose.Schema(
  {
    orderNo: {
      type: Number,
      require: true,
    },
    items: {
      type: [],
      require: true,
    },
    status: {
      type: String,
      default: "Not Completed",
    },
    amount: {
      type: Number,
      require: true,
    },
  },
  {
    timestamps: true,
  }
)

const Order = mongoose.model("Order", orderSchema)

export default Order
