// Modal Logic
const modal = document.getElementById("registrationModal");
const eventNameSpan = document.getElementById("eventName");

function openRegistration(eventName) {
    eventNameSpan.textContent = eventName;
    modal.style.display = "block";
}

function closeModal() {
    modal.style.display = "none";
}

// Form Submission Logic
function submitForm() {
    const participant1 = document.getElementById("participant1").value;
    const participant2 = document.getElementById("participant2").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const paymentProof = document.getElementById("paymentProof").files[0];

    if (!participant1 || !participant2 || !email || !phone || !paymentProof) {
        alert("Please fill all fields and upload payment proof.");
        return;
    }
    
    // Simulate form submission (replace with actual backend logic)
    const formData = new FormData();
    formData.append("participant1", participant1);
    formData.append("participant2", participant2);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("paymentProof", paymentProof);

    alert("Registration submitted successfully! We will verify your payment and confirm your registration.");
    closeModal();
}