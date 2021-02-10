// UI Variables
const uiNavLinks = document.querySelectorAll('.nav-link');
const uiLinks = ['#intro-CSS', '#border', '#color', '#combinators','#units', '#fonts','#margin', '#opacity', '#overflow', '#padding', '#position', '#pseudo-class', '#pseudo-element'];
const uiMaindoc = document.querySelector('#main-doc');
const uiHamburgerMenu = document.querySelector('.bars')

// Links
    uiNavLinks.forEach((link,idx)=> {
      link.addEventListener('click', (e) => {
        removeClass();
          
        link.classList.add('active'); 
        let mLinks = uiLinks[idx]
        newLink(mLinks);
        e.stopPropagation();
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


// HAMBURGER MENU
  uiHamburgerMenu.addEventListener('click', showList);
  function showList() {
    uiHamburgerMenu.classList.toggle('active')
    uiMaindoc.classList.toggle('active')
  }

