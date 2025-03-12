import { Router } from "express"
import {
	addBeverage,
	deleteBeverage,
	getAllBeverages,
	getBeverage,
	updateBeverage,
} from "../controller/beverage.controller"

const beverageRouter = Router()

beverageRouter.get("/", getAllBeverages)
beverageRouter.get("/:id", getBeverage)
beverageRouter.post("/", addBeverage)
beverageRouter.put("/:id", updateBeverage)
beverageRouter.delete("/:id", deleteBeverage)

export default beverageRouter
