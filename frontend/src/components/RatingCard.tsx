import { Star } from "lucide-react"

const RatingCard = () => {
  return (
    <div className="w-[500px] rounded-3xl px-6 py-3 shadow-[0_4px_20px_0_rgba(0,0,0,0.25)]">
      <div className="flex items-center gap-3">
        <div className="h-15 w-15 rounded-full bg-green-200" />
        <h2 className="text-xl font-medium">Sarah J</h2>
      </div>
      <div className="mt-2 flex gap-4">
        {[1, 2, 3, 4, 5].map((index) => (
          <Star key={index} fill="yellow" />
        ))}
      </div>
      <div>
        <p className="font-poppins mt-2 text-lg font-medium">
          Asipiya Café is my new favorite spot! The ambiance is cozy, the staff
          is friendly, and the coffee is out of this world. Highly recommend!"
        </p>
      </div>
    </div>
  )
}

export default RatingCard
