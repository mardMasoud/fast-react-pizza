import { useDispatch, useSelector } from "react-redux";
import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";
import { decrease, increase } from "./cartSlice";

function CartItem({ item }) {
  const dispatch = useDispatch()
  function inCreaseQuantity() {
    console.log(id)
    dispatch(increase(id));
  }
  function deCreaseQuantity(){
    console.log(id)
    if(quantity>1)
    dispatch(decrease(id));
  }
  const { id, name, quantity, totalPrice } = item;
  // console.log(unitPrice);
  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between sm:gap-6">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
        <Button
                type="small"
                onClick={inCreaseQuantity}
                bgColor="bg-green-500"
                ringColor="ring-green-500"
              >
                +
              </Button>
              <Button
                type="small"
                onClick={deCreaseQuantity}
                bgColor="bg-red-500"
                ringColor="ring-red-500"
              >
                -
              </Button>
        <Button
          type="small"
          handleClick="deletAtCart"
          value={id}
        >
          Delete
        </Button>
      </div>
    </li>
  );
}

export default CartItem;
