export const addUserAction = (user) => {
  return { type: "ADD_USER", payload: user };
};
export const deleteUserAction = (id) => {
  return { type: "DELELTE_USER", payload: id };
};
export const updateUserAction = (user) => {
  return { type: "UPDATE_USER", payload: user };
};
