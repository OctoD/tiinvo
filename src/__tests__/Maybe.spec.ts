import { Just, MaybeLike, Nothing, Maybe } from "../Maybe";
import { Right, Left } from "../Either";
import { Some, None } from "../Option";

describe(`Maybe`, () => {
  it("Just", () => {
    expect(Just(10)).toStrictEqual(new MaybeLike(10, true));
  });

  it("Maybe", () => {
    expect(Maybe(10)).toStrictEqual(new MaybeLike(10, true));
    expect(Maybe(0)).toStrictEqual(new MaybeLike(0, false));
    expect(Maybe(undefined)).toStrictEqual(new MaybeLike(undefined, false));
    expect(Maybe(null)).toStrictEqual(new MaybeLike(null, false));
    expect(Maybe("")).toStrictEqual(new MaybeLike("", false));
  });

  it("Nothing", () => {
    expect(Nothing(10)).toStrictEqual(new MaybeLike(10, false));
  });

  it("Returns `Nothing<T>` if the value is `Nothing<T>`, otherwise returns `maybeb`", () => {
    expect(Just(10).and(Just(5))).toStrictEqual(Just(5));
    expect(Nothing(10).and(Just(4))).toStrictEqual(Nothing(10));
  });

  it("Returns `fn` result if `Maybe<T>` is `Just<T>`, otherwise returns `Nothing<T>`", () => {
    expect(Just(10).andThen((arg) => Maybe(arg ** 2))).toStrictEqual(Just(100));
    expect(Nothing(10).andThen((arg) => Maybe(arg ** 2))).toStrictEqual(
      Nothing(10)
    );
  });

  it("Returns a `Left<T>` if the value is `Nothing<T>`, otherwise returns `Right<T>` if the value is `Just<T>`", () => {
    expect(Just(10).either()).toStrictEqual(Right(10));
    expect(Nothing(10).either()).toStrictEqual(Left(10));
  });

  it("Applies a function to the contained value (if any), or computes a default (if not).", () => {
    expect(
      Just("foobar").mapOrElse(
        () => 0,
        (arg) => arg.length
      )
    ).toStrictEqual(Just(6));
    expect(
      Nothing("foobar").mapOrElse(
        () => 0,
        (arg) => arg.length
      )
    ).toStrictEqual(Nothing(0));
  });

  it("Returns if `value` is `Just<T>`", () => {
    expect(Just(10).isJust()).toBeTruthy();
    expect(Nothing(10).isJust()).toBeFalsy();
  });

  it("Returns if `value` is `Nothing<T>`", () => {
    expect(Just(10).isNothing()).toBeFalsy();
    expect(Nothing(10).isNothing()).toBeTruthy();
  });

  it("Returns `Some<T>` if is `Just<T>`, otherwise returns `None<T>` if is `Nothing<T>`", () => {
    expect(Just(10).option()).toStrictEqual(Some(10));
    expect(Nothing(10).option()).toStrictEqual(None());
  });

  it("Calls Just fn if is `Just<T>`, otherwise calls Nothing fn if is `Nothing<T>`", () => {
    expect(() => Just(10).cata(123 as any)).toThrowError();
    expect(() => Just(10).cata({} as any)).toThrowError();
    expect(() => Just(10).cata({ Just: 123 } as any)).toThrowError();
    expect(() => Just(10).cata({ Nothing: 123 } as any)).toThrowError();
    expect(() =>
      Just(10).cata({ Just: 123, Nothing: 123 } as any)
    ).toThrowError();
    expect(
      Just(10).cata({
        Just: (arg) => arg + " is just",
        Nothing: (arg) => arg + " is nothing",
      })
    ).toStrictEqual("10 is just");
    expect(
      Nothing(3).cata({
        Just: (arg) => arg + " is just",
        Nothing: (arg) => arg + " is nothing",
      })
    ).toStrictEqual("3 is nothing");
  });

  it("Maps current `MaybeLike<T>` to a `new MaybeLike<U>` if is `Just<T>` ", () => {
    expect(
      Maybe("lorem ipsum")
        .map((arg) => arg.replace(/\s/g, ""))
        .map((arg) => arg.length)
        .unwrap()
    ).toBe(10);

    expect(
      Maybe("")
        .map((arg) => arg.replace(/\s/g, ""))
        .map((arg) => arg.length)
        .unwrap()
    ).toBe("");
  });

  it("If T is Nothing, then returns maybeValue", () => {
    expect(Maybe(undefined).or(Maybe(null)).or(Maybe(10)).unwrap()).toBe(10);
    expect(
      Maybe(10)
        .or(Maybe(null))
        .or(Maybe(void 0))
        .unwrap()
    ).toBe(10);
    expect(Maybe(0).or(Maybe(NaN)).or(Maybe(false)).unwrap()).toBe(false);
  });

  it("If T is Nothing, then calls the function Fn", () => {
    expect(
      Maybe(null)
        .orThen(() => Maybe(undefined))
        .orThen(() => Maybe(10))
        .unwrap()
    ).toBe(10);
    expect(
      Maybe(10)
        .orThen(() => Maybe(undefined))
        .orThen(() => Maybe(1))
        .unwrap()
    ).toBe(10);
    expect(
      Maybe(undefined)
        .orThen(() => Maybe(2))
        .orThen(() => Maybe(1))
        .unwrap()
    ).toBe(2);
  });

  it("Unwraps `value`", () => {
    expect(Just(1).unwrap()).toBe(1);
    expect(Nothing(2).unwrap()).toBe(2);
    expect(Maybe(3).unwrap()).toBe(3);
  });
});
