import { describe, expect, test } from 'vitest';
import * as BigInt from './BigInt.js';

describe("BigInt", () => {
  test(BigInt.guard.name, () => {
    expect(BigInt.guard(10)).toEqual(false);
    expect(BigInt.guard(10n)).toEqual(true);
  });
  test(BigInt.cmp.name, () => {
    expect(BigInt.cmp(1n, 0n)).toEqual(1);
    expect(BigInt.cmp(0n, 0n)).toEqual(0);
    expect(BigInt.cmp(0n, 1n)).toEqual(-1);
  });
  test(BigInt.eq.name, () => {
    expect(BigInt.eq(10n, 10n)).toEqual(true);
    expect(BigInt.eq(10n, 5n)).toEqual(false);
    expect(BigInt.eq(10n, 10 as any)).toEqual(false);
    expect(BigInt.eq(10n)(10n)).toEqual(true);
    expect(BigInt.eq(10n)(5n)).toEqual(false);
    expect(BigInt.eq(10n)(10 as any)).toEqual(false);
  });
  test(BigInt.map.name, () => {
    const toHex = BigInt.map(x => '0x' + x.toString(16));

    expect(toHex(10n)).toEqual("0xa");
    expect(toHex("a" as any)).toEqual(Error("a is not a bigint"));
  });
  test(BigInt.mapOr.name, () => {
    const toHex = BigInt.mapOr(x => '0x' + x.toString(16), "0x0");

    expect(toHex(10n)).toEqual("0xa");
    expect(toHex("a" as any)).toEqual("0x0");
  });
  test(BigInt.add.name, () => {
    expect(BigInt.add(5n, -2n)).toEqual(3n);
    expect(BigInt.add(5n, 12n)).toEqual(17n);

    const add5 = BigInt.add(5n);

    expect(add5(10n)).toEqual(15n);
  });
  test(BigInt.div.name, () => {
    expect(BigInt.div(4n, 2n)).toEqual(2n);
    expect(BigInt.div(12n, 3n)).toEqual(4n);

    const div2 = BigInt.div(2n);

    expect(div2(4n)).toEqual(2n);
  });
  test(BigInt.mod.name, () => {
    expect(BigInt.mod(2n, 2n)).toEqual(0n);
    expect(BigInt.mod(3n, 2n)).toEqual(1n);

    const mod2 = BigInt.mod(2n);

    expect(mod2(10n)).toEqual(0n);
    expect(mod2(15n)).toEqual(1n);
  });
  test(BigInt.mul.name, () => {
    expect(BigInt.mul(5n, -2n)).toEqual(-10n);
    expect(BigInt.mul(5n, 12n)).toEqual(60n);

    const mul5 = BigInt.mul(5n);

    expect(mul5(10n)).toEqual(50n);
  });
  test(BigInt.pow.name, () => {
    expect(BigInt.pow(2n, 3n)).toEqual(8n);
    expect(BigInt.pow(3n, 2n)).toEqual(9n);

    const pow5 = BigInt.pow(5n);

    expect(pow5(10n)).toEqual(100_000n);
  });
  test(BigInt.root.name, () => {
    expect(BigInt.root(4n, 2n)).toEqual(2n);
    expect(BigInt.root(9n, 2n)).toEqual(3n);

    const root2 = BigInt.root(2n);

    expect(root2(4n)).toEqual(2n);
    expect(root2(9n)).toEqual(3n);
  });
  test(BigInt.sub.name, () => {
    expect(BigInt.sub(5n, -2n)).toEqual(7n);
    expect(BigInt.sub(5n, 12n)).toEqual(-7n);

    const sub5 = BigInt.sub(5n);

    expect(sub5(10n)).toEqual(5n);
    expect(sub5(-2n)).toEqual(-7n);
  });
  test(BigInt.asc.name, () => {
    const collection = [10n, 5n, 6n, 4n, 12n, 22n, 3n];

    expect(collection.sort(BigInt.asc)).toEqual([3n, 4n, 5n, 6n, 10n, 12n, 22n]);
    expect(BigInt.asc(1n)(2n)).toEqual(1)
  });
  test(BigInt.desc.name, () => {
    const collection = [10n, 5n, 6n, 4n, 12n, 22n, 3n];

    expect(collection.sort(BigInt.desc)).toEqual([22n, 12n, 10n, 6n, 5n, 4n, 3n]);
    expect(BigInt.desc(1n)(2n)).toEqual(-1)
  });
  test(BigInt.toBin.name, () => {
    expect(BigInt.toBin(10n)).toEqual("0b1010");
  });
  test(BigInt.toHex.name, () => {
    expect(BigInt.toHex(10n)).toEqual("0xa");
  });
  test(BigInt.toOct.name, () => {
    expect(BigInt.toOct(10n)).toEqual("0o12");
  });
  test(BigInt.toJSON.name, () => {
    expect(BigInt.toJSON(10n)).toEqual("10");
  });
  test(BigInt.toString.name, () => {
    expect(BigInt.toString(10n)).toEqual("10");
  });
});