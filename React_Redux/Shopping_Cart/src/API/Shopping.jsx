import axios from "axios";

const api=axios.create({
    baseURL:"https://fakestoreapi.com"
})

export const getCardInformation=()=>{
   return  api.get("/products")
}
