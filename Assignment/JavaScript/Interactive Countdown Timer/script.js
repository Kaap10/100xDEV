// Selecting elements
const timeInput = document.getElementById("timeInput");
const startButton = document.getElementById("startButton");
const resetButton = document.getElementById("resetButton");
const countdownDisplay = document.getElementById("countdownDisplay");

let countdown;
let timeRemaining = 0;

// Function to start the countdown
function startCountdown() {
    // Get time from input field
    let time = parseInt(timeInput.value);
    
    // Validate input
    if (isNaN(time) || time <= 0) {
        alert("Please enter a valid number of seconds.");
        return;
    }

    timeRemaining = time;
    updateDisplay(timeRemaining);

    // Disable input field and start button to prevent changes
    timeInput.disabled = true;
    startButton.disabled = true;

    // Start countdown
    countdown = setInterval(() => {
        timeRemaining--;
        updateDisplay(timeRemaining);

        if (timeRemaining <= 0) {
            clearInterval(countdown);
            alert("Time's up!");
            timeInput.disabled = false;
            startButton.disabled = false;
        }
    }, 1000);
}

// Function to reset the countdown
function resetCountdown() {
    clearInterval(countdown);
    timeInput.disabled = false;
    startButton.disabled = false;
    countdownDisplay.textContent = "00:00";
    timeInput.value = "";
}

// Function to update the display
function updateDisplay(seconds) {
    let minutes = Math.floor(seconds / 60);
    let secs = seconds % 60;
    countdownDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

// Event listeners
startButton.addEventListener("click", startCountdown);
resetButton.addEventListener("click", resetCountdown);
