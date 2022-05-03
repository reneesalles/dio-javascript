const body = document.getElementsByTagName("body")[0];
const h1 = document.getElementById("page-title");
const button = document.getElementById("mode-selector");
const footer = document.getElementsByTagName("footer")[0];

const state = {
    lightMode: false
};

function toggleLightDarkMode() {
    state.lightMode = !state.lightMode;

    updateClasses();
    updateTexts();
}

function updateTexts() {
    h1.innerHTML = `${state.lightMode ? "Light" : "Dark"} Mode ON`;
    button.innerHTML = `Turn ${!state.lightMode ? "Light" : "Dark"} Mode`;
}

function updateClasses() {
    body.classList.toggle("dark-mode", !state.lightMode);
    h1.classList.toggle("dark-mode", !state.lightMode);
    button.classList.toggle("dark-mode", !state.lightMode);
    footer.classList.toggle("dark-mode", !state.lightMode);
}

button.addEventListener("click", toggleLightDarkMode);

toggleLightDarkMode();
