
import {
    LOGIN_USER, 
    REGISTER_USER,
    AUTH_USER
} from '../_actions/types';

export default function (state = {}, action) {
    switch (action.type) {
        case LOGIN_USER: //user_action.js의 payload를 loginSuccess에 넣어줌
            return {...state, loginSuccess: action.payload}
            break;
        case REGISTER_USER:
            return {...state, register: action.payload}
            break;
        case AUTH_USER:
            //payload에 서버에서 가져온 유저의 모든 정보가 담겨있음
           return {...state, userData: action.payload}
           break;
        default:
            return state;
    }
}