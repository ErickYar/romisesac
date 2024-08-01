const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".navigation");
menuToggle.onclick = function () {
   navigation.classList.toggle('open')
}
const list = document.querySelectorAll('.list');
function activarLink() {
   list.forEach((item) => {
      item.classList.remove("active");
      this.classList.add("active")
   })
}
// Esta es la forma abreviada de la función 
// list.forEach((item) => item.addEventListener('click', activarLink));

list.forEach(
   function (item) {
      item.addEventListener('click', activarLink)
   }
)