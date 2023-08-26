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
