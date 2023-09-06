import { useParams } from "react-router-dom";
import Button from "../ui/Button";
import Package from "../ui/Package";
import { meals } from "./Menu";

function Meal() {
  const { id } = useParams();

  const openedMeal = meals.find((meal) => meal.idMeal === id);
  const { name, image, price, time, grediants } = openedMeal;
  // const ddd = grediants.map((item) => item);

  return (
    <div className=" flex h-fit w-full mt-16 justify-center md:flex-row flex-col relative overflow-hidden ">
      {/*  eslint-disable-next-line */}
      <img
        className="flex rounded-xl min-w-30 max-w-32 min-h-32 max-h-72  m-auto  ml-20 sm:mx-auto border mr-12 md:mx-0 "
        src={"../../public/" + image}
        alt="image of dish"
      />
      <div className="flex flex-col ">
        <span className="text-2xl md:text-5xl mt-4 mx-auto md:mx-5 text-amber-500  m-0 md:m-auto text-center">
          {name}
        </span>
        <span className="flex p-6 text-lg capitalize italic text-yellow-200 m-0 lg:m-auto">
          {grediants.join(", ")}
        </span>
        <Button type="timePrice">
          Price
          {price} $
        </Button>
        <Button type="timePrice" className="m-auto">
          Time {time} min
        </Button>
        <Package typebackage="buyItem" meal={meals} />
      </div>
    </div>
  );
}

export default Meal;
