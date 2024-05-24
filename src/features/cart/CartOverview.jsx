import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function CartOverview() {
  const cart = useSelector((state) => state.cart.cart);
  console.log(cart);
  const sumCart = cart.reduce((a, b) => a + b.unitPrice, 0);
  return (
    <div className="flex items-center justify-between bg-stone-800 px-4 py-4 text-sm uppercase text-stone-200 sm:px-6 md:text-base">
      <p className="space-x-4 font-semibold text-stone-300 sm:space-x-6">
        <span>{cart.length}pizzas</span>
        <span>${sumCart}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
