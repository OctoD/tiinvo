import { None, Some, Option } from "../Option";

describe(`Option`, () => {
  it(`None and Some are different`, () => {
    expect(None).not.toStrictEqual(Some);
    expect(None()).toStrictEqual(Some(null));
    expect(None()).toStrictEqual(Some(undefined));
    expect(None()).toStrictEqual(None());
    expect(Option(null)).toStrictEqual(None());
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
  });

  it(`Returns None if the option is None, otherwise returns optb`, () => {
    expect(Some(100).and(Some(2))).toStrictEqual(Some(2));
    expect(Some(null).and(Some(2))).toStrictEqual(None());
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
});
