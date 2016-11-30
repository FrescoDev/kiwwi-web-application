import { routerReducer as routing } from 'react-router-redux'
import { combineReducers } from 'redux'
import {
    LOGIN_MODAL_TOGGLED,
    LOGIN_REQUEST_SUBMITTED,
    LOGOUT_REQUEST_SUBMITTED,
    LOGIN_SUCCESS_RECIEVED,
    LOGIN_FAILURE_RECIEVED,
    CREDENTIALS_ENTERED
} from '../actions/home/index'

// The initial application state
let initialState = {
    loginCredentials: {
        username: '',
        password: ''
    },
    loginPanelActive: false,
    loginFailure: false,
    awaitingResponse: false,
    loggedIn: false
}

// Takes care of changing the application state
function reducer(state = initialState, action) {
    switch (action.type) {
        case CREDENTIALS_ENTERED:
            return {...state, loginCredentials: action.loginForm, loginFailure: false }
        case LOGIN_REQUEST_SUBMITTED:
            return {...state, awaitingResponse: true }
        case LOGOUT_REQUEST_SUBMITTED:
            return {...state, loggedIn: false }
        case LOGIN_FAILURE_RECIEVED:
            return {...state, loginFailure: true, awaitingResponse: false }
        case LOGIN_SUCCESS_RECIEVED:
            return {...state, loggedIn: true, awaitingResponse: false, loginPanelActive: false  }
        case LOGIN_MODAL_TOGGLED:
            return {...state, loginPanelActive: !state.loginPanelActive }
        default:
            return state
    }
}

const rootReducer = combineReducers({
    routing,
    reducer
})

export default rootReducer