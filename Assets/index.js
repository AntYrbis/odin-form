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

    const newimg = './Assets/images/Authentification_' + newTheme + '.svg';
    document.getElementById("illustration").src = newimg;

    const newarrow = './Assets/images/arrow_' + newTheme + '.svg';
    const arrows = document.getElementsByClassName("arrows");
    Array.prototype.forEach.call(arrows, function(arrow) {
        arrow.src = newarrow;
    });
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

    const newimg = './Assets/images/Authentification_' + newTheme + '.svg';
    document.getElementById("illustration").src = newimg;

    const newarrow = './Assets/images/arrow_' + newTheme + '.svg';
    const arrows = document.getElementsByClassName("arrows");
    Array.prototype.forEach.call(arrows, function(arrow) {
        arrow.src = newarrow;
    });
}

setColorScheme(colorSchemeQueryList);
colorSchemeQueryList.addEventListener('change', setColorScheme);

/* Setting theme change on toggle switch */
function setTheme() {
    const root = document.documentElement;
    const newTheme = root.className === 'dark' ? 'light' : 'dark';
    root.className = newTheme;

    const newimg = './Assets/images/Authentification_' + newTheme + '.svg';
    document.getElementById("illustration").src = newimg;

    const newarrow = './Assets/images/arrow_' + newTheme + '.svg';
    const arrows = document.getElementsByClassName("arrows");
    Array.prototype.forEach.call(arrows, function(arrow) {
        arrow.src = newarrow;
    });
}