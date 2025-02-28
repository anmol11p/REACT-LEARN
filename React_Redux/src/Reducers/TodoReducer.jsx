const initialState = {
  list: [],
};

const TodoList = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TASK":
      const { id, data } = action.payload;
      
      const newTask={id:id,data:data};
      const newstate={
      list:state.list.concat(newTask),
    }
    return newstate;

    case "DELETE_TASK":
   const newlist=state.list.filter((elem)=>{
    return elem.id !== action.payload.id
   })    
   const newstate2={
        list:newlist
   }
   return newstate2;
    default:
      return state;
  }
};

export default TodoList;
