import { array, num } from '..';
import { check, bind, fallback, panic, pass, callfnwith } from "../applicative";
import { pipe } from '../pipe';

describe("applicative", () => {
  it("bind", () => {
    const fn = (arg: string) => arg.length;
    const teststring = "hello";
    const boundfn = bind(fn, teststring);

    expect(fn(teststring)).toEqual(boundfn());
  });

  it("callfnwith", () => {
    const piped = pipe(
       num.umultiply(2),
       num.uadd,
    );
    
    expect(callfnwith(10)(piped)(2)).toBe(22);
    expect(callfnwith(4)(piped)(2)).toBe(10);
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

  it('pass', () => {
    const value = 1000

    expect(pass(value)).toBe(value);
  })
});
