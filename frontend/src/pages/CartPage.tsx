import { BaggageClaim, Plus } from "lucide-react"
import CartCard from "../components/CartCard"
import { Link } from "react-router-dom"

const CartPage = () => {
	return (
		<div className="w-full flex flex-col items-center">
			<h1 className="text-5xl font-medium -mt-10 border-b w-full text-center pb-4">
				Cart
			</h1>
			<div className="w-full flex justify-between gap-10 px-10">
				<div className="w-1/2 flex flex-col items-center mt-10">
					<CartCard />
					<button className="bg-orange-400 text-white rounded-2xl w-12 h-12 flex items-center justify-center mt-10 cursor-pointer">
						<Plus size={30} />
					</button>
				</div>
				<div className="w-1/2 mt-10 flex flex-col">
					<table className="w-full font-poppins">
						<thead>
							<tr className="border-y flex items-center justify-between text-lg py-2">
								<th className="w-1/4">Item</th>
								<th className="w-1/4">QTY</th>
								<th className="w-1/4">Price</th>
								<th className="w-1/4">Amount</th>
							</tr>
						</thead>
						<tbody>
							<tr className="flex items-center justify-between text-center text-[1.25rem]">
								<td className="w-1/4">Espresso</td>
								<td className="w-1/4">1</td>
								<td className="w-1/4">$3.00</td>
								<td className="w-1/4">$3.81</td>
							</tr>
						</tbody>
					</table>
					<div className="border-y mt-20 font-poppins">
						<div className="flex justify-between text-[1.25rem]">
							<h3>Name</h3>
							<h3>Udara</h3>
						</div>
						<div className="flex justify-between text-[1.25rem]">
							<h3>Order</h3>
							<h3>21</h3>
						</div>
						<div className="flex justify-between text-[1.25rem]">
							<h3>Time</h3>
							<h3>15 min</h3>
						</div>
						<div className="flex justify-between text-[1.25rem] border-t py-1">
							<h3 className="font-semibold">Total</h3>
							<h3>$3.81</h3>
						</div>
					</div>
					<Link
						to={"/checkout"}
						className="bg-orange-400 flex text-white font-poppins rounded-md py-3 px-6 gap-2 mt-25 self-end text-lg items-center justify-center cursor-pointer"
					>
						<span className="font-semibold">Check Out</span>
						<BaggageClaim />
					</Link>
				</div>
			</div>
		</div>
	)
}

export default CartPage
