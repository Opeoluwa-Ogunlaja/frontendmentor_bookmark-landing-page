const handleInputChange = (e, parent) => {
    let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (e.target.value.match(validRegex)) {
        parent.setAttribute('aria-errormessage', 'false');
        return;
    }

    parent.setAttribute('aria-errormessage', 'true');
    return true;
}

const emailChecker = () => {
    const input = document.getElementById('email-field');
    input.addEventListener('input', (e) => handleInputChange(e, input.parentElement));
}

export default emailChecker;