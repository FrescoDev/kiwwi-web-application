export const TAB_ACTIVATED = 'TAB_ACTIVATED';
export const SETTINGS_DRAWER_TOGGLED = 'SETTINGS_DRAWER_TOGGLED';
export const LOGOUT_REQUEST_SUBMITTED = 'LOGOUT_REQUEST_SUBMITTED'

/**
 * activates home tab
 */
export function ativateTab(tabIndex) {
    return {type: TAB_ACTIVATED, tabIndex}
}

/**
 * toggle settings drawer
 */
export function toggleSettingsDrawer() {
    return {type: SETTINGS_DRAWER_TOGGLED}
}

/**
 * Unauthenticates user
 */
export function logout() {
    return {type: LOGOUT_REQUEST_SUBMITTED}
}