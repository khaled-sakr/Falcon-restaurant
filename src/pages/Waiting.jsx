import { NavLink } from "react-router-dom";
import Button from "../ui/Button";
import {
  clearItemsCart,
  getTotalPrice,
  getTotalTime,
} from "../features/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { clearDataUser } from "../features/userSlice";

function Waiting() {
  const table = useSelector((state) => state.user.table);
  const user = useSelector((state) => state.user.userName);
  const dispatch = useDispatch();
  const totalPrice = useSelector(getTotalPrice);
  const totalTime = useSelector(getTotalTime);
  function reset() {
    dispatch(clearDataUser());
    dispatch(clearItemsCart());
  }
  return (
    <div className=" w-100 m-auto mx-auto flex flex-col text-center">
      <div className="text-xl sm:text-3xl text-stone-100 w-96">
        Ok {user} Your Will Receive Your Order on Table {table} on
        <div className="text-xl sm:text-3xl text-amber-300 mt-5">
          {totalTime} MINUTES
        </div>
        <div className="text-2xl sm:text-4xl text-amber-300 mt-5">
          Inshallah
        </div>
      </div>
      <div className=" my-9 load w-24 h-24 sm:w-32 sm:h-32 md:w-52 md:h-52 " />
      <div className="text-2xl sm:text-3xl text-amber-600 mt-5">
        Total Price : {totalPrice} $
      </div>
      <div className="sm:text-xl text-base text-yellow-400 ">
        please click here when order is arrived &rarr;
      </div>
      <NavLink to="/">
        <Button onReset={reset} type="arrived">
          Arrived
        </Button>
      </NavLink>
    </div>
  );
}

export default Waiting;
