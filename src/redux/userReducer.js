function userReducer(state = [], action) {
  switch (action.type) {
    case "USER":
      return {
        firstName: action.payload.user.firstName,
        lastName: action.payload.user.lastName,
      };
    case "CLEAR_USER_DATA":
      return [];
    default:
      return state;
  }
}

export default userReducer;
