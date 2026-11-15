"use strict";

// Запуск: node examples/day01.js

{
  console.log("Привет, JavaScript!");
  console.log(2 + 3);
}

{
  const price = 150;
  let quantity = 2;
  quantity = quantity + 1;
  console.log(price * quantity);
}

{
  console.log(typeof 42);
  console.log(typeof "42");
  console.log(typeof true);
  let answer;
  console.log(answer);
}

{
  const price = 120;
  const count = 3;
  console.log(price * count);
  console.log((price * count) - 50);
  console.log(7 % 2);
}

{
  console.log("12" + 3);
  console.log(Number("12") + 3);
  console.log(Number("кот"));
  console.log(String(42));
}

{
  console.log(5 === 5);
  console.log("5" === 5);
  console.log(10 >= 8);
  console.log(7 !== 7);
}

{
  console.log(typeof null);
  console.log(typeof 42n);
  console.log(typeof Symbol("ticket"));
  console.log(typeof []);
  console.log(typeof console.log);
}

{
  console.log(Number("18rem"));
  console.log(parseFloat("18rem"));
  console.log(parseInt("18.7rem", 10));
  console.log(+"6.5");
  console.log(Number("  "));
  console.log(Number.isNaN(Number("нет")));
  console.log(-(-8));
  console.log(1 / 0);
}
