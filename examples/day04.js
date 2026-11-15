"use strict";

// Запуск: скопируйте один блок { ... } в JavaScript-песочницу, например https://trycode.pw/
// Результат смотрите в выводе console.log.

{
  const names = ["Анна", "Олег"];
  names[1] = "Ира";
  console.log(names[0]);
  console.log(names[1]);
  console.log(names.length);
}

{
  const queue = ["Анна"];
  console.log(queue.push("Олег"));
  console.log(queue.pop());
  console.log(queue.length);
}

{
  const prices = [10, 20, 5];
  let total = 0;
  for (const price of prices) {
    total += price;
  }
  console.log(total);
}

{
  const original = [10, 20, 30];
  const copy = original.slice();
  copy.push(40);
  console.log(original.length);
  console.log(copy.length);
  console.log(original.slice(1, 2)[0]);
}

{
  const letters = ["а", "б", "в"];
  const removed = letters.splice(1, 1, "я");
  console.log(removed[0]);
  console.log(letters[1]);
  console.log(letters.length);
}

{
  function findIndexOf(numbers, target) {
    for (let i = 0; i < numbers.length; i += 1) {
      if (numbers[i] === target) return i;
    }
    return -1;
  }
  console.log(findIndexOf([4, 8], 8));
}

{
  const source = [6, 9, 12];
  const alias = source;
  console.log(source === alias);
  alias.push(15);
  console.log(source.length);
  const backwards = [];
  for (let i = source.length - 1; i >= 0; i -= 1) {
    backwards.push(source[i]);
  }
  console.log(backwards.join(","));
  console.log(source.join(","));
  console.log(Array.isArray(source));
}
