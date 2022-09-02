import { USER_LOGIN } from "../type/reduxType";

let initialState = {
    isLogin: false,
}

export function userReducer(state = initialState, action){
    switch(action.type){
        case USER_LOGIN: {
            return{
                ...state,
                isLogin: true
            }
        }
        default: 
            return state
    }
}