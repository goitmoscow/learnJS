"use strict";

// Решения преподавателю, для разбора после самостоятельной попытки.

// 1. Удвоить числа
function doubleAll(numbers) { return numbers.map((n) => n * 2); }

// 2. Оставить чётные
function keepEven(numbers) { return numbers.filter((n) => n % 2 === 0); }

// 3. Первое число выше порога
function firstAbove(numbers, limit) { return numbers.find((n) => n > limit); }

// 4. Цены с надбавкой
function addTax(prices, percent) { return prices.map((price) => price + price * percent / 100); }

module.exports = { doubleAll, keepEven, firstAbove, addTax };
