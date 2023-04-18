/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
   navToggle.addEventListener('click', () =>{
     navMenu.classList.add('show_menu')
   }) 
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
    navClose.addEventListener('click', ()=> {
        navMenu.classList.remove('show_menu')
    })
}


/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav_link')

function linkAction(){
    const navMenu = document.getElementById('.nav_menu')
    navMenu.classList.remove(show_menu)
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.getElementsByClassName('skills_content'),
      skillsHeader = document.querySelectorAll('.skills_header')

function toggleSkills(){
  let itemClass = this.parentNode.className

  for(i = 0; i < skillsContent.length; i++){
    skillsContent[i].className = 'skills_content skills_close'
  }
  if (itemClass === 'skills_content skills_close') {
    this.parentNode.className = 'skills_content skills_open'
  }
}

skillsHeader.forEach((el) => {
  el.addEventListener('click', toggleSkills)
})



/*test*/

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
  const scrollY = window.pageYOffset 

  sections.forEach(current =>{
    const sectionHeight = current.offsetHeight,
          sectionTop = current.offsetTop - 58,
          sectionId = current.getAttribute('id')

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active_link')
    } else {
      document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active_link')
    }
  })
}
window.addEventListener('scroll', scrollActive)

/*==================== CHANGE BACKGROUND HEADER ====================*/ 
function scrollHeader(){
    const nav = document.getElementById('header')
    if (this.scrollY >= 80) {
      nav.classList.add('scroll_header');  
    } else {
      nav.classList.remove('scroll_header') 
    }
}
window.addEventListener('scroll',scrollHeader)

/*==================== SHOW SCROLL UP ====================*/ 
function scrollUp(){
  const scrollUp = document.getElementById('scroll-up')
  if (this.scrollY >= 560) {
    scrollUp.classList.add('show_scroll')
  } else {
    scrollUp.classList.remove('show_scroll')
  }
}
window.addEventListener('scroll', scrollUp) 
/*==================== DARK LIGHT THEME ====================*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

//Previously selected topic(if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx-moon' : 'bx-sun'

if (selectedTheme) {
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click', () => {
  document.body.classList.toggle(darkTheme)
  themeButton.classList.toggle(iconTheme)
  localStorage.setItem('selected-theme', getCurrentTheme())
  localStorage.setItem('selected-icon', getCurrentIcon())
})

