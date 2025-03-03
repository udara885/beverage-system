import { Settings, Trash } from "lucide-react"

const CartCard = () => {
	return (
		<div className="rounded-lg flex items-center justify-around shadow-[0px_4px_30.8px_0px_rgba(0,0,0,0.25)] w-full">
			<img
				src="cartCard.png"
				className="w-40 h-40 rounded-full my-3"
				alt=""
			/>
			<div className="font-poppins">
				<h2 className="text-2xl font-semibold">Berry Blast Smoothie</h2>
				<h3 className="text-lg font-medium">customized - Whole Milk</h3>
				<div className="border-2 rounded-lg w-1/2 flex items-center justify-around mt-5">
					<button className="cursor-pointer">-</button>
					<span className="font-bold">1</span>
					<button className="cursor-pointer">+</button>
				</div>
			</div>
			<div className="flex flex-col gap-2 self-end pb-5">
				<button className="bg-orange-400 text-white p-1 rounded-lg cursor-pointer">
					<Trash />
				</button>
				<button className="bg-orange-400 text-white p-1 rounded-lg cursor-pointer">
					<Settings />
				</button>
			</div>
		</div>
	)
}

export default CartCard
