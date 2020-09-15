import { fi, fifn } from "../conditionals";

describe("conditionals", () => {
  it("fi", () => {
    expect(fi(true, 1, 0)).toBe(1);
    expect(fi(false, 1, 0)).toBe(0);
  });

  it("fifn", () => {
    const tru = jest.fn().mockReturnValue(1);
    const fal = jest.fn().mockReturnValue(2);

    expect(fifn(true, tru, fal)).toBe(1);
    expect(fifn(false, tru, fal)).toBe(2);
  });
});
