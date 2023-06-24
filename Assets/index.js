/* Checking system preference on load */
window.onload = function () {
    let newTheme = 'light';
    if (matchMedia('(prefers-color-scheme: dark)').matches) {
        newTheme = 'dark';
    }
    const root = document.documentElement;
    root.className = newTheme;

    const toggle = document.getElementById('slider');
    toggle.className = newTheme;

    const newimg = 'Assets/Authentification_' + newTheme + '.svg';
    document.getElementById("illustration").src = newimg;
};

/* Checking system preference on change*/
const colorSchemeQueryList = window.matchMedia('(prefers-color-scheme: dark)');

const setColorScheme = e => {
    let newTheme = 'light';
    if (e.matches) {
        newTheme = 'dark';
    }
    const root = document.documentElement;
    root.className = newTheme;

    const toggle = document.getElementById('slider');
    toggle.className = newTheme;

    const newimg = 'Assets/Authentification_' + newTheme + '.svg';
    document.getElementById("illustration").src = newimg;
}

setColorScheme(colorSchemeQueryList);
colorSchemeQueryList.addEventListener('change', setColorScheme);

/* Setting theme change on toggle switch */
function setTheme() {
    const root = document.documentElement;
    const newTheme = root.className === 'dark' ? 'light' : 'dark';
    root.className = newTheme;

    const newimg = 'Assets/Authentification_' + newTheme + '.svg';
    document.getElementById("illustration").src = newimg;
}