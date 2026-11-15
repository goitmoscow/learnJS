"use strict";

// Решения преподавателю, для разбора после самостоятельной попытки.

// 1. Стоимость заказа
function orderTotal(items) { let total = 0; for (const item of items) total += item.price * item.quantity; return total; }

// 2. Товары в бюджете
function affordableNames(items, budget) { return items.filter((x) => x.price <= budget).map((x) => x.name); }

// 3. Отчёт об участниках
function formatPeople(people, cutoffAge) { const selected = people.filter((p) => p.age > cutoffAge); if (selected.length === 0) return "Нет участников"; return selected.map((p) => p.name.toUpperCase() + " (" + p.age + ")").join(", "); }

// 4. Длины слов
function wordLengths(text) { return text.trim().split(" ").filter((w) => w !== "").map((w) => w.length); }

module.exports = { orderTotal, affordableNames, formatPeople, wordLengths };
