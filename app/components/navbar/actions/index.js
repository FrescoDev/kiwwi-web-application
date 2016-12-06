import {CALL_API} from 'redux-api-middleware';

export const LOGIN_MODAL_TOGGLED = 'LOGIN_MODAL_TOGGLED'
export const LOGIN_REQUEST_SUBMITTED = 'LOGIN_REQUEST_SUBMITTED'
export const LOGIN_SUCCESS_RECIEVED = 'LOGIN_SUCCESS_RECIEVED'
export const LOGIN_FAILURE_RECIEVED = 'LOGIN_FAILURE_RECIEVED'
export const CREDENTIALS_ENTERED = 'CREDENTIALS_ENTERED'

/**
 * Toggles login panel
 */
export function toggleLogin() {
    return {type: LOGIN_MODAL_TOGGLED}
}

/**
 * Sets the form state
 * @param  {object} loginForm          The new state of the form
 * @param  {string} loginForm.email    The new text of the email input field of the form
 * @param  {string} loginForm.password The new text of the password input field of the form
 */
export function enterCredentials(loginForm) {
    return {type: CREDENTIALS_ENTERED, loginForm}
}

/**
 * Makes a call to the {someApi} API to validate user credentials
 * @param  {object} userCredentials          The object containing username and password
 * @param  {string} userCredentials.email Username 
 * @param  {string} userCredentials.password Password
 */
export function fetchUserAuthenticationStatus(userCredentials) {
    return {
        [CALL_API]: {
            types: [
                LOGIN_REQUEST_SUBMITTED, LOGIN_SUCCESS_RECIEVED, LOGIN_FAILURE_RECIEVED
            ],
            method: 'GET',
            endpoint: `http://www.fakeresponse.com/api/?sleep=3`
        }
    }
}

/**
 * 
 * @param  {object} userCredentials          The object containing username and password
 * @param  {string} userCredentials.username Username 
 * @param  {string} userCredentials.password Password
 */
export function authenticateUser(userCredentials) {
    return dispatch => {
        return dispatch(fetchUserAuthenticationStatus(userCredentials))
    }
}