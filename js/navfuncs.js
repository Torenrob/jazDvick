const navList = document.querySelectorAll(".nav-item");
function navSelector() {
   navList.forEach((button) => button.classList.remove("active"));
   this.classList.add("active");
}

navList.forEach((chosen) => {
   chosen.addEventListener("click", navSelector);
});
