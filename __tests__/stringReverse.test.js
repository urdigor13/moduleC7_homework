import { stringReverse } from "../stringReverse.js";

describe("Reverse string", () => {
  it("ordinary string", () => {
    const result = stringReverse("abcdef");
    expect(result).toBe("fedcba");
  }),
    it("empty string", () => {
      const result = stringReverse("");
      expect(result).toBe("");
    });
    it("complex string", () => {
      const result = stringReverse("gf4 5gh !");
      expect(result).toBe("! hg5 4fg");
    });
});