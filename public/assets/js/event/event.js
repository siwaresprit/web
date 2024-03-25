// Function to open the donation popup
function openDonationPopup(eventId) {
    var modal = document.getElementById("donationModal" + eventId);
    modal.style.display = "block";
}

// Function to close the donation popup
function closeDonationPopup(eventId) {
    var modal = document.getElementById("donationModal" + eventId);
    modal.style.display = "none";
}

// Close the donation popup when clicking outside of it
window.onclick = function(event) {
    if (event.target.className === "modal") {
        event.target.style.display = "none";
    }
};

// Get all buttons with class "btn-give-donation"
var donationButtons = document.querySelectorAll(".btn-give-donation");

// Add event listeners to each button
donationButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        var eventId = this.getAttribute("data-event-id");
        openDonationPopup(eventId);
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var donationForms = document.querySelectorAll('.donation-form');
    donationForms.forEach(function(form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent the default form submission
            var formData = new FormData(form);
            var eventId = form.dataset.eventId;
            var url = form.action;
            fetch(url, {
                method: 'POST',
                body: formData
            })
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    // Handle the response if needed
                })
                .catch(error => console.error('Error:', error));
        });
    });
});

