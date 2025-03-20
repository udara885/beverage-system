import { ShoppingCart } from "lucide-react"
import { Link, useLocation } from "react-router-dom"
import { CartItem } from "../types/types"
import { ChangeEvent, useState } from "react"
import { v4 as uuid } from "uuid"
import toast from "react-hot-toast"

const CustomizePage = () => {
  const location = useLocation()

  const milk = [
    { name: "Whole Milk", price: 0.3 },
    { name: "Almond Milk", price: 0.4 },
    { name: "Soy Milk", price: 0.7 },
  ]

  const flavours = [
    { name: "Vanilla", price: 0.5 },
    { name: "Caramel", price: 0.5 },
    { name: "Hazelnut", price: 0.5 },
    { name: "Lavender", price: 0.5 },
    { name: "Cinnamon", price: 0.5 },
  ]

  const sweeteners = [
    { name: "Sugar", price: 0.2 },
    { name: "Brown Sugar", price: 0.3 },
    { name: "Honey", price: 0.5 },
  ]

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
      const hasCustomizations = Object.values(customization).some(
        (value) => value !== "",
      )
      const extraCost = hasCustomizations
        ? (milk.find((m) => m.name === customization.milk)?.price || 0) +
          (flavours.find((f) => f.name === customization.flavours)?.price ||
            0) +
          (sweeteners.find((s) => s.name === customization.sweeteners)?.price ||
            0)
        : 0
      const updatedCartItems = existingCartItems.map((item: CartItem) =>
        item.id === cartItem.id
          ? {
              ...item,
              customization,
              amount: cartItem.price + extraCost,
              priceWithCustomization: beverage.price + extraCost,
            }
          : item,
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
        const extraCost = hasCustomizations
          ? (milk.find((m) => m.name === customization.milk)?.price || 0) +
            (flavours.find((f) => f.name === customization.flavours)?.price ||
              0) +
            (sweeteners.find((s) => s.name === customization.sweeteners)
              ?.price || 0)
          : 0
        const beverageWithCustomization: CartItem = {
          ...beverage,
          id: uuid(),
          quantity: 1,
          amount: beverage.price + extraCost,
          priceWithCustomization: beverage.price + extraCost,
          customization: hasCustomizations ? customization : undefined,
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
              {milk.map((m) => (
                <option value={m.name}>
                  {m.name} - ${m.price}
                </option>
              ))}
            </select>
            <h3 className="mt-4 text-xl font-semibold">Flavours Syrups</h3>
            <select
              name="flavours"
              value={customization.flavours}
              onChange={handleCustomizationChange}
              className="w-full rounded-md border px-3 py-2"
            >
              <option value="">Flavours Syrups Options</option>
              {flavours.map((f) => (
                <option value={f.name}>
                  {f.name} - ${f.price}
                </option>
              ))}
            </select>
            <h3 className="mt-4 text-xl font-semibold">Sweeteners</h3>
            <select
              name="sweeteners"
              value={customization.sweeteners}
              onChange={handleCustomizationChange}
              className="w-full rounded-md border px-3 py-2"
            >
              <option value="">Sweeteners Options</option>
              {sweeteners.map((s) => (
                <option value={s.name}>
                  {s.name} - ${s.price}
                </option>
              ))}
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
