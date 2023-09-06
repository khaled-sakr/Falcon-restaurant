import { NavLink } from "react-router-dom";

function Header() {
  // const [isBeeningOrder, setOrdering] = useState(true);
  return (
    <div className=" h-fit w-full flex   items-center  justify-between  border-b-[1px]  border-amber-900  ">
      <NavLink to="/" className="flex mx-2 md:ml-6 items-center ">
        <div className="text-amber-700 flex items-center text-lg font-medium sm:text-4xl sm:font-semibold ">
          <img
            className="w-20 h-15 sm:w-32 sm:h-20  p-1 border rounded-full border-transparent "
            src="../../public/egyptian_koshary_1376x774.webp"
            alt="egyptian_koshary"
          />
          KOSHARY FALCON
        </div>
      </NavLink>
      <NavLink
        to="./confirm"
        className=" font-semibold p-1 text-amber-400 border-2  border-stone-500 rounded-2xl  duration-500  lg:mr-12 mr-3  px-2 md:hover:px-8 cursor-pointer text-xs sm:text-2xl "
      >
        CONFIRM ORDER
      </NavLink>
    </div>
  );
}

export default Header;
