import { Link, useLocation } from "react-router-dom"

const Menu = () => {
  const location = useLocation()
  const path = location.pathname
  return (
    <div className="font-poppins flex items-center justify-between gap-10 text-[1.75rem] font-medium whitespace-nowrap">
      {!path.split("/").includes("kitchen") ? (
        <>
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
        </>
      ) : (
        <>
          <Link
            to={"/kitchen/orders"}
            className="cursor-pointer border-b-3 border-transparent focus:border-orange-400"
          >
            Orders
          </Link>
          <Link
            to={"/kitchen/completed-orders"}
            className="cursor-pointer border-b-3 border-transparent focus:border-orange-400"
          >
            Completed
          </Link>
        </>
      )}
    </div>
  )
}

export default Menu
