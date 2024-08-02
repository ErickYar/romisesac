<<<<<<< HEAD
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
=======
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
>>>>>>> 4330375425947bc222c0d02c2157b5ce9ebe09d1
)