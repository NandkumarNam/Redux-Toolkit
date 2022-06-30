import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { ordered, restocked } from "./cakeSlice";

export const CakeView = () => {
    const [value, setValue] = useState(1);
    const numberOfCakes = useSelector( state => state.cake.numberOfCakes );
    const dispatch = useDispatch();

    return (
        <div>
            <h2>Number of Cake - {numberOfCakes}</h2>
            <button onClick={() => dispatch(ordered())}>Order Cake</button>
            <input type="number" value={value} onChange={ evt => setValue(parseInt(evt.target.value))}/>
            <button onClick={() => dispatch(restocked(value))}>Restock Cake</button>
        </div>
    )
}