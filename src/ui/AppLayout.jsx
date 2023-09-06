import { Outlet } from "react-router-dom";
import Header from "./Header";

function AppLayout() {
  return (
    <div className="w-full min-h-screen max-h-full bg-fixed text-stone-200 grid grid-rows-[auto,_1fr] bg-image-outlay relative">
      <Header />
      <Outlet />
    </div>
  );
}

export default AppLayout;
