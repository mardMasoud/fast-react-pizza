import React from "react";
import Button from "../../ui/Button";
import { decrease, getCurrentQuantityById, increase } from "./cartSlice";
import { useDispatch, useSelector } from "react-redux";

export default function UpdateItemQuantity({ id }) {
    const curruntQuantityById = useSelector(getCurrentQuantityById(id));
    const dispatch = useDispatch();
    return (
        <div className="flex gap-1 items-center">
            <Button type="round" onClick={() => dispatch(decrease(id))}>
                -
            </Button>
            <span>{curruntQuantityById}</span>
            <Button type="round" onClick={() => dispatch(increase(id))}>
                +
            </Button>
        </div>
    );
}
