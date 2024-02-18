const registrationForm = document.getElementById('registrationForm');

registrationForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Temporarily stop form submission

    // Get form values - Very basic, would need more validation normally
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Placeholder:  You'd usually send registration data to a backend
    console.log("Registration Info:", username, email, password); 
});

const switchToLoginBtn = document.getElementById('switchToLogin');
const switchToSignupBtn = document.getElementById('switchToSignup');
const registrationForm = document.getElementById('registrationForm'); 
const loginForm = document.getElementById('loginForm');

switchToLoginBtn.addEventListener('click', function() {
    registrationForm.style.display = 'none';  // Hide registration
    loginForm.style.display = 'block';   // Show login
});

switchToSignupBtn.addEventListener('click', function() {
    loginForm.style.display = 'none';    // Hide login
    registrationForm.style.display = 'block'; // Show registration
});
