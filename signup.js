// signup.js (handles signup data storage)
document.addEventListener("DOMContentLoaded", function () {
    const signupForm = document.getElementById("signup-form");

    signupForm.addEventListener("submit", function (event) {
        event.preventDefault();
        
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        
        if (email && password) {
            localStorage.setItem("userEmail", email);
            localStorage.setItem("userPassword", password);
            alert("Signup successful! Please login.");
            window.location.href = "index.html"; // Redirect to login
        } else {
            alert("Please fill in all fields.");
        }
    });
});