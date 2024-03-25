
    document.addEventListener("DOMContentLoaded", function() {
    // Function to open the edit modal popup
// Function to open the edit modal popup
        function openEditPopup(eventId) {
            var modal = document.getElementById("editModal" + eventId);
            modal.style.display = "block";
        }

// Function to close the edit modal popup
        function closeEditPopup(eventId) {
            var modal = document.getElementById("editModal" + eventId);
            modal.style.display = "none";
        }


    // Get all buttons with class "btn-edit"
    var editButtons = document.querySelectorAll(".btn-edit");

    // Add event listeners to each button
    editButtons.forEach(function(button) {
    button.addEventListener("click", function() {
    var eventId = this.getAttribute("data-event-id");
    openEditPopup(eventId);
});
});

    // Close the edit modal popup when clicking on the close button
    var closeButtons = document.querySelectorAll(".close");

    closeButtons.forEach(function(button) {
    button.addEventListener("click", function() {
    var eventId = this.getAttribute("data-event-id");
    closeEditPopup(eventId);
});
});

    // Close the edit modal popup when clicking outside of it
    window.onclick = function(event) {
    if (event.target.className === "modal") {
    event.target.style.display = "none";
}
};
});

