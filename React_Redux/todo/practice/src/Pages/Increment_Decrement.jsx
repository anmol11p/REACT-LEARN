import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { decrementNumber, incrementNumber } from "../Redux/Action/Action";

const Increment_Decrement = () => {
    const data = useSelector((state)=>state.changeTheNumber)
    const dispatch=useDispatch()
  return (
    <div className="container container-counter">
    <div className="data">
    <span>{data}</span>
    <div className="counter-button">
    <button onClick={()=>dispatch(incrementNumber())}>increment</button>
    <button  onClick={()=>dispatch(decrementNumber())}>decrement</button>
    </div>
    </div>
   
    
  </div>
  )
}

export default Increment_Decrement