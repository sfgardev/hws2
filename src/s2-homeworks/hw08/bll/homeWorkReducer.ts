import { UserType } from "../HW8";

type ActionType =
  | { type: "sort"; payload: "up" | "down" }
  | { type: "check"; payload: number };

export const homeWorkReducer = (
  state: UserType[],
  action: ActionType
): UserType[] => {
  // need to fix any
  switch (action.type) {
    case "sort":
      {
        const stateCopy = [...state];
        if (action.payload === "up") {
          return stateCopy.sort((a, b) => {
            if (a.name > b.name) {
              return 1;
            }
            return -1;
          });
          //   return stateCopy.sort((a, b) => a.name.localeCompare(b.name));
        }
        if (action.payload === "down")
          return stateCopy.sort((a, b) => b.name.localeCompare(a.name));
      }
      return state;
    case "check": {
      return state.filter((user) => user.age >= action.payload); // need to fix
    }
    default:
      return state;
  }
};
