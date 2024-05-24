import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";
import { addToCart, increase } from "../cart/cartSlice";

function MenuItem({ pizza, quantity }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  console.log(typeof quantity);
  const dispatch = useDispatch();

  function handleClick() {
    const newItem = {
      id,
      name,
      unitPrice,
      quantity,
      totalPrice: unitPrice * quantity,
    };
    console.log(newItem);
    dispatch(addToCart(newItem));
  }
  function inCreaseQuantity() {
    dispatch(increase(id));
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
            <div className="space-x-1">
              <Button
                type="small"
                onClick={inCreaseQuantity}
                color="bg-green-500"
              >
                +
              </Button>
              <Button
                type="small"
                onClick={handleClick}
                color="bg-red-600"
              >
                -
              </Button>
              <Button
                type="small"
                onClick={handleClick}
              >
                Add to cart
              </Button>
            </div>
          )}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
