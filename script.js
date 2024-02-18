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
