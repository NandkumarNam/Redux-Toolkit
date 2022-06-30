import React from "react";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { ordered, restocked } from "./iceCreamSlice";

export const IceCreamView = () => {
    const numberOfIceCreams = useAppSelector((state) =>  state.icecream.numberOfIceCreams);
    const dispatch = useAppDispatch();

    return (
        <div>
            <h2>Number of Ice-cream - {numberOfIceCreams}</h2>
            <button onClick={() => dispatch(ordered())}>Order Ice-cream</button>
            <button onClick={() => dispatch(restocked(3))}>Restock Ice-cream</button>
        </div>
    )
}