import * as num from '../num';

describe(`num`, () => {
  test('toExponential', () => {
    expect(num.toExponential(2)(2)).toBe((2).toExponential(2));
  })
  test('toFixed', () => {
    expect(num.toFixed(2)(2)).toBe((2).toFixed(2));
  })
  test('toPrecision', () => {
    expect(num.toPrecision(2)(2)).toBe((2).toPrecision(2));
  })
  test('toString', () => {
    expect(num.toString(2)(2)).toBe((2).toString(2));
  })
  test('equals', () => {
    expect(num.equals(2)(2)).toBeTruthy();
    expect(num.equals(2)(3)).toBeFalsy();
  })
  test('greaterthan', () => {
    expect(num.greaterthan(2)(1)).toBeFalsy();
    expect(num.greaterthan(2)(2)).toBeFalsy();
    expect(num.greaterthan(2)(3)).toBeTruthy();
  })
  test('greaterequalthan', () => {
    expect(num.greaterequalthan(2)(1)).toBeFalsy();
    expect(num.greaterequalthan(2)(2)).toBeTruthy();
    expect(num.greaterequalthan(2)(4)).toBeTruthy();
  })
  test('lessthan', () => {
    expect(num.lessthan(2)(4)).toBeFalsy()
    expect(num.lessthan(2)(2)).toBeFalsy()
    expect(num.lessthan(2)(1)).toBeTruthy()
  })
  test('lessequalthan', () => {
    expect(num.lessequalthan(2)(3)).toBeFalsy();
    expect(num.lessequalthan(2)(2)).toBeTruthy();
    expect(num.lessequalthan(2)(1)).toBeTruthy();
  })
  test('inrange', () => {
    expect(num.inrange(2, 5)(1)).toBeFalsy();
    expect(num.inrange(2, 5)(2)).toBeTruthy();
    expect(num.inrange(2, 5)(3)).toBeTruthy();
    expect(num.inrange(2, 5)(4)).toBeTruthy();
    expect(num.inrange(2, 5)(5)).toBeTruthy();
    expect(num.inrange(2, 5)(5.2)).toBeFalsy();
  })
  test('outofrange', () => {
    expect(num.outofrange(2, 5)(1)).toBeTruthy();
    expect(num.outofrange(2, 5)(2)).toBeFalsy();
    expect(num.outofrange(2, 5)(3)).toBeFalsy();
    expect(num.outofrange(2, 5)(4)).toBeFalsy();
    expect(num.outofrange(2, 5)(5)).toBeFalsy();
    expect(num.outofrange(2, 5)(5.2)).toBeTruthy();
  })
  test('iseven', () => {
    expect(num.iseven(2)).toBeTruthy()
  })
  test('isodd', () => {
    expect(num.isodd(2)).toBeFalsy()
  })
  test('uadd', () => {
    expect(num.uadd(2)(2)).toBe(4);
  })
  test('udivide', () => {
    expect(num.udivide(2)(4)).toBe(2);
  })
  test('umax', () => {
    expect(num.umax(2)(1)).toBe(2);
  })
  test('umin', () => {
    expect(num.umin(2)(4)).toBe(2);
  })
  test('umultiply', () => {
    expect(num.umultiply(2)(2)).toBe(4);
  })
  test('upow', () => {
    expect(num.upow(2)(3)).toBe(9);
  })
  test('uremainder', () => {
    expect(num.uremainder(2)(2.5)).toBe(.5);
  })
  test('uroot', () => {
    expect(num.uroot(2)(49)).toBe(7);
  })
  test('usubtract', () => {
    expect(num.usubtract(2)(5)).toBe(3);
  })
  test('badd', () => {
    expect(num.badd(2, 2)).toBe(4);
  })
  test('bdivide', () => {
    expect(num.bdivide(4, 2)).toBe(2);
  })
  test('bmultiply', () => {
    expect(num.bmultiply(2, 3)).toBe(6);
  })
  test('bmax', () => {
    expect(num.bmax(2, 5)).toBe(5);
  })
  test('bmin', () => {
    expect(num.bmin(2, 5)).toBe(2);
  })
  test('bpow', () => {
    expect(num.bpow(2, 3)).toBe(8);
  })
  test('bremainder', () => {
    expect(num.bremainder(2, 1.5)).toBe(.5);
  })
  test('broot', () => {
    expect(num.broot(9, 2)).toBe(3);
  })
  test('bsubtract', () => {
    expect(num.bsubtract(2, 2)).toBe(0);
  })
  test(`urandomint/brandomint/urandomfloat/brandomfloat`, () => {
    const min = 2;
    const max = 6;
    const check = (value: number) => value >= min && value <= max;
    const testfn = (value: number) => expect(check(value)).toBeTruthy();

    testfn(num.urandomint(min)(max));
    testfn(num.brandomint(min, max));
  });
  test(`brangeint/urangeint/urangeint2`, () => {
    const expected = [0,1,2,3,4,5];
    const first = num.brangeint(0, 5);
    const second = num.urangeint(0)(5);
    const third = num.urangeint2(5)(0);

    const testfn = (arg: any) => expect(expect.arrayContaining(arg)).toEqual(expected);

    testfn(first);
    testfn(second);
    testfn(third);
  });
  test(`sortasc`, () => {
    const test = [2, 1];
    const expected = [1,2];
    expect(expect.arrayContaining(test.sort(num.sortasc))).toEqual(expected);
  })
  test(`sortdesc`, () => {
    const test = [1,2];
    const expected = [2, 1];
    expect(expect.arrayContaining(test.sort(num.sortdesc))).toEqual(expected);
  })
});
