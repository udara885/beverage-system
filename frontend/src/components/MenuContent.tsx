import BeverageCard from "./BeverageCard"

const MenuContent = () => {
  return (
    <div className="no-scrollbar mx-7 mb-7 max-h-[calc(100vh-30vh)] overflow-y-scroll">
      <BeverageCard />
      <BeverageCard />
      <BeverageCard />
      <BeverageCard />
      <hr />
    </div>
  )
}

export default MenuContent
