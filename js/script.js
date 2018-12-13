var iconHeader = document.querySelector('.icon-header');
let nav = document.querySelector('.click-menu');

iconHeader.addEventListener('click', () => {
    if (nav.style.transform != 'translateX(0%)') {
        nav.style.transform = 'translateX(0%)';
        nav.style.transition = 'transform 0.2s ease-out';
    } else {
        nav.style.transform = 'translateX(-100%)';
        nav.style.transition = 'transform 0.2s ease-out';
    }
});



let toggleIcon = document.querySelector('.icon-header');

toggleIcon.addEventListener('click', () => {
    if (toggleIcon.className != 'icon-header toggle') {
        toggleIcon.className += ' toggle';
    } else {
        toggleIcon.className = 'icon-header';
    }
});


function newProject() {
    window.location = 'newProject.html';
}
