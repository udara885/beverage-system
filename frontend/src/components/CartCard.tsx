import { Settings, Trash } from "lucide-react"
import { Link, useLocation } from "react-router-dom"
import { CartItem } from "../types/types"

const CartCard = ({
  cartItem,
  onRemove,
  onIncrease,
  onDecrease,
}: {
  cartItem: CartItem
  onRemove?: (id: string) => void
  onIncrease?: (id: string) => void
  onDecrease?: (id: string) => void
}) => {
  const location = useLocation()

  const path = location.pathname

  return (
    <div className="relative mb-5 flex w-full gap-30 rounded-lg px-5 py-3 shadow-sm">
      <div className="flex items-center gap-5">
        <img
          src={cartItem.image}
          className="my-3 h-30 w-30 rounded-full object-cover"
          alt=""
        />
        <div className="font-poppins">
          <h2 className="text-2xl font-semibold">{cartItem.name}</h2>
          {path === "/cart" ? (
            <>
              {cartItem.customization && (
                <div className="flex gap-1 text-lg font-medium">
                  <h3>customized - </h3>
                  <div>
                    <h3 className="capitalize">
                      {cartItem.customization.milk?.split("-").join(" ")}
                    </h3>
                    <h3 className="capitalize">
                      {cartItem.customization.flavours}
                    </h3>
                    <h3 className="capitalize">
                      {cartItem.customization.sweeteners}
                    </h3>
                  </div>
                </div>
              )}
              <div className="mt-5 flex w-40 items-center justify-around rounded-lg border-2">
                <button
                  className="cursor-pointer"
                  onClick={() => cartItem.id && onDecrease?.(cartItem.id)}
                >
                  -
                </button>
                <span className="font-bold">{cartItem.quantity}</span>
                <button
                  className="cursor-pointer"
                  onClick={() => cartItem.id && onIncrease?.(cartItem.id)}
                >
                  +
                </button>
              </div>
            </>
          ) : (
            <p className="text-justify text-lg">{cartItem.description}</p>
          )}
        </div>
      </div>
      {path === "/cart" && (
        <div className="absolute right-5 flex flex-col gap-2 self-end pb-5">
          <button
            className="cursor-pointer rounded-lg bg-orange-400 p-1 text-white"
            onClick={() => cartItem.id && onRemove?.(cartItem.id)}
          >
            <Trash />
          </button>
          <Link
            to={"/customize"}
            state={{ cartItem }}
            className="cursor-pointer rounded-lg bg-orange-400 p-1 text-white"
          >
            <Settings />
          </Link>
        </div>
      )}
    </div>
  )
}

export default CartCard
