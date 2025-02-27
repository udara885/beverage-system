import { ArrowLeft } from "lucide-react"
import { useNavigate } from "react-router-dom"

const BackButton = () => {
	const navigate = useNavigate()

	const goBack = () => {
		navigate(-1)
	}

	return (
		<button
			className="w-16 h-16 bg-orange-400 rounded-full flex items-center justify-center cursor-pointer"
			onClick={goBack}
		>
			<ArrowLeft
				size={40}
				className="text-white"
			/>
		</button>
	)
}

export default BackButton
