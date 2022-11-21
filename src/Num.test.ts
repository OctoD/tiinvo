import { describe, expect, test } from 'vitest';
import * as Num from './Num.js';

describe("Num", () => {
  test(Num.add.name, () => {
    expect(Num.add(5, -2)).toEqual(3);
    expect(Num.add(5, 12)).toEqual(17);

    const add5 = Num.add(5);

    expect(add5(10)).toEqual(15);
  });

  test(Num.asc.name, () => {
    const collection = [10, 5, 6, 4, 12, 22, 3];

    expect(collection.sort(Num.asc)).toEqual([3, 4, 5, 6, 10, 12, 22]);
    expect(Num.asc(10)(2)).toEqual(-1);
  });

  test(Num.cmp.name, () => {
    expect(Num.cmp(1, 1)).toEqual(0);
    expect(Num.cmp(1, 0)).toEqual(1);
    expect(Num.cmp(0, 1)).toEqual(-1);

    expect(Num.cmp(1)(1)).toEqual(0);
    expect(Num.cmp(1)(0)).toEqual(-1);
    expect(Num.cmp(0)(1)).toEqual(1);
  });

  test(Num.desc.name, () => {
    const collection = [10, 5, 6, 4, 12, 22, 3];

    expect(collection.sort(Num.desc)).toEqual([22, 12, 10, 6, 5, 4, 3]);
    expect(Num.desc(10)(1)).toEqual(1);
  });

  test(Num.div.name, () => {
    expect(Num.div(4, 2)).toEqual(2);
    expect(Num.div(12, 3)).toEqual(4);

    const div2 = Num.div(2);

    expect(div2(4)).toEqual(2);
  });

  test(Num.eq.name, () => {
    expect(Num.eq(1, 1)).toEqual(true);
    expect(Num.eq(1, 0)).toEqual(false);
    expect(Num.eq(0, 1)).toEqual(false);
  });

  test(Num.gt.name, () => {
    expect(Num.gt(5, -2)).toEqual(true);
    expect(Num.gt(5, 12)).toEqual(false);

    const gt5 = Num.gt(5);

    expect(gt5(10)).toEqual(true);
    expect(gt5(-2)).toEqual(false);
  });

  test(Num.gte.name, () => {
    expect(Num.gte(5, -2)).toEqual(true);
    expect(Num.gte(5, 12)).toEqual(false);
    expect(Num.gte(10, 10)).toEqual(true);

    const gte5 = Num.gte(5);

    expect(gte5(10)).toEqual(true);
    expect(gte5(5)).toEqual(true);
    expect(gte5(-2)).toEqual(false);
  });

  test(Num.guard.name, () => {
    const or0 = (x: unknown): number => Num.guard(x) ? x : 0;

    expect(or0(10)).toEqual(10);
    expect(or0(20)).toEqual(20);
    expect(or0(-1)).toEqual(-1);
    expect(or0(4e12)).toEqual(4e12);
    expect(or0('hello world')).toEqual(0);
    expect(or0(true)).toEqual(0);
    expect(or0(false)).toEqual(0);
    expect(or0({})).toEqual(0);
  });

  test(Num.isEven.name, () => {
    expect(Num.isEven(10)).toEqual(true);
    expect(Num.isEven(91)).toEqual(false);
  });

  test(Num.isNegative.name, () => {
    expect(Num.isNegative(-1)).toEqual(true);
    expect(Num.isNegative(10)).toEqual(false);
  });

  test(Num.isOdd.name, () => {
    expect(Num.isOdd(10)).toEqual(false);
    expect(Num.isOdd(91)).toEqual(true);
  });

  test(Num.isPositive.name, () => {
    expect(Num.isPositive(-1)).toEqual(false);
    expect(Num.isPositive(10)).toEqual(true);
  });

  test(Num.lt.name, () => {
    expect(Num.lt(5, -2)).toEqual(false);
    expect(Num.lt(5, 12)).toEqual(true);

    const lt5 = Num.lt(5);

    expect(lt5(10)).toEqual(false);
    expect(lt5(-2)).toEqual(true);
  });

  test(Num.lte.name, () => {
    expect(Num.lte(5, -2)).toEqual(false);
    expect(Num.lte(5, 12)).toEqual(true);
    expect(Num.lte(5, 5)).toEqual(true);

    const lte5 = Num.lte(5);

    expect(lte5(5)).toEqual(true);
    expect(lte5(10)).toEqual(false);
    expect(lte5(-2)).toEqual(true);
  });

  test(Num.map.name, () => {
    const toHex = Num.map(x => '0x' + x.toString(16));

    expect(toHex(10)).toEqual("0xa");
    expect(toHex("a" as any)).toEqual(new Error("a is not a number"));
  });

  test(Num.mapOr.name, () => {
    const toHex = Num.mapOr(x => '0x' + x.toString(16), "0x0");

    expect(toHex(10)).toEqual("0xa");
    expect(toHex("a" as any)).toEqual("0x0");
  });

  test(Num.mod.name, () => {
    expect(Num.mod(2, 2)).toEqual(0);
    expect(Num.mod(3, 2)).toEqual(1);

    const mod2 = Num.mod(2);

    expect(mod2(10)).toEqual(0);
    expect(mod2(15)).toEqual(1);
  });

  test(Num.mul.name, () => {
    expect(Num.mul(5, -2)).toEqual(-10);
    expect(Num.mul(5, 12)).toEqual(60);

    const mul5 = Num.mul(5);

    expect(mul5(10)).toEqual(50);
  });

  test(Num.ne.name, () => {
    expect(Num.ne(5, -2)).toEqual(true);
    expect(Num.ne(5, 12)).toEqual(true);
    expect(Num.ne(5, 5)).toEqual(false);

    const ne5 = Num.ne(5);

    expect(ne5(5)).toEqual(false);
    expect(ne5(10)).toEqual(true);
    expect(ne5(-2)).toEqual(true);
  });

  test(Num.pow.name, () => {
    expect(Num.pow(2, 3)).toEqual(8);
    expect(Num.pow(3, 2)).toEqual(9);

    const pow5 = Num.pow(5);

    expect(pow5(10)).toEqual(100_000);
  });

  test(Num.root.name, () => {
    expect(Num.root(4, 2)).toEqual(2);
    expect(Num.root(9, 2)).toEqual(3);

    const root2 = Num.root(2);

    expect(root2(4)).toEqual(2);
    expect(root2(9)).toEqual(3);
  });

  test(Num.sub.name, () => {
    expect(Num.sub(5, -2)).toEqual(7);
    expect(Num.sub(5, 12)).toEqual(-7);

    const sub5 = Num.sub(5);

    expect(sub5(10)).toEqual(5);
    expect(sub5(-2)).toEqual(-7);
  });

  test(Num.toBin.name, () => {
    expect(Num.toBin(10)).toEqual('0b1010');
  });

  test(Num.toExponential.name, () => {
    expect(Num.toExponential(10, 2)).toEqual("1.00e+1");
    expect(Num.toExponential(10)(2)).toEqual("2.0000000000e+0");
  });

  test(Num.toFixed.name, () => {
    expect(Num.toFixed(10.505, 2)).toEqual("10.51");
    expect(Num.toFixed(10.505)(2)).toEqual("2.0000000000");
  });

  test(Num.toHex.name, () => {
    expect(Num.toHex(10)).toEqual("0xa");
  });

  test(Num.toJSON.name, () => {
    expect(Num.toJSON(10)).toEqual("10");
  });

  test(Num.toOct.name, () => {
    expect(Num.toOct(10)).toEqual("0o12");
  });

  test(Num.toPrecision.name, () => {
    expect(Num.toPrecision(10, 2)).toEqual("10");
    expect(Num.toPrecision(10)(2)).toEqual("2.000000000");
  });

  test(Num.toString.name, () => {
    expect(Num.toString(10)).toEqual("10");
  });
});
