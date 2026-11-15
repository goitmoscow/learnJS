"use strict";

// Решения преподавателю, для разбора после самостоятельной попытки.

// 1. Последний элемент
function lastItem(items) { return items[items.length - 1]; }

// 2. Дополнить копию
function appendCopy(items, item) { const copy = items.slice(); copy.push(item); return copy; }

// 3. Количество выше порога
function countAbove(numbers, limit) { let count = 0; for (const number of numbers) if (number > limit) count += 1; return count; }

// 4. Удаление в копии
function removeAtCopy(items, index) { const copy = items.slice(); copy.splice(index, 1); return copy; }

module.exports = { lastItem, appendCopy, countAbove, removeAtCopy };
