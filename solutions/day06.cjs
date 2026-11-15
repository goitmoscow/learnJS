"use strict";

// Решения преподавателю, для разбора после самостоятельной попытки.

// 1. Значение по ключу
function getField(object, key) { return object[key]; }

// 2. Имена взрослых
function getAdultNames(users) { return users.filter((u) => u.age >= 18).map((u) => u.name); }

// 3. Сумма значений объекта
function sumScores(scores) { let sum = 0; for (const value of Object.values(scores)) sum += value; return sum; }

// 4. Дополнить копию объекта
function withCity(user, city) { const copy = Object.assign({}, user); copy.city = city; return copy; }

module.exports = { getField, getAdultNames, sumScores, withCity };
