# День 5: Объекты и манипулирование ими в JavaScript

## Введение в объекты

Объекты в JavaScript используются для хранения множества значений как свойств с именами.

### Создание объекта

#### Пример создания объекта

```javascript
let person = {
  name: 'Alice',
  age: 25,
  greet: function () {
    console.log('Hello, ' + this.name);
  },
};
```

### Доступ к свойствам и методам

#### Пример доступа к свойству

```javascript
console.log(person.name); // Выводит: Alice
person.greet(); // Вызывает метод greet, выводит: Hello, Alice
```

## Манипулирование объектами

### Добавление и удаление свойств

#### Примеры удаления и добавления свойства

```javascript
person.job = 'Developer'; // Добавляет свойство job к объекту person
delete person.age; // Удаляет свойство age из объекта person
```

### Использование `Object.keys`, `Object.values`, `Object.entries`

```javascript
Object.keys(person); // возвращает массив ключей объекта.
Object.values(person); // возвращает массив значений свойств объекта.
Object.entries(person); // возвращает массив пар [ключ, значение].
```

## Прототипы и наследование

Прототип объекта - это объект, от которого наследуются свойства и методы.

### Установка прототипа с использованием Object.create

#### Пример установки прототипа

```javascript
let employee = Object.create(person);
employee.job = 'Software Engineer';
console.log(employee.name); // Выводит: Alice, наследуется от person
```

## Встроенные объекты и методы

### Работа с датами

```javascript
let now = new Date();
console.log(now.getFullYear()); // Выводит текущий год
```

### Математические операции

```javascript
console.log(Math.random()); // Выводит случайное число между 0 и 1
console.log(Math.max(10, 20)); // Выводит большее число, в этом случае 20
```