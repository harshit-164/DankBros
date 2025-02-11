document.addEventListener("DOMContentLoaded", function () {
    const foodItems = document.querySelectorAll(".food-item");
    const confirmButton = document.getElementById("confirm-btn");

    let selectedItems = [];

    // Add event listeners to select buttons
    foodItems.forEach(item => {
        const selectButton = item.querySelector("button");

        selectButton.addEventListener("click", function () {
            const foodName = item.querySelector("h3").textContent;
            const outlet = item.querySelector("p").textContent.replace("From: ", "");
            const imageSrc = item.querySelector("img").src;

            const selectedFood = {
                name: foodName,
                outlet: outlet,
                image: imageSrc
            };

            // Check if the item is already selected
            const isAlreadySelected = selectedItems.some(food => food.name === foodName);

            if (!isAlreadySelected) {
                selectedItems.push(selectedFood);
                alert(`${foodName} selected!`);
            } else {
                alert(`${foodName} is already selected.`);
            }
        });
    });

    // Confirm Selection and Redirect
    confirmButton.addEventListener("click", function () {
        if (selectedItems.length === 0) {
            alert("Please select at least one food item before confirming.");
        } else {
            // Store selected items in localStorage
            localStorage.setItem("selectedItems", JSON.stringify(selectedItems));

            // Redirect to confirmation page
            window.location.href = "confirmation.html";
        }
    });
});
