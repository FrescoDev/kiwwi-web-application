export const TAB_ACTIVATED = 'TAB_ACTIVATED';

/**
 * activates home tab
 */
export function ativateTab(tabIndex) {
    return {type: TAB_ACTIVATED, tabIndex}
}