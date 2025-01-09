const switchThemeBtn = document.querySelector('.theme-switch-btn');
const header = document.querySelector('head');
switchThemeBtn.addEventListener('click', () => {
    if (switchThemeBtn.innerText === 'Light Theme') {
        switchThemeBtn.innerText = 'Dark Theme';
        header.removeChild(document.querySelector('.dark-theme-css'));
    } else {
        switchThemeBtn.innerText = 'Light Theme';
        const darkThemeCSS = document.createElement('link');
        darkThemeCSS.rel = 'stylesheet';
        darkThemeCSS.href = './resources/css/landingpage-dark.css';
        darkThemeCSS.classList.add('dark-theme-css');
        header.appendChild(darkThemeCSS);
    }
});