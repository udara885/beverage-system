import { PencilLine, Trash2 } from "lucide-react"
import { Link } from "react-router-dom"
import { Beverage } from "../types/types"

const AdminBeverageCard = ({
  beverage,
  handleDelete,
}: {
  beverage: Beverage
  handleDelete: (id: string | undefined) => void
}) => {
  return (
    <div className="flex w-[25%] flex-col items-center gap-2 rounded-lg py-4 shadow-[1px_1px_5px_1px_rgba(0,0,0,0.2)]">
      <img
        src={beverage.image}
        alt=""
        className="h-35 w-35 rounded-full object-cover"
      />
      <div className="flex w-[80%] items-center justify-between">
        <h1 className="text-2xl font-bold">{beverage.name}</h1>
        <h2 className="text-xl font-semibold">${beverage.price}</h2>
      </div>
      <div className="flex w-full flex-col items-center gap-2">
        <Link
          to={`/admin/update-beverage/${beverage._id}`}
          className="flex w-[80%] items-center justify-center gap-2 rounded-lg bg-orange-400 p-2 font-medium text-white"
        >
          <PencilLine />
          Update
        </Link>
        <button
          className="flex w-[80%] cursor-pointer items-center justify-center gap-2 rounded-lg border-2 border-orange-400 p-2 font-medium text-orange-500"
          onClick={() => handleDelete(beverage._id)}
        >
          <Trash2 />
          Delete
        </button>
      </div>
    </div>
  )
}

export default AdminBeverageCard
