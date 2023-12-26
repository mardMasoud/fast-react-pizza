import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Error from "./ui/Error";
import Home from "./ui/Home";
import Menu, { loader as loaderMenu } from "./features/menu/Menu";
import Cart from "./features/cart/Cart";
import Order , { loader as loaderOrder } from "./features/order/Order";
import CreateOrder from "./features/order/CreateOrder";
import AppLayout from "./ui/AppLayout";
const router = createBrowserRouter([
    {
        errorElement: <Error />,
        element: <AppLayout />,
        children: [
            { path: "/menu", element: <Menu />, loader: loaderMenu, errorElement: <Error /> },
            { path: "/", element: <Home /> },

            { path: "/cart", element: <Cart /> },
            { path: "/order/:orderId", element: <Order  /> , loader: loaderOrder, errorElement: <Error />},
            { path: "/order/new", element: <CreateOrder /> },
        ],
    },
]);
function App() {
    return (
        <div>
            <RouterProvider router={router} />
        </div>
    );
}

export default App;
