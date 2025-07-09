const { capitalizeTextFirstChar, createArray } = require("../lab1");

// capitalizeTextFirstChar function test
describe("capitalizeTextFirstChar", () => {
  it("should return a string", () => {
    const result = capitalizeTextFirstChar("hello world");
    expect(typeof result).toBe("string");
  });

  it("should capitalize each word's first letter", () => {
    const result = capitalizeTextFirstChar("i'm Hagar Gamal");
    expect(result).toBe("I'm Hagar Gamal");
  });

  it("should throw TypeError if input is a number", () => {
    expect(() => capitalizeTextFirstChar(50)).toThrowError(
      TypeError,
      "parameters should be string"
    );
  });
});

// createArray function test
describe("createArray", () => {
  it("should return an array", () => {
    const result = createArray(3);
    expect(Array.isArray(result)).toBeTrue();
  });

  it("should return array of length 2 and includes 1 when passing 2", () => {
    const result = createArray(2);
    // expect(1).toBe(2);
    // This line seems to be a mistake, it should be checking the length of the array
    expect(result.length).toBe(2);
    expect(result.includes(1)).toBeTrue();
  });

  it("should return array of length 3 and not include 3", () => {
    const result = createArray(3);
    expect(result.length).toBe(3);
    expect(result.includes(3)).toBeFalse();
  });
});
