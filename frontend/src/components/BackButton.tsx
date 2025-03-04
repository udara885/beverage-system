import { ArrowLeft } from "lucide-react"
import { useNavigate } from "react-router-dom"

const BackButton = () => {
  const navigate = useNavigate()

  const goBack = () => {
    navigate(-1)
  }

  return (
    <button
      className="flex h-16 w-16 cursor-pointer items-center justify-center rounded-full bg-orange-400"
      onClick={goBack}
    >
      <ArrowLeft size={40} className="text-white" />
    </button>
  )
}

export default BackButton
