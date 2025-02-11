document.addEventListener("DOMContentLoaded", function () {
    const foodList = document.getElementById("food-list");
    const foodQuantity = document.getElementById("food-quantity");
    const hotelName = document.getElementById("hotel-name");
    const hotelAddress = document.getElementById("hotel-address");
    const pickupPoint = document.getElementById("pickup-point");

    // Retrieve selected food from localStorage
    const selectedFood = JSON.parse(localStorage.getItem("selectedFood"));

    if (selectedFood && selectedFood.length > 0) {
        selectedFood.forEach(food => {
            const listItem = document.createElement("li");
            listItem.innerHTML = `<strong>${food.name}</strong> from ${food.outlet}`;
            foodList.appendChild(listItem);
        });

        // Display first selected food details (assuming same hotel & pickup point for all)
        foodQuantity.textContent = selectedFood.length + " items selected";
        hotelName.textContent = selectedFood[0].outlet;
        hotelAddress.textContent = "Address details to be provided at pickup"; // Modify as needed
        pickupPoint.textContent = "Common Pickup Point (Distributor's Choice)"; // Modify as needed
    } else {
        foodList.innerHTML = "<p>No food items selected.</p>";
    }

    // Confirm button action
    document.getElementById("confirm-btn").addEventListener("click", function () {
        alert("Your pickup has been confirmed! Please proceed to the pickup location.");
        localStorage.removeItem("selectedFood"); // Clear selection after confirmation
        window.location.href = "dashboard.html"; // Redirect back to dashboard
    });
});
