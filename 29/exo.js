/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
    const MAX_INT = 2147483647;
    const MIN_INT = -2147483648;

    if (dividend === MIN_INT && divisor === -1) {
        return MAX_INT;
    }

    const isNegative = (dividend < 0) !== (divisor < 0);

    let absDividend = Math.abs(dividend);
    let absDivisor = Math.abs(divisor);

    let result = 0;

    while (absDividend >= absDivisor) {
        let temp = absDivisor;
        let multiple = 1;

        while (absDividend >= (temp << 1) && (temp << 1) > 0) {
            temp <<= 1;
            multiple <<= 1;
        }

        absDividend -= temp;

        result += multiple;
    }

    // Apply the sign
    return isNegative ? -result : result;
};