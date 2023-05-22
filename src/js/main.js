const navbar = document.querySelector('.navbar')
const burgerBtn = navbar.querySelector('.navbar__burger-btn')
const navLinksBox = navbar.querySelector('.navbar__links-box')

const showMorePicturesBtn = document.querySelector('.gallery__show-all-btn')
const hiddenPictures = document.querySelectorAll('.gallery__picture')
const footerYear = document.querySelector('.footer__year')



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


const showHiddenPictures = () => {
    hiddenPictures.forEach(item => {
        item.classList.add('show')
    })
    showMorePicturesBtn.classList.add('hidden')
}


const handleCurrentYear = () => {
    const year = (new Date).getFullYear();
    footerYear.innerText = year;
}



handleCurrentYear()
burgerBtn.addEventListener('click', handleMobileNav)
window.addEventListener('click', hideMobileNav)
showMorePicturesBtn.addEventListener('click', showHiddenPictures)






















const animatedItems = document.querySelectorAll('.os-animation')

const handleAnimations = entry => {
    if (entry[0].isIntersecting) {
        animatedItems[0].classList.add('fadeInDown')
        animatedItems[0].classList.add('animated')
    }
}

function createObserver(it) {
    let item = it
    let itemDelay = item.dataset.delay
    let observer

    let options = {
        rootMargin: '-25%',
    }


    observer = new IntersectionObserver((entry) => {
        if (entry[0].isIntersecting) {
            if (item.dataset.animation == 'fadeInDown') {
                item.classList.add('fadeInDown')
            } else if (item.dataset.animation == 'fadeInUp') {
                item.classList.add('fadeInUp')
            } else if (item.dataset.animation == 'fadeInRight') {
                item.classList.add('fadeInRight')
            } else if (item.dataset.animation == 'fadeInLeft') {
                item.classList.add('fadeInLeft')
            }
            item.classList.add('animated')
            item.style.animationDelay = itemDelay
        }
    }, options)
    observer.observe(item)
}

const createObservers = () => {
    for (let i = 0; i < animatedItems.length; i++) {
        createObserver(animatedItems[i])
    }
}

createObservers()