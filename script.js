const menuBtn = document.querySelector('#menu-button');
menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('menu-open');
    window.scrollTo(0, 0);
});

const acceptCookies = document.querySelector('#accept-cookies');
acceptCookies.addEventListener('click', () => {
    document.querySelector('.cookies').style.display = 'none'
});

const menuListItems = document.querySelectorAll('.navtag')
menuListItems.forEach(x => x.addEventListener('click', () => {
    menuBtn.classList.toggle('menu-open');
}));

window.addEventListener('scroll', () => {
    const x = document.querySelectorAll('.burger span');
    if(window.scrollY === window.innerHeight){
        x.forEach(element => {
            element.style.background = 'white'
        });
    } else {
        x.forEach(element => {
            element.style.background = 'black'
        });
    }
})
