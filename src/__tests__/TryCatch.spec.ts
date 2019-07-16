import { TryCatch, TryCatchAsync } from "../TryCatch";
import { Ok, Err } from "../Result";

describe(`TryCatch`, () => {
  it("returns the ok fn if does not catch", () => {
    expect(TryCatch(() => 10)).toStrictEqual(Ok(10));
  });

  it("can receive a number N of arguments", () => {
    expect(
      TryCatch((a: number, b: number) => `received ${a} and ${b}`, 10, 20)
    ).toStrictEqual(Ok(`received 10 and 20`));
  });

  it("returns Err if the tryFn catches", () => {
    expect(
      TryCatch(
        // @ts-ignore
        () => a + 1
      )
    ).toStrictEqual(Err("a is not defined"));
  });

  it("handles async functions", async () => {
    expect(
      await TryCatchAsync(
        (a: number, b: number) => Promise.resolve(a + b),
        10,
        20
      )
    ).toStrictEqual(Ok(30));

    expect(
      await TryCatchAsync(
        // @ts-ignore
        () => b * 20
      )
    ).toStrictEqual(Err("b is not defined"));
  });
});
