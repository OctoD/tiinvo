import { Err, Ok } from "../Result";
import { Some } from "../Option";

describe(`Result`, () => {
  it(`Err is different from Ok`, () => {
    expect(Err()).not.toStrictEqual(Ok(1));
    expect(Err()).not.toStrictEqual(Ok(null));
  });

  it(`Err isError`, () => {
    expect(Err().isError()).toBeTruthy();
  });

  it("Ok isOk", () => {
    expect(Ok(10).isOk()).toBeTruthy();
    expect(Ok(null).isOk()).toBeTruthy();
  });

  it("Converts from `Result<T, E>` to `OptionLike<E>`.", () => {
    expect(Err("foobar").err()).toStrictEqual(Some(new Error("foobar")));
  });

  it("Converts from Result<T, E> to Option<T>.", () => {
    expect(Ok("foo").ok()).toStrictEqual(Some("foo"));
    expect(Err("foo").ok()).not.toStrictEqual(Some("foo"));
  });

  it("Maps a `Result<T, E>` to `Result<U, E>` by applying a function to a contained`Ok` value, leaving an`Err` value untouched. This function can be used to compose the results of two functions.", () => {
    expect(Ok("foo").map(val => val.length)).toEqual(Ok(3));
    expect(Err("foo").map((val: any) => val.length)).not.toEqual(Ok(3));
  });

  it("Maps a `Result<T, E>` to `F` by applying a function to a contained `Ok` value, or a `fallback` function to a contained `Err` value. This function can be used to unpack a successful result while handling an error.", () => {
    expect(Ok("test").mapOrElse(() => "aaa", () => "bbb")).toEqual("bbb");
    expect(Err("test").mapOrElse(() => "aaa", () => "bbb")).toEqual("aaa");
  });

  it("Returns `res` if the result is `Ok`, otherwise returns the `Err` value of self.", () => {
    expect(Ok("foo").and(Ok("bar"))).toStrictEqual(Ok("bar"));
    expect(Err("foo").and(Ok("bar"))).toStrictEqual(Err("foo"));
  });

  it("Calls `op` if the result is `Ok`, otherwise returns the `Err` value of self.", () => {
    expect(Ok("a").andThen(arg => Ok(arg.repeat(2)))).toStrictEqual(Ok("aa"));
    expect(Err("b").andThen(arg => Ok(arg.repeat(2)))).toStrictEqual(Err("b"));
  });

  it("Returns `res` if the result is `Err`, otherwise returns the `Ok` value of self.", () => {
    expect(Ok("a").or(Ok("b"))).toStrictEqual(Ok("a"));
    expect(Err("a").or(Ok("b"))).toStrictEqual(Ok("b"));
  });

  it("Calls `op` if the result is `Err`, otherwise returns the `Ok` value of self.", () => {
    expect(Ok("a").orElse(() => Ok("b"))).toStrictEqual(Ok("a"));
    expect(Err("a").orElse(() => Ok("b"))).toStrictEqual(Ok("b"));
  });

  it("Returns wrapped value or throws an `Error`", () => {
    expect(Ok("a").unwrap()).toBe("a");
    expect(() => Err("a").unwrap()).toThrowError();
  });

  it("Unwraps a result, yielding the content of an `Ok`. Else, it returns `optb`.", () => {
    expect(Ok("a").unwrapOr(Ok("b"))).toBe("a");
    expect(Err("a").unwrapOr("b")).toBe("b");
  });

  it("Unwraps a result, yielding the content of an `Ok`. If the value is an `Err` then it calls op with its value.", () => {
    expect(Ok("a").unwrapOrElse(e => Ok(e.message.length))).toStrictEqual("a");
    expect(Err("abc").unwrapOrElse(e => e.message.length)).toStrictEqual(3);
  });

  it("Unwraps a result, yielding the content of an `Ok`.", () => {
    expect(Ok("a").expect("foo")).toBe("a");
    expect(() => Err("a").expect("foo")).toThrowError("foo");
  });

  it("Unwraps a result, yielding the content of an `Err`.", () => {
    expect(() => Ok(1).unwrapErr()).toThrowError();
    expect(Err("aaa").unwrapErr().message).toBe("aaa");
  });
});
