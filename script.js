document.addEventListener("DOMContentLoaded", function () {
  var menuBar = document.querySelector(".menu-bar");
  var closeButton = document.querySelector(".close-button");
  var navList = document.querySelector(".nav-list");
  var navItems = document.querySelectorAll(".nav-list li");

  function openMenu() {
    if (window.innerWidth <= 768) {
      menuBar.style.display = "none";
      closeButton.style.display = "block";
      navList.style.display = "block";
    }
  }

  function closeMenu() {
    if (window.innerWidth <= 768) {
      menuBar.style.display = "block";
      closeButton.style.display = "none";
      navList.style.display = "none";
    }
  }

  function handleMenuItemClick() {
    closeMenu();
  }

  menuBar.addEventListener("click", openMenu);
  closeButton.addEventListener("click", closeMenu);
  navItems.forEach(function (navItem) {
    navItem.addEventListener("click", handleMenuItemClick);
  });

  if (window.innerWidth < 768) {
    closeButton.style.display = "none";
  }

  if (window.innerWidth > 768) {
    closeButton.style.display = "none";
  }
});

const form = document.querySelector("form");
const errorMessage = document.createElement("p");
errorMessage.style.color = "red";

function validateEmail() {
  const emailInput = document.querySelector('input[type="email"]');
  const email = emailInput.value;

  if (email !== email.toLowerCase()) {
    errorMessage.textContent = "Please enter the email address in lowercase.";
    form.appendChild(errorMessage);
    return false;
  }

  errorMessage.textContent = "";
  return true;
}

form.addEventListener("submit", function (event) {
  if (!validateEmail()) {
    event.preventDefault();
  }
});
