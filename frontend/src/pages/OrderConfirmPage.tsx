import { Check, House } from "lucide-react"
import Logo from "../components/Logo"
import { Link } from "react-router-dom"

const OrderConfirmPage = () => {
  return (
    <div className="mt-5 flex w-screen flex-col items-center">
      <Logo />
      <div className="flex w-full">
        <div className="-mt-10 w-1/3">
          <img src="order-confirm-1.png" alt="" className="w-70" />
        </div>
        <div className="mt-10 flex w-1/3 flex-col items-center">
          <div className="mt-5 flex items-center rounded-full bg-[#4EFF8691] p-3 drop-shadow-[0_4px_95.9px_rgba(78,255,134,0.75)]">
            <div className="rounded-full bg-[#4EFF86] p-8">
              <Check size={50} className="text-white" />
            </div>
          </div>
          <span className="font-poppins mt-3 text-3xl font-medium">
            Thank you
          </span>
          <span className="font-poppins text-3xl font-medium">
            for your purchase!
          </span>
          <span className="mt-5 text-2xl font-medium">Name - Udara</span>
          <span className="text-2xl font-medium">Order No.21</span>
          <span className="text-2xl font-medium">Time - 15min</span>
          <Link
            to={"/"}
            className="font-poppins mt-6 flex cursor-pointer items-center justify-center gap-2 rounded-md bg-orange-400 px-10 py-3 text-lg text-white"
          >
            <span className="font-semibold">Home</span>
            <House />
          </Link>
          <Link to={"/feedback"} className="mt-5 font-medium underline">
            Feedback
          </Link>
        </div>
        <div className="relative -mt-20 w-1/3">
          <img
            src="order-confirm-2.png"
            alt=""
            className="absolute right-0 w-50"
          />
        </div>
      </div>
    </div>
  )
}

export default OrderConfirmPage
