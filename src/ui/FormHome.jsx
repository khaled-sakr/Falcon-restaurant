import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Button from "./Button";
import { useState } from "react";
import { updateName, updateTable } from "../features/userSlice";

function FormHome() {
  const [userName, setUserName] = useState("");
  const [tableNum, setTableNum] = useState(1);
  const name = useSelector((state) => state.user.userName);
  const dispatch = useDispatch();
  function submit() {
    dispatch(updateName(userName));
    dispatch(updateTable(tableNum));
  }
  //   console.log(userName, tableNum);

  if (name) {
    return (
      <div className="sm:text-4xl text-xl text-amber-400">
        {name} Go To Menu ,
        <div className="text-amber-700 p-3">
          <NavLink to="/menu"> Please &rarr;</NavLink>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={submit}>
      <select
        placeholder=""
        value={tableNum}
        onChange={(e) => setTableNum(e.target.value)}
        className="  text-lg p-3 text-center rounded-2xl ml-5 mb-5 hover:bg-amber-600 bg-amber-500 text-amber-800 placeholder:text-amber-800 sm:text-xl focus:outline-0 duration-300 "
      >
        <option value={1}>Table 1</option>
        <option value={2}>Table 2</option>
        <option value={3}>Table 3</option>
        <option value={4}>Table 4</option>
        <option value={5}>Table 5</option>
        <option value={6}>Table 6</option>
        <option value={7}>Table 7</option>
        <option value={8}>Table 8</option>
        <option value={9}>Table 9</option>
      </select>

      <input
        className="text-lg p-3 text-center rounded-2xl ml-5 mb-5 bg-amber-500 text-amber-900 placeholder:text-amber-800 hover:bg-amber-600 sm:text-xl focus:outline-0 duration-300"
        placeholder="your name please"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <NavLink to="/menu" className=" disabled:bg-amber-200">
        <Button onClickHome={submit} userName={userName} type="normal">
          ORDER NOW &rarr;
        </Button>
      </NavLink>
    </form>
  );
}

export default FormHome;
