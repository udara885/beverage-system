import { Route, Routes } from "react-router-dom"
import MenuPage from "./pages/MenuPage"
import Navbar from "./components/Navbar"
import CustomizePage from "./pages/CustomizePage"
import CartPage from "./pages/CartPage"
import CheckoutPage from "./pages/CheckoutPage"
import CardDetailsPage from "./pages/CardDetailsPage"
import OrderConfirmPage from "./pages/OrderConfirmPage"
import FeedbackPage from "./pages/FeedbackPage"

function App() {
  return (
    <div className="flex justify-center overflow-hidden">
      <div className="flex h-screen max-w-screen-xl flex-col items-center">
        <Navbar />
        <Routes>
          {["/", "/coffee", "/shakes", "/tea", "/bubble-tea"].map(
            (path, index) => (
              <Route key={index} path={path} element={<MenuPage />} />
            ),
          )}
          <Route path="/customize" element={<CustomizePage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/card-details" element={<CardDetailsPage />} />
          <Route path="/order-confirm" element={<OrderConfirmPage />} />
          <Route path="/feedback" element={<FeedbackPage />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
