// searBar
const searchBtn = document.querySelector(".search-button");
const searchInput = document.querySelector(".search-input");
const searchWrap = document.querySelector(".search-wrap");

searchBtn.addEventListener("click", () => {
  searchWrap.classList.toggle("active");
  searchInput.focus();
});

const expandCards = document.querySelectorAll(".panel");

expandCards.forEach((expandCard) => {
  expandCard.addEventListener("click", (e) => {
    removeAllActiveClasses();
    e.target.classList.add("panel-active");
  });
});

function removeAllActiveClasses() {
  expandCards.forEach((expandCard) => {
    expandCard.classList.remove("panel-active");
  });
}
