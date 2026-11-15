"use strict";

// Запуск: скопируйте один блок { ... } в JavaScript-песочницу, например https://trycode.pw/
// Результат смотрите в выводе console.log.

{
  const name = "Анна";
  const upper = name.toUpperCase();
  console.log(upper);
  console.log(name);
}

{
  const input = "  JavaScript  ";
  const normalized = input.trim().toLowerCase();
  console.log(normalized);
  console.log(input.length);
}

{
  const text = "JavaScript";
  console.log(text.includes("Script"));
  console.log(text.includes("script"));
  console.log(text.slice(0, 4));
}

{
  const input = "  Анна  Олег ";
  const parts = input.trim().split(" ");
  const words = parts.filter((part) => part !== "");
  console.log(words.length);
  console.log(words[1]);
}

{
  const names = ["Анна", "Олег"];
  const line = names.join(", ");
  console.log(line);
  console.log(typeof line);
}

{
  function initials(fullName) {
    const words = fullName.trim().split(" ");
    const nonEmpty = words.filter((w) => w !== "");
    const letters = nonEmpty.map((w) => w[0].toUpperCase());
    return letters.join(".");
  }
  console.log(initials("  анна иванова "));
}

{
  const caption = "планета";
  const cursor = Math.floor(caption.length / 2);
  console.log(cursor);
  console.log(caption.slice(cursor - 1, cursor + 2));
  console.log("маршрут".slice(0, 50));
  console.log("план".slice(1, -1));
  console.log("".slice(0, 2));
}

{
  const code = "robot";
  const removedIndex = 2;
  const withoutOne = code.slice(0, removedIndex) + code.slice(removedIndex + 1);
  console.log(withoutOne);
  let selected = "";
  for (let i = 0; i < code.length; i += 1) {
    if (i % 3 !== 1) selected += code[i];
  }
  console.log(selected);
  console.log(code.indexOf("ro"));
  console.log(code.indexOf("x"));
}

{
  const label = "Секция";
  const position = 4;
  console.log(`${label}: место ${position}`);
  const record = "уровень:7.25";
  const separator = record.indexOf(":");
  const fragment = record.slice(separator + 1).trim();
  console.log(Number(fragment));
  console.log(Number("7.25level"));
  console.log(parseFloat("7.25level"));
}
