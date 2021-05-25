function cartReducer(state = [], action) {
  switch (action.type) {
    case "CART_ADD_ITEM":
      const itemObject = state.find((i) => i.id === action.payload.id);
      if (itemObject === undefined) {
        action.payload.quantity = 1;
        return [...state, action.payload];
      } else {
        const Index = state.indexOf(itemObject);
        state[Index].quantity += 1;
        return [...state];
      }

    default:
      return state;
  }
}

export default cartReducer;
