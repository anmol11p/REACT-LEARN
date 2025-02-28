const initialState = {
    list: [],
  };
  
  const todoOperation = (state = initialState, action) => {
    switch (action.type) {
      case "ADD_TASK":
        const { id, data } = action.payload;
        const newTask = {
          id: id, 
               data: data,
        };
  
        return {
          ...state,
          list: [...state.list, newTask],
             };
             case "DELETE_TASK":
           const newList=state.list.filter((elem)=>{
            return elem.id !== action.id;
           })
           return {
            ...state,
            list:newList,
               };
               case "REMOVE_ALL":
                return {
                    ...state,list:[]
                }
      default:
        return state;  
      }
  };
  
  export default todoOperation;
  