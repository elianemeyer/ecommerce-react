import React, {useState} from 'react';

import "./itemCounter.css";

export default function ItemCounter({ stock, initial}) {
    const [count, setCount] = useState(initial);

    function handleSubstract() {
        if (count > 1) setCount(count - 1);
    } 

    function handleAdd() {
        if (count < stock) setCount(Number(count) + 1);
    } 

    return (
        <div>
            <button onClick={handleSubstract}>-</button>
            <strong> {count} </strong>
            <button onClick={handleAdd}>+</button>
        </div>
    );
}