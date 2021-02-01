// UI Variables
const uiNavLinks = document.querySelectorAll('.nav-link');
let links = [ 'intro-CSS', 'border', 'color']

uiNavLinks.forEach((link, idx)=> {
  link.addEventListener('click', () => {
    removeClass();
    link.classList.add('active');


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