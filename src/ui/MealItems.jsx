import { NavLink } from "react-router-dom";
import Button from "./Button";
import ButtonDecInc from "./ButtonDecInc";

function MealItems({ meal }) {
  return (
    <>
      <NavLink to={`/meal/${meal.idMeal}`} className="mt-3 w-fit">
        <Button type="details">Show Details</Button>
      </NavLink>

      <li className="grid h-fit border border-stone-500 rounded-sm p-2 relative">
        <img
          src={`../../public/${meal.image}`}
          className="h-24 md:h-40 invisible xsm:visible"
          alt="big koshary"
        />
        <h1 className="text-3xl text-amber-300 ">{meal.name}</h1>
        <h2 className="text-xl text-stone-400 capitalize italic col-span-1 ">
          {meal.grediants.map((item) => item).join("-")}
        </h2>
        <span className=" text-amber-700 text-3xl">${meal.price}</span>
        <span className=" text-stone-400 text-3xl block">{meal.time} mins</span>
        <ButtonDecInc meal={meal} key={meal.idMeal} />
      </li>
    </>
  );
}

export default MealItems;
