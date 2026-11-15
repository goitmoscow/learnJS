"use strict";

// Решения преподавателю, для разбора после самостоятельной попытки.

// 1. Стоимость покупки
function basketTotal(price, quantity) { return price * quantity; }

// 2. Цена со скидкой
function discountPrice(price, discountPercent) { return price * (1 - discountPercent / 100); }

// 3. Числа из текста
function addTextNumbers(a, b) { return Number(a) + Number(b); }

// 4. Проверка чётности
function isEven(number) { return number % 2 === 0; }

module.exports = { basketTotal, discountPrice, addTextNumbers, isEven };
