let number = 0;

function updateNumber(newNumber) {
  const num = document.querySelector(".number");
  num.innerHTML = newNumber;
}

document.getElementById("add").addEventListener('click', () => {
  updateNumber(number++);
});
document.getElementById("sub").addEventListener('click', () => {
  updateNumber(number--);
});
document.getElementById("reset").addEventListener('click', () => {
  updateNumber(0);
});