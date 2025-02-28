const initialState = 0;

const changeTheNumber = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state; // Return the current state for unknown action types
  }
};

export default changeTheNumber;



  