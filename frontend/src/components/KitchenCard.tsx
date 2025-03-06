import { BookOpen } from "lucide-react"
import { Link } from "react-router-dom"

const KitchenCard = () => {
  return (
    <div className="flex items-center justify-between border-t py-5">
      <div className="flex gap-5">
        <img
          src="espresso.png"
          alt=""
          className="h-30 w-30 rounded-full object-contain"
        />
        <div>
          <h1 className="text-[1.75rem] font-semibold">Espresso</h1>
          <div className="flex gap-1">
            <span>Customized - </span>
            <div className="flex flex-col">
              <span>Whole Milk</span>
              <span>Vanilla</span>
            </div>
          </div>
          <span>Time - 15min</span>
        </div>
      </div>

      <select
        name=""
        id=""
        className="h-[60px] w-[280px] rounded-lg px-5 text-lg text-gray-600 shadow-[0_4px_14px_0_rgba(0,0,0,0.10)]"
      >
        <option>Process</option>
        <option value="new-order">New Order</option>
        <option value="processing">Processing</option>
        <option value="completed">Completed</option>
      </select>
      <Link
        to={"/kitchen/instructions"}
        className="rounded-lg bg-orange-400 px-6 py-2"
      >
        <BookOpen size={30} fill="white" stroke="white" />
      </Link>
      <div className="flex h-[100px] w-[100px] items-center justify-center rounded-full border">
        <span className="text-3xl font-semibold">1</span>
      </div>
    </div>
  )
}

export default KitchenCard
