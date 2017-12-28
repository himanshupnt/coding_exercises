const solution = require("./index.js");

describe("max profit calculator", () => {
  test("returns a number", () => {
    expect(typeof solution.calculateMaxProfit([1, 2, 3, 4])).toBe("number");
  });
  test("throws error when called with an empty array input", () => {
    const getMaxProfit = () => {
      solution.calculateMaxProfit([]);
    };

    expect(getMaxProfit).toThrowError("error, empty input");
  });
});
