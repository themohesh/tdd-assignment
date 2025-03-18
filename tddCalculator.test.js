const { addFunction } = require("./tddCalculator");

//jest test case for the values
describe("tddCalculator", () => {
  it("should return 0 for an empty string", () => {
    expect(addFunction("")).toBe(0);
  });

  test("should return the number for a single number", () => {
    expect(addFunction("1")).toBe(1);
  });

  // Step 1
  test("should return the sum of two comma-delimited numbers", () => {
    expect(addFunction("1,5")).toBe(6);
  });

  // Step 2
  test("should handle an unknown amount of numbers", () => {
    expect(addFunction("1,2,3,4,5")).toBe(15);
  });

  // Step 3
  test("should handle new lines between numbers", () => {
    expect(addFunction("1\n2,3")).toBe(6);
  });

  // Step 4
  test("should support different delimiters", () => {
    expect(addFunction("//;\n1;2")).toBe(3);
  });

  // Step 5
  test("should throw an exception for negative numbers", () => {
    expect(() => {
      addFunction("-1,2");
    }).toThrow("Negative numbers not allowed: -1");
  });

  // Step 5
  test("should include all negative numbers in the exception message", () => {
    expect(() => {
      addFunction("2,-4,3,-5");
    }).toThrow("Negative numbers not allowed: -4, -5");
  });

  // others
  test("should handle custom delimiters with multiple numbers", () => {
    expect(addFunction("//|\n1|2|3")).toBe(6);
  });

  test("should handle newlines and custom delimiters together", () => {
    expect(addFunction("//;\n1;2\n3")).toBe(6);
  });
});
