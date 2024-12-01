# 20 функций JavaScript, которые вы, вероятно, никогда не использовали

## 1. Оператор нулевого слияния

Оператор нулевого слияния `??` используется для предоставления значения по умолчанию на случай, если значение переменной будет равно `null` или `undefined`.

```javascript
let foo = null;
let bar = foo ?? 'default value';
console.log(bar); // Output: 'default value'
```

Используйте оператор нулевого слияния для обработки случаев, когда могут появиться значения null или `undefined`. Благодаря значениям по умолчанию ваш код будет работать без проблем.

## 2. Оператор опциональной последовательности

Оператор `?`. обеспечивает безопасный доступ к глубоко вложенным свойствам объектов. Он позволяет избежать ошибок во время выполнения, которые могут возникнуть, если какое-нибудь из промежуточных свойств не существует.

```javascript
const user = {
  profile: {
    name: 'Alice',
  },
};
const userProfileName = user.profile?.name;
console.log(userProfileName); // Output: 'Alice'
const userAccountName = user.account?.name;
console.log(userAccountName); // Output: undefined
```

Используйте оператор опциональной последовательности, чтобы избежать ошибок при обращении к свойствам объектов, потенциально равных `null` или `undefined`. Это сделает ваш код более надежным.

## 3. Числовые разделители

Числовые разделители `_` делают большие числа более читаемыми, визуально разделяя цифры.

```javascript
const largeNumber = 1_000_000;
console.log(largeNumber); // Output: 1000000
```

Используйте числовые разделители, чтобы улучшить читаемость больших чисел в коде, особенно при финансовых расчетах или работе с большими наборами данных.

## 4. Promise.AllSettled

`Promise.allSettled` ждет выполнения всех промисов (т. е. пока каждый из них будет либо выполнен, либо отклонен), и возвращает массив объектов, описывающих результат.

```javascript
const promises = [Promise.resolve('Success'), Promise.reject('Error'), Promise.resolve('Another Success')];

Promise.allSettled(promises).then((results) => {
  results.forEach((result) => console.log(result));
});
// Output:
// { status: 'fulfilled', value: 'Success' }
// { status: 'rejected', reason: 'Error' }
// { status: 'fulfilled', value: 'Another Success' }
```

Используйте `Promise.allSettled`, когда вам нужно обработать несколько промисов и гарантировать обработку всех результатов, независимо от результатов выполнения каждого отдельного промиса.

## 5. Приватные поля класса

Приватные поля класса — это свойства, которые могут быть доступны и изменены только в пределах класса, в котором они объявлены.

```javascript
class MyClass {
  #privateField = 42;

  getPrivateField() {
    return this.#privateField;
  }
}

const instance = new MyClass();
console.log(instance.getPrivateField()); // Output: 42
console.log(instance.#privateField); // Uncaught Private name #privateField is not defined. Output: 1000000
```

Используйте приватные поля класса для инкапсуляции данных внутри класса. Это гарантирует, что конфиденциальные данные не будут открыты или изменены за пределами класса.

## 6. Логические операторы присваивания

Логические операторы присваивания (`&&=`, `||=`, `??=`) объединяют логические операторы и присваивание, обеспечивая краткий способ обновления переменных на основе условия.

```javascript
let a = true;
let b = false;

a &&= 'Assigned if true';
b ||= 'Assigned if false';

console.log(a); // Output: 'Assigned if true'
console.log(b); // Output: 'Assigned if false' Output: 1000000
```

Используйте логические операторы присваивания, чтобы упростить условные присваивания и сделать ваш код более читаемым и лаконичным.

## 7. Метки для циклов и блоков

Метки — это идентификаторы, за которыми следует двоеточие. Они используются для обозначения циклов или блоков, чтобы на них можно было ссылаться в операторах `break` или `continue`.

```javascript
outerLoop: for (let i = 0; i < 3; i++) {
  console.log(`Outer loop iteration ${i}`);
  for (let j = 0; j < 3; j++) {
    if (j === 1) {
      break outerLoop; // Break out of the outer loop
    }
    console.log(`  Inner loop iteration ${j}`);
  }
}
// Output:
// Outer loop iteration 0
//   Inner loop iteration 0 Output: 'Assigned if false' Output: 1000000
```

```javascript
labelBlock: {
  console.log('This will be printed');
  if (true) {
    break labelBlock; // Exit the block
  }
  console.log('This will not be printed');
}
// Output:
// This will be printed
```

Используйте метки для управления сложным поведением циклов. Это упрощает управление вложенными циклами и повышает ясность кода.

## 8. Теговые шаблоны

Теговые шаблоны позволяют разбирать шаблонные литералы с помощью функции, обеспечивая пользовательскую обработку строковых литералов.

Пример 1:

```javascript
function logWithTimestamp(strings, ...values) {
  const timestamp = new Date().toISOString();
  return (
    `[${timestamp}] ` +
    strings.reduce((result, str, i) => {
      return result + str + (values[i] || '');
    })
  );
}
const user = 'JohnDoe';
const action = 'logged in';
console.log(logWithTimestamp`User ${user} has ${action}.`);
// Outputs: [2024-07-10T12:34:56.789Z] User JohnDoe has logged in.
```

Пример 2:

```javascript
function validate(strings, ...values) {
  values.forEach((value, index) => {
    if (typeof value !== 'string') {
      throw new Error(`Invalid input at position ${index + 1}: Expected a string`);
    }
  });
  return strings.reduce((result, str, i) => {
    return result + str + (values[i] || '');
  });
}
try {
  const validString = validate`Name: ${'Alice'}, Age: ${25}`;
  console.log(validString); // This will throw an error
} catch (error) {
  console.error(error.message); // Outputs: Invalid input at position 2: Expected a string
}
```

Используйте теговые шаблоны для расширенной обработки строк, например для создания безопасных шаблонов HTML или локализации строк.

## 9. Побитовые операторы для быстрых вычислений

Побитовые операторы в JavaScript выполняют операции над двоичными представлениями чисел. Они часто используются для низкоуровневых задач программирования, но могут быть полезны и для быстрых математических операций.

Список побитовых операторов:

- `&` (AND)
- `|` (OR)
- `^` (XOR)
- `~` (NOT)
- `<<` (сдвиг влево)
- `>>` (сдвиг вправо)
- `>>>` (беззнаковый сдвиг вправо)

**Пример 1**. С помощью оператора AND можно проверить, является ли число четным или нечетным.

```javascript
const isEven = (num) => (num & 1) === 0;
const isOdd = (num) => (num & 1) === 1;

console.log(isEven(4)); // Outputs: true
console.log(isOdd(5)); // Outputs: true
```

**Пример 2**. Операторы сдвига влево (`<<`) и сдвига вправо (`>>`) можно использовать для умножения и деления на степень 2.

```javascript
const multiplyByTwo = (num) => num << 1;
const divideByTwo = (num) => num >> 1;

console.log(multiplyByTwo(5)); // Outputs: 10
console.log(divideByTwo(10)); // Outputs: 5
```

**Пример 3**. С помощью оператора `AND` можно проверить, является ли число степенью 2.

```javascript
const isPowerOfTwo = (num) => num > 0 && (num & (num - 1)) === 0;

console.log(isPowerOfTwo(16)); // Outputs: true
console.log(isPowerOfTwo(18)); // Outputs: false
```

Используйте побитовые операторы для критически важных приложений, где требуется низкоуровневое манипулирование двоичными данными, или для быстрых математических операций.

## 10. Оператор in для проверки свойств

Оператор `in` проверяет, существует ли свойство в объекте.

```javascript
const obj = { name: 'Alice', age: 25 };
console.log('name' in obj); // Output: true
console.log('height' in obj); // Output: false
```

Использование оператора `in` для проверки существования свойств в объектах, гарантирует, что ваш код будет изящно обрабатывать объекты с отсутствующими свойствами.

## 11. Оператор debugger

Оператор `debugger` вызывает любые доступные функции отладки, например, установку точки останова в коде.

```javascript
function checkValue(value) {
  debugger; // Execution will pause here if a debugger is available
  return value > 10;
}
checkValue(15);
```

Используйте оператор `debugger` во время разработки, чтобы приостанавливать выполнение и контролировать поведение кода. Это поможет вам эффективнее выявлять и исправлять ошибки.

## 12. Присваивание по цепочке

Присваивание по цепочке используется для назначения нескольким переменным одинакового значения.

```javascript
let a, b, c;
a = b = c = 10;
console.log(a, b, c); // Output: 10 10 10
```

Использование присваивания по цепочке для инициализации нескольких переменных одним и тем же значением сокращает избыточность кода.

## 13. Динамические имена функций

Динамические имена функций позволяют определять функции с именами, вычисляемыми во время выполнения.

```javascript
const funcName = 'dynamicFunction';
const obj = {
  [funcName]() {
    return 'This is a dynamic function';
  },
};

console.log(obj.dynamicFunction()); // Output: 'This is a dynamic function'
```

Создание функций с именами, зависящими от данных, полученных во время выполнения, повышает гибкость и удобство повторного использования кода.

## 14. Получение аргументов функции

Объект `arguments` — это объект типа массива, который содержит аргументы, переданные функции.

```javascript
function sum() {
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
}

console.log(sum(1, 2, 3)); // Outputs: 6
```

Использование объекта `arguments` для доступа ко всем аргументам, переданным функции, полезно для функций с аргументами переменной длины.

## 15. Унарный оператор +

Унарный оператор `+` преобразует свой операнд в число.

```javascript
console.log(+'abc'); // Outputs: NaN
console.log(+'123'); // Outputs: 123
console.log(+'45.67'); // Outputs: 45.67 (converted to a number)

console.log(+true); // Outputs: 1
console.log(+false); // Outputs: 0

console.log(+null); // Outputs: 0
console.log(+undefined); // Outputs: NaN
```

Используйте унарный оператор для быстрого преобразования типов, особенно при работе с пользовательским вводом или данными из внешних источников.

## 16. Оператор возведения в степень

Оператор возведения в степень `**` возводит число (левый операнд) в степень (правый операнд).

```javascript
const base = 2;
const exponent = 3;
const result = base ** exponent;
console.log(result); // Output: 8
```

Используйте оператор `**` для получения кратких и читабельных математических выражений, например, в научных или финансовых расчетах.

## 17. Свойства функций

Функции в JavaScript являются объектами и могут иметь свойства.

**Пример 1:**

```javascript
function myFunction() {}
myFunction.description = 'This is a function with a property';
console.log(myFunction.description); // Output: 'This is a function with a property'
```

**Пример 2:**

```javascript
function trackCount() {
  if (!trackCount.count) {
    trackCount.count = 0;
  }
  trackCount.count++;
  console.log(`Function called ${trackCount.count} times.`);
}
trackCount(); // Outputs: Function called 1 times.
trackCount(); // Outputs: Function called 2 times.
trackCount(); // Outputs: Function called 3 times.
```

Используйте свойства функции для хранения метаданных или настроек, связанных с функцией. Это повысит гибкость и организованность вашего кода.

## 18. Геттеры и сеттеры объектов

Геттеры и сеттеры — это методы, которые получают или устанавливают значение свойства объекта.

```javascript
const obj = {
  firstName: 'John',
  lastName: 'Doe',
  _age: 0, // Conventionally use an underscore for the backing property
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  set age(newAge) {
    if (newAge >= 0 && newAge <= 120) {
      this._age = newAge;
    } else {
      console.log('Invalid age assignment');
    }
  },
  get age() {
    return this._age;
  },
};

console.log(obj.fullName); // Outputs: 'John Doe'
obj.age = 30; // Setting the age using the setter
console.log(obj.age); // Outputs: 30

obj.age = 150; // Attempting to set an invalid age
// Outputs: 'Invalid age assignment'
console.log(obj.age); // Still Outputs: 30 (previous valid value remains)
```

Используйте геттеры и сеттеры для инкапсуляции внутреннего состояния объекта, чтобы обеспечить контролируемый способ доступа к свойствам и изменения свойств.

## 19. Двойной восклицательный знак

Оператор логического отрицания `!`, повторенный дважды, преобразует значение в его логический (булев) эквивалент.

```javascript
const value = 'abc';
const value1 = 42;
const value2 = '';
const value3 = null;
const value4 = undefined;
const value5 = 0;

console.log(!!value); // Outputs: true (truthy value)
console.log(!!value1); // Outputs: true (truthy value)
console.log(!!value2); // Outputs: false (falsy value)
console.log(!!value3); // Outputs: false (falsy value)
console.log(!!value4); // Outputs: false (falsy value)
console.log(!!value5); // Outputs: false (falsy value)
```

Использование `!!` для быстрого преобразования значений в булевы значения полезно в условных выражениях.

## 20. Объекты Map и Set

`Map` и `Set` — это коллекции с уникальными свойствами. `Map` хранит пары ключ-значение, а `Set` — уникальные значения.

**Пример 1:**

```javascript
// Creating a Map
const myMap = new Map();

// Setting key-value pairs
myMap.set('key1', 'value1');
myMap.set(1, 'value2');
myMap.set({}, 'value3');

// Getting values from a Map
console.log(myMap.get('key1')); // Outputs: 'value1'
console.log(myMap.get(1)); // Outputs: 'value2'
console.log(myMap.get({})); // Outputs: undefined (different object reference)
```

**Пример 2:**

```javascript
// Creating a Set
const mySet = new Set();

// Adding values to a Set
mySet.add('apple');
mySet.add('banana');
mySet.add('apple'); // Duplicate value, ignored in a Set

// Checking size and values
console.log(mySet.size); // Outputs: 2 (only unique values)
console.log(mySet.has('banana')); // Outputs: true

// Iterating over a Set
mySet.forEach((value) => {
  console.log(value);
});
// Outputs:
// 'apple'
// 'banana'
```

Используйте `Map` для коллекций пар ключ-значение с любым типом данных в качестве ключей, а `Set` — для коллекций уникальных значений. Это обеспечит эффективный способ управления данными.
