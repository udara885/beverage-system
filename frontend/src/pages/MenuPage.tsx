import { useLocation } from "react-router-dom"
import MenuContent from "../components/MenuContent"
import { useBeverageStore } from "../store/beverage"
import { useEffect, useState } from "react"
import Loader from "../components/Loader"
import { Beverage } from "../types/types"

const MenuPage = () => {
  const location = useLocation()

  const path = location.pathname

  const str = path.split("/")[1]

  const { beverages, getBeverages } = useBeverageStore()

  const [loading, setLoading] = useState(true)

  const [filteredBeverages, setFilteredBeverages] = useState<Beverage[]>([])

  useEffect(() => {
    const fetchBeverages = async () => {
      setLoading(true)
      await getBeverages()
      setLoading(false)
    }
    fetchBeverages()
  }, [getBeverages])

  useEffect(() => {
    setFilteredBeverages(
      str === ""
        ? beverages.filter((beverage) => beverage.category === "coffee")
        : beverages.filter((beverage) => beverage.category === str),
    )
  }, [str, beverages])

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <>
          {filteredBeverages.length !== 0 ? (
            <>
              <h1 className="font-poppins mx-15 my-6 text-5xl font-medium">
                {str.charAt(0).toUpperCase() + str.slice(1) === "Bubble-tea"
                  ? "Bubble Tea"
                  : str.charAt(0).toUpperCase() + str.slice(1) === ""
                    ? "Coffee"
                    : str.charAt(0).toUpperCase() + str.slice(1)}
              </h1>
              <div className="flex w-screen justify-between px-8">
                <div className="h-10 w-2/3">
                  <MenuContent beverages={filteredBeverages} />
                </div>
                <div className="w-1/3">
                  <img
                    src={
                      path === "/coffee" || path === "/"
                        ? "coffee.png"
                        : path === "/shake"
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
          ) : (
            <p className="font-poppins mt-50 flex items-center justify-center text-4xl font-bold">
              No Beverages Found.😢
            </p>
          )}
        </>
      )}{" "}
    </div>
  )
}

export default MenuPage
