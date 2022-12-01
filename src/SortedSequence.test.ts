import { describe, expect, test } from 'vitest';
import * as SortedSequence from './SortedSequence.js';
import * as Num from './Num.js';
import * as Str from './Str.js';

describe(`SortedSequence`, () => {
  test(SortedSequence.make.name, () => {
    const s0 = SortedSequence.make(Num, 10, 20, 30);
    const s1 = SortedSequence.make(Str, 'hello', 'world');
    const s2 = SortedSequence.make(Str.cmp, 'hello', 'world');

    expect(SortedSequence.guardOf(Num.guard)(s0)).toEqual(true);
    expect(SortedSequence.guardOf(Num.guard)(s1)).toEqual(false);
    expect(SortedSequence.guardOf(Str.guard)(s0)).toEqual(false);
    expect(SortedSequence.guardOf(Str.guard)(s1)).toEqual(true);
    expect(SortedSequence.guardOf(Str.guard)(s2)).toEqual(true);
  });

  test(SortedSequence.guard.name, () => {
    const s = SortedSequence.make(Str);

    expect(SortedSequence.guard(s)).toEqual(true);
    expect(SortedSequence.guard([])).toEqual(false);
  });

  test(SortedSequence.guardOf.name, () => {
    const s0 = SortedSequence.make(Num, 1, 2);
    const s1 = SortedSequence.make(Str, 'hello', 'world');
    const isStrSortedList0 = SortedSequence.guardOf(Str.guard);
    const isStrSortedList1 = SortedSequence.guardOf(Str);

    expect(SortedSequence.guardOf(Str, s0)).toEqual(false);
    expect(SortedSequence.guardOf(Str, s1)).toEqual(true);

    expect(SortedSequence.guardOf(Str.guard, s0)).toEqual(false);
    expect(SortedSequence.guardOf(Str.guard, s1)).toEqual(true);

    expect(isStrSortedList0(s0)).toEqual(false);
    expect(isStrSortedList0(s1)).toEqual(true);

    expect(isStrSortedList1(s0)).toEqual(false);
    expect(isStrSortedList1(s1)).toEqual(true);
  });

  test(SortedSequence.cmp.name, () => {
    const s0 = SortedSequence.make<number>(Num, 0, 1, 2);
    const s1 = SortedSequence.make<number>(Num, 0, 1, 2);
    const s2 = SortedSequence.make<number>(Num, 0, 1, 2, 3);

    expect(SortedSequence.cmp(s0, s1)).toEqual(0);
    expect(SortedSequence.cmp(s0)(s1)).toEqual(0);

    expect(SortedSequence.cmp(s0, s2)).toEqual(-1);
    expect(SortedSequence.cmp(s0)(s2)).toEqual(-1);

    expect(SortedSequence.cmp(s2, s0)).toEqual(1);
    expect(SortedSequence.cmp(s2)(s0)).toEqual(1);
  });

  test(SortedSequence.eq.name, () => {
    const s0 = SortedSequence.make<number>(Num, 0, 1, 2);
    const s1 = SortedSequence.make<number>(Num, 0, 1, 2);
    const s2 = SortedSequence.make<number>(Num, 0, 1, 2, 3);

    expect(SortedSequence.eq(s0, s1)).toEqual(true);
    expect(SortedSequence.eq(s0)(s1)).toEqual(true);

    expect(SortedSequence.eq(s0, s2)).toEqual(false);
    expect(SortedSequence.eq(s0)(s2)).toEqual(false);
  });

  test(SortedSequence.map.name, () => {
    const s = SortedSequence.make<number>(Num, 3, 1, 2);
    const m = Num.mul(2);

    expect(SortedSequence.map(s, m)).toEqual(SortedSequence.make(Num, 2, 4, 6));
    expect(SortedSequence.map(m)(s)).toEqual(SortedSequence.make(Num, 2, 4, 6));
  });

  test(SortedSequence.add.name, () => {
    const s0 = SortedSequence.make(Num, 10, 20);

    expect(SortedSequence.toArray(SortedSequence.add(s0, 30))).toEqual(SortedSequence.toArray(SortedSequence.make(Num, 10, 20, 30)));
    expect(SortedSequence.toArray(SortedSequence.add(30)(s0))).toEqual(SortedSequence.toArray(SortedSequence.make(Num, 10, 20, 30)));
  });

  test(SortedSequence.concat.name, () => {
    const s0 = SortedSequence.make(Num, 10, 20);
    const s1 = SortedSequence.make(Num, 30, 40);

    expect(SortedSequence.concat(s0, s1)).toEqual(SortedSequence.make(Num, 10, 20, 30, 40));
    expect(SortedSequence.concat(s1)(s0)).toEqual(SortedSequence.make(Num, 10, 20, 30, 40));
  });

  test(SortedSequence.count.name, () => {
    const s = SortedSequence.make(Num, 10, 20, 30);

    expect(SortedSequence.count(s, Num.gt(10))).toEqual(2);
    expect(SortedSequence.count(Num.gt(10))(s)).toEqual(2);
  });

  test(SortedSequence.get.name, () => {
    const s = SortedSequence.make(Str, 'hello', 'world');

    expect(SortedSequence.get(s, 0)).toEqual('hello');
    expect(SortedSequence.get(s, 9)).toEqual(new RangeError("Index out of bounds 9 for length 2"));
  });

  test(SortedSequence.first.name, () => {
    const s0 = SortedSequence.make(Num, 10, 20, 30);
    const s1 = SortedSequence.make(Num);

    expect(SortedSequence.first(s0)).toEqual(10);
    expect(SortedSequence.first(s1)).toEqual(null);
  });

  test(SortedSequence.last.name, () => {
    const s0 = SortedSequence.make(Num, 10, 20, 30);
    const s1 = SortedSequence.make(Num);

    expect(SortedSequence.last(s0)).toEqual(30);
    expect(SortedSequence.last(s1)).toEqual(null);
  });

  test(SortedSequence.length.name, () => {
    const s = SortedSequence.make(Num, 1, 2, 3);

    expect(SortedSequence.length(s)).toEqual(3);
  });

  test(SortedSequence.values.name, () => {
    const s = SortedSequence.make<string>(Str, 'hello', 'world');

    expect(SortedSequence.values(s)).toEqual({ 0: 'hello', 1: 'world' });
  });

  test(SortedSequence.empty.name, () => {
    const s = SortedSequence.make(Num);
    const s1 = SortedSequence.make(Num, 10);

    expect(SortedSequence.empty(s)).toEqual(true);
    expect(SortedSequence.empty(s1)).toEqual(false);
  });

  test(SortedSequence.populated.name, () => {
    const s = SortedSequence.make(Num, 10, 20, 30);

    expect(SortedSequence.populated(s)).toEqual(true);
    expect(SortedSequence.populated(SortedSequence.make(Num))).toEqual(false);
  });

  test(SortedSequence.toArray.name, () => {
    const sl = SortedSequence.make(Num, 3, 2, 1);

    expect(SortedSequence.toArray(sl)).toEqual([1, 2, 3]);
  });

  test(SortedSequence.toJSON.name, () => {
    const sl = SortedSequence.make(Num, 3, 2, 1);

    expect(SortedSequence.toJSON(sl)).toEqual([1, 2, 3]);
  });

  test(SortedSequence.toMap.name, () => {
    const sl = SortedSequence.make(Num, 3, 2, 1);
    const m = new Map();

    m.set("0", 1);
    m.set("1", 2);
    m.set("2", 3);

    expect(SortedSequence.toMap(sl)).toEqual(m);
  });

  test(SortedSequence.toSet.name, () => {
    const sl = SortedSequence.make(Num, 3, 2, 1);

    expect(SortedSequence.toSet(sl)).toEqual(new Set([1, 2, 3]));
  });

  test(SortedSequence.toString.name, () => {
    const sl = SortedSequence.make(Num, 3, 2, 1);

    expect(SortedSequence.toString(sl)).toEqual("1,2,3");
  });
});
