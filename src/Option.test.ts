import { describe, expect, test } from 'vitest';
import * as Option from './Option.js';
import * as Num from './Num.js';
import * as Str from './Str.js';

describe("Option", () => {
  test(Option.isNone.name, () => {
    expect(Option.isNone(1)).toEqual(false);
    expect(Option.isNone(null)).toEqual(true);
    expect(Option.isNone(undefined)).toEqual(true);
  });

  test(Option.isSome.name, () => {
    expect(Option.isSome(1)).toEqual(true);
    expect(Option.isSome(null)).toEqual(false);
    expect(Option.isSome(undefined)).toEqual(false);
  });

  test(Option.guardOf.name, () => {
    const x = 1;
    const y = null;
    const z = undefined;
    const w = `a`;

    const isnumsome = Option.guardOf(Num.guard);

    expect(isnumsome(x)).toEqual(true);
    expect(isnumsome(y)).toEqual(true);
    expect(isnumsome(z)).toEqual(true);
    expect(isnumsome(w)).toEqual(false);
  });

  test(Option.cmp.name, () => {
    const cmp = Option.cmp(Str.cmp);

    expect(cmp("a", "a")).toEqual(0);
    expect(cmp("a", "b")).toEqual(-1);
    expect(cmp("b", "a")).toEqual(1);
    expect(cmp(null, undefined)).toEqual(0);
    expect(cmp(null, "a")).toEqual(-1);
    expect(cmp("a", undefined)).toEqual(1);
  });

  test(Option.eq.name, () => {
    const eq = Option.eq(Num.eq);

    expect(eq(0, 0)).toEqual(true);
    expect(eq(null, undefined)).toEqual(true);
    expect(eq(null, 0)).toEqual(false);
    expect(eq(0, null)).toEqual(false);
    expect(eq(1_000_000, 0)).toEqual(false);
  });

  test(Option.filter.name, () => {
    const f = Option.filter(Num.gt(1));

    expect(f(1)).toEqual(null);
    expect(f(2)).toEqual(2);
    expect(Option.filter(Num.gt(1), 2)).toEqual(2);
    expect(f(null)).toEqual(null);
    expect(Option.filter(Num.gt(2), 1)).toEqual(null);
    expect(Option.filter(Num.gt(1), null)).toEqual(null);
  });

  test(Option.map.name, () => {
    const m = Option.map(Num.add(1));

    expect(m(1)).toEqual(2);
    expect(m(null)).toEqual(null);
  });

  test(Option.mapOr.name, () => {
    const m = Option.mapOr(Num.add(2), 0);

    expect(m(1)).toEqual(3);
    expect(m(null)).toEqual(0);
  });

  test(Option.tryAsync.name, async () => {
    const fn = async (arg: number) => {
      if (Num.isEven(arg)) {
        return arg * 2;
      }

      throw new Error(`${arg} is not even`);
    };

    const safe = Option.tryAsync(fn);

    expect(await safe(2)).toEqual(4);
    expect(await safe(3)).toEqual(null);

    expect(Option.isSome(await safe(2))).toEqual(true);
    expect(Option.isNone(await safe(3))).toEqual(true);
  });

  test(Option.trySync.name, () => {
    const fn = (arg: number) => {
      if (Num.isEven(arg)) {
        return arg * 2;
      }

      throw new Error(`${arg} is not even`);
    };

    const safe = Option.trySync(fn);

    expect(safe(2)).toEqual(4);
    expect(safe(3)).toEqual(null);

    expect(Option.isSome(safe(2))).toEqual(true);
    expect(Option.isNone(safe(3))).toEqual(true);
  });
});
