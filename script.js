const value = prompt("Введіть число:");

console.log(`Ви ввели число: ${value}`);

const number = Number(value);

if (number > 0) {
  alert("Число додатнє");
  console.log("Число додатнє");
} else if (number < 0) {
  alert("Число від’ємне");
  console.log("Число від’ємне");
} else if (number === 0) {
  alert("Число дорівнює нулю");
  console.log("Число дорівнює нулю");
} else {
  alert("Ви ввели некоректне значення");
  console.log("Ви ввели некоректне значення");
}
