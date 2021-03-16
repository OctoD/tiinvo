import { array, num } from '..';
import { check, bind, fallback, panic, pass, callfnwith, wait } from "../applicative";
import { pipe } from '../pipe';
import { pipeasync } from '../pipe-async';

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

  it(`wait`, async () => {
    let result1: number = 0;
    let result2: number = 0;
    
    const testfn1 = async () => result1 = Date.now();
    const testfn2 = async () => result2 = Date.now();
    const timeout = 1000;
    const fn = pipeasync(
      testfn1,
      bind(wait, timeout),
      testfn2,
    );

    await fn();

    expect(Math.floor((result2 - result1) / timeout)).toBe(1)
  });
});
