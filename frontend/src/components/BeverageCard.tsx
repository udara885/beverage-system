import { Link } from "react-router-dom"
import { Beverage } from "../types/types"

const BeverageCard = ({ beverage }: { beverage: Beverage }) => {
  return (
    <div>
      <hr />
      <div className="mt-5 flex gap-5">
        <img
          src={beverage.image}
          alt=""
          className="h-30 w-30 rounded-full bg-no-repeat object-cover"
          loading="lazy"
        />
        <div className="font-poppins flex w-full flex-col">
          <h1 className="text-[1.75rem] font-semibold">
            {beverage.name} - ${beverage.price}
          </h1>
          <p className="text-[1.375rem]">{beverage.description}</p>
          <Link
            to={"/customize"}
            className="mx-3 mb-3 self-end rounded-lg bg-orange-400 px-3 text-center text-lg font-semibold text-white"
          >
            {"Customize >"}
          </Link>
        </div>
      </div>
    </div>
  )
}

export default BeverageCard
