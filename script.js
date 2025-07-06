// Theme Toggle
const toggleBtn = document.getElementById("toggle-theme");
toggleBtn.onclick = () => {
  const body = document.body;
  if (body.classList.contains("light")) {
    body.classList.remove("light");
    body.classList.add("dark");
  } else {
    body.classList.remove("dark");
    body.classList.add("light");
  }
};