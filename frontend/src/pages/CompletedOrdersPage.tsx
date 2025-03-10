import { Search } from "lucide-react"
import KitchenCard from "../components/KitchenCard"

const CompletedOrdersPage = () => {
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
        <div className="no-scrollbar h-[calc(100vh-30vh)] overflow-y-scroll">
          <KitchenCard />
        </div>
      </div>
    </div>
  )
}

export default CompletedOrdersPage
