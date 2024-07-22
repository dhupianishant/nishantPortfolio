// Importing the stylesheet
import "./style.css";

const ELE = document.documentElement;
const mobileNav = document.getElementById("mobile-nav");
const mobileNavItem = document.querySelectorAll("#mobile-nav li");
const backDrop = document.getElementById("backdrop");
const menuBar = document.querySelector("#menubar");
const menuBarIcon = document.querySelector("#menubar i");

// Dark Theme Toggle
document.querySelectorAll(".theme-switch").forEach((item) =>
  item.addEventListener("click", () => {
    ELE.classList.toggle("dark");
    ELE.classList.contains("dark")
      ? localStorage.setItem("theme", "dark")
      : localStorage.setItem("theme", "light");
  })
);

// Creating an array of elements that should trigger the mobile menu toggle
const options = [backDrop, menuBar, ...mobileNavItem];

// Hamburger
options.forEach((item) =>
  item.addEventListener("click", () => {
    mobileNav.classList.toggle("h-0"); // Toggle the height class to show/hide the mobile nav
    mobileNav.classList.toggle("h-96"); // Another toggle for height class
    menuBarIcon.classList.toggle("fa-xmark"); // Toggle the icon class for the menu bar icon
    menuBarIcon.classList.toggle("fa-bars"); // Another toggle for icon class
    backDrop.classList.toggle("hidden"); // Toggle the "hidden" class on the backdrop
    document.documentElement.classList.toggle("overflow-hidden"); // Toggle overflow on the root element
  })
);

// Theme based on device
ELE.classList.add(localStorage.getItem("theme"));
    