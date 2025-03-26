import { Search } from "lucide-react"
import KitchenCard from "../components/KitchenCard"
import { useOrderStore } from "../store/order"
import { useEffect, useState } from "react"
import Loader from "../components/Loader"

const CompletedOrdersPage = () => {
  const { orders, getOrders } = useOrderStore()

  const [loading, setLoading] = useState(true)

  const filteredOrders = orders.filter((order) => order.status === "Completed")

  useEffect(() => {
    const fetchOrders = async () => {
      setLoading(true)
      await getOrders()
      setLoading(false)
    }
    fetchOrders()
  }, [getOrders])

  return (
    <div className="font-poppins flex w-full justify-center">
      <div className="w-[90%]">
        <div className="relative mb-6 flex w-full items-center justify-center">
          <input
            type="text"
            className="w-[50%] rounded-full border px-8 py-2 text-xl font-medium shadow-[0_2px_8px_2px_rgba(0,0,0,0.2)]"
            placeholder="Search ..."
          />
          <Search className="absolute top-3 right-80" />
        </div>
        {loading ? (
          <Loader />
        ) : (
          <div className="no-scrollbar h-[calc(100vh-30vh)] overflow-y-scroll">
            {filteredOrders.length !== 0 ? (
              filteredOrders.map((order, index) => (
                <KitchenCard order={order} index={index + 1} />
              ))
            ) : (
              <p className="font-poppins mt-50 flex items-center justify-center text-4xl font-bold">
                No Completed Orders.😢
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default CompletedOrdersPage
