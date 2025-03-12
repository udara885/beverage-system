import { NextFunction, Request, Response } from "express"
import aj from "../config/arcjet"

const arcjetMiddleware = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const decision = await aj.protect(req, { requested: 1 })
		if (decision.isDenied()) {
			if (decision.reason.isRateLimit())
				return res.status(429).json({ error: "Rate limit exceeded" })
			if (decision.reason.isBot())
				return res.status(403).json({ error: "Bot detected" })
			return res.status(403).json({ error: "Access denied" })
		}
		next()
	} catch (error) {
		console.log(`Arcjet Middleware Error: ${error}`)
	}
}

export default arcjetMiddleware
