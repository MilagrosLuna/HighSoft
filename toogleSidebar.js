// function toggleSidebar() {
//   var sidebar = document.getElementById("sidebar");
//   var content = document.querySelector(".main-content");
  
//   sidebar.classList.toggle("active");
//   content.classList.toggle("active");
//   const overlay = document.getElementById("overlay");

//   overlay.classList.toggle("active"); // Activa/desactiva el overlay
// }

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
const logOut = ()=>{
  
};
btnSaldo.addEventListener('click', verSaldo)
