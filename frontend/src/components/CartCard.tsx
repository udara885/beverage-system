import { Settings, Trash } from "lucide-react"
import { useLocation } from "react-router-dom"

const CartCard = () => {
  const location = useLocation()
  const path = location.pathname
  return (
    <div className="flex w-full items-center justify-around gap-5 rounded-lg px-6 shadow-[0px_4px_30.8px_0px_rgba(0,0,0,0.25)]">
      <img src="cartCard.png" className="my-3 h-40 w-40 rounded-full" alt="" />
      <div className="font-poppins">
        <h2 className="text-2xl font-semibold">Berry Blast Smoothie</h2>
        {path === "/cart" ? (
          <>
            <div className="flex gap-1 text-lg font-medium">
              <h3>customized - </h3>
              <div>
                <h3>Whole Milk</h3>
                <h3>Vanilla</h3>
              </div>
            </div>
            <div className="mt-5 flex w-1/2 items-center justify-around rounded-lg border-2">
              <button className="cursor-pointer">-</button>
              <span className="font-bold">1</span>
              <button className="cursor-pointer">+</button>
            </div>
          </>
        ) : (
          <p className="text-justify text-lg">
            A refreshing blend of strawberries, blueberries, and raspberries
            mixed with yogurt and a splash of apple juice for a fruity delight.
          </p>
        )}
      </div>
      {path === "/cart" && (
        <div className="flex flex-col gap-2 self-end pb-5">
          <button className="cursor-pointer rounded-lg bg-orange-400 p-1 text-white">
            <Trash />
          </button>
          <button className="cursor-pointer rounded-lg bg-orange-400 p-1 text-white">
            <Settings />
          </button>
        </div>
      )}
    </div>
  )
}

export default CartCard
