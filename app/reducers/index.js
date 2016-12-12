import { routerReducer as routing } from 'react-router-redux'
import { combineReducers } from 'redux'
import {
    LOGIN_MODAL_TOGGLED,
    LOGIN_REQUEST_SUBMITTED,
    LOGIN_SUCCESS_RECIEVED,
    LOGIN_FAILURE_RECIEVED,
    CREDENTIALS_ENTERED,
} from '../components/navbar/actions/index'

import {
    TAB_ACTIVATED,
} from '../components/dashbar/actions/index'

// The initial application state
let initialState = {
    loginCredentials: {
        username: '',
        password: ''
    },
    user : null,
    loginPanelActive: false,
    loginFailure: false,
    loggedIn: false,
    awaitingResponse: false,
    dashbarActiveTabIndex: '0'
}

// Takes care of changing the application state
function app(state = initialState, action) {
    switch (action.type) {
        case CREDENTIALS_ENTERED:
            return {...state, loginCredentials: action.loginForm, loginFailure: false }
        case LOGIN_REQUEST_SUBMITTED:
            return {...state, awaitingResponse: true, loginFailure: false }
        case LOGIN_FAILURE_RECIEVED:
            return {...state, loginFailure: true, awaitingResponse: false }
        case LOGIN_SUCCESS_RECIEVED:
            return {...state, loggedIn: true, awaitingResponse: false, loginPanelActive: false, dashbarActiveTabIndex: 0, user: action.payload}
        case LOGIN_MODAL_TOGGLED:
            return {...state, loginPanelActive: !state.loginPanelActive }
        case TAB_ACTIVATED:
            return {...state, dashbarActiveTabIndex: action.tabIndex }
        default:
            return state
    }
}

const rootReducer = combineReducers({
    routing,
    app
})

export default rootReducer