// Select elements
const openModalBtn = document.getElementById('openModalBtn');
const modalOverlay = document.getElementById('modalOverlay');
const closeModalBtn = document.querySelector('.close-btn');

// Function to open the modal
openModalBtn.addEventListener('click', () => {
    modalOverlay.classList.add('show');
});

// Function to close the modal
closeModalBtn.addEventListener('click', () => {
    modalOverlay.classList.remove('show');
});

// Close modal when clicking outside the modal box
modalOverlay.addEventListener('click', (event) => {
    if (event.target === modalOverlay) {
        modalOverlay.classList.remove('show');
    }
});
