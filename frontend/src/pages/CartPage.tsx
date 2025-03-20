import { BaggageClaim, Plus } from "lucide-react"
import CartCard from "../components/CartCard"
import { Link } from "react-router-dom"
import { CartItem } from "../types/types"
import { useState } from "react"
import toast from "react-hot-toast"

const CartPage = () => {
  const cartItems: CartItem[] = JSON.parse(
    localStorage.getItem("cartItems") || "[]",
  )

  const [items, setItems] = useState(cartItems)

  const removeItem = (id: string) => {
    const updatedCart = items?.filter((item) => item.id !== id)
    localStorage.setItem("cartItems", JSON.stringify(updatedCart))
    toast.success("Item removed from cart")
    setItems(updatedCart)
  }

  const increaseQty = (id: string) => {
    const updatedCart = items.map((item) =>
      item.id === id
        ? {
            ...item,
            quantity: item.quantity + 1,
            amount: Number(
              (item.priceWithCustomization * (item.quantity + 1)).toFixed(2),
            ),
          }
        : item,
    )
    localStorage.setItem("cartItems", JSON.stringify(updatedCart))
    setItems(updatedCart)
  }

  const decreaseQty = (id: string) => {
    const updatedCart = items.map((item) =>
      item.id === id
        ? {
            ...item,
            quantity: Math.max(1, item.quantity - 1),
            amount: Number(
              Math.max(
                item.priceWithCustomization,
                item.priceWithCustomization * (item.quantity - 1),
              ).toFixed(2),
            ),
          }
        : item,
    )
    localStorage.setItem("cartItems", JSON.stringify(updatedCart))
    setItems(updatedCart)
  }

  return (
    <div className="flex w-full flex-col">
      <h1 className="-mt-10 w-full border-b pb-4 text-center text-5xl font-medium">
        Cart
      </h1>
      {items.length !== 0 ? (
        <div className="flex w-full justify-between gap-5 px-10">
          <div className="no-scrollbar mt-10 flex h-[calc(100vh-30vh)] w-1/2 flex-col items-center overflow-y-scroll p-2">
            {items.map((item, index) => (
              <CartCard
                key={index}
                cartItem={item}
                onRemove={removeItem}
                onIncrease={increaseQty}
                onDecrease={decreaseQty}
              />
            ))}
            <Link
              to={"/"}
              className="flex cursor-pointer items-center justify-center rounded-2xl bg-orange-400 p-3 text-white"
            >
              <Plus size={30} />
            </Link>
          </div>
          <div className="mt-10 flex w-1/2 flex-col">
            <table className="font-poppins w-full">
              <thead>
                <tr className="flex items-center justify-between border-y py-2 text-lg">
                  <th className="w-1/4">Item</th>
                  <th className="w-1/4">QTY</th>
                  <th className="w-1/4">Price</th>
                  <th className="w-1/4">Amount</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item: CartItem, index) => (
                  <tr
                    className="flex items-center justify-between text-center text-xl"
                    key={index}
                  >
                    <td className="w-1/4">{item.name}</td>
                    <td className="w-1/4">{item.quantity}</td>
                    <td className="w-1/4">${item.price}</td>
                    <td className="w-1/4">${item.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="font-poppins mt-20 border-y">
              <div className="flex justify-between text-xl">
                <h3>Name</h3>
                <h3>Udara</h3>
              </div>
              <div className="flex justify-between text-xl">
                <h3>Order</h3>
                <h3>21</h3>
              </div>
              <div className="flex justify-between text-xl">
                <h3>Time</h3>
                <h3>15 min</h3>
              </div>
              <div className="flex justify-between border-t py-1 text-xl">
                <h3 className="font-semibold">Total</h3>
                <h3>$3.81</h3>
              </div>
            </div>
            <Link
              to={"/checkout"}
              className="font-poppins mt-25 flex cursor-pointer items-center justify-center gap-2 self-end rounded-md bg-orange-400 px-10 py-3 text-lg text-white"
            >
              <span className="font-semibold">Check Out</span>
              <BaggageClaim />
            </Link>
          </div>
        </div>
      ) : (
        <p className="font-poppins mt-50 flex items-center justify-center text-4xl font-bold">
          Cart is Empty.😢
        </p>
      )}
    </div>
  )
}

export default CartPage
