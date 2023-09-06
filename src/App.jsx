import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Waiting from "./pages/Waiting";
import Menu from "./pages/Menu";
import Meal from "./pages/Meal";
import AppLayout from "./ui/AppLayout";
import Error from "./ui/Error";
import Confirmed from "./pages/Confirmed";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/menu", element: <Menu /> },
      { path: "/confirm", element: <Confirmed /> },
      { path: "/waiting", element: <Waiting /> },
      { path: "/meal/:id", element: <Meal /> },
      { path: "*", element: <Error /> },
    ],
  },
]);
function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
