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
});
