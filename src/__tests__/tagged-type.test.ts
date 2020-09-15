import { isTaggedOf, taggedFactory } from "../tagged-type";
import { isstring } from "../typeguards";

describe("tagged-type", () => {
  it("isTaggedOf", () => {
    const test = isTaggedOf("foo", isstring);
    const fac1 = taggedFactory("foo");
    const fac2 = taggedFactory("bar");

    expect(test(fac1(""))).toBeTruthy();
    expect(test(fac1(0))).toBeFalsy();
    expect(test(fac2(0))).toBeFalsy();
  });
});
