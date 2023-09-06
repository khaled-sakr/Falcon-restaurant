import { useDispatch, useSelector } from "react-redux";
import {
  addItem,
  decreaseAmount,
  deleteItem,
  increaseAmount,
} from "../features/cartSlice";

function ButtonDecInc({ meal }) {
  const dispatch = useDispatch();
  const amount = useSelector(
    (state) =>
      state.cart.cart.find((item) => item.idMeal === meal.idMeal)?.amount ?? 0
  );
  console.log(amount);

  function inc() {
    if (amount === 0) {
      dispatch(addItem(meal));
    }
    dispatch(increaseAmount(meal.idMeal));
  }

  function dec() {
    if (amount === 0) {
      dispatch(deleteItem(meal.idMeal));
      return null;
    }
    dispatch(decreaseAmount(meal.idMeal));
  }

  console.log(useSelector((state) => state.cart.cart));
  return (
    <div className=" grid grid-flow-col absolute right-0 sm:mr-10 mr:0 top-10">
      <button
        onClick={dec}
        className="index-30 mx-2 px-10 py-2 sm:px-16 sm:py-2 bg-amber-700 hover:bg-amber-800 rounded-full top-10 text-white   text-center focus:ring-offset-1 focus:outline-0 focus-ring-stone-900 disabled:cursor-not-allowed  disabled:bg-stone-600 "
      >
        -
      </button>

      <span className="my-1  text-2xl">{amount}</span>
      <button
        onClick={inc}
        className="index-30 mx-2 px-10 py-2 sm:px-16 sm:py-2 bg-amber-700 hover:bg-amber-800 rounded-full top-10 text-white   text-center focus:ring-offset-1 focus:outline-0 focus-ring-stone-900 disabled:cursor-not-allowed  disabled:bg-stone-600 "
      >
        +
      </button>
    </div>
  );
}

export default ButtonDecInc;
