const { addFunction } = require("./tddCalculator");

//jest test case for the values
describe("tddCalculator", () => {
  it("should return 0 for an empty string", () => {
    expect(addFunction("")).toBe(0);
  });
});
