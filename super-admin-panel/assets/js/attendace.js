
        function switchTab(tabName) {
            // Update tab buttons
            const tabs = document.querySelectorAll('.tab');
            tabs.forEach(tab => tab.classList.remove('active'));
            event.target.classList.add('active');

            // Show/hide content based on tab
            if (tabName === 'attendance-records') {
                // Show attendance records content
                document.getElementById('attendance-records-stats').classList.remove('hidden');
                document.getElementById('attendance-records-secondary').classList.remove('hidden');
                document.getElementById('attendance-records-table').classList.remove('hidden');
                
                // Hide attendance requests content
                document.getElementById('attendance-requests-stats').classList.add('hidden');
                document.getElementById('attendance-requests-secondary').classList.add('hidden');
                document.getElementById('attendance-requests-table').classList.add('hidden');
            } else if (tabName === 'attendance-requests') {
                // Hide attendance records content
                document.getElementById('attendance-records-stats').classList.add('hidden');
                document.getElementById('attendance-records-secondary').classList.add('hidden');
                document.getElementById('attendance-records-table').classList.add('hidden');
                
                // Show attendance requests content
                document.getElementById('attendance-requests-stats').classList.remove('hidden');
                document.getElementById('attendance-requests-secondary').classList.remove('hidden');
                document.getElementById('attendance-requests-table').classList.remove('hidden');
            }
        }

        // Add some basic interactivity to filters
        document.addEventListener('DOMContentLoaded', function() {
            const searchInput = document.querySelector('.search-input');
            const filterButtons = document.querySelectorAll('.filter-button');

            searchInput.addEventListener('input', function() {
                console.log('Searching for:', this.value);
                // Add search functionality here
            });

            filterButtons.forEach(button => {
                button.addEventListener('click', function() {
                    console.log('Filter clicked:', this.textContent.trim());
                    // Add filter functionality here
                });
            });
        });
   