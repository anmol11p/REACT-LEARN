import axios from "axios";

const API = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export const getAPI = () => {
  return API.get("/posts");
};

export const DeleteApi = (id) => {
  return API.delete(`/posts/${id}`);
};

export const addPost = (post) => {
  return API.post(`/posts`,post);
};

export const updatePost=(id,post)=>{
    return API.patch(`/posts/${id}`,post)
}
