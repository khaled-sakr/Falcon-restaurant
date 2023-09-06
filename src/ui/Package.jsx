import { NavLink, useParams } from "react-router-dom";

import Button from "./Button";
import { useDispatch, useSelector } from "react-redux";
import {
  addItem,
  decreaseAmount,
  deleteItem,
  increaseAmount,
} from "../features/cartSlice";

const baseButtonMeal =
  "block lg:inline lg:px-10  lg:py-2 py-1  mx-1 bg-amber-700 rounded-full  hover:bg-amber-800 my-3";
function Package({ meal }) {
  const { id } = useParams();
  const dispatch = useDispatch();
  const amount = useSelector(
    (state) => state.cart.cart.find((item) => item.idMeal === id)?.amount ?? 0
  );
  const openedMeal = meal.find((meal) => meal.idMeal === id);
  function inc() {
    if (amount === 0) {
      dispatch(addItem(openedMeal));
    }
    dispatch(increaseAmount(openedMeal.idMeal));
  }

  function dec() {
    if (amount === 0) {
      dispatch(deleteItem(openedMeal.idMeal));
      return null;
    }
    dispatch(decreaseAmount(openedMeal.idMeal));
  }
  return (
    <div className="text-2xl mx-auto  my-5 p-auto">
      <NavLink to="/menu">
        <Button type="menu">&larr; MENU</Button>
      </NavLink>
      <button onClick={dec} className={`${baseButtonMeal} px-9`}>
        -
      </button>

      <span className="p-3 lg:mx-2 rounded-lg text-3xl mx-6 ">{amount}</span>
      <button onClick={inc} className={`${baseButtonMeal} px-[31px]`}>
        +
      </button>
    </div>
  );
}

export default Package;
