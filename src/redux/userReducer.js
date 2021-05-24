function userReducer(state = [], action) {
  switch (action.type) {
    case "USER":
      return {
        name: action.payload.name,
        lastName: action.payload.lastName,
        email: action.payload.email,
        address: action.payload.address,
        phone: action.payload.phone,
      };
    case "CLEAR_USER_DATA":
      return [];
    default:
      return state;
  }
}

export default userReducer;
