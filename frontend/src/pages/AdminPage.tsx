import { useEffect, useState } from "react"
import AdminBeverageCard from "../components/AdminBeverageCard"
import { useBeverageStore } from "../store/beverage"
import Loader from "../components/Loader"
import toast from "react-hot-toast"

const AdminPage = () => {
  const { beverages, getBeverages, deleteBeverage } = useBeverageStore()

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchBeverages = async () => {
      setLoading(true)
      await getBeverages()
      setLoading(false)
    }
    fetchBeverages()
  }, [getBeverages])

  const handleDelete = async (id: string | undefined): Promise<void> => {
    if (!id) {
      throw new Error("id is undefined")
    }
    const { success, message } = await deleteBeverage(id)
    if (!success) {
      toast.error(message)
    } else {
      toast.success(message)
      const updatedBeverages = beverages.filter(
        (beverage) => beverage._id !== id,
      )
      useBeverageStore.setState({ beverages: updatedBeverages })
    }
  }

  return (
    <div className="font-poppins flex w-full justify-center">
      {loading ? (
        <Loader />
      ) : (
        <div className="no-scrollbar flex h-[calc(100vh-13vh)] w-[90%] flex-wrap items-center justify-center gap-10 overflow-y-scroll py-4">
          {beverages.length !== 0 ? (
            beverages.map((beverage, index) => (
              <AdminBeverageCard
                key={index}
                beverage={beverage}
                handleDelete={() => handleDelete(beverage._id)}
              />
            ))
          ) : (
            <p className="font-poppins flex items-center justify-center text-4xl font-bold">
              No Beverages Found.😢
            </p>
          )}
        </div>
      )}
    </div>
  )
}

export default AdminPage
