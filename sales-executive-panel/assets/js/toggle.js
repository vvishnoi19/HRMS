
    function toggleDropdown(dropdown) {
        const wrapper = dropdown.parentElement;
        const options = wrapper.querySelector('.dropdown-options');

        // Hide all other open dropdowns
        document.querySelectorAll('.dropdown-options').forEach(opt => {
            if (opt !== options) opt.classList.add('hidden');
        });

        // Toggle current dropdown
        options.classList.toggle('hidden');
     
    }

    // Close dropdowns if clicked outside
    document.addEventListener('click', function (e) {
        if (!e.target.closest('.filter-dropdown-wrapper')) {
            document.querySelectorAll('.dropdown-options').forEach(opt => {
                opt.classList.add('hidden');
            });
        }
    });

