
document.addEventListener("DOMContentLoaded", () => {
    // Get the current page's filename (without query params/hash)
    const currentPage = window.location.pathname.split("/").pop();

    // Select all nav items
    document.querySelectorAll(".nav-item").forEach(item => {
        const linkPage = item.getAttribute("href").split("/").pop();

        // If this link matches the current page
        if (linkPage === currentPage) {
            item.classList.add("active");

            // Append your custom SVG to the right
            item.insertAdjacentHTML("beforeend", `
               <svg xmlns="http://www.w3.org/2000/svg" class="arrow-logo" width="30" height="30" viewBox="0 0 8 16" fill="none">
<path d="M0 8L8 0V16L0 8Z" fill="white"/>
</svg>
            `);
        }
    });
});

