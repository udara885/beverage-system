import { Star } from "lucide-react"
import BackButton from "../components/BackButton"
import Logo from "../components/Logo"
import { useState } from "react"
import RatingCard from "../components/RatingCard"

const FeedbackPage = () => {
  const [rating, setRating] = useState(0)
  return (
    <div className="relative min-h-screen w-screen">
      <div className="absolute top-0 left-0 mt-16 h-[550px] w-[300px] bg-[url('order-confirm-1.png')] bg-contain bg-no-repeat blur-sm" />
      <div className="absolute top-0 right-0 mt-2 -mr-30 h-[600px] w-[300px] bg-[url('order-confirm-2.png')] bg-contain bg-no-repeat blur-sm" />
      <div className="relative mt-5 flex w-full flex-col items-center">
        <div className="flex items-center">
          <div className="absolute left-10">
            <BackButton />
          </div>
          <Logo />
        </div>
        <div className="mt-10 flex flex-col items-center rounded-3xl px-20 py-6 shadow-[0_4px_25.9px_0_rgba(0,0,0,0.25)]">
          <h1 className="font-poppins text-[1.75rem]">
            Please Rate your Experience
          </h1>
          <div className="mt-2 flex gap-8">
            {[1, 2, 3, 4, 5].map((index) => (
              <button
                key={index}
                onClick={() => setRating(index)}
                className="cursor-pointer"
              >
                <Star fill={rating >= index ? "yellow" : "none"} size={25} />
              </button>
            ))}
          </div>
          <div className="font-poppins mt-1 flex w-[72%] justify-between text-sm">
            <span>Hated it</span>
            <span>Loved it</span>
          </div>
        </div>
        <div className="mt-10 flex gap-13">
          <RatingCard />
          <RatingCard />
        </div>
      </div>
    </div>
  )
}

export default FeedbackPage
