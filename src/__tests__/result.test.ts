import { fallback } from "../applicative";
import { pipe } from "../pipe";
import * as result from "../result";

describe("result", () => {
  it("result", () => {
    const tobeok = result.result(10);
    const tobeerr = result.result(new Error(""));

    expect(result.isOk(tobeok)).toBeTruthy();
    expect(result.isErr(tobeerr)).toBeTruthy();
  });

  it("filter", () => {
    const test = result.filter((arg: number) => arg >= 0);
    const positive = result.ok(10);
    const negative = result.ok(-1);

    expect(result.isOk(test(positive))).toBeTruthy();
    expect(result.isErr(test(negative))).toBeTruthy();
  });

  it(`filter example`, () => {
    const iseven = (arg: number) => arg % 2 === 0;

    const filterfn = pipe(
      result.result as result.InferredResultFactory<number>,
      result.filter(iseven),
      result.isOk
    );

    expect(filterfn(4)).toBeTruthy();
    expect(filterfn(3)).toBeFalsy();
  });

  it(`filterOr example`, () => {
    const iseven = (arg: number) => arg % 2 === 0;

    const filterfn = pipe(
      result.result as result.InferredResultFactory<number>,
      result.filterOr(result.ok(0), iseven),
      result.unwrap
    );

    expect(filterfn(4)).toBe(4);
    expect(filterfn(3)).toBe(0);
  });

  it(`map example`, () => {
    const evenorerror = (arg: number) =>
      arg % 2 === 0 ? arg : new Error("argument must be an even number");
    const double = (arg: number) => arg * 2;

    const handleerror = pipe(
      result.fromfunction(evenorerror),
      result.map(double),
      result.unwrapOr(0)
    );

    expect(handleerror(2)).toBe(4);
    expect(handleerror(1)).toBe(0);
  });

  it("mapOr example", () => {
    const evenorerror = (arg: number) =>
      arg % 2 === 0 ? arg : new Error("argument must be an even number");
    const double = (arg: number) => arg * 2;

    const handleerror = pipe(
      result.fromfunction(evenorerror),
      result.mapOr(result.ok(0), double),
      result.unwrap
    );

    expect(handleerror(2)).toBe(4);
    expect(handleerror(1)).toBe(0);
  });

  it("mapOrElse example", () => {
    const evenorerror = (arg: number) =>
      arg % 2 === 0 ? arg : new Error("argument must be an even number");
    const double = (arg: number) => arg * 2;
    const elsefn = fallback(0);

    const handleerror = pipe(
      result.fromfunction(evenorerror),
      result.mapOrElse(elsefn, double),
      result.unwrap
    );

    expect(handleerror(2)).toBe(4);
    expect(handleerror(1)).toBe(0);
  });
});
