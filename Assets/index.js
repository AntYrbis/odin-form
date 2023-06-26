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


/* Listening to intersection for the sticky switch on mobile design*/
if (
    "IntersectionObserver" in window &&
    "IntersectionObserverEntry" in window &&
    "intersectionRatio" in window.IntersectionObserverEntry.prototype
) {
let observer = new IntersectionObserver(entries => {
    if (entries[0].boundingClientRect.y < 0) {
        const toggle = document.getElementsByClassName('switch')[0];
        toggle.classList.add("not_top");
        toggle.classList.remove("top");
        console.log("add")
    } else {
        const toggle = document.getElementsByClassName('switch')[0];
        toggle.classList.add("not_top");
        toggle.classList.remove("not_top");
        console.log("remove")
    }
});
observer.observe(document.querySelector("#top-of-site-pixel-anchor"));
}