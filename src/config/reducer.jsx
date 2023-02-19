const initialState = {
  users: [
    { id: 1, name: "mustapha", email: "musta@email.com" },
    { id: 2, name: "ali", email: "ali@email.com" },
    { id: 3, name: "omar", email: "omar@email.com" }
  ]
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_USER":
      return { ...state, users: [...state.users, action.payload] };

    case "UPDATE_USER":
      const { id, name, email } = action.payload;
      const user = state.users.find((ele) => ele.id === parseInt(id));
      if (user) {
        user.name = name;
        user.email = email;
      }
      return state;

    case "DELELTE_USER":
      return {
        ...state,
        users: [
          ...state.users.filter((ele) => ele.id !== parseInt(action.payload))
        ]
      };

    default:
      return state;
  }
};

export default reducer;
