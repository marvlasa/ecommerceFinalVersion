function tokenReducer(state = "", action) {
  switch (action.type) {
    case "TOKEN":
      return action.payload.token;
    case "CLEAR_TOKEN":
      return "";
    default:
      return state;
  }
}

export default tokenReducer;
