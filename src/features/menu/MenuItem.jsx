import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  return (
    <li className=" flex gap-4 pt-0.5  py-2">
      <img
        src={imageUrl}
        alt={name}
        className={`h-24 ${soldOut && "opacity-30"}`}
      />
      <div className="flex flex-col grow  ">
        <p className="font-bold">{name}</p>
        <p className="italic capitalize text-stone-500">
          {ingredients.join(", ")}
        </p>
        <div className="mt-auto flex items-center justify-between">
          {!soldOut ? (
            <p className="text-sm">{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="font-medium text-stone-500 text-sm uppercase">
              Sold out
            </p>
          )}
          <Button type="small">ADD TO CART</Button>
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
