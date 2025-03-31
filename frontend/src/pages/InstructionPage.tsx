import { useLocation } from "react-router-dom"
import { Order } from "../types/types"
import { useOrderStore } from "../store/order"
import { ChangeEvent } from "react"
import toast from "react-hot-toast"

const InstructionPage = () => {
  const location = useLocation()

  const order: Order = location.state.order

  const index: number = location.state.index

  const { updateOrder } = useOrderStore()

  const handleProcess = async (
    e: ChangeEvent<HTMLSelectElement>,
    id: string,
  ) => {
    const { name, value } = e.target
    const { success, message } = await updateOrder(id, {
      ...order,
      [name]: value,
    })
    if (!success) {
      toast.error(message)
    } else {
      toast.success(message)
    }
  }

  return (
    <div className="font-poppins flex w-full justify-center">
      <div className="no-scrollbar flex h-[calc(100vh-20vh)] w-[90%] flex-col overflow-y-scroll">
        <div className="flex items-center justify-between border-b pb-2">
          <h1 className="text-5xl font-medium">Special Instructions</h1>
          <div className="flex h-20 w-20 items-center justify-center rounded-full border-2 p-5">
            <span className="text-3xl font-semibold">{index}</span>
          </div>
        </div>
        {order.items.map((item, index) => (
          <div className={`${index !== 0 && "border-t border-dashed"}`}>
            <div className="mt-2 flex items-center justify-between border-b pb-2">
              <div className="flex items-center gap-10">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-44 w-44 rounded-full object-cover"
                />
                <h2 className="text-[1.75rem] font-bold">{item.name}</h2>
              </div>
              {index === 0 && (
                <select
                  name="status"
                  className="h-[60px] w-[280px] rounded-lg px-5 text-lg text-gray-600 shadow-[0_4px_14px_0_rgba(0,0,0,0.10)]"
                  onChange={(e) => order._id && handleProcess(e, order._id)}
                >
                  <option disabled>Process</option>
                  <option value="New Order">New Order</option>
                  <option value="Processing">Processing</option>
                  <option value="Completed">Completed</option>
                </select>
              )}
            </div>
            <div className="flex flex-col border-b py-5">
              <h2 className="text-2xl font-semibold">Customize</h2>
              <span>{item.customization?.milk}</span>
              <span>{item.customization?.flavours}</span>
              <span>{item.customization?.sweeteners}</span>
            </div>
            <div className="border-b py-5">
              <span>Item - {item.quantity}</span>
              <br />
              <span>Time - 15min</span>
            </div>
            <div className="py-5">
              <h2 className="text-2xl font-semibold">Instructions</h2>
              <p>{item.customization?.specialInstructions}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default InstructionPage
