function switchTheme(e, mode) {
  const antiMode = mode === "light" ? "dark" : "light";
  if (mode === "light" || mode === "dark")
  {
    document.documentElement.setAttribute("data-bs-theme", mode);
    localStorage.setItem("mode", mode);
    e.setAttribute("disabled", "true");
    document
      .getElementById(`${antiMode}-toggle`)
      .removeAttribute("disabled");
  }
}