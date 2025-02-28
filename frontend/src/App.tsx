import { Route, Routes } from "react-router-dom"
import MenuPage from "./pages/MenuPage"
import Navbar from "./components/Navbar"
import CustomizePage from "./pages/CustomizePage"

function App() {
	return (
		<div className="flex justify-center overflow-hidden">
			<div className="max-w-screen-xl h-screen flex items-center flex-col">
				<Navbar />
				<Routes>
					{["/", "/coffee", "/shakes", "/tea", "/bubble-tea"].map(
						(path, index) => (
							<Route
								key={index}
								path={path}
								element={<MenuPage />}
							/>
						)
					)}
					<Route
						path="/customize"
						element={<CustomizePage />}
					/>
				</Routes>
			</div>
		</div>
	)
}

export default App
