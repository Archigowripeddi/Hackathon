document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const abhaNumber = document.getElementById('abhaNumber').value;
    const aadhaarNumber = document.getElementById('aadhaarNumber').value;
    const errorMessage = document.getElementById('error-message');

    // Simple validation for empty fields
    if (abhaNumber === '' || aadhaarNumber === '') {
        errorMessage.textContent = "Both fields are required.";
        return;
    }

    // Example validation (you can add more checks)
    if (abhaNumber.length < 10) {
        errorMessage.textContent = "ABHA Number or Address is too short.";
        return;
    }

    if (aadhaarNumber.length !== 12) {
        errorMessage.textContent = "Aadhaar Number must be 12 digits.";
        return;
    }

    // Simulate login process
    errorMessage.textContent = ""; // Clear error message
    alert("Login Successful with ABHA Number: " + abhaNumber);
});
