function cartReducer(state = [], action) {
  switch (action.type) {
    case "CART_ADD_ITEM":
      const itemObject = state.find((i) => i.id === action.payload.id);
      if (itemObject === undefined) {
        action.payload.quantity = 1;
        return [...state, action.payload];
      } else {
        itemObject.quantity += 1;
        return [...state];
      }

    case "REMOVE_ITEM_FROM_CART":
      const itemRemoveObject = state.find((i) => i.id === action.payload.id);
      if (itemRemoveObject.quantity > 1) {
        itemRemoveObject.quantity -= 1;
        return [...state];
      } else {
        const newState = state.filter((i) => i.id !== action.payload.id);
        return newState;
      }

    case "RESET_CART":
      return [];

    default:
      return state;
  }
}

export default cartReducer;
