import { useLocation } from "react-router-dom"
import BackButton from "./BackButton"
import Logo from "./Logo"
import Menu from "./Menu"

const Navbar = () => {
	const location = useLocation()
	const path = location.pathname
	return (
		<div className="flex  justify-between my-5 px-20 w-screen items-center">
			<BackButton />
			{path !== "/customize" && <Menu />}
			<Logo />
		</div>
	)
}

export default Navbar
