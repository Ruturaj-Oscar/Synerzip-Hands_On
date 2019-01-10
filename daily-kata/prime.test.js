const Prime = require("./prime");

describe("Prime factor test cases ", () => {
  test("Test for null", () => {
    expect(Prime.getFactor(1)).toEqual(null);
  });
  test("Test for 2", () => {
    expect(Prime.getFactor(2)).toEqual([2]);
  });
  test("Test for 3", () => {
    expect(Prime.getFactor(3)).toEqual([3]);
  });
  test("Test for 4", () => {
    expect(Prime.getFactor(4)).toEqual([2, 2]);
  });
  test("Test for 8", () => {
    expect(Prime.getFactor(8)).toEqual([2, 2, 2]);
  });
  test("Test for 9", () => {
    expect(Prime.getFactor(9)).toEqual([3, 3]);
  });
  test("Test for any number", () => {
    expect(Prime.getFactor(1269)).toEqual([3, 3, 3, 47]);
  });
});
