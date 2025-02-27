import { Link } from "react-router-dom"

const BeverageCard = () => {
  return (
		<div>
			<hr />
			<div className="flex mt-5 gap-5">
				<img
					src="espresso.png"
					alt=""
					className="w-30 h-30 rounded-full object-cover bg-no-repeat"
				/>
				<div className="flex flex-col font-poppins">
					<h1 className="text-[1.75rem] font-semibold">
						Espresso - $3.00
					</h1>
					<p className="text-[1.375rem]">
						A rich, concentrated coffee brewed by forcing a small
						amount of nearly boiling water through finely-ground
						coffee beans.
					</p>
					<Link to={"/customize"} className="bg-orange-400 font-semibold text-white rounded-lg px-3 text-center text-lg self-end mx-3 mb-3">
						{"Customize >"}
					</Link>
				</div>
			</div>
		</div>
  )
}

export default BeverageCard