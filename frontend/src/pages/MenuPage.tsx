import { useLocation } from "react-router-dom"
import MenuContent from "../components/MenuContent"

const MenuPage = () => {
	const location = useLocation()
	const path = location.pathname

	return (
		<div>
			<h1 className="font-poppins text-5xl font-medium my-6 mx-15">
				{path === "/coffee" || path === "/"
					? "Coffee"
					: path === "/shakes"
					? "Shakes"
					: path === "/tea"
					? "Tea"
					: "Bubble Tea"}
			</h1>
			<div className="flex justify-between mx-8">
				<div className="w-2/3 h-10">
					<MenuContent />
				</div>
				<div className="w-1/3">
					<img
						src={
							path === "/coffee" || path === "/"
								? "coffee.png"
								: path === "/shakes"
								? "shake.png"
								: path === "/tea"
								? "tea.png"
								: "bubble-tea.png"
						}
						alt=""
						className="object-cover bg-no-repeat -mt-31"
					/>
				</div>
			</div>
		</div>
	)
}

export default MenuPage
