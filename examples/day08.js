"use strict";

// Запуск: скопируйте один блок { ... } в JavaScript-песочницу, например https://trycode.pw/
// Или запустите локально из корня репозитория: node examples/day08.js
// Результат смотрите в выводе console.log.

{
  function countPositive(numbers) {
    let count = 0;
    for (const n of numbers) {
      if (n > 0) count += 1;
    }
    return count;
  }
  console.log(countPositive([]));
}

{
  const numbers = [2, 3, 4];
  let product = 1;
  for (const n of numbers) {
    product *= n;
  }
  console.log(product);
}

{
  const input = [1, 2];
  const output = input.map((n) => n + 1);
  console.log(input.join(","));
  console.log(output.join(","));
  console.log(input === output);
}

{
  const numbers = [2, 4];
  let sum = 0;
  for (let i = 0; i < numbers.length; i += 1) {
    sum += numbers[i];
    console.log(i, sum);
  }
}

{
  const number = 14;
  const divisors = [];
  for (let candidate = 1; candidate <= number; candidate += 1) {
    if (number % candidate === 0) divisors.push(candidate);
  }
  console.log(divisors.join(","));
  console.log(divisors.length);
}

{
  for (let row = 0; row < 2; row += 1) {
    let line = "";
    for (let column = 0; column < 3; column += 1) {
      if (column > 0) line += " | ";
      line += row + column;
    }
    console.log(line);
  }
}

{
  let previous = 2;
  let current = 5;
  console.log(0, previous);
  console.log(1, current);
  for (let index = 2; index <= 4; index += 1) {
    const next = previous + current;
    previous = current;
    current = next;
    console.log(index, current);
  }
}

{
  const temperatures = [7, -6, 3, -9];
  let lowest = temperatures[0];
  for (let i = 1; i < temperatures.length; i += 1) {
    if (temperatures[i] < lowest) lowest = temperatures[i];
  }
  console.log(lowest);
}
