import { BookOpen } from "lucide-react"
import { Link, useLocation } from "react-router-dom"
import { Order } from "../types/types"

const KitchenCard = ({ order, index }: { order: Order; index: number }) => {
  const location = useLocation()

  const path = location.pathname

  return (
    <div className="flex items-center justify-between border-t py-5">
      <div className="flex flex-col gap-5">
        {order.items.map((item) => (
          <div className="flex gap-5" key={item._id}>
            <img
              src={item.image}
              alt={item.name}
              className="h-30 w-30 rounded-full object-cover"
            />
            <div>
              <h1 className="text-[1.75rem] font-semibold">{item.name}</h1>
              {item.customization && (
                <div className="flex gap-1">
                  <span>Customized - </span>
                  <div className="flex flex-col">
                    <span>{item.customization?.milk}</span>
                    <span>{item.customization?.flavours}</span>
                    <span>{item.customization?.sweeteners}</span>
                  </div>
                </div>
              )}
              <span>Time - 15min</span>
            </div>
          </div>
        ))}
      </div>
      <div className="flex w-[60%] items-center justify-between">
        <select className="mr-10 h-[60px] w-[280px] rounded-lg px-5 text-lg text-gray-600 shadow-[0_4px_14px_0_rgba(0,0,0,0.10)]">
          <option>Process</option>
          <option value="new-order">New Order</option>
          <option value="processing">Processing</option>
          <option value="completed">Completed</option>
        </select>
        {path !== "/kitchen/completed-orders" &&
          order.items[0].customization?.specialInstructions && (
            <Link
              to={"/kitchen/instructions"}
              className="rounded-lg bg-orange-400 px-6 py-2"
              state={{ order, index }}
            >
              <BookOpen size={30} fill="white" stroke="white" />
            </Link>
          )}
        <div className="flex h-[90px] w-[90px] items-center justify-center rounded-full border">
          <span className="text-3xl font-semibold">{index}</span>
        </div>
      </div>
    </div>
  )
}

export default KitchenCard
