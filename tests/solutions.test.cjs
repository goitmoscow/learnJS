const test = require("node:test");
const assert = require("node:assert/strict");
for (const task of require("./cases.json")) {
  const fn = require("../solutions/day" + String(task.day).padStart(2, "0") + ".cjs")[task.name];
  for (const [index, [args, expected]] of task.cases.entries()) {
    test("day" + task.day + " " + task.name + " case " + (index + 1), () => {
      const input = structuredClone(args);
      const before = structuredClone(input);
      const actual = fn(...input);
      const wanted = expected && expected.$undefined === true ? undefined : expected;
      assert.deepStrictEqual(actual, wanted);
      assert.deepStrictEqual(input, before, "Нельзя менять входные данные");
    });
  }
}
test("Копии независимы на верхнем уровне", () => {
  const a = [1, 2];
  const b = require("../solutions/day04.cjs").appendCopy(a, 3);
  assert.notStrictEqual(a, b);
  b[0] = 100;
  assert.equal(a[0], 1);
  const user = {name: "Анна"};
  const copy = require("../solutions/day06.cjs").withCity(user, "Омск");
  assert.notStrictEqual(user, copy);
  copy.name = "Ира";
  assert.equal(user.name, "Анна");
});
