
import {
    LOGIN_USER, 
    REGISTER_USER
} from '../_actions/types';

export default function (state = {}, action) {
    switch (action.type) {
        case LOGIN_USER: //user_action.js의 payload를 loginSuccess에 넣어줌
            return {...state, loginSuccess: action.payload}
            break;
        case REGISTER_USER:
            return {...state, register: action.payload}
            break;
        default:
            return state;
    }
}