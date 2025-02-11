document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");
    const feedbackBtn = document.getElementById("feedback-btn");
    const feedbackModal = document.getElementById("feedback-modal");
    const closeModal = document.querySelector(".close");
    const submitFeedback = document.getElementById("submit-feedback");

    // Role Selection Logic
    const roleBoxes = document.querySelectorAll(".role-box");
    const roleInputs = document.querySelectorAll(".role-selection input");

    roleBoxes.forEach((box, index) => {
        box.addEventListener("click", function () {
            // Remove the 'selected' class from all boxes
            roleBoxes.forEach(b => b.classList.remove("selected"));
            
            // Add the 'selected' class to the clicked box
            box.classList.add("selected");

            // Update the corresponding radio input selection
            roleInputs[index].checked = true;
        });
    });

    // Handle Login
    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();
        alert("Login successful!");
        window.location.href = "dashboard.html"; // Redirect after login
    });

    // Show Feedback Modal
    feedbackBtn.addEventListener("click", function () {
        feedbackModal.style.display = "block";
    });

    // Close Feedback Modal
    closeModal.addEventListener("click", function () {
        feedbackModal.style.display = "none";
    });

    // Submit Feedback
    submitFeedback.addEventListener("click", function () {
        let feedbackText = document.getElementById("feedback").value;
        if (feedbackText) {
            alert("Thanks for your feedback!");
            feedbackModal.style.display = "none";
        } else {
            alert("Please enter feedback before submitting.");
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();
        
        const role = document.querySelector("input[name='role']:checked").value;
        
        if (role === "distributor") {
            window.location.href = "distributor.html";
        } else {
            window.location.href = "dashboard.html";
        }
    });
});