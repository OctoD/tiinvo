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
});
