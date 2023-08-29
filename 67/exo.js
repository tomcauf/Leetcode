/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
    return (BigInt(`0b${a}`) + BigInt(`0b${b}`)).toString(2)
}

// Tests :
console.log(addBinary("11", "1")); // "100"
console.log(addBinary("1010", "1011")); // "10101"