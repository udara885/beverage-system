import { CreditCard } from "lucide-react"
import CartCard from "../components/CartCard"
import { CartItem } from "../types/types"
import { useNavigate } from "react-router-dom"
import { FormEvent, useState } from "react"
import toast from "react-hot-toast"

const CheckoutPage = () => {
  const navigate = useNavigate()

  const [paymentMethod, setPaymentMethod] = useState("")

  const cartItems: CartItem[] = JSON.parse(
    localStorage.getItem("cartItems") || "[]",
  )

  const uniqueCartItems = cartItems.filter(
    (item, index) => cartItems.findIndex((i) => i._id === item._id) === index,
  )

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (paymentMethod === "") {
      toast.error("Please select a payment method")
    } else {
      navigate("/card-details")
    }
  }

  return (
    <div className="font-poppins flex w-full flex-col items-center">
      <h1 className="-mt-10 w-full border-b pb-4 text-center text-5xl font-medium">
        Check Out
      </h1>
      <div className="flex w-full justify-between gap-10 px-10">
        <div className="no-scrollbar mt-10 flex h-[calc(100vh-27vh)] w-1/2 flex-col items-center overflow-y-scroll">
          {uniqueCartItems.map((item) => (
            <CartCard key={item.id} cartItem={item} />
          ))}
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
            <tbody className="no-scrollbar block h-[calc(100vh-87vh)] overflow-auto">
              {cartItems.map((item) => (
                <tr
                  className="flex items-center justify-between text-center text-xl"
                  key={item.id}
                >
                  <td className="w-1/4">{item.name}</td>
                  <td className="w-1/4">{item.quantity}</td>
                  <td className="w-1/4">${item.price.toFixed(2)}</td>
                  <td className="w-1/4">${item.amount?.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="font-poppins mt-10 border-y">
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
              <h3>
                $
                {cartItems
                  .reduce((sum, item) => sum + (item.amount ?? 0), 0)
                  .toFixed(2)}
              </h3>
            </div>
          </div>
          <form className="mt-2 flex flex-col text-xl" onSubmit={handleSubmit}>
            <div className="flex w-full items-center justify-between gap-5">
              <h3>Payment Method</h3>
              <select
                name="payment"
                id="payment"
                className="rounded-lg px-7 py-2 shadow-[0_4px_14px_0_rgba(0,0,0,0.10)]"
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
              >
                <option>Payment Method</option>
                <option value="card">Credit Card</option>
              </select>
            </div>
            <button
              type="submit"
              className="font-poppins mt-15 flex cursor-pointer items-center justify-center gap-2 self-end rounded-md bg-orange-400 px-10 py-3 text-lg text-white"
            >
              <span className="font-semibold">Pay</span>
              <CreditCard />
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default CheckoutPage
