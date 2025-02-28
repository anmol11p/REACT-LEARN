
export const add_to_cart=(Data)=>{
return{
    type:"ADD_TO_CART",
    payload:Data
}
}

export const delete_from_cart =(id)=>{
    return{
        type :"DELETE_FROM_CART",
        payload:id,
    }
}

