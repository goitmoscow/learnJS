"use strict";

// Запуск: скопируйте один блок { ... } в JavaScript-песочницу, например https://trycode.pw/
// Или запустите локально из корня репозитория: node examples/day10.js
// Результат смотрите в выводе console.log.

{
  function firstItem(items) {
    return items[0];
  }
  console.log(firstItem([7]));
  console.log(firstItem([]));
}

{
  const reading = -608;
  console.log(Number.isSafeInteger(reading));
  const digits = String(Math.abs(reading));
  console.log(digits);
  console.log(digits.length);
  console.log(Number(digits[1]));
  let rest = Math.abs(reading);
  while (rest > 0) {
    console.log(rest % 10);
    rest = Math.trunc(rest / 10);
  }
}
