// ===============scroll header
var firstPosition = window.pageYOffset;
const nav = document.querySelector("nav");

window.onscroll = function() {
  var nowPosition = window.pageYOffset;
  if (firstPosition > nowPosition) {
    nav.style.top = "0";
  } else {
    nav.style.top = "-100px";
  }
  firstPosition = nowPosition;
}

const menu = document.querySelector('.menu');
const navOpen = document.querySelector('.mobile-nav-toggle');
navOpen.addEventListener('click', () => {
    menu.style.display = 'flex';
})

const navClose = document.querySelector('.sidebarClose');
navClose.addEventListener('click', () => {
    menu.style.display = 'none';
})

// document.addEventListener('mousedown', (event) => {
//     if (!menu.contains(event.target)) {
//         menu.style.display = 'none';
//     }
// });







// ================scroll header

// const logo = document.querySelector('.logo');
// const container = document.querySelector('.container');
// const sidebarOpen = document.querySelector('.sidebarOpen').addEventListener('click', openSidebar);
// const sidebarClose = document.querySelector('.sidebarClose').addEventListener('click', closeSidebar);


// function openSidebar() {
//   logo.style.display = 'none';
//   menu.style.display = 'block';

// }

// function closeSidebar() {
//     logo.style.display = 'block';
//     menu.style.display = 'none';
//     sidebarOpen.style.display = 'block';
    
// }

