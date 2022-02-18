import * as Assert from '../assertable';
import * as Number from '../num';
import * as Result from '../result';

describe(`assertable`, () => {
  test(Assert.check.name, () => {
    expect(() => Assert.check(true, 'This will not throw an error')).not.toThrow();
    expect(() => Assert.check(false, 'This will throw an error')).toThrow();
  })

  test(Assert.checkr.name, () => {
    expect(Result.isOk(Assert.checkr(true, 'This will not throw an error'))).toBeTruthy();
    expect(Result.isErr(Assert.checkr(false, 'This will throw an error'))).toBeTruthy();
  })

  test(Assert.make.name, () => {
    const check1 = Assert.make(Number.isEven, 'number is not even');
    const check2 = Assert.make(Number.isEven, n => n + ' is not even');

    expect(() => check1(2)).not.toThrow();
    expect(() => check1(3)).toThrow();
    expect(() => check2(3)).toThrow();
  })

  test(Assert.maker.name, () => {
    const check1 = Assert.maker(Number.isEven, 'number is not even');
    const check2 = Assert.maker(Number.isEven, n => n + ' is not even');

    expect(Result.isOk(check1(2))).toBeTruthy();
    expect(Result.isErr(check1(3))).toBeTruthy();
    expect(Result.isErr(check2(3))).toBeTruthy();
  })
});
