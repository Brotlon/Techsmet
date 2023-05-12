const navbar = document.querySelector('.navbar')
const burgerBtn = navbar.querySelector('.navbar__burger-btn')
const navLinksBox = navbar.querySelector('.navbar__links-box')



let mobileNavTransitionTime = 351


const hideInactiveArea = () => {
    setTimeout(() => {
        navLinksBox.classList.remove('display-block')
    }, mobileNavTransitionTime);
}

const handleMobileNav = () => {
    navLinksBox.classList.add('display-block')
    setTimeout(() => {
        navLinksBox.classList.toggle('show-nav')
    }, 1);

    if (navLinksBox.classList.contains('show-nav')) {
        hideInactiveArea()
    }
}

const hideMobileNav = e => {
    if (!e.target.matches('.navbar') && !e.target.matches('.navbar__burger-btn') && !e.target.matches('.navbar__burger-btn-box') && !e.target.matches('.navbar__links-box')) {
        navLinksBox.classList.remove('show-nav')
        hideInactiveArea()
    }
}



burgerBtn.addEventListener('click', handleMobileNav)
window.addEventListener('click', hideMobileNav)