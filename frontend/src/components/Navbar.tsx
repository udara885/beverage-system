import { useLocation } from "react-router-dom"
import BackButton from "./BackButton"
import Logo from "./Logo"
import Menu from "./Menu"

const Navbar = () => {
  const location = useLocation()
  const path = location.pathname
  return (
    <>
      {path !== "/order-confirm" && path !== "/feedback" && (
        <div className="my-5 flex w-[80rem] items-center justify-between">
          <BackButton />
          {path !== "/customize" &&
          path !== "/cart" &&
          path !== "/checkout" &&
          path !== "/card-details" ? (
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
