// День 5: Callback и методы массивов
// Условия и примеры: ../day05.md
// Скопируйте заготовку в JavaScript-песочницу, например https://trycode.pw/
// Или решите задачу в этом файле и запустите из корня репозитория: node practice/day05.js
// После решения вызовите функцию с аргументами из урока и выведите результат через console.log.

// 1. Удвоить числа
// Верните новый массив, в котором каждое число удвоено. Используйте map.
function doubleAll(numbers) {
  // Напишите решение.
}

// 2. Оставить чётные
// Верните новый массив всех чётных чисел. Используйте filter.
function keepEven(numbers) {
  // Напишите решение.
}

// 3. Первое число выше порога
// Верните первое число, которое строго больше limit. Если его нет, верните undefined.
function firstAbove(numbers, limit) {
  // Напишите решение.
}

// 4. Цены с надбавкой
// Верните новый массив цен с надбавкой percent процентов. Все входные цены неотрицательные, percent целое от 0 до 100.
function addTax(prices, percent) {
  // Напишите решение.
}

/* Самостоятельная подготовка ★

★ 1. Хотя бы одно и все
Напишите hasOverload(readings, limit) через some и allWithinLimit(readings, limit) через every. Массив содержит конечные числа; допустимо reading <= limit. Для [2, 9] и 5 результаты true и false; для [2, 5] и 5 — false и true. Исследуйте пустой массив и объясните оба результата.
Что исследовать: Найдите условия завершения some/every и их результаты для пустого массива. Сверьте один вариант с циклом.
Array.some: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
Array.every: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every

★ 2. Сумма квадратов
Напишите sumSquares(numbers) через reduce с начальным значением: [2, -3] → 13; [0] → 0; [] → 0. Массив содержит конечные числа. Составьте таблицу значений аккумулятора и сравните с решением циклом.
Что исследовать: Найдите параметры callback и роль initialValue. Проверьте отдельно, что произойдёт с пустым массивом без начального значения.
Array.reduce: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

Запишите поисковый запрос, ссылку, объяснение и собственные проверки.
Подробный порядок: guides/self-study.md.
*/
