/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

  sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
        
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }                                                    
    })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 1000,
    delay: 50,
    reset: false
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200});
sr.reveal('.experience__item, .experience__card',{interval: 150, origin: 'bottom'}); 
sr.reveal('.project__card',{interval: 150, origin: 'bottom'});
sr.reveal('.contact__info',{origin: 'left'});
sr.reveal('.contact__form',{origin: 'right'}); 

/*==================== HORIZONTAL SCROLL FOR PROJECT IMAGES ====================*/
const projectGalleries = document.querySelectorAll('.project__img');
projectGalleries.forEach((gallery) => {
    // Enable mouse wheel vertical-to-horizontal scroll
    gallery.addEventListener('wheel', (e) => {
        if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
            e.preventDefault();
            gallery.scrollLeft += e.deltaY;
        }
    }, { passive: false });
});

/*==================== EXPERIENCE CAROUSEL + PROGRESS ====================*/
const experienceCarousel = document.querySelector('.experience__carousel');
const experienceProgress = document.querySelector('.experience__progress-bar');

if (experienceCarousel && experienceProgress) {
    const updateProgress = () => {
        const maxScroll = experienceCarousel.scrollWidth - experienceCarousel.clientWidth;
        const ratio = maxScroll > 0 ? (experienceCarousel.scrollLeft / maxScroll) : 0;
        experienceProgress.style.width = `${Math.min(Math.max(ratio, 0), 1) * 100}%`;
    };
    experienceCarousel.addEventListener('scroll', updateProgress, { passive: true });
    window.addEventListener('resize', updateProgress);
    updateProgress();
    // Wheel translate vertical to horizontal
    experienceCarousel.addEventListener('wheel', (e) => {
        if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
            e.preventDefault();
            experienceCarousel.scrollLeft += e.deltaY;
        }
    }, { passive: false });
}
