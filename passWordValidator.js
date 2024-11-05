function validatePassword(password) {
    

    return password.length >= 8 && /\d/.test(password) && /[a-z]/.test(password);
}
