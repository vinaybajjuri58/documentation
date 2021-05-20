//ref
const openBtnEl = document.getElementById("open-modal");
const closeBtnEl = document.getElementById("close-modal");
const modal = document.getElementById("modal");
openBtnEl.addEventListener("click", () => {
  modal.style.display = "block";
});
closeBtnEl.addEventListener("click", () => {
  modal.style.display = "none";
});

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
