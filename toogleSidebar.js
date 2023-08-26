function toggleSidebar() {
  var sidebar = document.getElementById("sidebar");
  var overlay = document.getElementById("overlay");

  if (sidebar.style.left === "-80%") {
    sidebar.style.left = "0";
    overlay.style.display = "block";
    overlay.style.pointerEvents = "auto";
  } else {
    sidebar.style.left = "-80%";
    overlay.style.display = "none";
    overlay.style.pointerEvents = "none";
  }
}

function closeSidebar() {
  var sidebar = document.getElementById("sidebar");
  var overlay = document.getElementById("overlay");

  sidebar.style.left = "-80%";
  overlay.style.display = "none";
  overlay.style.pointerEvents = "none";
}

function toggleDarkMode() {
  const body = document.body;
  body.classList.toggle("dark-mode");
  const modeToggle = document.querySelector(".mode-toggle");
  modeToggle.classList.toggle("active");
}

const btnlogOut = document.querySelector("#btn-logOut");
const logOut = () => {
  const confirmLogout = confirm("¿Estás seguro que deseas cerrar sesión?");
  if (confirmLogout) {
    window.location.href = "index.html";
  }
};
btnlogOut.addEventListener("click", logOut);


const prevButton = document.querySelector('.btn-carousel-prev');
const nextButton = document.querySelector('.btn-carousel-next');
const carousel = document.getElementById('carousel');

let currentIndex = 0;

prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + 3) % 3; // Circular navigation
  updateCarousel();
});

nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % 3; // Circular navigation
  updateCarousel();
});

function updateCarousel() {
  const images = carousel.querySelectorAll('img');
  images.forEach((img, index) => {
    if (index === currentIndex) {
      img.classList.remove("hidden");
    } else {
      img.classList.add("hidden");
    }
  });
}

updateCarousel();



// Function to be executed when the media query changes
function handleMediaQueryChange(mq) {
  if (!mq.matches) {
    const images = carousel.querySelectorAll('img');
    images.forEach((img, index) => {
      
      img.classList.remove("hidden");
      
    });
  } else{
    updateCarousel();
  }
}

// Create a media query
var mediaQuery = window.matchMedia("(max-width: 450px)");

// Initial execution of the function
handleMediaQueryChange(mediaQuery);

// Add a resize event listener to track changes in the media query
mediaQuery.addListener(handleMediaQueryChange);
