const menuIcon = document.getElementById("menuIcon");
const navLinks = document.getElementById("navLinks");

menuIcon.addEventListener("click", () => {
  navLinks.classList.toggle("active");

  // Toggle the hamburger animation
  menuIcon.classList.toggle("open");
});
