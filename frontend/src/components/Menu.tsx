import { Link } from "react-router-dom"

const Menu = () => {
  return (
    <div className="font-poppins flex items-center justify-between gap-10 text-[28px] font-medium whitespace-nowrap">
      <Link
        to={"/coffee"}
        className="cursor-pointer border-b-3 border-transparent focus:border-orange-400"
      >
        Coffee
      </Link>
      <Link
        to={"/shakes"}
        className="cursor-pointer border-b-3 border-transparent focus:border-orange-400"
      >
        Shakes
      </Link>
      <Link
        to={"/tea"}
        className="cursor-pointer border-b-3 border-transparent focus:border-orange-400"
      >
        Tea
      </Link>
      <Link
        to={"/bubble-tea"}
        className="cursor-pointer border-b-3 border-transparent focus:border-orange-400"
      >
        Bubble Tea
      </Link>
    </div>
  )
}

export default Menu
