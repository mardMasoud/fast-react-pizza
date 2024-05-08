import { Router, RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./ui/Home";
import AppLayout from "./ui/AppLayout";
import Menu from "./features/menu/Menu";
import Cart from "./features/cart/Cart";
import CreateOrder from "./features/order/CreateOrder";
import Order from "./features/order/Order";
import { Loader as LoadeMenu } from "./features/menu/Menu";
import{loader as orderLoader} from './features/order/Order'
const router = createBrowserRouter([
    {
        element: <AppLayout />,

        children: [
            {
                path: "menu",
                element: <Menu />,
                loader: LoadeMenu,
            },
            {
                path: "order/:orderId",
                element: <Order />,loader:orderLoader
            },
            {
                path: "cart",
                element: <Cart />,
            },
            {
                path: "order/new",
                element: <CreateOrder />,
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
