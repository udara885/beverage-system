import mongoose from "mongoose"

const beverageSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			require: true,
		},
		price: {
			type: Number,
			require: true,
		},
		image: {
			type: String,
			require: true,
		},
		category: {
			type: String,
			require: true,
			enum: ["coffee", "shake", "tea", "bubble-tea"],
		},
		description: {
			type: String,
			require: true,
		},
	},
	{
		timestamps: true,
	}
)

const Beverage = mongoose.model("Beverage", beverageSchema)

export default Beverage
