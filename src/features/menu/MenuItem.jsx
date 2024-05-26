import { useDispatch, useSelector } from "react-redux";
import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";
import { addToCart, increase } from "../cart/cartSlice";

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  //   let quantity;
  //  console.log(typeof unitPrice);
  function handleClick() {
    const newItem = {
      id,
      name,

      quantity: 1,
      unitPrice,
      totalPrice: unitPrice * 1,
    };
   
    console.log(cart.findIndex((index) => index.id === id));
    if (cart.findIndex((index) => index.id === id) !== -1)
      dispatch(increase(id));
    else dispatch(addToCart(newItem));
  }

  return (
    <li className="flex gap-4 py-2">
      <img
        src={imageUrl}
        alt={name}
        className={`h-24 ${soldOut ? "opacity-70 grayscale" : ""}`}
      />
      <div className="flex grow flex-col pt-0.5">
        <p className="font-medium">{name}</p>
        <p className="text-sm capitalize italic text-stone-500">
          {ingredients.join(", ")}
        </p>
        <div className="mt-auto flex items-center justify-between">
          {!soldOut ? (
            <p className="text-sm">{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="text-sm font-medium uppercase text-stone-500">
              Sold out
            </p>
          )}

          {soldOut ? null : (
            <Button
              type="small"
              onClick={handleClick}
            >
              Add to cart
            </Button>
          )}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
