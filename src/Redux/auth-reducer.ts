const SET_USER_DATA = "SET-USER-DATA"

type AuthStateType = {
    id: null | number;
    email: null | string;
    login: null | string;
    isAuth:boolean;
}

const initialState:AuthStateType = {
    id:null,
    email: null,
    login: null,
    isAuth:false,
}

type AuthActionType = SetUserDataACType

type SetUserDataACType = ReturnType<typeof setUserAuthData>

export const setUserAuthData = (data:AuthStateType)=>{
    return {
        type: SET_USER_DATA,
        data:data
    }as const
}

export const authReducer = (state: AuthStateType = initialState, action: AuthActionType) => {
    switch(action.type){
        case SET_USER_DATA:
            return {...state, ...action.data, isAuth:true};
            default:
                return state;
}
}