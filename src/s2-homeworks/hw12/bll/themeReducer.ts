const initState: InitStateType = {
  themeId: 1,
};

export const themeReducer = (
  state = initState,
  action: ChangeThemeIdActionType
): InitStateType => {
  // fix any
  switch (action.type) {
    // дописать
    case "SET_THEME_ID":
      return { ...state, themeId: action.id };
    default:
      return state;
  }
};

export const changeThemeId = (id: number): ChangeThemeIdActionType => ({
  type: "SET_THEME_ID",
  id,
}); // fix any

type InitStateType = {
  themeId: number;
};

type ChangeThemeIdActionType = { type: "SET_THEME_ID"; id: number };
// type ActionsType = ReturnType<typeof changeThemeId>
