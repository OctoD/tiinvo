import * as predicate from "../predicate";

const gt = (value: number) => (arg: number) => arg > value;
const lt = (value: number) => (arg: number) => arg < value;

describe("predicate", () => {
  it("fromvalues", () => {
    const fm = predicate.fromvalues(1, 2, 3);
    const test1 = gt(0);
    const test2 = gt(2);

    expect(fm(test1)).toBeTruthy();
    expect(fm(test2)).toBeFalsy();
  });

  it("noneof", () => {
    const test = predicate.noneof(gt(10), lt(5));

    expect(test(6)).toBeTruthy();
    expect(test(3)).toBeFalsy();
  });

  it("withdifferentvalue", () => {
    const test = predicate.withdifferentvalue(10);

    expect(test(10)).toBeFalsy();
    expect(test(5)).toBeTruthy();
  });

  it(predicate.greaterthan.name, () => {
    const fn = predicate.greaterthan(0);

    expect(fn(10)).toBeTruthy();
    expect(fn(0)).toBeFalsy();
    expect(fn(-1)).toBeFalsy();
  });

  it(predicate.greaterorequalthan.name, () => {
    const fn = predicate.greaterorequalthan(0);

    expect(fn(10)).toBeTruthy();
    expect(fn(0)).toBeTruthy();
    expect(fn(-1)).toBeFalsy();
  });

  it(predicate.lessthan.name, () => {
    const fn = predicate.lessthan(0);

    expect(fn(10)).toBeFalsy();
    expect(fn(0)).toBeFalsy();
    expect(fn(-1)).toBeTruthy();
  });

  it(predicate.lessorequalthan.name, () => {
    const fn = predicate.lessorequalthan(0);

    expect(fn(10)).toBeFalsy();
    expect(fn(0)).toBeTruthy();
    expect(fn(-1)).toBeTruthy();
  });
});
