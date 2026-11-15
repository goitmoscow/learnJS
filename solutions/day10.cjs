"use strict";

// Решения преподавателю, для разбора после самостоятельной попытки.

// 1. Сумма цифр строки
function sumDigits(text) { let sum = 0; for (const digit of text) sum += Number(digit); return sum; }

// 2. Названия доступных товаров
function inStockNames(items) { return items.filter((x) => x.quantity > 0).map((x) => x.name); }

// 3. Самое длинное слово
function longestWord(text) { const words = text.trim().split(" ").filter((w) => w !== ""); let longest = ""; for (const word of words) if (word.length > longest.length) longest = word; return longest; }

// 4. Дополнительно: общие числа
function commonNumbers(first, second) { const result = []; for (const n of first) if (second.includes(n) && !result.includes(n)) result.push(n); return result; }

module.exports = { sumDigits, inStockNames, longestWord, commonNumbers };
