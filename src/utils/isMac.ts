/**
 * Check if the device is a mac or not
 */

export function isMac(): boolean {
    return navigator && !!navigator.userAgent.match(/Mac OS/i);
}
