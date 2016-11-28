/*
 * The reducer takes care of state changes in our app through actions
 */
import { routerReducer as routing } from 'react-router-redux'
import { combineReducers } from 'redux'
import {
    CHANGE_FORM,
    SET_AUTH,
    SENDING_REQUEST,
    REQUEST_ERROR,
    CLEAR_ERROR,
    TOGGLE_LOGIN
} from '../actions/constants'
import auth from '../utilities/authenticationHelpers'

// The initial application state
let initialState = {
    formState: {
        username: '',
        password: ''
    },
    error: '',
    currentlySending: false,
    displayLoginPanel: false,
    loggedIn: auth.loggedIn()
}

// Takes care of changing the application state
function reducer(state = initialState, action) {
    switch (action.type) {
        case CHANGE_FORM:
            return {...state, formState: action.newFormState }
        case SET_AUTH:
            return {...state, loggedIn: action.newAuthState }
        case SENDING_REQUEST:
            return {...state, currentlySending: action.sending }
        case REQUEST_ERROR:
            return {...state, error: action.error }
        case CLEAR_ERROR:
            return {...state, error: '' }
        case TOGGLE_LOGIN:
            return {...state, displayLoginPanel: !state.displayLoginPanel }
        default:
            return state
    }
}

const rootReducer = combineReducers({
    routing,
    reducer
})

export default rootReducer