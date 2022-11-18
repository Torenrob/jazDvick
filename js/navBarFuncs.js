const navList = document.querySelectorAll("li");
const togglebtn = document.querySelector(".toggleBtn");
const respNavList = document.querySelector("ul");
let tryBtn = document.querySelector(".tryBtn");

// toggles menu in smaller screen
function toggleMenuSmallScreen() {
   function toggleMenuVisibility() {
      let navClass = respNavList.classList;
      navClass.toggle("navListShow");
   }

   togglebtn.addEventListener("click", toggleMenuVisibility);

   navList.forEach((anyLink) =>
      anyLink.addEventListener("click", toggleMenuVisibility)
   );
}

// controls navBar selection based on page location
function pageNavSelection() {
   function scrollPos() {
      let pageLoc = window.scrollY;

      if (pageLoc < 500) {
         navList.forEach((item) => item.classList.remove("active"));
         let listItem = navList[0];
         listItem.classList.add("active");
      }
      if (pageLoc >= 500 && pageLoc < 1500) {
         navList.forEach((item) => item.classList.remove("active"));
         let listItem = navList[1];
         listItem.classList.add("active");
      }
      if (pageLoc >= 1500 && pageLoc < 2500) {
         navList.forEach((item) => item.classList.remove("active"));
         let listItem = navList[2];
         listItem.classList.add("active");
      }
      if (pageLoc >= 2500 && pageLoc < 3500) {
         navList.forEach((item) => item.classList.remove("active"));
         let listItem = navList[3];
         listItem.classList.add("active");
      }
      if (pageLoc >= 3500 && pageLoc < 4500) {
         navList.forEach((item) => item.classList.remove("active"));
         let listItem = navList[4];
         listItem.classList.add("active");
      }
      if (pageLoc >= 4500 && pageLoc < 5500) {
         navList.forEach((item) => item.classList.remove("active"));
         let listItem = navList[5];
         listItem.classList.add("active");
      }
      if (pageLoc >= 5500 && pageLoc < 6500) {
         navList.forEach((item) => item.classList.remove("active"));
         let listItem = navList[6];
         listItem.classList.add("active");
      }
      if (pageLoc >= 6500) {
         navList.forEach((item) => item.classList.remove("active"));
         let listItem = navList[7];
         listItem.classList.add("active");
      }
   }

   window.addEventListener("scroll", scrollPos);
}


