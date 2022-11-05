import { describe, expect, test } from 'vitest';
import * as Result from './Result.js';
import * as Num from './Num.js';
import * as Str from './Str.js';

describe("Result", () => {
  test(`checks if is ok or err`, () => {
    expect(Result.isOk(10)).toBe(true);
    expect(Result.isOk(Error)).toBe(true);
    expect(Result.isOk(new Error())).toBe(false);
    expect(Result.isErr(new Error())).toBe(true);
    expect(Result.isErr(Error)).toBe(false);
    expect(Result.isErr(null)).toBe(false);
    expect(Result.isErr({ name: 'foo', message: 'bar', cause: 'baz' })).toBe(true);
  });

  test(Result.err.name, () => {
    expect(Result.err(10) instanceof Error).toEqual(true);
    expect(Result.err(new TypeError('aaaa')) instanceof Error).toEqual(true);
    expect(Result.err({}) instanceof Error).toEqual(true);
    expect(Result.err(10n) instanceof Error).toEqual(true);
    expect(Result.err([10, 20, 30]) instanceof Error).toEqual(true);
  });

  test(Result.isErr.name, () => {
    expect(Result.isErr(10)).toEqual(false);
    expect(Result.isErr(new TypeError('aaaa'))).toEqual(true);
  });

  test(Result.isOk.name, () => {
    expect(Result.isOk(10)).toEqual(true);
    expect(Result.isOk(new TypeError('aaaa'))).toEqual(false);
  });

  test(Result.isOkOf.name, () => {
    const guard = Result.isOkOf(Num.guard);

    expect(guard(10)).toEqual(true);
    expect(guard("hello")).toEqual(false);
    expect(guard(new TypeError('aaaa'))).toEqual(false);
  });

  test(Result.cmp.name, () => {
    const cmp = Result.cmp(Str.cmp);

    expect(cmp("a", "a")).toEqual(0);
    expect(cmp("a", "b")).toEqual(-1);
    expect(cmp("b", "a")).toEqual(1);
    expect(cmp(new Error(), new Error())).toEqual(0);
    expect(cmp(new Error(), "a")).toEqual(-1);
    expect(cmp("a", new Error())).toEqual(1);
  });

  test(Result.eq.name, () => {
    const eq = Result.eq(Num.eq);

    expect(eq(0, 0)).toEqual(true);
    expect(eq(new Error(), new TypeError())).toEqual(true);
    expect(eq(new Error(), 0)).toEqual(false);
    expect(eq(0, new Error())).toEqual(false);
    expect(eq(1_000_000, 0)).toEqual(false);
  });

  test(Result.filter.name, () => {
    const f = Result.filter(Num.gt(1));

    expect(f(1)).toEqual(Error("Value did not pass filter"));
    expect(f(2)).toEqual(2);
    expect(Result.filter(Num.eq(0), 0)).toEqual(0);
    expect(Result.filter(Num.eq(0), 1)).toEqual(Error("Value did not pass filter"));
    expect(Result.filter(Num.eq(0), new TypeError())).toEqual(Error("Value did not pass filter"));
    // expect(Result.filter(Num.gt(1), 2)).toEqual(2);
    // expect(Result.filter(Num.gt(1), new TypeError())).toEqual(Error("Value did not pass filter"));
    expect(f(new TypeError())).toEqual(Error("Value did not pass filter"));
  });

  test(Result.map.name, () => {
    const m = Result.map(Num.add(10));

    expect(m(10)).toEqual(20);
    expect(m(new Error('foobar!'))).toEqual(Error('foobar!'));
  });

  test(Result.mapOr.name, () => {
    const map = Result.mapOr(Str.length, 0);

    expect(map('hello')).toEqual(5);
    expect(map(new Error())).toEqual(0);
  });

  test(Result.tryAsync.name, async () => {
    const fn = async (arg: number) => {
      if (Num.isEven(arg)) {
        return arg * 2;
      }

      throw new Error(`${arg} is not even`);
    };

    const safe = Result.tryAsync(fn);

    expect(await safe(2)).toEqual(4);
    expect(await safe(3)).toEqual(Error("3 is not even"));

    expect(Result.isOk(await safe(2))).toEqual(true);
    expect(Result.isErr(await safe(3))).toEqual(true);
  });

  test(Result.trySync.name, () => {
    const fn = (arg: number) => {
      if (Num.isEven(arg)) {
        return arg * 2;
      }

      throw new Error(`${arg} is not even`);
    };

    const safe = Result.trySync(fn);

    expect(safe(2)).toEqual(4);
    expect(safe(3)).toEqual(Error("3 is not even"));

    expect(Result.isOk(safe(2))).toEqual(true);
    expect(Result.isErr(safe(3))).toEqual(true);
  });
});