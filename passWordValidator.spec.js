const { describe } = require('yargs');
const { validatePassword } = require('./passwordValidator');

describe('Password Validator', () => {
    test("Le mot de passe donné contient au moins 8 caractères.", () => {
        const passwordTest = "password1";
        expect(validatePassword(passwordTest)).toBe(true);
    });
    
    test("Le mot de passe ne contient pas de chiffre.", () => {
        const passwordTest = "abcdefg"; 
        expect(validatePassword(passwordTest)).toBe(false);
    });

    test("Le mot de passe ne contient pas de lettre.", () => {
        const passwordTest1 = "123456789";
        expect(validatePassword(passwordTest1)).toBe(false);
    })
});
