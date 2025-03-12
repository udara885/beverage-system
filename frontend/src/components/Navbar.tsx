import { Link, useLocation } from "react-router-dom"
import BackButton from "./BackButton"
import Logo from "./Logo"
import Menu from "./Menu"
import { CirclePlus } from "lucide-react"

const Navbar = () => {
  const location = useLocation()
  const path = location.pathname
  const hideMenuPaths = [
    "/customize",
    "/cart",
    "/checkout",
    "/card-details",
    "/admin/add-beverage",
  ]
  return (
    <>
      {path !== "/order-confirm" && path !== "/feedback" && (
        <div
          className={`my-5 flex w-[80rem] items-center justify-between ${path === "/admin" && "flex-row-reverse"}`}
        >
          {path !== "/admin" ? (
            <BackButton />
          ) : (
            <Link
              to={"/admin/add-beverage"}
              className="flex cursor-pointer items-center gap-2 rounded-lg bg-orange-400 px-4 py-2 text-lg font-semibold text-white"
            >
              <CirclePlus />
              Add New Beverage
            </Link>
          )}
          {!hideMenuPaths.includes(path) &&
          !path.split("/").includes("update-beverage") ? (
            <Menu />
          ) : (
            <></>
          )}
          <Logo />
        </div>
      )}
    </>
  )
}

export default Navbar
