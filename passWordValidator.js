const PASSWORD_MIN_LENGTH = 8;

function validatePassword(password) {
    const isLenghtValid = password.length >= PASSWORD_MIN_LENGTH;
    const hasDigit = /\d/.test(password);
    const hasLetter = /[a-z]/.test(password);

    return isLenghtValid && hasDigit && hasLetter;
}
