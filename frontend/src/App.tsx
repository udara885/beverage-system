import { Route, Routes, useLocation } from "react-router-dom"
import MenuPage from "./pages/MenuPage"
import Navbar from "./components/Navbar"
import CustomizePage from "./pages/CustomizePage"
import CartPage from "./pages/CartPage"
import CheckoutPage from "./pages/CheckoutPage"
import CardDetailsPage from "./pages/CardDetailsPage"
import OrderConfirmPage from "./pages/OrderConfirmPage"
import FeedbackPage from "./pages/FeedbackPage"
import KitchenPage from "./pages/KitchenPage"
import InstructionPage from "./pages/InstructionPage"
import NotFoundPage from "./pages/NotFoundPage"
import OrdersPage from "./pages/OrdersPage"
import CompletedOrdersPage from "./pages/CompletedOrdersPage"
import AdminPage from "./pages/AdminPage"
import AddBeveragePage from "./pages/AddBeveragePage"
import UpdateBeveragePage from "./pages/UpdateBeveragePage"
import { useEffect, useState } from "react"
import { AdminContext } from "./context/AdminContext"
import { KitchenContext } from "./context/KitchenContext"

function App() {
  const [isAdmin, setIsAdmin] = useState(false)

  const [isKitchen, setIsKitchen] = useState(false)

  const location = useLocation()

  const path = location.pathname

  useEffect(() => {
    if (path.split("/").includes("admin")) {
      setIsAdmin(true)
    } else {
      setIsAdmin(false)
      if (path.split("/").includes("kitchen")) {
        setIsKitchen(true)
      } else {
        setIsKitchen(false)
      }
    }
  }, [path])

  return (
    <div className="flex justify-center overflow-hidden">
      <div className="flex h-screen max-w-screen-xl flex-col items-center">
        <AdminContext.Provider value={isAdmin}>
          <KitchenContext.Provider value={isKitchen}>
            <Navbar />
            <Routes>
              <Route path="/">
                <Route index element={<MenuPage />} />
                {["coffee", "shake", "tea", "bubble-tea"].map((path, index) => (
                  <Route key={index} path={path} element={<MenuPage />} />
                ))}
                <Route path="customize" element={<CustomizePage />} />
                <Route path="cart" element={<CartPage />} />
                <Route path="checkout" element={<CheckoutPage />} />
                <Route path="card-details" element={<CardDetailsPage />} />
                <Route path="order-confirm" element={<OrderConfirmPage />} />
                <Route path="feedback" element={<FeedbackPage />} />
              </Route>
              <Route path="kitchen">
                <Route index element={<KitchenPage />} />
                <Route path="orders" element={<OrdersPage />} />
                <Route
                  path="completed-orders"
                  element={<CompletedOrdersPage />}
                />
                <Route path="instructions" element={<InstructionPage />} />
              </Route>
              <Route path="admin">
                <Route index element={<AdminPage />} />
                {["coffee", "shake", "tea", "bubble-tea"].map((path, index) => (
                  <Route
                    key={index}
                    path={`/admin/${path}`}
                    element={<AdminPage />}
                  />
                ))}
                <Route path="add-beverage" element={<AddBeveragePage />} />
                <Route
                  path="update-beverage/:id"
                  element={<UpdateBeveragePage />}
                />
              </Route>
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </KitchenContext.Provider>
        </AdminContext.Provider>
      </div>
    </div>
  )
}

export default App
