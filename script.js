/*document.addEventListener('DOMContentLoaded', function () {
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

/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  }
  
  /* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.body.style.backgroundColor = "white";
  }
  
  /* slideshow */

  let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}