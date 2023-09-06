var strongPasswordChecker = function(password) {
    const minLength = 6; 
    const maxLength = 20; 
    const maxRepeat = 2; 

    const repeatedChars = new RegExp(`(.)\\1{0,${maxRepeat}}(?=\\1{${maxRepeat}})`, 'g');
    const repeatedCharLengths = (password.match(repeatedChars) || []).map(s => s.length).sort((a, b) => b - a);

    let charsToRemove = password.length - maxLength;
    while (repeatedCharLengths.at(-1) <= charsToRemove) {
        charsToRemove -= repeatedCharLengths.pop();
    }

    const requiredChanges = Math.max(
        repeatedCharLengths.length, !/[a-z]/.test(password) + !/[A-Z]/.test(password) + !/[0-9]/.test(password));

    return Math.max(minLength - password.length, requiredChanges + Math.max(0, password.length - maxLength));
};
