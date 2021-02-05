// UI Variables
const uiNavLinks = document.querySelectorAll('.nav-link');
const links = ['#intro-CSS', '#border', '#color', '#combinators','#units', '#fonts','#margin', '#opacity', '#overflow', '#padding', '#position', '#pseudo-class', '#pseudo-element'];

uiNavLinks.forEach((link,idx)=> {
  link.addEventListener('click', () => {
    removeClass();
      
    link.classList.add('active'); 
    let mLinks = links[idx]
    newLink(mLinks);
  })
})

function removeClass() {
  uiNavLinks.forEach(link => {
    link.classList.remove('active')
  })
}


// Back to Top
 const uiBackToTop = document.querySelector('.back-To-Top');

window.addEventListener('scroll', () => {
  if(window.pageYOffset > 2000){
    uiBackToTop.classList.add('active')
  }
  else{
    uiBackToTop.classList.remove('active')
  }
})

function newLink(link) {
  window.location.assign(link);
}