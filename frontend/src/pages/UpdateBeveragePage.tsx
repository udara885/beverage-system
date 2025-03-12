import { useNavigate, useParams } from "react-router-dom"
import { useBeverageStore } from "../store/beverage"
import { MouseEvent, useEffect, useState } from "react"
import { Beverage } from "../types/types"
import toast from "react-hot-toast"
import Loader from "../components/Loader"

const UpdateBeveragePage = () => {
  const { id } = useParams()

  if (!id) {
    throw new Error("id is undefined")
  }

  const { updateBeverage, getBeverage } = useBeverageStore()

  const [updatedBeverage, setUpdatedBeverage] = useState<Beverage>({
    name: "",
    price: 0,
    image: "",
    category: "",
    description: "",
  })

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchBeverage = async () => {
      setLoading(true)
      const res = await getBeverage(id)
      if ("data" in res) {
        setUpdatedBeverage(res.data)
      } else {
        toast.error(res.message)
      }
      setLoading(false)
    }
    fetchBeverage()
  }, [getBeverage, id])

  const navigate = useNavigate()

  const handleSubmit = async (
    e: MouseEvent<HTMLButtonElement>,
    id: string,
    updatedBeverage: Beverage,
  ) => {
    e.preventDefault()
    const { success, message } = await updateBeverage(id, updatedBeverage)
    if (!success) {
      toast.error(message)
    } else {
      toast.success(message)
      navigate(-1)
    }
  }

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="font-poppins -mt-4 flex w-full flex-col items-center">
          <h1 className="text-4xl font-bold">Update Beverage</h1>
          <form className="mt-5 flex w-[35%] flex-col gap-5">
            <input
              type="text"
              placeholder="Beverage Name"
              name="name"
              className="rounded-lg border-2 border-gray-400 p-2 outline-none focus:border-orange-400"
              value={updatedBeverage.name}
              onChange={(e) => {
                setUpdatedBeverage({ ...updatedBeverage, name: e.target.value })
              }}
            />
            <input
              type="number"
              placeholder="Price"
              name="price"
              className="rounded-lg border-2 border-gray-400 p-2 outline-none focus:border-orange-400"
              value={updatedBeverage.price}
              onChange={(e) => {
                setUpdatedBeverage({
                  ...updatedBeverage,
                  price: parseInt(e.target.value),
                })
              }}
            />
            <input
              type="text"
              placeholder="Image URL"
              name="image"
              className="rounded-lg border-2 border-gray-400 p-2 outline-none focus:border-orange-400"
              value={updatedBeverage.image}
              onChange={(e) => {
                setUpdatedBeverage({
                  ...updatedBeverage,
                  image: e.target.value,
                })
              }}
            />
            <select
              name="category"
              className="rounded-lg border-2 border-gray-400 p-2 outline-none focus:border-orange-400"
              value={updatedBeverage.category}
              onChange={(e) => {
                setUpdatedBeverage({
                  ...updatedBeverage,
                  category: e.target.value,
                })
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
              value={updatedBeverage.description}
              onChange={(e) => {
                setUpdatedBeverage({
                  ...updatedBeverage,
                  description: e.target.value,
                })
              }}
            />
            <button
              type="submit"
              className="cursor-pointer rounded-lg bg-orange-400 p-2 font-semibold text-white"
              onClick={(e) => handleSubmit(e, id, updatedBeverage)}
            >
              Update Beverage
            </button>
          </form>
        </div>
      )}
    </>
  )
}

export default UpdateBeveragePage
