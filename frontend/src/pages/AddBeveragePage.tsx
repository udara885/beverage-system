import { MouseEvent, useState } from "react"
import { Beverage } from "../types/types"
import { useNavigate } from "react-router-dom"
import { useBeverageStore } from "../store/beverage"
import toast from "react-hot-toast"

const AddBeveragePage = () => {
  const [newBeverage, setNewBeverage] = useState<Beverage>({
    name: "",
    price: 0,
    image: "",
    category: "",
    description: "",
  })

  const navigate = useNavigate()

  const { addBeverage } = useBeverageStore()

  const handleSubmit = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    const { success, message } = await addBeverage(newBeverage)
    if (!success) {
      toast.error(message)
    } else {
      toast.success(message)
      navigate(-1)
      setNewBeverage({
        name: "",
        price: 0,
        image: "",
        category: "",
        description: "",
      })
    }
  }

  return (
    <div className="font-poppins -mt-4 flex w-full flex-col items-center">
      <h1 className="text-4xl font-bold">Add New Beverage</h1>
      <form className="mt-5 flex w-[35%] flex-col gap-5">
        <input
          type="text"
          placeholder="Beverage Name"
          name="name"
          className="rounded-lg border-2 border-gray-400 p-2 outline-none focus:border-orange-400"
          value={newBeverage.name}
          onChange={(e) => {
            setNewBeverage({ ...newBeverage, name: e.target.value })
          }}
        />
        <input
          type="number"
          placeholder="Price"
          name="price"
          className="rounded-lg border-2 border-gray-400 p-2 outline-none focus:border-orange-400"
          value={newBeverage.price}
          onChange={(e) => {
            setNewBeverage({ ...newBeverage, price: parseInt(e.target.value) })
          }}
        />
        <input
          type="text"
          placeholder="Image URL"
          name="image"
          className="rounded-lg border-2 border-gray-400 p-2 outline-none focus:border-orange-400"
          value={newBeverage.image}
          onChange={(e) => {
            setNewBeverage({ ...newBeverage, image: e.target.value })
          }}
        />
        <select
          name="category"
          className="rounded-lg border-2 border-gray-400 p-2 outline-none focus:border-orange-400"
          value={newBeverage.category}
          onChange={(e) => {
            setNewBeverage({ ...newBeverage, category: e.target.value })
          }}
        >
          <option>Select Category</option>
          <option value="coffee">Coffee</option>
          <option value="shake">Shake</option>
          <option value="tea">Tea</option>
          <option value="bubble-tea">Bubble Tea</option>
        </select>
        <textarea
          placeholder="Description"
          rows={4}
          name="description"
          className="resize-none rounded-lg border-2 border-gray-400 p-2 outline-none focus:border-orange-400"
          value={newBeverage.description}
          onChange={(e) => {
            setNewBeverage({ ...newBeverage, description: e.target.value })
          }}
        />
        <button
          type="submit"
          className="cursor-pointer rounded-lg bg-orange-400 p-2 font-semibold text-white"
          onClick={handleSubmit}
        >
          Add Beverage
        </button>
      </form>
    </div>
  )
}

export default AddBeveragePage
