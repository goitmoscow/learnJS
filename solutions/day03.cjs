"use strict";

// Решения преподавателю, для разбора после самостоятельной попытки.

// 1. Сумма от 1 до n
function sumTo(n) { let sum = 0; for (let i = 1; i <= n; i += 1) sum += i; return sum; }

// 2. Количество символов
function countChar(text, char) { let count = 0; for (let i = 0; i < text.length; i += 1) if (text[i] === char) count += 1; return count; }

// 3. Сумма положительных
function sumPositive(numbers) { let sum = 0; for (let i = 0; i < numbers.length; i += 1) if (numbers[i] > 0) sum += numbers[i]; return sum; }

// 4. Строка наоборот
function reverseText(text) { let result = ""; for (let i = text.length - 1; i >= 0; i -= 1) result += text[i]; return result; }

module.exports = { sumTo, countChar, sumPositive, reverseText };
