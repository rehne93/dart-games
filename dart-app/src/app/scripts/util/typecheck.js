/**
 * Returns whether the value is an integer or not
 * @param value
 * @returns {boolean} true for integer, false otherwise
 */
function isInteger(value) {
    return !isNaN(value) &&
        parseInt(Number(value)) === value &&
        !isNaN(parseInt(value, 10));
}

/**
 * Returns whether the value is an string or not
 * @param value
 * @returns {boolean} true for string, false otherwise
 */
function isString(value) {
    return (typeof value === 'string' || value instanceof String)
}