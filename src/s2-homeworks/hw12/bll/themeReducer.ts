const initState: ThemeReducerType = {
    themeId: 1,
}
export type ThemeReducerType = {
    themeId: number
}

export const themeReducer = (state = initState, action: ActionType): ThemeReducerType => { // fix any
    switch (action.type) {
        // дописать
        case "SET_THEME_ID":
            return {
                ...state,
                themeId: action.id
            }
        default:
            return state
    }
}

type ActionType = ChangeThemeIdType

export type ChangeThemeIdType = ReturnType<typeof changeThemeId>
export const changeThemeId = (id: number) => ({type: 'SET_THEME_ID', id} as const) // fix any
