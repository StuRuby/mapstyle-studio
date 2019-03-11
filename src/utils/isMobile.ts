/**
 * Checks if device is mobile
 */

export function isMobile(): boolean {
    return window.matchMedia && window.matchMedia('(max-width:640px)').matches;
}
