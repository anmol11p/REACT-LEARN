const initialState = {
  item: [],
};

const ShoppingReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state, // This copies everything from the current state (which can include objects and arrays)
        item: [...state.item, action.payload], // This updates the item array
      };
      case "DELETE_FROM_CART":
        const newlist= state.item.filter((currelem)=>{
            return action.payload !== currelem.id
        })
            return {
                ...state,
                item:newlist
            }
        
    default:
      return state;
  }
};
export default ShoppingReducer;
