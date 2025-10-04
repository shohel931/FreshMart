// Search Bar
document.getElementById("search_btn").addEventListener("click", function (e) {
    e.preventDefault();
   document.getElementById("search_area").classList.toggle("active");
});

// Sidebar
const sidebarBtn = document.getElementById('sidebar_btn');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');