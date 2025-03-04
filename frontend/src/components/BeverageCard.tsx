import { Link } from "react-router-dom";

const BeverageCard = () => {
  return (
    <div>
      <hr />
      <div className="mt-5 flex gap-5">
        <img
          src="espresso.png"
          alt=""
          className="h-30 w-30 rounded-full bg-no-repeat object-cover"
          loading="lazy"
        />
        <div className="font-poppins flex flex-col">
          <h1 className="text-[1.75rem] font-semibold">Espresso - $3.00</h1>
          <p className="text-[1.375rem]">
            A rich, concentrated coffee brewed by forcing a small amount of
            nearly boiling water through finely-ground coffee beans.
          </p>
          <Link
            to={"/customize"}
            className="mx-3 mb-3 self-end rounded-lg bg-orange-400 px-3 text-center text-lg font-semibold text-white"
          >
            {"Customize >"}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BeverageCard;
