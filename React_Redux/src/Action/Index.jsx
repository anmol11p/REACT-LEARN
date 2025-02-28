// src/Action.js
export const incNumber = () => {
    return {
        type: "INCREMENT",
    };
};

export const decNumber = () => {
    return {
        type: "DECREMENT",
    };
};



export const addTask=(data)=>{

    return{
        type:"ADD_TASK",
        payload:{
            id:new Date().getTime(),
            data:data,
        }
    }
}

export const deleteTask=(id)=>{

    return{
        type:"DELETE_TASK",
        payload:{
            id:id
        }
    }
}