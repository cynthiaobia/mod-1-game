// CHANGE THEMES
const lightMode = document.querySelector('.light-mode-btn');
const darkMode = document.querySelector('.dark-mode-btn');
const pinkMode = document.querySelector('.pink-mode-btn');
lightMode.addEventListener('click', changeThemeLight);
darkMode.addEventListener('click', changeThemeDark);
pinkMode.addEventListener('click', changeThemePink);

function changeThemeLight(){
    const root = document.documentElement;
    root.style.setProperty('--bg-color', '#fafafa');
    root.style.setProperty('--grid-bg-color', '#e4e5f1');
    root.style.setProperty('--h1-color', '#484b6a');
    root.style.setProperty('--x-color', '#484b6a');
    root.style.setProperty('--o-color', '#9394a5');
}

function changeThemeDark(){
    const root = document.documentElement;
    root.style.setProperty('--bg-color', '#102a43');
    root.style.setProperty('--grid-bg-color', '#f0f4f8');
    root.style.setProperty('--h1-color', '#486581');
    root.style.setProperty('--x-color', '#486581');
    root.style.setProperty('--o-color', '#bcccdc');
}

function changeThemePink(){
    const root = document.documentElement;
    root.style.setProperty('--bg-color', '#f6dddd');
    root.style.setProperty('--grid-bg-color', '#f4f4f1');
    root.style.setProperty('--h1-color', '#ec9daf');
    root.style.setProperty('--x-color', '#ec9daf');
    root.style.setProperty('--o-color', '#ffcfd7');
}