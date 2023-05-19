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

document.addEventListener("DOMContentLoaded", () => {
  function openModal(modal) {
    if (modal == null) return;
    modal.classList.add("active");
    overlay.classList.add("active");
  }

  function closeModal(modal) {
    if (modal == null) return;
    modal.classList.remove("active");
    overlay.classList.remove("active");
  }

  const openModalButtons = document.querySelectorAll(
    '[data-modal-target="#modal"]'
  );
  const closeModalButtons = document.querySelectorAll("[data-btn-close]");
  const overlay = document.getElementById("overlay");

  openModalButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const modal = document.querySelector(
        button.getAttribute("data-modal-target")
      );
      openModal(modal);
    });
  });

  overlay.addEventListener("click", () => {
    const modals = document.querySelectorAll(".modal.active");
    modals.forEach((modal) => {
      closeModal(modal);
    });
  });

  closeModalButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const modal = button.closest(".modal");
      closeModal(modal);
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  function openModal1(modal1) {
    if (modal1 == null) return;
    modal1.classList.add("active");
    overlay1.classList.add("active");
  }

  function closeModal1(modal1) {
    if (modal1 == null) return;
    modal1.classList.remove("active");
    overlay1.classList.remove("active");
  }

  const openModal1Buttons = document.querySelectorAll(
    '[data-modal-target="#modal1"]'
  );
  const closeModal1Buttons = document.querySelectorAll("[data-btn-close]");
  const overlay1 = document.getElementById("overlay1");

  openModal1Buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const modal1 = document.querySelector(
        button.getAttribute("data-modal-target")
      );
      openModal1(modal1);
    });
  });

  overlay1.addEventListener("click", () => {
    const modal1s = document.querySelectorAll(".modal1.active");
    modal1s.forEach((modal1) => {
      closeModal1(modal1);
    });
  });

  closeModal1Buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const modal1 = button.closest(".modal1");
      closeModal1(modal1);
    });
  });
});
