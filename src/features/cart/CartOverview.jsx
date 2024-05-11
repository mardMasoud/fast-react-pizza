import { Link } from "react-router-dom";

function CartOverview() {
  return (
    <div className="bg-stone-800 items-center	 flex justify-between text-sm md:text-lg p-4 text-stone-200 uppercase">
      <p className="text-stone-300 font-semibold sm:space-x-6 space-x-4">
        <span>23 pizzas</span>
        <span>$23.45</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
      {/* <Link to="/menu">Open menu &rarr;</Link> */}
    </div>
  );
}

export default CartOverview;
