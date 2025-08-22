// Delegate toggle logic after table content is updated
document.addEventListener('click', function (event) {
    const isActionButton = event.target.closest('.action-btn');
    const allDropdowns = document.querySelectorAll('.dropdown-container');

    // Hide all dropdowns
    allDropdowns.forEach(dropdown => dropdown.style.display = 'none');

    if (isActionButton) {
        const dropdown = isActionButton.parentElement.querySelector('.dropdown-container');
        if (dropdown) {
            dropdown.style.display = 'block';
        }
    }
});




// for calendar


const dateTrigger = document.getElementById('dateTrigger');
const calendarPopup = document.getElementById('calendarPopup');
const selectedDateSpan = document.getElementById('selected-date');

// Simple calendar with native input inside our positioned popup
calendarPopup.innerHTML = `<input type="date" id="customDateInput">`;

// Show calendar at fixed position below trigger
dateTrigger.addEventListener('click', () => {
    const rect = dateTrigger.getBoundingClientRect();
    calendarPopup.style.top = `${rect.bottom + window.scrollY}px`;
    calendarPopup.style.left = `${rect.left + window.scrollX}px`;
    calendarPopup.classList.toggle('hidden');
});

// Update text when date picked
calendarPopup.querySelector('#customDateInput').addEventListener('change', function() {
    const date = new Date(this.value);
    selectedDateSpan.textContent = date.toLocaleDateString();
    calendarPopup.classList.add('hidden');
});

// Hide when clicking outside
document.addEventListener('click', (e) => {
    if (!calendarPopup.contains(e.target) && !dateTrigger.contains(e.target)) {
        calendarPopup.classList.add('hidden');
    }
});
