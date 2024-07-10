// phew… not a lot going on here. Please add some code!
console.clear();

const bmToggle = document.querySelector('[data-js="inner-label"]');

bmToggle.addEventListener("click", () => {
  bmToggle.classList.toggle("inner-label--active");
  console.log("toggled between white/red");
});
