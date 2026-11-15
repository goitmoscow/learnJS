"use strict";

// Запуск: node examples/day09.js

{
  const items = [
    { name: "Чай", available: true },
    { name: "Кофе", available: false }
  ];
  const selected = items.filter((x) => x.available);
  const names = selected.map((x) => x.name);
  console.log(names.join(", "));
}

{
  function addNumbers(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
      return "Некорректные данные";
    }
    return a + b;
  }
  console.log(addNumbers("2", 3));
}

{
  const names = [];
  if (names.length === 0) {
    console.log("Нет участников");
  } else {
    console.log(names.join(", "));
  }
}

{
  const original = [10, 2, 30];
  const sorted = original.slice().sort((a, b) => a - b);
  console.log(original.join(", "));
  console.log(sorted.join(", "));
}
