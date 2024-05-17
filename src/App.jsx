import {
  Router,
  RouterProvider,
  createBrowserRouter,
  useNavigation,
} from "react-router-dom";
import Home from "./ui/Home";
import AppLayout from "./ui/AppLayout";
import Menu from "./features/menu/Menu";
import Cart from "./features/cart/Cart";
import CreateOrder from "./features/order/CreateOrder";
import Order from "./features/order/Order";
import { Loader as LoadeMenu } from "./features/menu/Menu";
import { loader as orderLoader } from "./features/order/Order";
import Error from "./ui/Error";
import { action as orderAction } from "./features/order/CreateOrder";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,

    children: [
      {
        path: "menu",
        element: <Menu />,
        loader: LoadeMenu,
      },
      {
        path: "order/:orderId",
        element: <Order />,
        loader: orderLoader,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "order/new",
        element: <CreateOrder />,
        action: orderAction,
      },
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
