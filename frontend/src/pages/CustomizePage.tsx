import { ShoppingCart } from "lucide-react"
import { Link, useLocation } from "react-router-dom"
import { CartItem } from "../types/types"
import { ChangeEvent, useState } from "react"
import { v4 as uuid } from "uuid"
import toast from "react-hot-toast"

const CustomizePage = () => {
  const location = useLocation()

  const beverage: CartItem = location.state.beverage

  const cartItem: CartItem = location.state.cartItem

  const [customization, setCustomization] = useState(
    cartItem && cartItem.customization
      ? {
          milk: cartItem.customization.milk,
          flavours: cartItem.customization.flavours,
          sweeteners: cartItem.customization.sweeteners,
          specialInstructions: cartItem.customization.specialInstructions,
        }
      : {
          milk: "",
          flavours: "",
          sweeteners: "",
          specialInstructions: "",
        },
  )

  const handleCustomizationChange = (
    e: ChangeEvent<HTMLSelectElement | HTMLInputElement>,
  ) => {
    const { name, value } = e.target
    setCustomization((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleCart = () => {
    const existingCartItems = JSON.parse(
      localStorage.getItem("cartItems") || "[]",
    )
    if (cartItem) {
      const updatedCartItems = existingCartItems.map((item: CartItem) =>
        item._id === cartItem._id ? { ...item, customization } : item,
      )
      localStorage.setItem("cartItems", JSON.stringify(updatedCartItems))
      toast.success("Cart updated")
    } else {
      const beverageExists = existingCartItems.some(
        (item: CartItem) =>
          item.customization?.milk === beverage.customization?.milk &&
          item.customization?.flavours === beverage.customization?.flavours &&
          item.customization?.sweeteners ===
            beverage.customization?.sweeteners &&
          item.customization?.specialInstructions ===
            beverage.customization?.specialInstructions,
      )
      if (!beverageExists) {
        const hasCustomizations = Object.values(customization).some(
          (value) => value !== "",
        )
        const beverageWithCustomization: CartItem = {
          ...beverage,
          id: uuid(),
          quantity: 1,
          ...(hasCustomizations && { customization }),
        }
        const updatedCart = [...existingCartItems, beverageWithCustomization]
        localStorage.setItem("cartItems", JSON.stringify(updatedCart))
        toast.success("Item added to Cart")
      } else {
        toast.error("Item already in Cart")
      }
    }
  }

  return (
    <div className="w-full">
      <div className="flex flex-col items-center">
        <img
          src={cartItem ? cartItem.image : beverage.image}
          alt=""
          className="-mt-20 h-20 w-20 rounded-full bg-no-repeat object-cover"
        />
        <h1 className="text-[1.75rem] font-semibold">
          {cartItem ? cartItem.name : beverage.name}
        </h1>
      </div>
      <hr />
      <div className="flex w-full p-5">
        <div className="flex w-1/2 justify-center">
          <img src="customize.png" alt="" className="h-[calc(100vh-30vh)]" />
        </div>
        <div className="font-poppins flex w-1/2 justify-center">
          <form className="flex w-[80%] flex-col">
            <h3 className="text-xl font-semibold">Milk Choices</h3>
            <select
              name="milk"
              value={customization.milk}
              onChange={handleCustomizationChange}
              className="w-full rounded-md border px-3 py-2"
            >
              <option value="">Milk Options</option>
              <option value="whole-milk">Whole Milk - $0.30</option>
              <option value="almond-milk">Almond Milk - $0.40</option>
              <option value="soy-milk">Soy Milk - $0.70</option>
            </select>
            <h3 className="mt-4 text-xl font-semibold">Flavours Syrups</h3>
            <select
              name="flavours"
              value={customization.flavours}
              onChange={handleCustomizationChange}
              className="w-full rounded-md border px-3 py-2"
            >
              <option value="">Flavours Syrups Options</option>
              <option value="vanilla">Vanilla - $0.50</option>
              <option value="caramel">Caramel - $0.50</option>
              <option value="hazelnut">Hazelnut - $0.50</option>
              <option value="lavender">Lavender - $0.50</option>
              <option value="cinnamon">Cinnamon - $0.50</option>
            </select>
            <h3 className="mt-4 text-xl font-semibold">Sweeteners</h3>
            <select
              name="sweeteners"
              value={customization.sweeteners}
              onChange={handleCustomizationChange}
              className="w-full rounded-md border px-3 py-2"
            >
              <option value="">Sweeteners Options</option>
              <option value="sugar">Sugar - $0.20</option>
              <option value="brown-sugar">Brown Sugar - $0.30</option>
              <option value="honey">Honey - $0.50</option>
            </select>
            <h3 className="mt-4 text-xl font-semibold">Special Instructions</h3>
            <input
              type="text"
              value={customization.specialInstructions}
              onChange={handleCustomizationChange}
              className="w-full rounded-md border px-3 py-2"
            />
            <Link
              to={"/cart"}
              onClick={handleCart}
              className="mt-10 flex cursor-pointer gap-2 self-end rounded-lg bg-orange-400 px-10 py-3 text-lg font-semibold text-white"
            >
              Add To Cart
              <ShoppingCart />
            </Link>
          </form>
        </div>
      </div>
    </div>
  )
}

export default CustomizePage
