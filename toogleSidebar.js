function toggleSidebar() {
  var sidebar = document.getElementById("sidebar");
  if (sidebar.style.width === "250px") {
      sidebar.style.width = "0px";
  } else {
      sidebar.style.width = "250px";
  }
}