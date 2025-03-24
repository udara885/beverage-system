import { CreditCard } from "lucide-react"
import { useNavigate } from "react-router-dom"
import { CartItem } from "../types/types"
import { ChangeEvent, FormEvent, useState } from "react"
import toast from "react-hot-toast"

const CardDetailsPage = () => {
  const navigate = useNavigate()

  const cartItems: CartItem[] = JSON.parse(
    localStorage.getItem("cartItems") || "[]",
  )

  const [formData, setFormData] = useState({
    email: "",
    cardNumber: "",
    expiry: "",
    cvc: "",
  })

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  console.log(formData.expiry)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (formData.cardNumber.length !== 16) {
      toast.error("Invalid Card Number.")
    } else if (formData.cvc.length !== 3) {
      toast.error("Invalid CVC.")
    } else {
      const [expiryYear, expiryMonth] = formData.expiry.split("-").map(Number)
      const currentDate = new Date()
      const currentYear = currentDate.getFullYear()
      const currentMonth = currentDate.getMonth() + 1
      if (
        expiryYear < currentYear ||
        (expiryYear === currentYear && expiryMonth < currentMonth)
      ) {
        toast.error("Card has expired.")
      } else {
        clearCart()
        navigate("/order-confirm")
      }
    }
  }

  const clearCart = () => {
    localStorage.removeItem("cartItems")
  }

  return (
    <div className="font-poppins flex w-full flex-col items-center">
      <h1 className="-mt-10 w-full border-b pb-4 text-center text-5xl font-medium">
        Check Out
      </h1>
      <form className="flex w-[60%] flex-col" onSubmit={handleSubmit}>
        <h2 className="mt-5 border-b text-xl">Details</h2>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Email"
          className="mt-5 w-[70%] rounded-xl p-1 px-5 text-lg shadow-[0_4px_18.7px_0_rgba(0,0,0,0.25)]"
          required
        />
        <h2 className="mt-5 border-b text-xl">Payment Details</h2>
        <div className="relative mt-5 flex items-center">
          <input
            type="number"
            name="cardNumber"
            value={formData.cardNumber}
            onChange={handleInputChange}
            placeholder="Card number"
            className="w-[70%] rounded-t-lg border-t border-r border-l p-1 px-5 text-lg"
            required
          />
          <div className="absolute top-1 right-0 flex w-[38%] items-center gap-1">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAABPklEQVR4nO2UPU7DQBCFvwYugJ2SO1BBEHRwARQkwm2c5AzsUnCkOCnWElCGCir8g0gkk0GOneAo9poCqmSkJ6200nw7z/MMu9q+GkPLwCCAUQBJJgO+gX52J3e0RDMQxUgUyUIaXxT97M7aPIBrA1EAUqWJyyy5YSYaqZQiEkXH1nxe1/zFQeQs10e3BpBD5huQwpbalz/tI2kbkfNc6SmSDiwQTSgPuCtA4bnU6e3wp/lSyaUVkE3SK9sztgE+jzYB0+MGgMYvA2Ib4Ktkz8qmduMEUdmi6M8BmrA8wehfLTLQtwFeqz7yRSPA+/2a7iHpybo91jVVvMs9zloWDHRsQZsclIJ22xA0zVVlmgtIaPlVTJMuU+vL65ov6xncAHoGhsX6xsXZewQnS2gWIlEMRRMvlJ+9DVt2tR31DXtwWLQexPy5AAAAAElFTkSuQmCC"
              alt="mastercard-logo"
            />
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAB4ElEQVR4nO2Uu2tVQRDGFxNBDVpE4+6cuzNHVBSC4CMQS1P4ABUFIVaKhRg1OfOdGx/1VbCOjZZGsJMUgmBhJ2hpK+ITwUaw8IUWYlTm7Enuvf/DGTiwOzszv5lvD+tcY4015jIujxFjgQTPg+gD5zqDJguxHkw+3AyCUyT6LohesTPPejIwnhHrJ/MT6/Eqh6bWWA3L86IzPfJ2VgTBKxL8y3LdbZ4geGh7SybGLVsbyEtxhAR/g+CjwYlxL0TdVwFEtcpJsY/77q8KtgPGhVZLIwn+EOO9c5MDJHiS4OUuEtxIBfTpSD4duhUmB4LomwTW18T4ao0vH1MsD9WAO0HQSZ0USHD9bMAYZ1ePsG4hwdu60x+B9WIVkxcn0sS4ToK7tvYRO5YBeX5mVRD8JMYLYnwgxrfhrbpug7SpBr9cijUQsV4zqUh00Sa2iWroWRK9ndbluT6ZiPXRkoYkOpd8OFB3tmCwEDHtYzHuBUeD6C9i/PZ5OdHN635BdL4fIAXq4osmRTU666X60johx+G+AqxfguhpEtxP++L8RmlvrmRk/d47dWXrt19dS4KxXu1inB22JJPL9lk2sy2TYr9vlXu9vzxkvtamYqflubGpld2fRkdJ2nual6Cxxpz7D35Mu9l0zrO2AAAAAElFTkSuQmCC"
              alt="external-visa-an-american-multinational-financial-services-corporation-logo-color-tal-revivo"
            />
          </div>
        </div>
        <div>
          <input
            type="month"
            name="expiry"
            value={formData.expiry}
            onChange={handleInputChange}
            className="w-[30%] rounded-bl-lg border p-1 px-5 text-lg"
            required
          />
          <input
            type="number"
            name="cvc"
            value={formData.cvc}
            onChange={handleInputChange}
            className="w-[40%] rounded-br-lg border-t border-r border-b p-1 px-5 text-lg"
            placeholder="CVC"
            required
          />
        </div>

        <div className="mt-5 flex w-full flex-col items-center border-t text-xl">
          <h3 className="mt-5">Name - Udara</h3>
          <h3>Order No:21</h3>
          <h3>Time - 15min</h3>
          <div className="mt-5 flex w-[30%] justify-around border-y">
            <h3 className="font-semibold">Total</h3>
            <h3>
              $
              {cartItems
                .reduce((sum, item) => sum + (item.amount ?? 0), 0)
                .toFixed(2)}
            </h3>
          </div>
          <button
            type="submit"
            className="font-poppins mt-5 flex cursor-pointer items-center justify-center gap-2 rounded-md bg-orange-400 px-10 py-3 text-lg text-white"
          >
            <span className="font-semibold">Pay</span>
            <CreditCard />
          </button>
        </div>
      </form>
    </div>
  )
}

export default CardDetailsPage
