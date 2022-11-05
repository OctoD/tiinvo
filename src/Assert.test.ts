import { describe, expect, test } from 'vitest';
import * as Assert from './Assert.js';
import * as Num from './Num.js';

describe(`Assert`, () => {
  test(Assert.check.name, () => {
    expect(() => Assert.check(true, 'will not throw')).not.toThrow();
    expect(() => Assert.check(false, 'yup it throws')).toThrow();
    expect(() => Assert.check('will not throw')(true)).not.toThrow();
    expect(() => Assert.check('yup it throws')(false)).toThrow();
  });

  test(Assert.checkResult.name, () => {
    expect(Assert.checkResult(true, 'will not throw')).toEqual(true);
    expect(Assert.checkResult(false, 'yup it throws')).toEqual(Error("yup it throws"));
    expect(Assert.checkResult('will not throw')(true)).toEqual(true);
    expect(Assert.checkResult('yup it throws')(false)).toEqual(Error("yup it throws"));
  });

  test(Assert.make.name, () => {
    const check0 = Assert.make(Num.isEven, 'number is not even');
    const check1 = Assert.make(Num.isEven, x => `number ${x} is not even`);
    const check2 = Assert.make<number>('number is not even')(Num.isEven);
    const check3 = Assert.make((x: number) => `number ${x} is not even`)(Num.isEven);

    expect(() => check0(10)).not.toThrow();
    expect(() => check0(11)).toThrowError(Error("number is not even"));
    expect(() => check1(10)).not.toThrow();
    expect(() => check1(11)).toThrowError(Error("number 11 is not even"));
    expect(() => check2(10)).not.toThrow();
    expect(() => check2(11)).toThrowError(Error("number is not even"));
    expect(() => check3(10)).not.toThrow();
    expect(() => check3(11)).toThrowError(Error("number 11 is not even"));
  });

  test(Assert.makeResult.name, () => {
    const check0 = Assert.makeResult(Num.isEven, 'number is not even');
    const check1 = Assert.makeResult(Num.isEven, x => `number ${x} is not even`);
    const check2 = Assert.makeResult<number>('number is not even')(Num.isEven);
    const check3 = Assert.makeResult<number>(x => `number ${x} is not even`)(Num.isEven);

    expect(check0(10)).toEqual(true);
    expect(check0(11)).toEqual(Error("number is not even"));
    expect(check1(10)).toEqual(true);
    expect(check1(11)).toEqual(Error("number 11 is not even"));
    expect(check2(10)).toEqual(true);
    expect(check2(11)).toEqual(Error("number is not even"));
    expect(check3(10)).toEqual(true);
    expect(check3(11)).toEqual(Error("number 11 is not even"));
  });
});