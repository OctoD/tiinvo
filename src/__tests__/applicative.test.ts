import { check, bind, fallback, panic } from "../applicative";

describe("applicative", () => {
  it("bind", () => {
    const fn = (arg: string) => arg.length;
    const teststring = "hello";
    const boundfn = bind(fn, teststring);

    expect(fn(teststring)).toEqual(boundfn());
  });

  it("check", () => {
    expect(() => check(true, "will not throw")(123)).not.toThrow();
    expect(() => check(false, "will not throw")(123)).toThrow();
  });

  it("fallback", () => {
    const value = 123;
    const fnvalue = fallback(value);

    expect(fnvalue()).toEqual(value);
  });

  it("panic", () => {
    expect(() => panic("boom")).toThrow();
    expect(() => panic("boom", TypeError)).toThrowError(TypeError);
  });
});
