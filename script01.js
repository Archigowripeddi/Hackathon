document.getElementById('abhaForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const aadhaar = document.getElementById('aadhaar').value;
    const mobile = document.getElementById('mobile').value;

    const payload = {
        aadhaar: aadhaar,
        mobile: mobile
    };

    // Mock Fetch request (replace this URL with the actual ABHA API URL)
    fetch('https://sandbox.abdm.gov.in/api/v1/abha/create', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    })
    .then(response => response.json())
    .then(data => {
        // Display success message
        document.getElementById('result').textContent = "ABHA Account Created Successfully!";
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('result').textContent = "Failed to create ABHA account!";
    });
});
