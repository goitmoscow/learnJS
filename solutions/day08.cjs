"use strict";

// Решения преподавателю, для разбора после самостоятельной попытки.

// 1. Сумма чётных
function sumEven(numbers) { let sum = 0; for (const n of numbers) if (n % 2 === 0) sum += n; return sum; }

// 2. Гласные в тексте
function countVowels(text) { let count = 0; for (const letter of text.toLowerCase()) if ("aeiou".includes(letter)) count += 1; return count; }

// 3. Максимум в массиве
function maxNumber(numbers) { if (numbers.length === 0) return undefined; let max = numbers[0]; for (const n of numbers) if (n > max) max = n; return max; }

// 4. Убрать повторы
function uniqueNumbers(numbers) { const result = []; for (const n of numbers) if (!result.includes(n)) result.push(n); return result; }

module.exports = { sumEven, countVowels, maxNumber, uniqueNumbers };
