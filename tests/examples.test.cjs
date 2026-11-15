const test = require("node:test");
const assert = require("node:assert/strict");
const vm = require("node:vm");
for (const sample of require("./examples.json")) {
  test("example day" + sample.day + " " + sample.title, () => {
    const output = [];
    vm.runInNewContext(sample.code, {
      console: {log: (...args) => output.push(args.map(String).join(" "))}
    }, {timeout: 1000});
    assert.deepStrictEqual(output, sample.stdout);
  });
}
