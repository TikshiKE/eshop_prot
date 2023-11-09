const refs = {
  mobileOpenBtn: document.querySelector("[data-mobile-open]"),
  mobileCloseBtn: document.querySelector("[data-mobile-close]"),
  mobileMenu: document.querySelector("[data-mobile]"),
};

refs.mobileOpenBtn.addEventListener("click", toggleMobileMenu);
refs.mobileCloseBtn.addEventListener("click", toggleMobileMenu);

function toggleMobileMenu() {
  refs.mobileMenu.classList.toggle("is-hidden");
}
