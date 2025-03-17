// Function to change the main image
function changeImage(imageSrc) {
    document.getElementById('main-image').src = imageSrc;
}

// Function to toggle product details
function toggleDetails() {
    let details = document.getElementById('extra-details');
    if (details.classList.contains('hidden')) {
        details.classList.remove('hidden');
    } else {
        details.classList.add('hidden');
    }
}

// Function to update price based on selected size
function updatePrice() {
    let selectedPrice = document.getElementById('size').value;
    document.querySelector('.price').textContent = `$${selectedPrice}`;
}
