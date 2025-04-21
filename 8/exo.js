/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
    let i = 0;
    while (i < s.length && s[i] === ' ') {
        i++;
    }

    let sign = 1;
    if (i < s.length && (s[i] === '+' || s[i] === '-')) {
        sign = s[i] === '+' ? 1 : -1;
        i++;
    }

    let result = 0;
    const maxInt = Math.pow(2, 31) - 1;
    const minInt = -Math.pow(2, 31);

    while (i < s.length && /^\d$/.test(s[i])) {
        const digit = parseInt(s[i]);

        if (result > Math.floor(maxInt / 10) ||
            (result === Math.floor(maxInt / 10) && digit > maxInt % 10)) {
            return sign === 1 ? maxInt : minInt;
        }

        if (result < Math.ceil(minInt / 10) ||
            (result === Math.ceil(minInt / 10) && digit > Math.abs(minInt % 10))) {
            return sign === 1 ? maxInt : minInt;
        }

        result = result * 10 + digit;
        i++;
    }

    return sign * result;
};