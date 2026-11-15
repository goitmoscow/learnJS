"use strict";

// Решения преподавателю, для разбора после самостоятельной попытки.

// 1. Очистить имя
function normalizeName(text) { return text.trim().toLowerCase(); }

// 2. Поиск без учёта регистра
function containsText(text, query) { return text.toLowerCase().includes(query.toLowerCase()); }

// 3. Инициалы
function getInitials(fullName) { return fullName.trim().split(" ").filter((w) => w !== "").map((w) => w[0].toUpperCase()).join("."); }

// 4. Длинные слова
function longWords(text, minLength) { return text.trim().split(" ").filter((w) => w !== "" && w.length >= minLength); }

module.exports = { normalizeName, containsText, getInitials, longWords };
