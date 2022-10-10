const nav = document.querySelector('nav')
const logoPrincipal = document.querySelector('.logo-principal')
const logoHover = document.querySelector('.logo-hover')
const navLink = document.getElementsByClassName('nav-link')
var slider = new KeenSlider("#my-keen-slider", {
    breakpoints: {
      "(max-width: 667px)": {
        loop: false,
        slides: { perView: 1 },
      },
      "(min-width: 1000px)": {
        loop: false,
        slides: { perView: 5 },
      },
    },
    slides: { perView: 1 },
  })
nav.addEventListener('mouseover', ()=>{
    nav.style.backgroundColor = 'white'
    logoPrincipal.style.display = 'none'
    logoHover.style.display = 'block'
    Array.from(navLink).forEach(element =>
        element.style.color = '#363636',
        );
})
nav.addEventListener('mouseout', ()=>{
    nav.style.backgroundColor = 'transparent'
    logoPrincipal.style.display = 'block'
    logoHover.style.display = 'none'
    Array.from(navLink).forEach(element =>
        element.style.color = 'white'
        );
})