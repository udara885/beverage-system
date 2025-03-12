import { NextFunction, Request, Response } from "express"
import Beverage from "../model/beverage.model"

interface customError extends Error {
	statusCode?: Number
}

export const getAllBeverages = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const beverages = await Beverage.find()

		res.status(200).json({ success: true, data: beverages })
	} catch (error) {
		next(error)
	}
}

export const getBeverage = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const beverage = await Beverage.findById(req.params.id)

		if (!beverage) {
			const error: customError = new Error("Beverage not found")
			error.statusCode = 404
			throw error
		}

		res.status(200).json({ success: true, data: beverage })
	} catch (error) {
		next(error)
	}
}

export const addBeverage = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		if (
			!req.body.name ||
			!req.body.price ||
			!req.body.description ||
			!req.body.image
		) {
			const error: customError = new Error("Please fill all the fields")
			error.statusCode = 406
			throw error
		}

		const beverage = await Beverage.create(req.body)

		res.status(201).json({ success: true, data: beverage })
	} catch (error) {
		next(error)
	}
}

export const updateBeverage = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const beverage = await Beverage.findById(req.params.id)

		if (!beverage) {
			const error: customError = new Error("Beverage not found")
			error.statusCode = 404
			throw error
		}

		const updatedBeverage = await Beverage.findByIdAndUpdate(
			req.params.id,
			req.body,
			{ new: true }
		)

		res.status(200).json({ success: true, data: updatedBeverage })
	} catch (error) {
		next(error)
	}
}

export const deleteBeverage = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const beverage = await Beverage.findById(req.params.id)

		if (!beverage) {
			const error: customError = new Error("Beverage not found")
			error.statusCode = 404
			throw error
		}

		await Beverage.findByIdAndDelete(req.params.id)

		res.status(200).json({ success: true, message: "Beverage deleted" })
	} catch (error) {
		next(error)
	}
}
