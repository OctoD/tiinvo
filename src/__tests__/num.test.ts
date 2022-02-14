import * as n from '../num';

describe('num', () => {
  test(`guard`, () => {
    expect(n.guard(10)).toBe(true);
    expect(n.guard('10')).toBe(false);
  });
  test(`cmp`, () => {
    expect(n.cmp(10, 10)).toBe(0);
    expect(n.cmp(10, 20)).toBe(-1);
    expect(n.cmp(20, 10)).toBe(1);
  });
  test(`isEven`, () => {
    expect(n.isEven(10)).toBe(true);
    expect(n.isEven(20)).toBe(true);
    expect(n.isEven(11)).toBe(false);
  });
  test(`isOdd`, () => {
    expect(n.isOdd(10)).toBe(false);
    expect(n.isOdd(20)).toBe(false);
    expect(n.isOdd(11)).toBe(true);
  });
  test(`sortasc`, () => {
    const array = [10, 20, 30, 40, 50];
    expect(expect.arrayContaining(array.sort(n.asc))).toEqual([10, 20, 30, 40, 50]);
  });
  test(`sortdesc`, () => {
    const array = [10, 20, 30, 40, 50];
    expect(expect.arrayContaining(array.sort(n.desc))).toEqual([50, 40, 30, 20, 10]);
  });
  test(`eq`, () => {
    expect(n.eq(10)(10)).toBe(true);
    expect(n.eq(10)(20)).toBe(false);
  });
  test(`ge`, () => {
    expect(n.ge(10)(10)).toBe(true);
    expect(n.ge(12)(10)).toBe(false);
    expect(n.ge(10)(20)).toBe(true);
  });
  test(`gt`, () => {
    expect(n.gt(10)(10)).toBe(false);
    expect(n.gt(12)(10)).toBe(false);
    expect(n.gt(10)(20)).toBe(true);
  });
  test(`le`, () => {
    expect(n.le(10)(10)).toBe(true);
    expect(n.le(12)(10)).toBe(true);
    expect(n.le(10)(20)).toBe(false);
  });
  test(`lt`, () => {
    expect(n.lt(10)(10)).toBe(false);
    expect(n.lt(12)(10)).toBe(true);
    expect(n.lt(10)(20)).toBe(false);
  });
  test(`ne`, () => {
    expect(n.ne(10)(10)).toBe(false);
    expect(n.ne(12)(10)).toBe(true);
    expect(n.ne(10)(20)).toBe(true);
  });
  test(`toExponential`, () => {
    expect(n.toExponential(10)).toBe('1e+1');
  });
  test(`toExponentialF`, () => {
    expect(n.toExponentialF(2)(2)).toBe('2.00e+0');
  });
  test(`toFixed`, () => {
    expect(n.toFixed(10)).toBe('10.00');
  });
  test(`toFixedF`, () => {
    expect(n.toFixedF(3)(2)).toBe('2.000');
  });
  test(`toPrecision`, () => {
    expect(n.toPrecision(10)).toBe('10');
  });
  test(`toPrecisionP`, () => {
    expect(n.toPrecisionP(3)(2)).toBe('2.00');
  });
  test(`toString`, () => {
    expect(n.toString(10)).toBe('10');
  });
  test(`toStringR`, () => {
    expect(n.toStringR(32)(30)).toBe('u');
  });
  test(`uadd`, () => {
    expect(n.uadd(10)(20)).toBe(30);
  });
  test(`udiv`, () => {
    expect(n.udiv(10)(20)).toBe(2);
  });
  test(`umod`, () => {
    expect(n.umod(10)(20)).toBe(0);
  });
  test(`umul`, () => {
    expect(n.umul(10)(20)).toBe(200);
  });
  test(`upow`, () => {
    expect(n.upow(2)(10)).toBe(100);
  });
  test(`urand`, () => {
    expect(n.urand(10)(20)).toBeGreaterThanOrEqual(10);
    expect(n.urand(10)(20)).toBeLessThan(20);
  });
  test(`uroot`, () => {
    expect(n.uroot(2)(10)).toBe(3.1622776601683795);
  });
  test(`usub`, () => {
    expect(n.usub(10)(20)).toBe(10);
  });
  test(`badd`, () => {
    expect(n.badd(10, 20)).toBe(30);
  });
  test(`bdiv`, () => {
    expect(n.bdiv(10, 20)).toBe(0.5);
  });
  test(`bmod`, () => {
    expect(n.bmod(10, 20)).toBe(10);
  });
  test(`bmul`, () => {
    expect(n.bmul(10, 20)).toBe(200);
  });
  test(`bpow`, () => {
    expect(n.bpow(2, 10)).toBe(1024);
  });
  test(`brand`, () => {
    expect(n.brand(10, 20)).toBeGreaterThanOrEqual(10);
    expect(n.brand(10, 20)).toBeLessThan(20);
  });
  test(`broot`, () => {
    expect(n.broot(2, 10)).toBe(1.0717734625362931);
  });
  test(`bsub`, () => {
    expect(n.bsub(10, 20)).toBe(-10);
  });
  test(`int`, () => {
    expect(n.int(10.5)).toBe(10);
    expect(n.int(10.1)).toBe(10);
    expect(n.int(10.9)).toBe(10);
    expect(n.int(10)).toBe(10);
  });
})