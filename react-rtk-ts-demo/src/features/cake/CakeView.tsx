import React, { useState } from "react";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { ordered, restocked } from "./cakeSlice";

export const CakeView = () => {
    const [value, setValue] = useState(1);
    const numberOfCakes = useAppSelector( state => state.cake.numberOfCakes );
    const dispatch = useAppDispatch();

    return (
        <div>
            <h2>Number of Cake - {numberOfCakes}</h2>
            <button onClick={() => dispatch(ordered())}>Order Cake</button>
            <input type="number" value={value} onChange={ evt => setValue(parseInt(evt.target.value))}/>
            <button onClick={() => dispatch(restocked(value))}>Restock Cake</button>
        </div>
    )
}