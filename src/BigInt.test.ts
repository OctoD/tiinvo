import { describe, expect, test } from 'vitest';
import * as Bigint from './BigInt.js';

describe("BigInt", () => {
  test(Bigint.guard.name, () => {
    expect(Bigint.guard(10)).toEqual(false);
    expect(Bigint.guard(10n)).toEqual(true);
  });
  test(Bigint.cmp.name, () => {
    expect(Bigint.cmp(1n, 0n)).toEqual(1);
    expect(Bigint.cmp(0n, 0n)).toEqual(0);
    expect(Bigint.cmp(0n, 1n)).toEqual(-1);
    
    const cmp = Bigint.cmp(0n);
    expect(cmp(-1n)).toEqual(1);
    expect(cmp(0n)).toEqual(0);
    expect(cmp(1n)).toEqual(-1);
  });
  test(Bigint.eq.name, () => {
    expect(Bigint.eq(10n, 10n)).toEqual(true);
    expect(Bigint.eq(10n, 5n)).toEqual(false);
    expect(Bigint.eq(10n, 10 as any)).toEqual(false);
    expect(Bigint.eq(10n)(10n)).toEqual(true);
    expect(Bigint.eq(10n)(5n)).toEqual(false);
    expect(Bigint.eq(10n)(10 as any)).toEqual(false);
  });
  test(Bigint.map.name, () => {
    const m = (x: bigint): string => '0x' + x.toString(16);
    const toHex = Bigint.map(m);

    expect(toHex(10n)).toEqual("0xa");
    expect(toHex("a" as any)).toEqual(Error("a is not a bigint"));
    
    expect(Bigint.map(10n, m)).toEqual("0xa");
    expect(Bigint.map("a" as any, m)).toEqual(new TypeError("a is not a bigint and m is not a Mappable functor"));
  });
  test(Bigint.mapOr.name, () => {
    const m = (x: bigint): string => '0x' + x.toString(16);
    const toHex = Bigint.mapOr(m, "0x0");

    expect(toHex(10n)).toEqual("0xa");
    expect(toHex("a" as any)).toEqual("0x0");
    expect(Bigint.mapOr(10n, m, "0x0")).toEqual("0xa");
    expect(Bigint.mapOr("a" as any, m, "0x0")).toEqual("0x0");
    expect(Bigint.mapOr("a" as any, "b" as any, "0x0")).toEqual("0x0");
  });
  test(Bigint.add.name, () => {
    expect(Bigint.add(5n, -2n)).toEqual(3n);
    expect(Bigint.add(5n, 12n)).toEqual(17n);

    const add5 = Bigint.add(5n);

    expect(add5(10n)).toEqual(15n);
  });
  test(Bigint.div.name, () => {
    expect(Bigint.div(4n, 2n)).toEqual(2n);
    expect(Bigint.div(12n, 3n)).toEqual(4n);

    const div2 = Bigint.div(2n);

    expect(div2(4n)).toEqual(2n);
  });
  test(Bigint.mod.name, () => {
    expect(Bigint.mod(2n, 2n)).toEqual(0n);
    expect(Bigint.mod(3n, 2n)).toEqual(1n);

    const mod2 = Bigint.mod(2n);

    expect(mod2(10n)).toEqual(0n);
    expect(mod2(15n)).toEqual(1n);
  });
  test(Bigint.mul.name, () => {
    expect(Bigint.mul(5n, -2n)).toEqual(-10n);
    expect(Bigint.mul(5n, 12n)).toEqual(60n);

    const mul5 = Bigint.mul(5n);

    expect(mul5(10n)).toEqual(50n);
  });
  test(Bigint.pow.name, () => {
    expect(Bigint.pow(2n, 3n)).toEqual(8n);
    expect(Bigint.pow(3n, 2n)).toEqual(9n);

    const pow5 = Bigint.pow(5n);

    expect(pow5(10n)).toEqual(100_000n);
  });
  test(Bigint.root.name, () => {
    expect(Bigint.root(4n, 2n)).toEqual(2n);
    expect(Bigint.root(9n, 2n)).toEqual(3n);

    const root2 = Bigint.root(2n);

    expect(root2(4n)).toEqual(2n);
    expect(root2(9n)).toEqual(3n);
  });
  test(Bigint.sub.name, () => {
    expect(Bigint.sub(5n, -2n)).toEqual(7n);
    expect(Bigint.sub(5n, 12n)).toEqual(-7n);

    const sub5 = Bigint.sub(5n);

    expect(sub5(10n)).toEqual(5n);
    expect(sub5(-2n)).toEqual(-7n);
  });
  test(Bigint.asc.name, () => {
    const collection = [10n, 5n, 6n, 4n, 12n, 22n, 3n];

    expect(collection.sort(Bigint.asc)).toEqual([3n, 4n, 5n, 6n, 10n, 12n, 22n]);
    expect(Bigint.asc(1n)(2n)).toEqual(1)
  });
  test(Bigint.desc.name, () => {
    const collection = [10n, 5n, 6n, 4n, 12n, 22n, 3n];

    expect(collection.sort(Bigint.desc)).toEqual([22n, 12n, 10n, 6n, 5n, 4n, 3n]);
    expect(Bigint.desc(1n)(2n)).toEqual(-1)
  });
  test(Bigint.toBin.name, () => {
    expect(Bigint.toBin(10n)).toEqual("0b1010");
  });
  test(Bigint.toHex.name, () => {
    expect(Bigint.toHex(10n)).toEqual("0xa");
  });
  test(Bigint.toOct.name, () => {
    expect(Bigint.toOct(10n)).toEqual("0o12");
  });
  test(Bigint.toJSON.name, () => {
    expect(Bigint.toJSON(10n)).toEqual("10");
  });
  test(Bigint.toString.name, () => {
    expect(Bigint.toString(10n)).toEqual("10");
  });
});