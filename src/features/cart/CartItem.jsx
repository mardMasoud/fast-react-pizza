import { useDispatch, useSelector } from "react-redux";
import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";
import { decrease, deleteAtCart, increase } from "./cartSlice";

function CartItem({ item }) {
  const dispatch = useDispatch();
  function inCreaseQuantity() {
    dispatch(increase(id));
  }
  function deCreaseQuantity() {
    if (quantity > 1) dispatch(decrease(id));
  }
  function deleteItem() {
    dispatch(deleteAtCart(id));
  }
  const { id, name, quantity, totalPrice} = item;
  console.log(item);
  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between sm:gap-6">
        <p className="text-sm font-bold">
          {formatCurrency(totalPrice)}
        </p>
        <Button
          type="small"
          onClick={inCreaseQuantity}
          
        >
          +
        </Button>
        <Button
          type="small"
          onClick={deCreaseQuantity}
          
        >
          -
        </Button>
        <Button
          type="small"
          onClick={deleteItem}
          value={id}
        >
          Delete
        </Button>
      </div>
    </li>
  );
}

export default CartItem;
