import { Link } from "react-router-dom"

const Menu = () => {
	return (
		<div className="font-poppins flex justify-between items-center text-[28px] font-medium gap-10 whitespace-nowrap">
			<Link
				to={"/coffee"}
				className="border-b-3 border-transparent focus:border-orange-400 cursor-pointer"
			>
				Coffee
			</Link>
			<Link
				to={"/shakes"}
				className="border-b-3 border-transparent focus:border-orange-400 cursor-pointer"
			>
				Shakes
			</Link>
			<Link
				to={"/tea"}
				className="border-b-3 border-transparent focus:border-orange-400 cursor-pointer"
			>
				Tea
			</Link>
			<Link
				to={"/bubble-tea"}
				className="border-b-3 border-transparent focus:border-orange-400 cursor-pointer"
			>
				Bubble Tea
			</Link>
		</div>
	)
}

export default Menu
