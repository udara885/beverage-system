import KitchenCard from "../components/KitchenCard"

const KitchenPage = () => {
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
          <KitchenCard />
        </div>
      </div>
    </div>
  )
}

export default KitchenPage
