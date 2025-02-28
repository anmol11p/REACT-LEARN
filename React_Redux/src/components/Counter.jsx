import React from 'react'

import { useDispatch, useSelector } from "react-redux";
import { decNumber, incNumber } from "../Action";
const Counter = () => {
    const mystate = useSelector((state) => state.changeTheNumber);
    const dispatch = useDispatch();
  return (
    <section className="container">
    <div className="section-increment-decrement">
        <h2>Increment/Decrement counter</h2>
        <h3>Using React and Redux</h3>
        <div className="container-with-icons">
            <button onClick={() => dispatch(decNumber())}> - </button>
            <span className="data">{mystate}</span>
            <button onClick={() => dispatch(incNumber())}> + </button>
        </div>
    </div>
</section>
  )
}

export default Counter