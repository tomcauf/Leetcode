/**
 * @param {number[]} digits
 * @return {number[]}
 */
var findEvenNumbers = function (digits) {
    const freqMap = new Map();
    for (const digit of digits) {
        freqMap.set(digit, (freqMap.get(digit) || 0) + 1);
    }

    const resultSet = new Set();

    const lastDigits = [0, 2, 4, 6, 8];
    for (const lastDigit of lastDigits) {
        if (!freqMap.has(lastDigit) || freqMap.get(lastDigit) === 0) {
            continue;
        }

        freqMap.set(lastDigit, freqMap.get(lastDigit) - 1);

        for (const firstDigit of Array.from(freqMap.keys())) {
            if (firstDigit === 0 || freqMap.get(firstDigit) === 0) {
                continue;
            }

            freqMap.set(firstDigit, freqMap.get(firstDigit) - 1);

            for (const middleDigit of Array.from(freqMap.keys())) {
                if (freqMap.get(middleDigit) === 0) {
                    continue;
                }

                const num = firstDigit * 100 + middleDigit * 10 + lastDigit;
                resultSet.add(num);
            }

            freqMap.set(firstDigit, freqMap.get(firstDigit) + 1);
        }

        freqMap.set(lastDigit, freqMap.get(lastDigit) + 1);
    }

    return Array.from(resultSet).sort((a, b) => a - b);
};