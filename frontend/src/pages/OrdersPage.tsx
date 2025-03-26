import { useEffect, useState } from "react"
import KitchenCard from "../components/KitchenCard"
import { useOrderStore } from "../store/order"
import Loader from "../components/Loader"

const OrdersPage = () => {
  const { orders, getOrders } = useOrderStore()

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchOrders = async () => {
      setLoading(true)
      await getOrders()
      setLoading(false)
    }
    fetchOrders()
  }, [getOrders])

  console.log(orders)

  return (
    <div className="font-poppins flex w-full justify-center">
      <div className="w-[90%]">
        <div className="mb-3 flex items-center justify-between">
          <h1 className="text-5xl">Orders</h1>
          <select
            name=""
            id=""
            className="h-[60px] w-[280px] rounded-lg px-5 text-lg text-gray-600 shadow-[0_4px_14px_0_rgba(0,0,0,0.10)]"
          >
            <option>Short</option>
            <option value="time">Time</option>
            <option value="status">Status</option>
          </select>
        </div>
        <div className="no-scrollbar h-[calc(100vh-30vh)] overflow-y-scroll">
          {loading ? (
            <Loader />
          ) : (
            <>
              {orders.length !== 0 ? (
                orders.map((order, index) => (
                  <KitchenCard order={order} index={index + 1} />
                ))
              ) : (
                <p className="font-poppins mt-50 flex items-center justify-center text-4xl font-bold">
                  No Orders Found.😢
                </p>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default OrdersPage
