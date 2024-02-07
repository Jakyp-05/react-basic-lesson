// Validation.js
function Validation(values) {
    const errors = {};

    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

    if (values.name === "") {
        errors.name = "Name is Required!";
    }

    if (values.email === "") {
        errors.email = "Email is Required";
    } else if (!email_pattern.test(values.email)) {
        errors.email = "Email didn't match";
    }

    if (values.password === "") {
        errors.password = "Password is Required";
    } else if (values.password.length < 5) {
        errors.password = "Password didn't mutch"
    }

    return errors;
}

export default Validation;
