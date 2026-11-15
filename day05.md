# День 5. Callback и методы массивов

## Результат занятия

- Передать функцию как значение
- Применить map, filter и find
- Выбрать метод по типу результата

Что уже нужно знать: Обычные функции, return, массивы и обход циклом.

## Разминка

Как получить из [1, 2, 3] массив удвоенных чисел через цикл? Какие шаги в решении повторяются?

## 1. Функция как значение

Функцию можно передать другой функции. Переданная функция называется callback, когда принимающий код её вызывает.

Вызов functionName() и передача functionName означают разные действия.

```javascript
function double(number) {
  return number * 2;
}
function apply(value, operation) {
  return operation(value);
}
console.log(apply(5, double));
```

Ожидаемый вывод:

```text
10
```

## 2. Стрелочная запись

Стрелочная функция удобна для короткого преобразования. В записи без блока результат выражения возвращается автоматически.

Если после стрелки есть блок {}, для результата нужен явный return. Особенности this оставляем за рамками прекурса.

```javascript
const double = (number) => number * 2;
const triple = (number) => {
  return number * 3;
};
console.log(double(4));
console.log(triple(4));
```

Ожидаемый вывод:

```text
8
12
```

## 3. map: новый массив

map вызывает callback для каждого элемента и собирает его результаты в новый массив.

Возвращайте результат из callback. Сам map не меняет исходный массив, но код callback может изменить объекты.

```javascript
const numbers = [1, 2, 3];
const doubled = numbers.map((n) => n * 2);
console.log(doubled.join(", "));
console.log(numbers.join(", "));
```

Ожидаемый вывод:

```text
2, 4, 6
1, 2, 3
```

## 4. filter: отбор

filter возвращает новый массив элементов, для которых callback вернул истинноподобное значение.

Если совпадений нет, получится пустой массив. Порядок отобранных элементов сохраняется.

```javascript
const numbers = [-2, 0, 3, 7];
const positive = numbers.filter((n) => n > 0);
console.log(positive.join(", "));
console.log(positive.length);
```

Ожидаемый вывод:

```text
3, 7
2
```

## 5. find: одно значение

find возвращает первый подходящий элемент. Если совпадения нет, результат undefined.

Для выбора метода сначала спросите: нужен один элемент или список всех совпадений?

```javascript
const numbers = [3, 8, 10];
console.log(numbers.find((n) => n > 5));
console.log(numbers.find((n) => n > 20));
```

Ожидаемый вывод:

```text
8
undefined
```

## 6. forEach и результат

forEach вызывает callback для каждого элемента и сам возвращает undefined.

Возвращаемое значение callback игнорируется. Для построения нового массива обычно проще map.

```javascript
const numbers = [1, 2];
const result = numbers.forEach((n) => {
  console.log(n * 10);
  return n * 100;
});
console.log(result);
```

Ожидаемый вывод:

```text
10
20
undefined
```

## Самостоятельная практика

Назовите вход, выход и алгоритм. Напишите код и проверьте примеры. В день 1 используйте выражения, со дня 2 оформляйте решения как функции.

### Задача 1. Удвоить числа

Верните новый массив, в котором каждое число удвоено. Используйте map.

Имя функции: doubleAll.

Примеры:

- [1, 3]: [2, 6]
- []: []

### Задача 2. Оставить чётные

Верните новый массив всех чётных чисел. Используйте filter.

Имя функции: keepEven.

Примеры:

- [1, 2, 0, 5]: [2, 0]
- [1, 3]: []

### Задача 3. Первое число выше порога

Верните первое число, которое строго больше limit. Если его нет, верните undefined.

Имя функции: firstAbove.

Примеры:

- [3, 8, 10], 5: 8
- [1, 2], 2: undefined

### Задача 4. Цены с надбавкой

Верните новый массив цен с надбавкой percent процентов. Все входные цены неотрицательные, percent целое от 0 до 100.

Имя функции: addTax.

Примеры:

- [100, 200], 10: [110, 220]
- [], 20: []

## Самостоятельная подготовка ★

Две дополнительные задачи на поиск и применение информации. Сначала сформулируйте свой поисковый запрос, затем используйте статьи как отправную точку. [Как искать и оформлять результат](guides/self-study.md).

### ★ 1. Хотя бы одно и все

Напишите hasOverload(readings, limit) через some и allWithinLimit(readings, limit) через every. Массив содержит конечные числа; допустимо reading <= limit. Для [2, 9] и 5 результаты true и false; для [2, 5] и 5 — false и true. Исследуйте пустой массив и объясните оба результата.

Что исследовать: Найдите условия завершения some/every и их результаты для пустого массива. Сверьте один вариант с циклом.

Статьи: [Array.some](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some), [Array.every](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every).

### ★ 2. Сумма квадратов

Напишите sumSquares(numbers) через reduce с начальным значением: [2, -3] → 13; [0] → 0; [] → 0. Массив содержит конечные числа. Составьте таблицу значений аккумулятора и сравните с решением циклом.

Что исследовать: Найдите параметры callback и роль initialValue. Проверьте отдельно, что произойдёт с пустым массивом без начального значения.

Статьи: [Array.reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce).

## После занятия

Одну задачу решите двумя способами: циклом и методом массива. Сравните читаемость, вход и возвращаемый результат.

## Самопроверка

- Почему передаём double, а не double()?
- Чем find отличается от filter?
- Почему return внутри forEach не делает результатом новый массив?

Материалы: [примеры](examples/day05.js), [заготовки](practice/day05.js).

## Документация

- [Callback_function](https://developer.mozilla.org/en-US/docs/Glossary/Callback_function)
- [map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- [forEach](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
