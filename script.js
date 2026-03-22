document.addEventListener('DOMContentLoaded', () => {
    const cartBtn = document.getElementById('addToCart');

    cartBtn.addEventListener('click', () => {
        // Create a fake loading state
        cartBtn.innerText = "BOOKING REALITY...";
        cartBtn.style.opacity = "0.7";

        setTimeout(() => {
            alert("SUCCESS: The Book Booking Book has been added to your existential inventory.\n\nNote: Please check your doorstep in a different timeline. If Jasmine is still speaking with an accent, please vibrate your vocal cords at 440Hz.");
            cartBtn.innerText = "ALREADY BOOKED";
            cartBtn.disabled = true;
            cartBtn.style.backgroundColor = "#444";
            cartBtn.style.color = "#888";
        }, 1500);
    });
});
