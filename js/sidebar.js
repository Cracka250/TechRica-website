const sidebar = document.getElementById("sidebar");
const toggleBtn = document.getElementById("toggleBtn");
const mainContent = document.getElementById("mainContent");

// Toggle sidebar when clicking the menu button
toggleBtn.addEventListener("click", () => {
  sidebar.classList.toggle("show");
});

// Close sidebar when clicking outside
mainContent.addEventListener("click", () => {
  if (sidebar.classList.contains("show")) {
    sidebar.classList.remove("show");
  }
});

