import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, deleteTask } from "../Action";
import { MdDeleteForever } from "react-icons/md";

const Todo = () => {
  const [InputValue, setiInputValue] = useState("");
  const dispatch = useDispatch();
  const list = useSelector((state) => state.TodoList.list);
  //   console.log(list);
  const handleSubmit = (e) => {
    e.preventDefault();
    const taskExists = list.some((task) => {
      return task.data === InputValue;
    });

    if (taskExists) {
      setiInputValue("");
      return;
    }
    if (InputValue.length < 1) {
      return;
    } else {
      dispatch(addTask(InputValue));
      setiInputValue("")
    }
  };
  return (
    <div className="conatiner">
      <section className="section-to-do-list">
        <div className="box">
          <form onSubmit={(e) => handleSubmit(e)}>
            <input
              type="text"
              value={InputValue}
              onChange={(e) => setiInputValue(e.target.value)}
            />
            <button type="submit">addTask</button>
          </form>
        </div>

        <div className="user-data">
          <ul>
            {list.map((elem) => {
              return (
                <li key={elem.id}>
                  <span> {elem.data} </span>

                  <button onClick={()=>dispatch(deleteTask(elem.id))} >
                    <MdDeleteForever/>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Todo;
