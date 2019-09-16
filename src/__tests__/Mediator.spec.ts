import { Mediator } from "../Mediator";

describe(`Mediator`, () => {
  it("creates a mediator", () => {
    expect(() => Mediator()).not.toThrowError();
  });

  it("Publishes a list of arguments `args` to all subscribed functions in a channel returning a `Result<boolean, Error>`", () => {
    const fn = jest.fn();
    const fn2 = jest.fn();
    const fnerr = jest.fn(() => {
      throw new Error();
    });

    const result = Mediator()
      .subscribe("call", fn)
      .subscribe("dontcall", fn2)
      .publish("call");

    expect(fn).toHaveBeenCalled();
    expect(fn2).not.toHaveBeenCalled();
    expect(result.isOk()).toBeTruthy();
    expect(
      Mediator()
        .publish("foo")
        .isError()
    ).toBeTruthy();
    expect(
      Mediator()
        .subscribe("argh", fnerr)
        .publish("argh")
        .isError()
    ).toBeTruthy();
  });

  it("Publishes a list of arguments `args` to all subscribed functions in a channel returnin a Promise<Result<boolean, Error>>.", async () => {
    const fn = jest.fn();
    const fn2 = jest.fn();
    const fnerr = jest.fn(() => {
      throw new Error();
    });

    const result = await Mediator()
      .subscribe("call", fn)
      .subscribe("dontcall", fn2)
      .publishAsync("call");
    const errresult = await Mediator().publishAsync("foobar");

    expect(fn).toHaveBeenCalled();
    expect(result.isOk()).toBeTruthy();
    expect(errresult.isError()).toBeTruthy();
    expect(fn2).not.toHaveBeenCalled();
    expect(
      (await Mediator()
        .subscribe("arg", fnerr)
        .publishAsync("arg")).isError()
    ).toBeTruthy();
  });

  it("Subscribes a function `fn` to a `channel` returning the `Mediator` itself", () => {
    const mediator = Mediator();

    expect(mediator.subscribe("a", () => {})).toStrictEqual(mediator);
  });
});
