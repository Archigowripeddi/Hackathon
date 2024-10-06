document.getElementById('updateForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent form submission

    // Get form data
    const aadhaar = document.getElementById('aadhaar').value;
    const abha = document.getElementById('abha').value;
    const name = document.getElementById('name').value;
    const dob = document.getElementById('dob').value;
    const address = document.getElementById('address').value;

    // Validate Aadhaar Number
    if (!validateAadhaar(aadhaar)) {
        alert("Invalid Aadhaar Number!");
        return;
    }

    // Create data object
    const data = {
        aadhaar,
        abha,
        name,
        dob,
        address
    };

    // Send update request (Simulating)
    updateProfile(data);
});

// Function to simulate API call for profile update
function updateProfile(data) {
    // Simulate delay for async operation (e.g., API call)
    setTimeout(() => {
        document.getElementById('result').textContent = `Profile updated successfully for ABHA Number: ${data.abha}`;
    }, 1000);
}

// Function to validate Aadhaar Number (Simple validation)
function validateAadhaar(aadhaar) {
    const aadhaarPattern = /^\d{12}$/;  // Aadhaar must be 12 digits
    return aadhaarPattern.test(aadhaar);
}
