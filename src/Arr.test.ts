import { describe, expect, test } from 'vitest';
import * as Arr from './Arr.js';
import * as Num from './Num.js';
import * as Functors from './Functors.js';
import * as Str from './Str.js';

describe("Arr", () => {
  test(Arr.cmp.name, () => {
    const cmp = Arr.cmp(Num.cmp);

    expect(cmp([], [])).toBe(0);
    expect(cmp([1], [])).toBe(1);
    expect(cmp([1], [1])).toBe(0);
    expect(cmp([0], [1])).toBe(-1);
    expect(cmp([0, 1], [1, 0])).toBe(0);
    expect(cmp([1, 0], [0, 1])).toBe(0);
    expect(cmp([0, 1, 1], [1, 0])).toBe(1);
    expect(cmp([1, 0], [0, 1, 1])).toBe(-1);

    const cmp2 = Arr.cmp(Str.cmp);

    expect(cmp2(['a'], ['a'])).toEqual(0);
    expect(cmp2(['a'], ['b'])).toEqual(-1);
    expect(cmp2(['b'], ['a'])).toEqual(1);
    expect(cmp2(['a'], ['a', 'b'])).toEqual(-1);
    expect(cmp2(['a', 'b'], ['a'])).toEqual(1);
    expect(cmp2(['a', 'b'], ['a', 'b'])).toEqual(0);
    expect(cmp2(['a', 'b', 'c'], ['a', 'b'])).toEqual(1);
    expect(cmp2(['a', 'b', 'c'], ['a', 'b', 'c'])).toEqual(0);
  });

  test(Arr.concat.name, () => {
    expect(Arr.concat([], [])).toEqual([]);
    expect(Arr.concat([1], [2])).toEqual([1, 2]);
    expect(Arr.concat([1])([2])).toEqual([2, 1]);
  });

  test(Arr.contains.name, () => {
    expect(Arr.contains(['a'], 'a')).toEqual(true);
    expect(Arr.contains(['a'], 'b')).toEqual(false);
    expect(Arr.contains('a')(['a'])).toEqual(true);
    expect(Arr.contains('a')(['b'])).toEqual(false);
  });

  test(Arr.empty.name, () => {
    expect(Arr.empty([])).toEqual(true);
    expect(Arr.empty(['a'])).toEqual(false);
  });

  test(Arr.eq.name, () => {
    const eq = Arr.eq(Str.eq);

    expect(eq(['a'], ['a'])).toEqual(true);
    expect(eq(['a'], ['b'])).toEqual(false);
    expect(eq(['b'], ['a'])).toEqual(false);
    expect(eq(['a'], ['a', 'b'])).toEqual(false);
    expect(eq(['a', 'b'], ['a'])).toEqual(false);
    expect(eq(['a', 'b'], ['b', 'a'])).toEqual(false);
    expect(eq(['a', 'b'], ['a', 'b'])).toEqual(true);
  });

  test(Arr.every.name, () => {
    expect(Arr.every([10, 20], Num.isEven)).toEqual(true);
    expect(Arr.every([10, 21], Num.isEven)).toEqual(false);
    expect(Arr.every(Num.isEven)([10, 20])).toEqual(true);
    expect(Arr.every(Num.isEven)([10, 21])).toEqual(false);
  });

  test(Arr.fill.name, () => {
    const x = Arr.make(4);

    Arr.fill(x, 10, 0, 3);           // [10, 10, 10, 10]
    Arr.fill(10, 0, 3)(x);           // [10, 10, 10, 10]
    Arr.fill(x, 10);                 // [10, 10, 10, 10]
    Arr.fill(10)(x);                 // [10, 10, 10, 10]
  });

  test(Arr.filter.name, () => {
    const x = [10, 20, 30];

    expect(Arr.filter(x, Num.gt(10))).toEqual([20, 30]);
    expect(Arr.filter(Num.gt(10))(x)).toEqual([20, 30]);
  });

  test(Arr.filterMap.name, () => {
    const x = [-10, 10];
    const mod: Functors.FilterMappableModule<number, number> = {
      filter: Num.gt(0),
      map: Num.add(10),
    };

    expect(Arr.filterMap(x, mod)).toEqual([20]);
    expect(Arr.filterMap(mod)(x)).toEqual([20]);
    expect(() => Arr.filterMap({} as any)(x)).toThrow();
    expect(() => Arr.filterMap(x, {} as any)).toThrow();
  });

  test(Arr.filterReduce.name, () => {
    const mod: Functors.FilterReduceableModule<number, number> = {
      [Functors.defaultsymbol]: 0,
      filter: Num.isPositive,
      reduce: Num.add,
    };

    const x = [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5];

    expect(Arr.filterReduce(x, mod)).toEqual(15);
    expect(Arr.filterReduce(mod)(x)).toEqual(15);
    expect(() => Arr.filterReduce({} as any)(x)).toThrow();
    expect(() => Arr.filterReduce(x, {} as any)).toThrow();
  });

  test(Arr.find.name, () => {
    const x = [10, 20, 30];
    const gt10 = Num.gt(10);
    const gt30 = Num.gt(30);

    expect(Arr.find(x, gt10)).toEqual(20);
    expect(Arr.find(x, gt30)).toEqual(null);
    expect(Arr.find(gt10)(x)).toEqual(20);
    expect(Arr.find(gt30)(x)).toEqual(null);
  });

  test(Arr.first.name, () => {
    expect(Arr.first(['a', 'b'])).toEqual('a');
    expect(Arr.first([])).toEqual(null);
  });

  test(Arr.firstOr.name, () => {
    expect(Arr.firstOr([10, 20], 0)).toEqual(10);
    expect(Arr.firstOr(0)([10, 20])).toEqual(10);
    expect(Arr.firstOr([], 0)).toEqual(0);
    expect(Arr.firstOr(0)([])).toEqual(0);
  });

  test(Arr.flat.name, () => {
    const x = [[10, 20], [['hello', 'world']]];

    expect(Arr.flat(x)).toEqual([10, 20, ['hello', 'world']]);
    expect(Arr.flat(x, 2)).toEqual([10, 20, 'hello', 'world']);
    expect(Arr.flat()(x)).toEqual([10, 20, ['hello', 'world']]);
    expect(Arr.flat(2)(x)).toEqual([10, 20, 'hello', 'world']);
  });

  test(Arr.flatMap.name, () => {
    const x = [[2, 3], [4, 5]];

    expect(Arr.flatMap(x, Num.add(1))).toEqual([3, 4, 5, 6]);
    expect(Arr.flatMap(Num.add(1))(x)).toEqual([3, 4, 5, 6]);
  });

  test(Arr.from.name, () => {
    expect(Arr.from([1, 2, 3])).toEqual([1, 2, 3]);
    expect(Arr.from(new Set([1, 2, 3]))).toEqual([1, 2, 3]);
  });

  test(Arr.get.name, () => {
    const err = Error("Index out of bounds 3 for length 2");

    expect(Arr.get([10, 20], 1)).toEqual(20);
    expect(Arr.get([10, 20], 3)).toEqual(err);
    expect(Arr.get(1)([10, 20])).toEqual(20);
    expect(Arr.get(3)([10, 20])).toEqual(err);
  });

  test(Arr.guard.name, () => {
    expect(Arr.guard([])).toEqual(true);
    expect(Arr.guard(null)).toEqual(false);
    expect(Arr.guard(undefined)).toEqual(false);
    expect(Arr.guard(0)).toEqual(false);
    expect(Arr.guard('')).toEqual(false);
  });

  test(Arr.guardOf.name, () => {
    const isStrArr = Arr.guardOf(Str.guard);

    expect(isStrArr(10)).toEqual(false);
    expect(isStrArr([])).toEqual(true);
    expect(isStrArr(['a'])).toEqual(true);
    expect(isStrArr(['a', 'b'])).toEqual(true);
    expect(isStrArr(['a', 'b', 'c'])).toEqual(true);
    expect(isStrArr(['a', 'b', 'c', 1])).toEqual(false);

    expect(Arr.guardOf(Str.guard, 10)).toEqual(false);
    expect(Arr.guardOf(Str.guard, [])).toEqual(true);
    expect(Arr.guardOf(Str.guard, ['a'])).toEqual(true);
    expect(Arr.guardOf(Str.guard, ['a', 'b'])).toEqual(true);
    expect(Arr.guardOf(Str.guard, ['a', 'b', 'c'])).toEqual(true);
    expect(Arr.guardOf(Str.guard, ['a', 'b', 'c', 1])).toEqual(false);
  });

  test(Arr.includes.name, () => {
    const x = [10, 20, 30];

    expect(Arr.includes(x, 30)).toEqual(true);
    expect(Arr.includes(30)(x)).toEqual(true);
    expect(Arr.includes(x, 40)).toEqual(false);
    expect(Arr.includes(40)(x)).toEqual(false);
  });

  test(Arr.join.name, () => {
    const x = [10, 20, 30];

    expect(Arr.join(x, '-')).toEqual('10-20-30');
    expect(Arr.join('-')(x)).toEqual('10-20-30');
    expect(Arr.join(x)).toEqual('102030');
    expect(Arr.join()(x)).toEqual('102030');
  });

  test(Arr.last.name, () => {
    expect(Arr.last(['a', 'b'])).toEqual('b');
    expect(Arr.last([])).toEqual(null);
  });

  test(Arr.lastOr.name, () => {
    expect(Arr.lastOr([10, 20], 0)).toEqual(20);
    expect(Arr.lastOr(0)([10, 20])).toEqual(20);
    expect(Arr.lastOr([], 0)).toEqual(0);
    expect(Arr.lastOr(0)([])).toEqual(0);
  });

  test(Arr.length.name, () => {
    expect(Arr.length([])).toEqual(0);
    expect(Arr.length([1])).toEqual(1);
    expect(Arr.length([1, 2, 3])).toEqual(3);
  });

  test(Arr.make.name, () => {
    expect(Arr.make(3)).toEqual([undefined, undefined, undefined]);
    expect(Arr.make(3, 'hello')).toEqual(['hello', 'hello', 'hello']);
    expect(Arr.make(3, x => ((x + 1) * 10).toString(16))).toEqual(['a', '14', '1e']);
  });

  test(Arr.map.name, () => {
    const x = [1, 2, 3];
    const m = Num.mul(2);

    expect(Arr.map(x, m)).toEqual([2, 4, 6]);
    expect(Arr.map(m)(x)).toEqual([2, 4, 6]);
  });

  test(Arr.none.name, () => {
    const x = [1, 3, 5];
    const p = Num.isEven;

    expect(Arr.none(x, p)).toEqual(true);
    expect(Arr.none(p)(x)).toEqual(true);
  });

  test(Arr.of.name, () => {
    expect(Arr.of(1, 2, 3)).toEqual([1, 2, 3]);
  });

  test(Arr.populated.name, () => {
    expect(Arr.populated([])).toEqual(false);
    expect(Arr.populated(['a'])).toEqual(true);
  });

  test(Arr.random.name, () => {
    expect(Arr.random(['a', 'b', 'c'])).oneOf(['a', 'b', 'c']);
  });

  test(Arr.reduce.name, () => {
    const x = [1, 2, 3, 4, 5];

    Arr.reduce(x, Num.add, 0);       // 15
    Arr.reduce(Num.add, 0)(x);       // 15
  });

  test(Arr.reduceRight.name, () => {
    const x = [1, 2, 3, 4, 5];

    expect(Arr.reduceRight(x, Num.sub, 0)).toEqual(-15);
    expect(Arr.reduceRight(Num.sub, 0)(x)).toEqual(-15);
  });

  test(Arr.reverse.name, () => {
    expect(Arr.reverse([10, 20, 30])).toEqual([30, 20, 10]);
  });

  test(Arr.slice.name, () => {
    const x = [10, 20, 30];

    expect(Arr.slice(x)).toEqual([10, 20, 30]);
    expect(Arr.slice(x, 2)).toEqual([30]);
    expect(Arr.slice(x, 1, 2)).toEqual([20]);
    expect(Arr.slice()(x)).toEqual([10, 20, 30]);
    expect(Arr.slice(2)(x)).toEqual([30]);
    expect(Arr.slice(1, 2)(x)).toEqual([20]);
  });

  test(Arr.shuffle.name, () => {
    expect(Arr.shuffle([10, 20, 30]).join()).oneOf([
      [10, 20, 30].join(),
      [10, 30, 20].join(),
      [20, 10, 30].join(),
      [20, 30, 10].join(),
      [30, 10, 20].join(),
      [30, 20, 10].join(),
    ]);
  });

  test(Arr.some.name, () => {
    const x = [1, 2, 3];
    const p = Num.isEven;

    expect(Arr.some(x, p)).toBe(true);
    expect(Arr.some(p)(x)).toBe(true);
  });

  test(Arr.sort.name, () => {
    const x = [3, 1, 2, 5, 4];
    const s = Num.asc;

    expect(Arr.sort(x, s)).toEqual([1, 2, 3, 4, 5]);
    expect(Arr.sort(s)(x)).toEqual([1, 2, 3, 4, 5]);
  });

});
