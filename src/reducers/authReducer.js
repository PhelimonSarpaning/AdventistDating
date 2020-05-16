import { LOGIN, SIGNUP, UPDATE_EMAIL,UPDATE_FIRSTNAME,
     UPDATE_LASTNAME, UPDATE_PASSWORD,
      CREATE_USER_FAIL,
      CREATE_USER_SUCCESS
 } from "../actions/types";

export const user = (state = {}, action) => {
    switch (action.type) {
        case LOGIN:
            return action.payload
        case SIGNUP:
            return action.payload
        case UPDATE_EMAIL:
            return { ...state, email: action.payload }
        case UPDATE_PASSWORD:
            return { ...state, password: action.payload }
        case UPDATE_FIRSTNAME:
            return { ...state, firstname: action.payload }
        case UPDATE_LASTNAME:
            return { ...state, lastname: action.payload }
        case CREATE_USER_FAIL:
            return { ...state, authMsg: "Your email address does not exist" }
        case CREATE_USER_SUCCESS:
            return { ...state, authMsg: action.payload }
        default:
            return state
    }
}