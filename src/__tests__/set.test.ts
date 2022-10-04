import { describe, expect, test, vitest } from 'vitest';
import { Number, String } from '..';
import * as Set from '../set';

describe(`set`, () => {
  test(Set.add.name, () => {
    const s = Set.make(1, 2, 3);
    const add = Set.add(s);
    const has4 = Set.has(4);

    expect(has4(s)).toBeFalsy();

    add(4);

    expect(has4(s)).toBeTruthy();
  });
  test(Set.clear.name, () => {
    const s = Set.make(1, 2, 3);

    expect(Set.size(s)).toBe(3);
    Set.clear(s);
    expect(Set.size(s)).toBe(0);
  });
  test(Set.concat.name, () => {
    const s1 = Set.make(1, 2, 3);
    const s2 = Set.make(4, 5, 6);
    const t = new globalThis.Set([1, 2, 3, 4, 5, 6]);

    expect(Set.concat(s1)(s2)).toEqual(t);
  });
  test(Set.delete.name, () => {
    const s = Set.make(1, 2, 3);

    expect(Set.has(1)(s)).toBeTruthy();
    Set.delete(1)(s);
    expect(Set.has(1)(s)).toBeFalsy();
  });
  test(Set.entries.name, () => {
    const s = Set.make(1, 2, 3);

    expect(Set.entries(s)).toEqual(new globalThis.Set([1, 2, 3]).entries());
  });
  test(Set.every.name, () => {
    const s1 = Set.make(1, 2, 3);
    const s2 = Set.make(1, 2, 0);
    const p = Set.every(Number.gt(0));

    expect(p(s1)).toBe(true);
    expect(p(s2)).toBe(false);
  });
  test(Set.filter.name, () => {
    const s1 = Set.make(1, 2, 3);

    expect(Set.filter(Number.gt(0))(s1)).toEqual(new globalThis.Set([1, 2, 3]));
    expect(Set.filter(Number.lt(2))(s1)).toEqual(new globalThis.Set([1]));
  });
  test(Set.forEach.name, () => {
    const s = Set.make(1, 2, 3);
    const fn = vitest.fn();
    const foreach = Set.forEach(fn);

    foreach(s);

    expect(fn).toHaveBeenCalledTimes(3);
    expect(fn).toHaveBeenCalledWith(1, 1, s);
    expect(fn).toHaveBeenCalledWith(2, 2, s);
    expect(fn).toHaveBeenCalledWith(3, 3, s);
  });
  test(Set.guard.name, () => {
    expect(Set.guard(Set.make(1, 2, 3))).toBe(true);
    expect(Set.guard(new globalThis.Set())).toBe(true);
    expect(Set.guard(10)).toBe(false);
  });
  test(Set.guardOf.name, () => {
    const s1 = Set.make(1, 2, 3);
    const s2 = Set.make('pineapple', 'on pizza', 'is a huge mistake');
    const numberSet = Set.guardOf(Number.guard);
    const stringSet = Set.guardOf(String.guard);

    expect(numberSet(s1)).toBe(true);
    expect(numberSet(s2)).toBe(false);
    expect(stringSet(s2)).toBe(true);
    expect(stringSet(s1)).toBe(false);
  });
  test(Set.has.name, () => {
    const s1 = Set.make(1, 2, 3);
    const has1 = Set.has(1);
    const has4 = Set.has(4);

    expect(has1(s1)).toBeTruthy();
    expect(has4(s1)).toBeFalsy();
  });
  test(Set.intersect.name, () => {
    const s1 = Set.make(1, 2, 3);
    const s2 = Set.make(2, 3, 4);

    expect(Set.intersect(s1, s2)).toEqual(new globalThis.Set([2, 3]));
  });
  test(Set.make.name, () => {
    expect(Set.make(null)).toEqual(new globalThis.Set([]));
    expect(Set.make(1, 2, 3)).toEqual(new globalThis.Set([1, 2, 3]));
    expect(Set.make(1)).toEqual(new globalThis.Set([1]));
    expect(Set.make([1, 2, 3, 4])).toEqual(new globalThis.Set([1, 2, 3, 4]));
    expect(Set.make([1, 2, 3, 4], 5)).toEqual(new globalThis.Set([1, 2, 3, 4, 5]));
  });
  test(Set.map.name, () => {
    const s1 = Set.make(1, 2, 3);
    const map = Set.map(Number.uadd(1));

    expect(map(s1)).toEqual(new globalThis.Set([2, 3, 4]));
  });
  test(Set.none.name, () => {
    const s1 = Set.make(1, 2, 3);

    expect(Set.none(Number.gt(0))(s1)).toBe(false);
    expect(Set.none(Number.lt(2))(s1)).toBe(false);
    expect(Set.none(Number.gt(4))(s1)).toBe(true);
  });
  test(Set.reduce.name, () => {
    const s1 = Set.make(1, 2, 3);

    expect(Set.reduce(Number.badd, 0)(s1));
  });
  test(Set.reduceRight.name, () => {
    const s1 = Set.make(3, 2, 1);

    expect(Set.reduceRight(Number.bsub, 5)(s1)).toBe(-1);
  });
  test(Set.size.name, () => {
    const s1 = Set.make(1, 2, 3);

    expect(Set.size(s1)).toBe(3);
  });
  test(Set.some.name, () => {
    const s1 = Set.make(1, 2, 3);

    expect(Set.some(Number.gt(0))(s1)).toBe(true);
    expect(Set.some(Number.lt(2))(s1)).toBe(true);
    expect(Set.some(Number.gt(4))(s1)).toBe(false);
  });
  test(Set.toArray.name, () => {
    const s1 = Set.make(1, 2, 3);

    expect(Set.toArray(s1)).toEqual([1, 2, 3]);
  });
  test(Set.union.name, () => {
    const a = Set.make(1, 2, 3);
    const b = Set.make(3, 4, 5);

    expect(Set.union(a, b)).toEqual(new globalThis.Set([1, 2, 3, 4, 5]));
  });
  test(Set.values.name, () => {
    const s = Set.make(1, 2, 3);
    const v = Set.values(s);

    expect(v).toEqual(new globalThis.Set([1, 2, 3]).values());
  });
});
