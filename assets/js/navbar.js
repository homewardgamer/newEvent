// window.onscroll = function() {myFunction()};

// var navbar = document.getElementById("og_navbar");
// var sticky = navbar.offsetTop+500;
// console.log('hello', sticky);

// function myFunction() {
//   if (window.pageYOffset >= sticky) {
//     navbar.classList.add("sticky")
//   } else {
//     navbar.classList.remove("sticky");
//   }
// }

// START SideNavJS
// const parentMenuItems = document.querySelectorAll('.top-nav .parent-item');
const parentMenuItems = document.querySelectorAll('.top-nav .parent-item');
const submenusList = document.querySelectorAll('.parent-item .submenu');

parentMenuItems.forEach(parentMenu => {
	parentMenu.addEventListener("click", toggleSubmenu);
})

function toggleSubmenu() {
	let submenu = this.getElementsByClassName('submenu')[0];
	this.classList.toggle('active');
	submenu.classList.toggle('active');
}
// END SideNavJS
