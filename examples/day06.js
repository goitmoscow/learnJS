"use strict";

// Запуск: скопируйте один блок { ... } в JavaScript-песочницу, например https://trycode.pw/
// Или запустите локально из корня репозитория: node examples/day06.js
// Результат смотрите в выводе console.log.

{
  const user = {
    name: "Анна",
    age: 20
  };
  console.log(user.name);
  console.log(user.age);
}

{
  const user = { name: "Анна", age: 20 };
  const key = "name";
  console.log(user[key]);
  console.log(user.city);
}

{
  const user = { name: "Анна" };
  user.city = "Москва";
  user.name = "Ира";
  console.log(user.name);
  console.log(Object.hasOwn(user, "city"));
  delete user.city;
  console.log(Object.hasOwn(user, "city"));
}

{
  const first = { score: 1 };
  const alias = first;
  alias.score = 2;
  console.log(first.score);
  const copy = Object.assign({}, first);
  copy.score = 9;
  console.log(first === copy);
  console.log(first.score);
}

{
  const scores = { Анна: 10, Олег: 20 };
  console.log(Object.keys(scores).join(", "));
  let sum = 0;
  for (const value of Object.values(scores)) {
    sum += value;
  }
  console.log(sum);
}

{
  const users = [
    { name: "Анна", age: 20 },
    { name: "Олег", age: 16 }
  ];
  const adults = users.filter((u) => u.age >= 18);
  const names = adults.map((u) => u.name);
  console.log(names.join(", "));
}

{
  const card = { title: "Заметка" };
  const other = { title: "Заметка" };
  const alias = card;
  console.log(card === other);
  console.log(card === alias);
  console.log(card.title === other.title);
}
