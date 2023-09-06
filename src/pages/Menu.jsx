import { useSelector } from "react-redux";
import MealItems from "../ui/MealItems";
export const meals = [
  {
    idMeal: "1",
    image: "2020_2_11_13_34_40_591.jpg",
    name: "BIG KOSHART",
    grediants: [
      "rise",
      "pasta",
      "carmalized onions",
      "hummen",
      "lemon and vimger",
      "red chili",
      "pickle",
      "rise",
      "pasta",
      "carmalized onions",
      "hummen",
      "lemon and vimger",
      "red chili",
      "pickle",
    ],
    time: 15,
    price: 8,
  },
  {
    idMeal: "2",
    image: "Image1_8202223113233738757195-4202211141254247818446.webp",
    name: "MEDIUM KOSHART",
    grediants: [
      "rise",
      "medium pasta",
      "carmalized onions",
      "hummen",
      "lemon and vimger",
      "red chili",
      "pickle",
    ],
    time: 10,
    price: 5,
  },
  {
    idMeal: "3",
    image: "عدد-السعرات-الحرارية-في-الكشري.jpg",
    name: "SMALL KOSHART",
    grediants: [
      "rise",
      "medium pasta",
      "carmalized onions",
      "hummen",
      "lemon and vimger",
      "red chili",
      "pickle",
    ],
    time: 5,
    price: 3,
  },
];

function Menu() {
  const name = useSelector((state) => state.user.userName);
  console.log(name);
  return (
    <ul className="grid">
      <div className=" text-center items-center text-3xl sm:text-4xl space-x-3 font-semibold">
        Hello
        <div className="text-2xl sm:text-4xl  text-amber-700 mb-5 font-bold">
          {name}
        </div>
        <div className="text-2xl font-normal sm:text-3xl  text-stone-100 mb-9">
          You Can Choose Now...
        </div>
      </div>
      {meals.map((meal) => (
        <MealItems meal={meal} key={meal.idMeal} />
      ))}
    </ul>
  );
}

export default Menu;
