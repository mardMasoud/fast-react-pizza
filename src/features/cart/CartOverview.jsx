import { Link } from "react-router-dom";
import { getSumCartPrice, getTotalCartPrice } from "./cartSlice";
import { useSelector } from "react-redux";

function CartOverview() {
  const totalCartQuantity = useSelector(getTotalCartPrice);
  const SumCartPrice = useSelector(getSumCartPrice);
  return (
    <div className="flex items-center justify-between bg-stone-800 px-4 py-4 text-sm uppercase text-stone-200 sm:px-6 md:text-base">
      <p className="space-x-4 font-semibold text-stone-300 sm:space-x-6">
        <span>{totalCartQuantity} pizzas</span>
        <span>{SumCartPrice}$</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
