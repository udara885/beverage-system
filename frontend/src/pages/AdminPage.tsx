import { useEffect, useState } from "react"
import AdminBeverageCard from "../components/AdminBeverageCard"
import { useBeverageStore } from "../store/beverage"
import Loader from "../components/Loader"

const AdminPage = () => {
  const { beverages, getBeverages } = useBeverageStore()

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchBeverages = async () => {
      setLoading(true)
      await getBeverages()
      setLoading(false)
    }
    fetchBeverages()
  }, [getBeverages])

  return (
    <div className="font-poppins flex w-full justify-center">
      {loading ? (
        <Loader />
      ) : (
        <div className="no-scrollbar flex h-[calc(100vh-13vh)] w-[90%] flex-wrap items-center justify-center gap-10 overflow-y-scroll py-4">
          {beverages.length !== 0 ? (
            beverages.map((beverage) => (
              <AdminBeverageCard beverage={beverage} />
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
