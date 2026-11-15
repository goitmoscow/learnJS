"use strict";

// Запуск: node examples/day03.js

{
  for (let i = 0; i < 3; i += 1) {
    console.log(i);
  }
}

{
  function sumTo(n) {
    let sum = 0;
    for (let i = 1; i <= n; i += 1) {
      sum += i;
    }
    return sum;
  }
  console.log(sumTo(4));
}

{
  const word = "кот";
  console.log(word.length);
  for (let i = 0; i < word.length; i += 1) {
    console.log(word[i]);
  }
}

{
  const scores = [10, 20, 30];
  let sum = 0;
  for (let i = 0; i < scores.length; i += 1) {
    sum += scores[i];
  }
  console.log(sum);
}

{
  let left = 3;
  while (left > 0) {
    console.log(left);
    left -= 1;
  }
}

{
  const numbers = [2, -1, 0, 4];
  let count = 0;
  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] > 0) count += 1;
  }
  console.log(count);
}

{
  function showCheckpoints(note) {
    for (let point = 18; point >= 6; point -= 6) {
      console.log(point);
    }
    console.log(note);
  }
  showCheckpoints("Проверка закончена");
}

{
  const word = "abcdef";
  let result = "";
  for (let i = 0; i < word.length; i += 1) {
    if (i % 3 === 2) {
      result += word[i].toUpperCase();
    } else {
      result += word[i];
    }
  }
  console.log(result);
}
