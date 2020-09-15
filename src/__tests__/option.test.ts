import { isOptionOf, none, option, some } from "../option";
import { isstring } from "../typeguards";

describe("option", () => {
  it("option", () => {
    expect(option(10)).toEqual(some(10));
    expect(option(null)).toEqual(none());
    expect(option(void 0)).toEqual(none());
  });

  it("isOptionOf", () => {
    const optionof = isOptionOf(isstring);

    expect(optionof(some(10))).toBeFalsy();
    expect(optionof(some(""))).toBeTruthy();
  });
});
