// script.js
document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevents form submission if validation fails

    // Get input values
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();

    // Error fields
    let nameError = document.getElementById("nameError");
    let emailError = document.getElementById("emailError");
    let passwordError = document.getElementById("passwordError");

    // Clear previous errors
    nameError.innerText = "";
    emailError.innerText = "";
    passwordError.innerText = "";

    let isValid = true;

    // ✅ Name Validation (Only alphabets allowed)
    let namePattern = /^[a-zA-Z ]+$/;
    if (name === "") {
        nameError.innerText = "Name is required";
        isValid = false;
    } else if (!namePattern.test(name)) {
        nameError.innerText = "Name should contain only letters";
        isValid = false;
    }

    // ✅ Email Validation (Standard Email Format)
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "") {
        emailError.innerText = "Email is required";
        isValid = false;
    } else if (!emailPattern.test(email)) {
        emailError.innerText = "Invalid email format";
        isValid = false;
    }

    // ✅ Password Validation (At least 8 characters, one letter, one number, one special character)
    let passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (password === "") {
        passwordError.innerText = "Password is required";
        isValid = false;
    } else if (!passwordPattern.test(password)) {
        passwordError.innerText = "Password must be at least 8 characters long and include a letter, a number, and a special character";
        isValid = false;
    }

    // ✅ If all fields are valid, submit the form (for demonstration, we alert success)
    if (isValid) {
        alert("Form submitted successfully!");
        document.getElementById("registrationForm").reset();
    }
});
