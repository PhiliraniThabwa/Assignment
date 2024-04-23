document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('header nav ul li a');

    links.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const url = this.getAttribute('href');
            loadPage(url);
        });
    });

    function loadPage(url) {
        const content = document.getElementById('content');

        // Fade out the content
        content.style.opacity = '0';
        setTimeout(function () {
            // Load new page content
            fetch(url)
                .then(response => response.text())
                .then(html => {
                    // Insert new page content
                    content.innerHTML = html;
                    // Fade in the new content
                    content.style.opacity = '1';
                })
                .catch(error => console.error('Error loading page:', error));
        }, 500); // Adjust the delay as needed for your transition
    }
});
