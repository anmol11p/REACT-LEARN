import React, { useState, useEffect } from "react";
import { addPost, updatePost } from "./../../API/GetApi";

const Input = ({ data, setData, setUpdatedata, updateData }) => {
  const [addData, setaddData] = useState({
    title: "",
    body: "",
  });

  const handleOnchange = (e) => {
    const { value, name } = e.target;
    setaddData((prevPost) => ({
      ...prevPost,
      [name]: value,
    }));
  };
  const isEmpty = Object.keys(updateData).length === 0;
  // console.log(isEmpty);

  useEffect(() => {
    updateData &&
      setaddData({
        title: updateData.title || "",
        body: updateData.body || "",
      });
  }, [updateData]);
  // console.log(updateData);

  const addPostData = async () => {
    try {
      const res = await addPost(addData);
      console.log(res);

      if (res.status === 201) {
        // Append new post to the existing data
        setData([...data, res.data]);
        // Reset form fields
        setaddData({ title: "", body: "" });
      }
    } catch (error) {
      console.log(error);
    }
  };
  const UpdatePostData = async () => {
    try {
      const res = await updatePost(updateData.id, addData);
      console.log(res);

      if (res.status === 200) {
        setData((prev) => {
          return prev.map((currElem) => {
            return currElem.id === res.data.id ? res.data : currElem;
          });
        });
        setUpdatedata({});
      } else {
        console.log("error something happens!!");
      }
    } catch (error) {}
  };
  const handleformsubmit = (e) => {
    e.preventDefault();
    const action = e.nativeEvent.submitter.value;

    if (action === "Add") {
      addPostData();
    } else if (action === "Edit") {
      UpdatePostData();
    }
  };

  return (
    <div className="input flex flex-col md:flex-row justify-center py-5">
      <form
        className="flex flex-col md:flex-row gap-4 bg-gray-700 px-5 py-3 rounded-md w-full max-w-3xl"
        onSubmit={handleformsubmit}
      >
        <label htmlFor="addtitle" className="flex-1">
          <input
            id="addtitle"
            type="text"
            placeholder="Add title"
            className="w-full p-2 rounded-md bg-white text-black border border-gray-600"
            name="title"
            value={addData.title}
            onChange={handleOnchange}
            required
          />
        </label>
        <label htmlFor="addPost" className="flex-1">
          <input
            id="addPost"
            type="text"
            name="body"
            value={addData.body}
            onChange={handleOnchange}
            placeholder="Add Post"
            className="w-full p-2 rounded-md bg-white text-black border border-gray-600"
            required
          />
        </label>
        <button
          style={{ boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)" }}
          className="bg-green-400 hover:bg-white hover:text-black px-4 py-2 rounded-md flex-shrink-0 mt-2 md:mt-0 hover:shadow-lg"
          type="submit"
          value={isEmpty ? "Add" : "Edit"}
        >
          {isEmpty ? "Add" : "Edit"}
        </button>
      </form>
    </div>
  );
};

export default Input;
