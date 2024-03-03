
// Function to toggle the theme
function toggleTheme(theme) {
    // Update the data-bs-theme attribute of the <html> element
    document.documentElement.setAttribute('data-bs-theme', theme);
    // Store the selected theme in localStorage
    localStorage.setItem('theme', theme);
}

// Function to initialize the theme based on localStorage or default to auto
function initializeTheme() {
    // Retrieve the theme from localStorage
    const storedTheme = localStorage.getItem('theme');
    // Set the theme to the stored theme or default to auto
    const theme = storedTheme || 'auto';
    // Toggle the theme
    toggleTheme(theme);
    // Update the active state of the dropdown menu items
    const dropdownItems = document.querySelectorAll('.dropdown-menu .dropdown-item');
    dropdownItems.forEach(item => {
        const itemTheme = item.getAttribute('data-bs-theme-value');
        item.setAttribute('aria-pressed', itemTheme === theme);
    });
}

// Initialize the theme when the DOM content is loaded
document.addEventListener('DOMContentLoaded', () => {
    initializeTheme();

    // Add click event listeners to the dropdown menu items
    const dropdownItems = document.querySelectorAll('.dropdown-menu .dropdown-item');
    dropdownItems.forEach(item => {
        item.addEventListener('click', () => {
            const theme = item.getAttribute('data-bs-theme-value');
            toggleTheme(theme);
        });
    });
});
function toggleModal(modalId) {
    var modal = document.getElementById(modalId);
    var bootstrapModal = new bootstrap.Modal(modal);
    bootstrapModal.show(); // Use show() method to display the modal
}

function joinNow() {
    alert('Join Now clicked!');
}