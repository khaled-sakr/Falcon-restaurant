import { NavLink, useNavigate } from "react-router-dom";

function Error() {
  const navigate = useNavigate();
  return (
    <div className=" flex flex-col gap-4 text-5xl justify-center items-center text-red-800">
      <div>Page Not found</div>
      <NavLink to={navigate(-1)} className="text-blue-600 block text-3xl">
        &larr; go back
      </NavLink>
    </div>
  );
}

export default Error;
