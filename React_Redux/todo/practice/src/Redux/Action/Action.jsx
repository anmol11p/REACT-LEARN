export const incrementNumber=()=>{
        return {
            type:"INCREMENT"
        }

}

export const decrementNumber=()=>{
    return {
        type:"DECREMENT"
    }

}

// TodoList

export const addTask=(data)=>{
   return{
    type:"ADD_TASK",
    payload : {
        id:new Date().getTime(),
        data:data,
    }
   } 
}

export const deleteTask=(id)=>{
    return{
     type:"DELETE_TASK",
        id
    } 
 }

 export const removeAll=()=>{
    return{
        type:"REMOVE_ALL"
    }
 }