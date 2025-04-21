/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    const isNegative = x < 0;
    x = Math.abs(x);

    let reversed = 0;
    while (x > 0) {
        const digit = x % 10;
        if (reversed > Math.floor((Math.pow(2, 31) - 1) / 10)) {
            return 0;
        }

        reversed = reversed * 10 + digit;

        x = Math.floor(x / 10);
    }
    return isNegative ? -reversed : reversed;
};