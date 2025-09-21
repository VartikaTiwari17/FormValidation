const form = document.getElementById('regForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');

form.addEventListener('submit', function(e){
    e.preventDefault();
    validateInputs();
});

function validateInputs() {
    const nameValue = nameInput.value.trim();
    const emailValue = emailInput.value.trim();
    const passwordValue = passwordInput.value.trim();
    const confirmPasswordValue = confirmPasswordInput.value.trim();

    // Name validation
    if(nameValue === ''){
        setError(nameInput, 'Name cannot be empty');
    } else {
        setSuccess(nameInput);
    }

    // Email validation
    if(emailValue === ''){
        setError(emailInput, 'Email cannot be empty');
    } else if(!isValidEmail(emailValue)){
        setError(emailInput, 'Email is not valid');
    } else {
        setSuccess(emailInput);
    }

    // Password validation
    if(passwordValue === ''){
        setError(passwordInput, 'Password cannot be empty');
    } else if(passwordValue.length < 6){
        setError(passwordInput, 'Password must be at least 6 characters');
    } else {
        setSuccess(passwordInput);
    }

    // Confirm password validation
    if(confirmPasswordValue === ''){
        setError(confirmPasswordInput, 'Confirm your password');
    } else if(confirmPasswordValue !== passwordValue){
        setError(confirmPasswordInput, 'Passwords do not match');
    } else {
        setSuccess(confirmPasswordInput);
    }
}

function setError(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    small.innerText = message;
    formControl.className = 'form-control error';
}

function setSuccess(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

function isValidEmail(email){
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
