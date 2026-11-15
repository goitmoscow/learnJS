"use strict";

// Решения преподавателю, для разбора после самостоятельной попытки.

// 1. Проверка возраста
function canEnter(age) { return age >= 18; }

// 2. Большее число
function maxOfTwo(a, b) { if (a >= b) return a; return b; }

// 3. Цена билета
function ticketPrice(age) { if (age < 7) return 0; if (age < 18) return 100; return 200; }

// 4. Число в диапазоне
function isInRange(number, min, max) { return number >= min && number <= max; }

module.exports = { canEnter, maxOfTwo, ticketPrice, isInRange };
