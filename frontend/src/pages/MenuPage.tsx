import { useLocation } from "react-router-dom";
import MenuContent from "../components/MenuContent";

const MenuPage = () => {
  const location = useLocation();
  const path = location.pathname;

  return (
    <div>
      <h1 className="font-poppins mx-15 my-6 text-5xl font-medium">
        {path === "/coffee" || path === "/"
          ? "Coffee"
          : path === "/shakes"
            ? "Shakes"
            : path === "/tea"
              ? "Tea"
              : "Bubble Tea"}
      </h1>
      <div className="mx-8 flex justify-between">
        <div className="h-10 w-2/3">
          <MenuContent />
        </div>
        <div className="w-1/3">
          <img
            src={
              path === "/coffee" || path === "/"
                ? "coffee.png"
                : path === "/shakes"
                  ? "shake.png"
                  : path === "/tea"
                    ? "tea.png"
                    : "bubble-tea.png"
            }
            alt=""
            className="-mt-31 bg-no-repeat object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default MenuPage;
