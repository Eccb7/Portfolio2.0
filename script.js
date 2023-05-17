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

const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-btn-close]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal)
  })
})

function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}
