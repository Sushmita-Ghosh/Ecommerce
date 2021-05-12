// The js file is for structing our actions(like user clicks etc) into proper redux actionss
// which contain type and payload

export const setCurrentUser = (user) => ({
  type: "SET_CURRENT_USER",
  payload: user,
});
