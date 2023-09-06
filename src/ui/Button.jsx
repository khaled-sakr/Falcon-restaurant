import { useSelector } from "react-redux";

const base =
  "  text-center focus:ring-offset-1 focus:outline-0 focus-ring-stone-900 disabled:cursor-not-allowed  disabled:bg-stone-600 ";
const styles = {
  normal:
    base +
    "mx-3 px-5 py-2 mt-3 text-sm rounded-full bg-stone-700  hover:bg-stone-900 rounded-full text-white disabled:bg-stone-500",
  meals:
    base +
    "mx-3 px-5 m-2 py-3 px-28 bg-stone-700 hover:bg-amber-900 rounded-lg text-white",
  circle:
    base +
    "index-30 mx-2 px-10 py-2 sm:px-16 sm:py-2 bg-amber-700 hover:bg-amber-800 rounded-full top-10 text-white",
  timePrice:
    base +
    "mx-3 px-5 py-2 mt-3 text-amber-600 text-yellow-500  md:text-2xl text-md rounded-xl bg-stone-700 cursor-default text-white",
  submit:
    base +
    " sm:px-9 sm:py-2 px-2 sm:my-0 my-5 py-1 text-black rounded-full bg-amber-900  hover:bg-amber-400 rounded-full ",
  menu:
    base +
    "lg:mx-9 -mx-9 px-7 py-2  sm:py-3 bg-stone-700 hover:bg-stone-800  rounded-full text-white  ",
  edit:
    base +
    "bg-amber-300 border-b border-amber-800 mb-4 w-full block  rounded-full py-0 sm:py-2 sm:px-9 px-4  hover:bg-amber-400 mt-2",
  arrived:
    base +
    "bg-amber-700 my-5 rounded-full py-0 sm:py-2 sm:px-12 px-5  hover:bg-amber-800 mt-2",
  details:
    base +
    "px-5 m-auto py-1 max-w-96 min-w-fit text-2xl px-28 bg-amber-700 hover:bg-amber-800 rounded-t-lg text-white",
};

function Button({ children, type, onClickHome, userName, onReset }) {
  const name = useSelector((state) => state.user.userName);
  console.log(userName);
  function onClick() {
    if (userName) return onClickHome();
    if (type === "arrived") return onReset();
  }
  return (
    <button
      onClick={onClick}
      disabled={!name && !userName}
      className={styles[type]}
    >
      {children}
    </button>
  );
}

export default Button;
