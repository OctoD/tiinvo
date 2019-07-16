import { None, Some, Option } from "../Option";
import { Err, Ok } from "../Result";

describe(`Option`, () => {
  it(`None and Some are different`, () => {
    expect(None).not.toStrictEqual(Some);
    expect(None()).toStrictEqual(Some(null));
    expect(None()).toStrictEqual(Some(undefined));
    expect(None()).toStrictEqual(None());
    expect(Option(null)).toStrictEqual(None());
    expect(Option(NaN)).toStrictEqual(None());
    expect(Option(100)).toStrictEqual(Some(100));
  });

  it(`None isNone and Some isSome`, () => {
    const a = None();
    const b = Some(1);
    const c = Option(2);

    expect(a.isNone()).toBeTruthy();
    expect(a.isSome()).toBeFalsy();

    expect(b.isNone()).toBeFalsy();
    expect(b.isSome()).toBeTruthy();

    expect(c.isNone()).toBeFalsy();
    expect(c.isSome()).toBeTruthy();

    // NaN
    expect(Some(NaN).isNone()).toBeTruthy();
    expect(Some(NaN).isSome()).toBeFalsy();
  });

  it(`Returns None if the option is None, otherwise returns optb`, () => {
    expect(Some(100).and(Some(2))).toStrictEqual(Some(2));
    expect(Some(null).and(Some(2))).toStrictEqual(None());
    expect(Some(NaN).and(Some(2))).toStrictEqual(None());
  });

  it(`Returns 'callback' result if 'OptionLike<T>' is 'Some', otherwise returns 'None'`, () => {
    const some = Some(100).andThen(r => Some(r + 100));

    expect(some).toStrictEqual(Some(200));
  });

  it("Throws if the value is a `None` with a custom error message provided by msg.", () => {
    const message = "exxxplooooosioooons 💥💥💥!!!";

    expect(Some(100).expect(message)).toStrictEqual(Some(100));
    expect(() => None().expect(message)).toThrowError();
  });

  it("Returns the `Option` if it's value passes the`predicate` function.Otherwise returns None", () => {
    expect(Some(100).filter(a => a > 200)).toStrictEqual(None());
    expect(Some(100).filter(a => a < 200)).toStrictEqual(Some(100));
  });

  it("Returns the option if it contains a value, otherwise returns `optb`.", () => {
    expect(Some(100).or(Some("a"))).toStrictEqual(Some(100));
    expect(Some(null).or(Some("a"))).toStrictEqual(Some("a"));
  });

  it("Returns the option if it contains a value, otherwise calls `f` and returns the result.", () => {
    const l = () => Some("a");

    expect(Some(100).orElse(l)).toStrictEqual(Some(100));
    expect(None().orElse(l)).toStrictEqual(Some("a"));
  });

  it("Returns Some if exactly one of self, optb is Some, otherwise returns None.", () => {
    expect(Some(100).xor(Some(100))).toStrictEqual(None());
    expect(Some(100).xor(None())).toStrictEqual(Some(100));
    expect(None().xor(Some(100))).toStrictEqual(Some(100));
    expect(None().xor(None())).toStrictEqual(None());
    expect(Some(1).xor(Some(2))).toStrictEqual(Some(1));
  });

  it("Returns wrapped value or throws if is None", () => {
    expect(Some(100).unwrap()).toBe(100);
    expect(() => None().unwrap()).toThrowError();
  });

  it("Returns the contained value or a default.", () => {
    expect(Some(100).unwrapOr(1000)).toBe(100);
    expect(None().unwrapOr(1000)).toBe(1000);
  });

  it("Maps an `OptionLike<T>` to `OptionLike<U>` by applying a function to a contained value.", () => {
    expect(Some(100).map(a => String(a))).toStrictEqual(Some("100"));
    expect(() => Some(100).map(100 as any)).toThrowError();
  });

  it(`Applies a function to the contained value (if any), or returns the provided default (if not).`, () => {
    expect(Some(100).mapOr("a", a => String(a))).toStrictEqual("100");
    expect(None().mapOr("a", a => String(a))).toStrictEqual("a");
    expect(() => None().mapOr("a", 123 as any)).toThrowError();
  });

  it(`Applies a function to the contained value (if any), or computes a default (if not).`, () => {
    const fn1 = () => "a";
    const fn2 = (arg: number) => String(arg);

    expect(Some(100).mapOrElse(fn1, fn2)).toStrictEqual("100");
    expect(None().mapOrElse(fn1, fn2)).toStrictEqual("a");
  });

  it("Transforms the `OptionLike<T>` into a `Result<T, E>`, mapping `Some(v)` to `Ok(v)` and `None` to `Err(err)`.", () => {
    expect(Some(100).okOr(Err("foo"))).toStrictEqual(Ok(100));
    expect(None().okOr(Err("foo"))).toStrictEqual(Err("foo"));
  });

  it("Transforms the `OptionLike<T>` into a `Result<T, E>`, mapping `Some(v)` to `Ok(v)` and `None` to `Err(err())`.", () => {
    expect(Some(100).okOrElse(() => Err("foo"))).toStrictEqual(Ok(100));
    expect(None().okOrElse(() => Err("foo"))).toStrictEqual(Err("foo"));
  });
});
