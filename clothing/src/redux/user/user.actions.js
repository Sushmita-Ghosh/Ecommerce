// The js file is for structing our actions(like user clicks etc) into proper redux actionss
// which contain type and payload

import { UserActionTypes } from "./user.types";
export const setCurrentUser = (user) => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user,
});
