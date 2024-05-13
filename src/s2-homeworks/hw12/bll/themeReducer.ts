

const initState = {
    themeId: 1,
}

type ThemeState = {
    themeId: number;
};

export const themeReducer = (state: ThemeState = initState, action: ActionType): ThemeState => {
    switch (action.type) {
        case 'SET_THEME_ID':
            return { ...state, themeId: action.id };
        default:
            return state;
    }
};

type  ChangeThemeId = {
    type:'SET_THEME_ID'
    id:number
}

type ActionType = ChangeThemeId

export const changeThemeId = (id: number):ChangeThemeId=> ({ type: 'SET_THEME_ID', id }) // fix any
