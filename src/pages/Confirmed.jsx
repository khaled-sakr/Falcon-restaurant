import { NavLink } from "react-router-dom";
import Button from "../ui/Button";
import CartItem from "../ui/CartItem";
import { useSelector } from "react-redux";
import { getTotalPrice, getTotalTime } from "../features/cartSlice";

// const cart=meals.
function Confirmed() {
  const cart = useSelector((state) => state.cart.cart);

  const totalPrice = useSelector(getTotalPrice);
  const totalTime = useSelector(getTotalTime);

  console.log(cart);
  return (
    <ul className=" font-semibold text-stone-800 my-10  mx-auto w-9/12  min-h-[70vh] h-fit  border-amber-900 border-4 grid grid-rows-[1fr,auto]">
      <div className="flex gap-4 flex-col my-12 mx-12 p-3 specialGround2">
        {cart.length === 0 ? (
          <div className="text-4xl m-auto max-w-sm">
            Empty, Go To Menu
            <NavLink
              to="/menu"
              className="border-2 max-w-60 rounded-lg block text-center bg-slate-500 hover:bg-slate-700 mx-auto my-9  "
            >
              &larr;
            </NavLink>
          </div>
        ) : (
          <>
            <NavLink to={`/menu`} className=" blocksm:text-lg text-sm -4">
              <Button type="edit">Edit Order</Button>
            </NavLink>
            {cart.map((item) => (
              <CartItem item={item} />
            ))}
          </>
        )}
      </div>

      {/* ////////////////////////////*/}

      <div className="flex flex-col text-center sm:text-left sm:flex-row justify-between bg-amber-800 p-3 my-auto">
        <span className="pt-2 font-semibold sm:font-bold">
          Total Cost : {totalPrice} $
        </span>
        <span className="pt-2 font-semibold sm:font-bold">
          Total Time : {totalTime} min
        </span>

        <span>
          <NavLink to="/waiting">
            <Button type="submit">SUBMIT</Button>
          </NavLink>
        </span>
      </div>
    </ul>
  );
}

export default Confirmed;
