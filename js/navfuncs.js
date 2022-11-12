const navList = document.querySelectorAll("li");
const togglebtn = document.querySelector(".toggleBtn");
const respNavList = document.querySelector("ul");

function navSelector() {
   navList.forEach((button) => button.classList.remove("active"));
   this.classList.add("active");
}

navList.forEach((chosen) => {
   chosen.addEventListener("click", navSelector);
});

togglebtn.addEventListener("click", () => {
   let navClass = respNavList.classList;
   navClass.toggle("navListShow");
});
