const { calculateMaxProfit } = require("./index");

describe("max profit calculator", () => {
  const testCases = {
    emptyInput: [],
    returnNum: [1, 2, 3, 4],
    invalidValueType: [1, 2, "a", "b"],
    invalidInputType: "abc",
    return1650: [100, 267, 50, 677, 459, 345, 1201],
    return41: [2, 0, 39, 39, 39, 41],
    return0: [33, 33, 33, 33]
  };

  test("returns a number", () => {
    expect(typeof calculateMaxProfit(testCases.returnNum)).toBe("number");
  });

  test("should return 1650", () => {
    expect(calculateMaxProfit(testCases.return1650)).toBe(1650);
  });

  test("should return 41", () => {
    expect(calculateMaxProfit(testCases.return41)).toBe(41);
  });

  test("should return 0", () => {
    expect(calculateMaxProfit(testCases.return0)).toBe(0);
  });

  test("throws error when called with an empty array input", () => {
    const throwEmptyArrError = () => {
      calculateMaxProfit(testCases.emptyInput);
    };
    expect(throwEmptyArrError).toThrowError("error, empty input");
  });

  test("throws error when input has invalid values ", () => {
    const throwInvalidInputValError = () => {
      calculateMaxProfit(testCases.invalidValueType);
    };
    expect(throwInvalidInputValError).toThrowError(
      "error, price must be a number"
    );
  });

  test("throws error when input is an invalid type", () => {
    const throwInvalidInputError = () => {
      calculateMaxProfit(testCases.invalidInputType);
    };
    expect(throwInvalidInputError).toThrowError(
      "error, input must be an array"
    );
  });
});
