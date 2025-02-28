import React, { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { MdDeleteForever } from "react-icons/md";
import { addTask, deleteTask, removeAll } from "../Redux/Action/Action";
import { useDispatch, useSelector } from "react-redux";
import Alert from "./Alert";

const Todo = () => {
    const dispatch =useDispatch();
    const [inputValue,setInputValue]=useState("")
        const list =useSelector((state)=>state.todoOperation.list)
    console.log(inputValue);
    
   const handleTaskAdd=()=>{
    if (inputValue.length<1) {
        setInputValue("");
        return;
    }
       const taskExist= list.some((elem)=>{
        return inputValue===elem.data;
       })
    if (taskExist) {
        setInputValue("");
       
        return ;
    }
    dispatch(addTask(inputValue))
    setInputValue("");
    }
  return (
    <div className="container todo-container">
      <div className="userInput">
        <input type="text" value={inputValue} onChange={(e)=>setInputValue(e.target.value)} />
        <button>
          <IoMdAdd onClick={()=>handleTaskAdd()} />
        </button>
      </div>

      <ul className="data">
        {list.map((currElem)=>{
            return  <li key={currElem.id}>
            <span>{currElem.data}</span>
            <span className="icon" onClick={()=>dispatch(deleteTask(currElem.id))}>
              <MdDeleteForever />
            </span>
          </li>
        })}
       { list.length>=2 && <button onClick={()=>dispatch(removeAll())}> remove all </button>}
      </ul>
    </div>
  );
};

export default Todo;
