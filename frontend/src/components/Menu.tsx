import { useContext } from "react"
import { Link, useLocation } from "react-router-dom"
import { AdminContext } from "../context/AdminContext"

const Menu = () => {
  const isAdmin = useContext(AdminContext)

  const location = useLocation()

  const path = location.pathname

  const paths = ["/coffee", "/shake", "/tea", "/bubble-tea"]

  return (
    <div className="font-poppins flex items-center justify-between gap-10 text-[1.75rem] font-medium whitespace-nowrap">
      {!path.split("/").includes("kitchen") ? (
        <>
          {paths.map((p, index) => (
            <Link
              to={isAdmin ? `/admin${p}` : `${p}`}
              key={index}
              className="cursor-pointer border-b-3 border-transparent focus:border-orange-400"
            >
              {p.split("/")[1].charAt(0).toUpperCase() +
                p.split("/")[1].slice(1) ===
              "Bubble-tea"
                ? "Bubble Tea"
                : p.split("/")[1].charAt(0).toUpperCase() +
                  p.split("/")[1].slice(1)}
            </Link>
          ))}
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
