import { describe, expect, test } from 'vitest';
import * as Fn from './Fn.js';
import * as Num from './Num.js';

describe(`Fn`, () => {
  test(Fn.cmp.name, () => {
    const t0: Fn.AnyFn = (a, b, c, d) => 0;
    expect(Fn.cmp(Num.add, Num.add)).toEqual(0);
    expect(Fn.cmp(Num.add, Num.sub)).toEqual(-1);
    expect(Fn.cmp(Num.sub, Num.add)).toEqual(1);
    expect(Fn.cmp(t0, Num.add)).toEqual(1);
    expect(Fn.cmp(Num.add, t0)).toEqual(-1);
    expect(Fn.cmp(Num.add)(t0)).toEqual(1);

    const cmpMul = Fn.cmp(Num.mul);
    expect(cmpMul(Num.mul)).toEqual(0);
    expect(cmpMul(Num.sub)).toEqual(1);
    expect(cmpMul(Num.add)).toEqual(-1);
  });

  test(Fn.eq.name, () => {
    expect(Fn.eq(Num.add, Num.add)).toEqual(true);
    expect(Fn.eq(Num.add, Num.sub)).toEqual(false);
    expect(Fn.eq(Num.sub, Num.add)).toEqual(false);
    expect(Fn.eq(Num.sub)(Num.add)).toEqual(false);
    expect(Fn.eq(Num.add)(Num.add)).toEqual(true);
  });

  test(Fn.guard.name, () => {
    expect(Fn.guard(10)).toEqual(false);
    expect(Fn.guard(() => { })).toEqual(true);
  });

  test(Fn.length.name, () => {
    expect(Fn.length(Fn.cmp)).toEqual(2);
    expect(Fn.length(Fn.length)).toEqual(1);
  });

  test(Fn.map.name, () => {
    const m = Fn.map(Num.add(1), Num.mul(2), Num.sub(3), Num.pow(4));

    expect(m(2)).toEqual([3, 4, -1, 16]);
  });

  test(Fn.name.name, () => {
    expect(Fn.name(Fn.cmp)).toEqual('cmp');
    expect(Fn.name(Fn.name)).toEqual('name');
  });

  test(Fn.pass.name, () => {
    expect(Fn.pass(10)).toEqual(10);
    expect(Fn.pass(20)).toEqual(20);
  });
});
