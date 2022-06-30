import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { ordered, restocked } from "./iceCreamSlice";

export const IceCreamView = () => {
    const numberOfIceCreams = useSelector((state) =>  state.icecream.numberOfIceCreams);
    const dispatch = useDispatch();

    return (
        <div>
            <h2>Number of Ice-cream - {numberOfIceCreams}</h2>
            <button onClick={() => dispatch(ordered())}>Order Ice-cream</button>
            <button onClick={() => dispatch(restocked(3))}>Restock Ice-cream</button>
        </div>
    )
}