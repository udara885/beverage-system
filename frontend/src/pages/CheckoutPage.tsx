import { CreditCard } from "lucide-react"
import { Link } from "react-router-dom"
import CartCard from "../components/CartCard"
import { CartItem } from "../types/types"

const CheckoutPage = () => {
  const cartItems: CartItem[] = JSON.parse(
    localStorage.getItem("cartItems") || "[]",
  )

  return (
    <div className="font-poppins flex w-full flex-col items-center">
      <h1 className="-mt-10 w-full border-b pb-4 text-center text-5xl font-medium">
        Check Out
      </h1>
      <div className="flex w-full justify-between gap-10 px-10">
        <div className="mt-10 flex w-1/2 flex-col items-center overflow-y-scroll">
          {cartItems.map((item, index) => (
            <CartCard key={index} cartItem={item} />
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
            <tbody>
              <tr className="flex items-center justify-between text-center text-xl">
                <td className="w-1/4">Espresso</td>
                <td className="w-1/4">1</td>
                <td className="w-1/4">$3.00</td>
                <td className="w-1/4">$3.81</td>
              </tr>
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
          <div className="mt-2 flex items-center justify-between text-xl">
            <h3>Payment Method</h3>
            <select
              name="payment"
              id="payment"
              className="rounded-lg px-7 py-2 shadow-[0_4px_14px_0_rgba(0,0,0,0.10)]"
            >
              <option>Payment Method</option>
              <option value="card">Credit Card</option>
              <option value="cash">Cash</option>
            </select>
          </div>
          <Link
            to={"/card-details"}
            className="font-poppins mt-15 flex cursor-pointer items-center justify-center gap-2 self-end rounded-md bg-orange-400 px-10 py-3 text-lg text-white"
          >
            <span className="font-semibold">Pay</span>
            <CreditCard />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CheckoutPage
