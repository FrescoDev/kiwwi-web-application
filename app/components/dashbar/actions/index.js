export const TAB_ACTIVATED = 'HOME_TAB_ACTIVATED';

/**
 * activates home tab
 */
export function ativateTab(tabIndex) {
    return {type: TAB_ACTIVATED, tabIndex}
}