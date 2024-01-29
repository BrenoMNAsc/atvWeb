var navItems = document.getElementsByClassName('navItem');
Array.from(navItems).forEach(navItem => {
    var bt = navItem.querySelector('.dropdown-bt');
    let dropmenu = navItem.querySelector('.underDrop');

    bt.addEventListener('click', () => {
        const icon = bt.querySelector('.bi-arrow-down-short');
        console.log(dropmenu)
        if (icon.classList.contains('rotateIcon')) {
            icon.classList.remove('rotateIcon');
            dropmenu.style.height = '0';
            icon.classList.add('rotateIconRev');
        } else if (icon.classList.contains('rotateIconRev')) {
            icon.classList.remove('rotateIconRev');
            icon.classList.add('rotateIcon');
            dropmenu.style.height = dropmenu.scrollHeight + 'px';
        } else {
            icon.classList.add('rotateIcon');
            dropmenu.style.height = dropmenu.scrollHeight + 'px';
        }
    });
});

var openMobilebt = document.getElementById('openMobileButton')
openMobilebt.addEventListener('click', () => {
    var nav = document.getElementsByTagName('nav')
    nav[0].classList.contains('openMobileMenu') ? nav[0].classList.remove("openMobileMenu") : nav[0].classList.add('openMobileMenu')
})
var searchBar = document.getElementsByClassName('searchBar')

var input = searchBar[0].querySelector('#searchInputId1')
var searchIcon = searchBar[0].querySelector('#searchIcon')

var iconX = searchIcon.querySelector('.bi-x')
input.addEventListener('focusout', () => {
    var iconSearch = searchIcon.querySelector('.bi-search')
    var iconX = searchIcon.querySelector('.bi-x')
    iconX.style.display = 'none'
    iconSearch.style.display = 'block'
})
input.addEventListener('focusin', () => {
    if (window.screen.availWidth < 575) {
        var iconX = searchIcon.querySelector('.bi-x')
        var iconSearch = searchIcon.querySelector('.bi-search')
        iconSearch.style.display = 'none'
        iconX.style.display = 'block'
    }

})
