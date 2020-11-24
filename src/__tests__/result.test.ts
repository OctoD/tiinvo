import { ok, filter, isErr, isOk, result } from "../result";

describe("result", () => {
  it("result", () => {
    const tobeok = result(10);
    const tobeerr = result(new Error(""));

    expect(isOk(tobeok)).toBeTruthy();
    expect(isErr(tobeerr)).toBeTruthy();
  });

  it("filter", () => {
    const test = filter((arg: number) => arg >= 0);
    const positive = ok(10);
    const negative = ok(-1);

    expect(isOk(test(positive))).toBeTruthy();
    expect(isErr(test(negative))).toBeTruthy();
  });
});
