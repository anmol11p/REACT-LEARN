// Card.js
import React, { useEffect } from "react";
import styled from "./Style.module.css"; // Import the CSS module
import { DeleteApi } from "../../API/GetApi";

const Card = ({
  item,
  setData,
  data,
  setloading,
  updateData,
  setUpdatedata,
}) => {
  const handlebuttionclick = async (id) => {
    try {
      const deletedpost = await DeleteApi(id);

      if (deletedpost.status) {
        const updatedData = data.filter((currElem) => {
          return currElem.id !== id;
        });
        setData(updatedData);
        setloading(false);
      } else {
        console.log("failed to delete the post : ", deletedpost.status);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdatePost = (currElem) => {
    setUpdatedata(currElem);
  };

  return (
    <>
      <div className={styled.card}>
        <span>
          <h2>{item.id}.</h2>
          <h3 className={styled.cardTitle}>Title:{item.title}</h3>
        </span>
        <p className={styled.cardBody}>{item.body}</p>
        <div className="flex gap-2 my-2">
          <button
            className={styled.buttonEdit}
            onClick={() => handleUpdatePost(item)}
          >
            Edit
          </button>
          <button
            className={styled.buttonDelete}
            onClick={() => handlebuttionclick(item.id)}
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
