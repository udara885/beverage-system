import { NextFunction, Request, Response } from "express"

interface CustomError extends Error {
	statusCode?: number
	errors?: any
}

const errorMiddleware = (
	err: CustomError,
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		let error: CustomError = { ...err }

		error.message = err.message

		console.error(err)

		//Mongoose bad ObjectId
		if (err.name === "CastError") {
			const message = "Resource not found"
			error = new Error(message)
			error.statusCode = 404
		}

		//Mongoose validation error
		if (err.name === "ValidationError") {
			const message = Object.values(err.errors).map(
				(val: any) => val.message
			)
			error = new Error(message.join(", "))
			error.statusCode = 400
		}

		res.status(error.statusCode || 500).json({
			success: false,
			error: error.message || "Server Error",
		})
	} catch (error) {
		next(error)
	}
}

export default errorMiddleware
