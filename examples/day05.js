"use strict";

// Запуск: скопируйте один блок { ... } в JavaScript-песочницу, например https://trycode.pw/
// Или запустите локально из корня репозитория: node examples/day05.js
// Результат смотрите в выводе console.log.

{
  function double(number) {
    return number * 2;
  }
  function apply(value, operation) {
    return operation(value);
  }
  console.log(apply(5, double));
}

{
  const double = (number) => number * 2;
  const triple = (number) => {
    return number * 3;
  };
  console.log(double(4));
  console.log(triple(4));
}

{
  const numbers = [1, 2, 3];
  const doubled = numbers.map((n) => n * 2);
  console.log(doubled.join(", "));
  console.log(numbers.join(", "));
}

{
  const numbers = [-2, 0, 3, 7];
  const positive = numbers.filter((n) => n > 0);
  console.log(positive.join(", "));
  console.log(positive.length);
}

{
  const numbers = [3, 8, 10];
  console.log(numbers.find((n) => n > 5));
  console.log(numbers.find((n) => n > 20));
}

{
  const numbers = [1, 2];
  const result = numbers.forEach((n) => {
    console.log(n * 10);
    return n * 100;
  });
  console.log(result);
}
