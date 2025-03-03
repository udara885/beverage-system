import { ShoppingCart } from "lucide-react"
import { Link } from "react-router-dom"

const CustomizePage = () => {
	return (
		<div className="w-full">
			<div className="flex flex-col items-center">
				<img
					src="espresso.png"
					alt=""
					className="rounded-full w-20 h-20 object-cover bg-no-repeat -mt-20"
				/>
				<h1 className="font-semibold text-[1.75rem]">Espresso</h1>
			</div>
			<hr />
			<div className="flex w-full p-5">
				<div className="w-1/2 flex justify-center">
					<img
						src="customize.png"
						alt=""
						className="h-[calc(100vh-30vh)]"
					/>
				</div>
				<div className="w-1/2 font-poppins flex justify-center">
					<form className="w-[80%] flex flex-col">
						<h3 className="text-xl font-semibold border-b">
							Milk Choices
						</h3>
						<div className="flex justify-between border-b py-2">
							<h4>Whole Milk</h4>
							<h4>+$0.30</h4>
						</div>
						<div className="flex justify-between border-b py-2">
							<h4>Almond Milk</h4>
							<h4>+$0.40</h4>
						</div>
						<div className="flex justify-between border-b py-2">
							<h4>Soy Milk</h4>
							<h4>+$0.70</h4>
						</div>
						<h3 className="text-xl font-semibold mt-4">
							Flavours Syrups
						</h3>
						<select
							name="flavours"
							id="flavours"
							className="border w-full py-2 rounded-md px-3"
						>
							<option>Flavours Syrups Options</option>
							<option value="vanilla">Vanilla</option>
							<option value="chocolate">Chocolate</option>
						</select>
						<h3 className="text-xl font-semibold mt-4">
							Sweeteners
						</h3>
						<select
							name="flavours"
							id="flavours"
							className="border w-full py-2 rounded-md px-3"
						>
							<option>Sweeteners Options</option>
							<option value="vanilla">Vanilla</option>
							<option value="chocolate">Chocolate</option>
						</select>
						<h3 className="text-xl font-semibold mt-4">
							Special Instructions
						</h3>
						<input
							type="text"
							className="border w-full py-2 rounded-md px-3"
						/>
						<Link
							to={"/cart"}
							className="bg-orange-500 hover:bg-orange-600 px-4 py-1 text-lg font-semibold text-white flex gap-2 rounded-lg self-end mt-4 cursor-pointer"
						>
							Add To Cart
							<ShoppingCart />
						</Link>
					</form>
				</div>
			</div>
		</div>
	)
}

export default CustomizePage
