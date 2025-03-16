// script.js

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("signupForm");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const confirmPasswordInput = document.getElementById("confirmPassword");
    const submitBtn = document.getElementById("submitBtn");

    // Validation functions
    function validateName() {
        const nameValue = nameInput.value.trim();
        const error = nameInput.nextElementSibling;
        if (nameValue.length < 3 || !/^[a-zA-Z\s]+$/.test(nameValue)) {
            error.textContent = "Name must be at least 3 characters and contain only letters.";
            return false;
        }
        error.textContent = "";
        return true;
    }

    function validateEmail() {
        const emailValue = emailInput.value.trim();
        const error = emailInput.nextElementSibling;
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailValue)) {
            error.textContent = "Enter a valid email.";
            return false;
        }
        error.textContent = "";
        return true;
    }

    function validatePassword() {
        const passwordValue = passwordInput.value;
        const error = passwordInput.nextElementSibling;
        const passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if (!passwordPattern.test(passwordValue)) {
            error.textContent = "Password must be 8+ chars, 1 uppercase, 1 number, 1 special char.";
            return false;
        }
        error.textContent = "";
        return true;
    }

    function validateConfirmPassword() {
        const confirmPasswordValue = confirmPasswordInput.value;
        const error = confirmPasswordInput.nextElementSibling;
        if (confirmPasswordValue !== passwordInput.value) {
            error.textContent = "Passwords do not match.";
            return false;
        }
        error.textContent = "";
        return true;
    }

    // Check if all fields are valid
    function checkFormValidity() {
        submitBtn.disabled = !(validateName() && validateEmail() && validatePassword() && validateConfirmPassword());
    }

    // Event Listeners for real-time validation
    nameInput.addEventListener("input", () => { validateName(); checkFormValidity(); });
    emailInput.addEventListener("input", () => { validateEmail(); checkFormValidity(); });
    passwordInput.addEventListener("input", () => { validatePassword(); checkFormValidity(); });
    confirmPasswordInput.addEventListener("input", () => { validateConfirmPassword(); checkFormValidity(); });

    // Prevent form submission if invalid
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        if (validateName() && validateEmail() && validatePassword() && validateConfirmPassword()) {
            alert("Form Submitted Successfully!");
            form.reset();
            checkFormValidity(); // Disable button again
        }
    });

    checkFormValidity(); // Initial check to disable button
});
