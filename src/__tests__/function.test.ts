import * as fx from '../function';
import * as num from '../num';

describe(``, () => {
  test(`bind`, () => {
    const bound = fx.bind(num.badd, 10, 20);
    expect(bound()).toBe(30);
  })
  test(`call`, () => {
    expect(fx.call(num.badd, 1, 2)).toBe(3);
    expect(fx.call(num.uadd, 1)(2)).toBe(3);
  })
  test(`cmp`, () => {
    expect(fx.cmp(num.uadd, num.badd)).toBe(-1);
    expect(fx.cmp(num.badd, num.uadd)).toBe(1);
    expect(fx.cmp(num.badd, num.badd)).toBe(0);
    expect(fx.cmp(num.badd, num.bmod)).toBe(-1);
    expect(fx.cmp(num.bmod, num.badd)).toBe(1);
  })
  test(`eq`, () => {
    expect(fx.eq(num.uadd, num.badd)).toBe(false);
    expect(fx.eq(num.badd, num.uadd)).toBe(false);
    expect(fx.eq(num.badd, num.badd)).toBe(true);
    expect(fx.eq(num.badd, num.bmod)).toBe(false);
    expect(fx.eq(num.bmod, num.badd)).toBe(false);
  })
  test(`guard`, () => {
    expect(fx.guard(10)).toBeFalsy();
    expect(fx.guard(new Function())).toBeTruthy();
    expect(fx.guard(function () {})).toBeTruthy();
    expect(fx.guard(() => {})).toBeTruthy();
  })
  test(`curry2`, () => {
    const fn = num.badd;
    const c = fx.curry2(fn);
    expect(c(1)(2)).toBe(3);
  })
  test(`curry3`, () => {
    const fn = (a: number, b: number, c: number) => a + b + c;
    const c = fx.curry3(fn);
    expect(c(1)(2)(3)).toBe(6);
  })
  test(`curry4`, () => {
    const fn = (a: number, b: number, c: number, d: number) => a + b + c + d;
    expect(fx.curry4(fn)(1)(2)(3)(4)).toBe(10);
  })
  test(`curry5`, () => {
    const fn = (a: number, b: number, c: number, d: number, e: number) => a + b + c + d + e;
    expect(fx.curry5(fn)(1)(2)(3)(4)(5)).toBe(15);
  })
  test(`curry6`, () => {
    const fn = (a: number, b: number, c: number, d: number, e: number, f: number) => a + b + c + d + e + f;
    expect(fx.curry6(fn)(1)(2)(3)(4)(5)(6)).toBe(21);
  })
  test(`curry7`, () => {
    const fn = (a: number, b: number, c: number, d: number, e: number, f: number, g: number) => a + b + c + d + e + f + g;
    expect(fx.curry7(fn)(1)(2)(3)(4)(5)(6)(7)).toBe(28);
  })
  test(`curry8`, () => {
    const fn = (a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number) => a + b + c + d + e + f + g + h;
    expect(fx.curry8(fn)(1)(2)(3)(4)(5)(6)(7)(8)).toBe(36);
  })
  test(`curry9`, () => {
    const fn = (a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number) => a + b + c + d + e + f + g + h + i;
    expect(fx.curry9(fn)(1)(2)(3)(4)(5)(6)(7)(8)(9)).toBe(45);
  })
  test(`curry10`, () => {
    const fn = (a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number, l: number) => a + b + c + d + e + f + g + h + i + l;
    expect(fx.curry10(fn)(1)(2)(3)(4)(5)(6)(7)(8)(9)(10)).toBe(55);
  })
})