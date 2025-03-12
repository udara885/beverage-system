import { Beverage } from "../types/types"
import BeverageCard from "./BeverageCard"

const MenuContent = ({ beverages }: { beverages: Beverage[] }) => {
  return (
    <div className="no-scrollbar mx-7 mb-7 max-h-[calc(100vh-30vh)] overflow-y-scroll">
      {beverages.length !== 0 &&
        beverages.map((beverage) => <BeverageCard beverage={beverage} />)}
      <hr />
    </div>
  )
}

export default MenuContent
