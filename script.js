document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Stop default form submission

    // Grab elements
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const submitBtn = document.getElementById('submitBtn');

    let isValid = true;

    // 1. Name Validation
    if (nameInput.value.trim() === '') {
        showError(nameInput);
        isValid = false;
    } else {
        clearError(nameInput);
    }

    // 2. Email Validation (Simple Regex)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value.trim())) {
        showError(emailInput);
        isValid = false;
    } else {
        clearError(emailInput);
    }

    // 3. Message Validation
    if (messageInput.value.trim() === '') {
        showError(messageInput);
        isValid = false;
    } else {
        clearError(messageInput);
    }

    // If everything passes, handle the submission logic
    if (isValid) {
        submitBtn.innerHTML = '<span>Sending...</span>';
        submitBtn.style.opacity = '0.7';
        submitBtn.disabled = true;

        // Simulate network request (Replace with your actual API endpoint or backend handler)
        setTimeout(() => {
            alert('Form submitted successfully!');
            document.getElementById('contactForm').reset();
            submitBtn.innerHTML = '<span>Send Message</span>';
            submitBtn.style.opacity = '1';
            submitBtn.disabled = false;
        }, 1500);
    }
});

// Helper functions to manage error classes
function showError(inputElement) {
    inputElement.parentElement.classList.add('error');
}

function clearError(inputElement) {
    inputElement.parentElement.classList.remove('error');
}

// Clear error indicators in real-time when the user begins typing
const inputs = document.querySelectorAll('#contactForm input, #contactForm textarea');
inputs.forEach(input => {
    input.addEventListener('input', () => {
        if (input.value.trim() !== '') {
            clearError(input);
        }
    });
});
