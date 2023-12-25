import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./ui/Home";
import Menu from "./features/menu/Menu";
import Cart from "./features/cart/Cart";
import Order from "./features/order/Order";
import CreateOrder from "./features/order/CreateOrder";
import AppLayout from "./ui/AppLayout";
const router = createBrowserRouter([
    {
        element: <AppLayout />,
        children: [
            { path: "/", element: <Home /> },
            { path: "/menu", element: <Menu /> },
            { path: "/cart", element: <Cart /> },
            { path: "/order/:orderId", element: <Order /> },
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
