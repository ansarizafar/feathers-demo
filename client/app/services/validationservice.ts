export class ValidationService {

    static getValidatorErrorMessage(code: string) {
        let config = {
            'required': 'Required',
            'invalidCreditCard': 'Is invalid credit card number',
            'invalidEmailAddress': 'Invalid email address',
            'invalidLoginName': 'Login name must be 6 to 20 characters long, and can contain A-Z, a-z and 0-9.',
            'invalidPassword': 'Password must be 6 to 15 characters long, and contain at least 1 uppercase letter and 1 digit.'
        };
        return config[code];
    }

    static creditCardValidator(control) {
        // Visa, MasterCard, American Express, Diners Club, Discover, JCB
        if (control.value.match(/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/)) {
            return null;
        } else {
            return { 'invalidCreditCard': true };
        }
    }

    static emailValidator(control) {
        // RFC 2822 compliant regex
        if (control.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {
            return null;
        } else {
            return { 'invalidEmailAddress': true };
        }
    }

    static loginNameValidator(control) {
        // RFC 2822 compliant regex
        if (control.value.match(/^[a-zA-Z0-9]{6,20}$/)) {
            return null;
        } else {
            return { 'invalidLoginName': true };
        }
    }



    static passwordValidator(control) {
        // {6,100}           - Assert password is between 6 and 12 characters
        // (?=.*[0-9])       - Assert a string has at least one number
        if (control.value.match(/^(?=.*[A-Z])(?=.*[0-9])(?=.{6,15}$)/)) {
            return null;
        } else {
            return { 'invalidPassword': true };
        }
    }
}