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

function loadHomeLastest() {
  fetch("/Data/homeLastest.json")
  
  .then( function(response) {
    if( !response.ok) {
      throw Error("HTTP Error: ", response.status)
    }
    return response.json();

  })

  .then( function (homeLastestItem) {
    let html = "";
    for( let i of homeLastestItem){
      html += `

            <div class="card swiper-slide">
              <div class="card__image">
                <img src="${i.lastestImage}" alt="">
              </div>
              <div class="card__content">
                <p class="card__content--title">${i.lastestTitle}</p>
                <p class="card__content--desc">${i.lastestDesc}</p>
                <div class="card__content--hashtag">
                  <span>${i.lastestHashTag}</span>
                  <span>#Q.Phú Nhuận</span>
                </div>
                <div class="card__content--author">
                  <div class="author-info">
                      <div class="author-avatar">
                          <img src="${i.authorAva}" alt="">
                      </div>
                      <div>
                          <div class="author-name">${i.authorName}</div>
                          <div class="time-create">
                          ${i.timeCreate}
                          </div>
                      </div>
                  </div>
                  <div class="author-rating">
                      <p>Rating</p>
                      <span class="Stars" style="--rating: ${i.authorRating};">
                      </span>
                  </div>
                </div>
                </div>
            </div>
          
       

        
      `
    }

    document.getElementById("homeLastest").innerHTML = html + 
    `
   
    `;

  })

  .catch(function(error){
    alert(error.message)
  })

}