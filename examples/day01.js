"use strict";

// Запуск: скопируйте один блок { ... } в JavaScript-песочницу, например https://trycode.pw/
// Или запустите локально из корня репозитория: node examples/day01.js
// Результат смотрите в выводе console.log.


// 1. Код и результат
{
  console.log("Привет, JavaScript!");
  console.log(2 + 3);
}

// 2. const и let
{
  const price = 150;
  let quantity = 2;
  quantity = quantity + 1;
  console.log(price * quantity);
}

// 3. Все восемь типов данных
{
  let value = 42;
  console.log(typeof value);
  value = "42";
  console.log(typeof value);
}

// number, string и boolean
{
  console.log(typeof 42);
  console.log(typeof "42");
  console.log(typeof true);
}

// undefined и null
{
  let destination;
  const selectedRoute = null;
  console.log(destination);
  console.log(selectedRoute);
  console.log(destination === selectedRoute);
}

// bigint: большие целочисленные ID из базы
{
  const idText = "9007199254740993";
  const previousText = "9007199254740992";
  console.log(Number(idText) === Number(previousText));
  const id = BigInt(idText);
  const previousId = BigInt(previousText);
  console.log(id === previousId);
  console.log(String(id + 1n));
}

// symbol: служебная метка без конфликта имён
{
  const serviceId = Symbol("id");
  const anotherServiceId = Symbol("id");
  const user = { id: "public-42" };
  user[serviceId] = "service-17";
  console.log(user.id);
  console.log(user[serviceId]);
  console.log(serviceId === anotherServiceId);
}

// object: свойства одной сущности
{
  const route = { name: "Центр", stops: 3 };
  console.log(typeof route);
  console.log(route.stops);
  console.log(Array.isArray([]));
  console.log(typeof console.log);
}

// 4. Арифметика
{
  const price = 120;
  const count = 3;
  console.log(price * count);
  console.log((price * count) - 50);
  console.log(7 % 2);
}

// 5. Строка и число
{
  console.log("12" + 3);
  console.log(Number("12") + 3);
  console.log(Number("кот"));
  console.log(String(42));
}

// 6. Сравнение значений
{
  console.log(5 === 5);
  console.log("5" === 5);
  console.log(10 >= 8);
  console.log(7 !== 7);
}

// 7. Особенности typeof
{
  console.log(typeof null);
  console.log(typeof 42n);
  console.log(typeof Symbol("ticket"));
  console.log(typeof []);
  console.log(typeof console.log);
}

// 8. Преобразование и числовые ограничения
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
