const extractMode = (str) => str.split(' ')[0];
const defineAntiMode = (str) => str.toLowerCase() === "light" ? "dark" : "light";
const makeTitleCase = (str) => str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
function toggleMode(e) {
  const mode = extractMode(e.value);
  const antiMode = defineAntiMode(mode);
  document.querySelector("body").setAttribute("data-bs-theme", mode.toLowerCase());
  localStorage.setItem("mode", mode);
  e.value = `${makeTitleCase(antiMode)} Mode`;
  e.classList.remove(`bg-${mode.toLowerCase()}`, `text-${antiMode.toLowerCase()}`, `border-${antiMode.toLowerCase()}`);
  e.classList.add(`bg-${antiMode.toLowerCase()}`, `text-${mode.toLowerCase()}`, `border-${mode.toLowerCase()}`);
}