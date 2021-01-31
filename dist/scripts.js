// UI Variables
const uiNavLinks = document.querySelectorAll('.nav-link')

uiNavLinks.forEach(link => {
  link.addEventListener('click', () => {
    removeClass();
    link.classList.add('active')
  })
})

function removeClass() {
  uiNavLinks.forEach(link => {
    link.classList.remove('active')
  })
}
