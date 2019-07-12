import { Err, Ok } from "../Result";

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
});
