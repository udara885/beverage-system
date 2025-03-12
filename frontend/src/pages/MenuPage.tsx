import { useLocation } from "react-router-dom"
import MenuContent from "../components/MenuContent"
import { useBeverageStore } from "../store/beverage"
import { useEffect, useState } from "react"
import Loader from "../components/Loader"

const MenuPage = () => {
  const location = useLocation()

  const path = location.pathname

  const { beverages, getBeverages } = useBeverageStore()

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchBeverages = async () => {
      setLoading(true)
      await getBeverages()
      setLoading(false)
    }
    fetchBeverages()
  }, [getBeverages])

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <>
          <h1 className="font-poppins mx-15 my-6 text-5xl font-medium">
            {path === "/coffee" || path === "/"
              ? "Coffee"
              : path === "/shakes"
                ? "Shakes"
                : path === "/tea"
                  ? "Tea"
                  : "Bubble Tea"}
          </h1>
          <div className="mx-8 flex w-full justify-between">
            <div className="h-10 w-2/3">
              <MenuContent beverages={beverages} />
            </div>
            <div className="w-1/3">
              <img
                src={
                  path === "/coffee" || path === "/"
                    ? "coffee.png"
                    : path === "/shakes"
                      ? "shake.png"
                      : path === "/tea"
                        ? "tea.png"
                        : "bubble-tea.png"
                }
                alt=""
                className="-mt-31 bg-no-repeat object-cover"
              />
            </div>
          </div>
        </>
      )}{" "}
    </div>
  )
}

export default MenuPage
