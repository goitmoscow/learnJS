"use strict";

// Запуск: скопируйте один блок { ... } в JavaScript-песочницу, например https://trycode.pw/
// Результат смотрите в выводе console.log.

{
  const age = 17;
  if (age >= 18) {
    console.log("Доступ открыт");
  } else {
    console.log("Нужен взрослый");
  }
}

{
  const score = 82;
  if (score >= 90) {
    console.log("Отлично");
  } else if (score >= 60) {
    console.log("Зачёт");
  } else {
    console.log("Повторить");
  }
}

{
  const age = 20;
  const hasTicket = true;
  console.log(age >= 18 && hasTicket);
  console.log(false || "Гость");
  console.log(!true);
}

{
  console.log(Boolean(""));
  console.log(Boolean("0"));
  console.log(Boolean(0));
  console.log(Boolean([]));
}

{
  function double(number) {
    return number * 2;
  }
  const result = double(7);
  console.log(result);
  console.log(double(0));
}

{
  function add(a, b) {
    return a + b;
  }
  const total = add(2, 3);
  console.log(total + 10);
}

{
  console.log("черновик" && 0 && "готово");
  console.log("черновик" && "готово");
  console.log("" || "без названия" || "резерв");
  console.log(false || null);
  console.log(!!"запись");
  console.log(!!0);
}

{
  function showScope() {
    console.log(status);
    if (true) {
      var status = "в процессе";
      const label = "внутри блока";
      console.log(label);
    }
    console.log(status);
    // label здесь недоступна
  }
  showScope();
}

{
  function hoursToMinutes(hours) {
    if (!Number.isFinite(hours)) return undefined;
    return hours * 60;
  }
  console.log(hoursToMinutes(1.5));
  console.log(hoursToMinutes("1.5"));
  console.log(hoursToMinutes());
  console.log(hoursToMinutes(NaN));
}
