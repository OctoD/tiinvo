import { fromvalues, noneof, withdifferentvalue } from "../predicate";

const gt = (value: number) => (arg: number) => arg > value;
const lt = (value: number) => (arg: number) => arg < value;

describe("predicate", () => {
  it("fromvalues", () => {
    const fm = fromvalues(1, 2, 3);
    const test1 = gt(0);
    const test2 = gt(2);

    expect(fm(test1)).toBeTruthy();
    expect(fm(test2)).toBeFalsy();
  });

  it("noneof", () => {
    const test = noneof(gt(10), lt(5));

    expect(test(6)).toBeTruthy();
    expect(test(3)).toBeFalsy();
  });

  it("withdifferentvalue", () => {
    const test = withdifferentvalue(10);

    expect(test(10)).toBeFalsy();
    expect(test(5)).toBeTruthy();
  });
});
