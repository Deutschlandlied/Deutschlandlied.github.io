// ... Code from registration ...

const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', function(event) {
    event.preventDefault(); 

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Placeholder: Very simple login check, EXTREMELY insecure in the real world 
    let registeredUsers = getRegisteredUsers(); // Simulates getting data
    const userExists = registeredUsers.some(user => user.username === username && user.password === password);

    if (userExists) {
        console.log("Login Successful!");
        // In reality, you might show a success message or redirect to a members area
    } else {
        console.log("Invalid username or password");
        // Maybe display an error message on the page
    }
});

// Placeholder function - How you store registration data is up to you
function getRegisteredUsers() {
   // In a simple scenario, we'd likely use 'localStorage' but this is very insecure.
   // A real system would fetch this from a database.
   return []; 
} 

// ... Your existing registration and login code ...

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

// ... Existing code ...

// ... (Button and form references like before) ...

switchToLoginBtn.addEventListener('click', function() {
    registrationForm.classList.remove('active'); 
    loginForm.classList.add('active'); 
});

switchToSignupBtn.addEventListener('click', function() {
    loginForm.classList.remove('active');  
    registrationForm.classList.add('active');  
});

