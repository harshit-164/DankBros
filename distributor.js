// distributor.js (Handles food distribution form submission)
document.addEventListener("DOMContentLoaded", function () {
    const foodForm = document.getElementById("food-form");

    foodForm.addEventListener("submit", function (event) {
        event.preventDefault();
        
        const foodName = document.getElementById("food-name").value.trim();
        const quantity = document.getElementById("quantity").value.trim();
        
        if (foodName !== "" && quantity !== "") {
            localStorage.setItem("foodName", foodName);
            localStorage.setItem("quantity", quantity);
            
            // Redirect after storing data
            window.location.href = "distributor2.html";
        } else {
            alert("Please fill in all fields.");
        }
    });
});

// distributor2.js (Handles pickup location submission)
document.addEventListener("DOMContentLoaded", function () {
    const pickupForm = document.getElementById("pickup-form");

    pickupForm.addEventListener("submit", function (event) {
        event.preventDefault();
        
        const pickupLocation = document.getElementById("pickup-location").value.trim();
        const address = document.getElementById("address").value.trim();
        
        if (pickupLocation !== "" && address !== "") {
            localStorage.setItem("pickupLocation", pickupLocation);
            localStorage.setItem("address", address);
            
            // Redirect after storing data
            window.location.href = "confirmation.html";
        } else {
            alert("Please fill in all fields.");
        }
    });
});