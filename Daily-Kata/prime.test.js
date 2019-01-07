const Prime = require("./prime");

describe("Prime factor test", () => {
  test("test for null", () => {
    expect(Prime.getFactor(1)).toEqual(null);
  });
  test("test for 2", () => {
    expect(Prime.getFactor(2)).toEqual([2]);
  });
  test("test for 3", () => {
    expect(Prime.getFactor(3)).toEqual([3]);
  });
  test("test for 4", () => {
    expect(Prime.getFactor(4)).toEqual([2, 2]);
  });
  test("test for 8", () => {
    expect(Prime.getFactor(8)).toEqual([2, 2, 2]);
  });
  test("test for 9", () => {
    expect(Prime.getFactor(9)).toEqual([3, 3]);
  });
  test("test for any number", () => {
    expect(Prime.getFactor(1269)).toEqual([3, 3, 3, 47]);
  });
});
