import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

const CustomizePage = () => {
  return (
    <div className="w-full">
      <div className="flex flex-col items-center">
        <img
          src="espresso.png"
          alt=""
          className="-mt-20 h-20 w-20 rounded-full bg-no-repeat object-cover"
        />
        <h1 className="text-[1.75rem] font-semibold">Espresso</h1>
      </div>
      <hr />
      <div className="flex w-full p-5">
        <div className="flex w-1/2 justify-center">
          <img src="customize.png" alt="" className="h-[calc(100vh-30vh)]" />
        </div>
        <div className="font-poppins flex w-1/2 justify-center">
          <form className="flex w-[80%] flex-col">
            <h3 className="border-b text-xl font-semibold">Milk Choices</h3>
            <div className="flex justify-between border-b py-2">
              <h4>Whole Milk</h4>
              <h4>+$0.30</h4>
            </div>
            <div className="flex justify-between border-b py-2">
              <h4>Almond Milk</h4>
              <h4>+$0.40</h4>
            </div>
            <div className="flex justify-between border-b py-2">
              <h4>Soy Milk</h4>
              <h4>+$0.70</h4>
            </div>
            <h3 className="mt-4 text-xl font-semibold">Flavours Syrups</h3>
            <select
              name="flavours"
              id="flavours"
              className="w-full rounded-md border px-3 py-2"
            >
              <option>Flavours Syrups Options</option>
              <option value="vanilla">Vanilla</option>
              <option value="chocolate">Chocolate</option>
            </select>
            <h3 className="mt-4 text-xl font-semibold">Sweeteners</h3>
            <select
              name="flavours"
              id="flavours"
              className="w-full rounded-md border px-3 py-2"
            >
              <option>Sweeteners Options</option>
              <option value="vanilla">Vanilla</option>
              <option value="chocolate">Chocolate</option>
            </select>
            <h3 className="mt-4 text-xl font-semibold">Special Instructions</h3>
            <input type="text" className="w-full rounded-md border px-3 py-2" />
            <Link
              to={"/cart"}
              className="mt-4 flex cursor-pointer gap-2 self-end rounded-lg bg-orange-500 px-4 py-1 text-lg font-semibold text-white"
            >
              Add To Cart
              <ShoppingCart />
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CustomizePage;
