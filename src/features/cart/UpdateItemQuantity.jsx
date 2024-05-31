import React from "react";
import Button from "../../ui/Button";
import { getCurrentQuantityById } from "./cartSlice";
import { useSelector } from "react-redux";

export default function UpdateItemQuantity({ id }) {
  const curruntQuantityById = useSelector(getCurrentQuantityById(id));
  return (
    <div className="flex gap-1 items-center">
      <Button type="round">-</Button>
      <span>{curruntQuantityById}</span>
      <Button type="round">+</Button>
    </div>
  );
}
