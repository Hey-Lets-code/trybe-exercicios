window.onload = changeBorder();
let classeDeBorda;
function changeBorder() {
  const borda = document.querySelector(".borda");
  const bordaDupla = document.querySelector(".borda-dupla");
  const bordaArredondada = document.querySelector(".borda-arredondada");
  const bordaPontilhada = document.querySelector(".borda-pontilhada");
  const month = document.querySelector(".month-container");
  const week = document.querySelector(".week-days-container");
  const days = document.querySelector(".days-container");
  month.addEventListener("click", () => {
    month.classList.add(classeDeBorda);
  });
  week.addEventListener("click", () => {
    week.classList.add(classeDeBorda);
  });
  days.addEventListener("click", () => {
    days.classList.add(classeDeBorda);
  });
  borda.addEventListener("click", () => {
    classeDeBorda = borda.className;
  });
  bordaDupla.addEventListener("click", () => {
    classeDeBorda = bordaDupla.className;
  });
  bordaArredondada.addEventListener("click", () => {
    classeDeBorda = bordaArredondada.className;
  });
  bordaPontilhada.addEventListener("click", () => {
    classeDeBorda = bordaPontilhada.className;
  });
}
