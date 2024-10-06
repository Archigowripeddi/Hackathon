document.getElementById('qrForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const abhaNumber = document.getElementById('abhaNumber').value;
    const qrCodeContainer = document.getElementById('qrCodeContainer');
    const qrCodeElement = document.getElementById('qrcode');

    // Clear any previous QR code
    qrCodeElement.innerHTML = '';

    // Generate a new QR code with ABHA Number or Address
    new QRCode(qrCodeElement, {
        text: abhaNumber,
        width: 200,
        height: 200,
    });

    // Display the QR code container
    qrCodeContainer.style.display = 'block';
});
