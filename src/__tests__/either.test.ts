import { describe, expect, test } from 'vitest';
import * as e from '../either';
import * as num from '../num';
import * as str from '../str';

describe(`either`, () => {
  test(`isLeft`, () => {
    expect(e.isLeft([1, null])).toBe(true);
    expect(e.isLeft([null, 2])).toBe(false);
    expect(e.isLeft([null, null])).toBe(false);
  });
  test(`isLeftOf`, () => {
    const l = e.isLeftOf(num.guard);
    expect(l([1, null])).toBe(true);
    expect(l(["hello", null])).toBe(false);
    expect(l([null, 2])).toBe(false);
    expect(l([null, null])).toBe(false);
  });
  test(`isRight`, () => {
    expect(e.isRight([null, 2])).toBe(true);
    expect(e.isRight([1, null])).toBe(false);
    expect(e.isRight([null, null])).toBe(false);
  });
  test(`isRightOf`, () => {
    const r = e.isRightOf(num.guard);
    expect(r([null, 2])).toBe(true);
    expect(r([null, "hello"])).toBe(false);
    expect(r([1, null])).toBe(false);
    expect(r([null, null])).toBe(false);
  });
  test(`fold`, () => {
    const ml = num.uadd(10);
    const mr = str.length;
    const f = e.fold(ml, mr);

    expect(f(e.left(10))).toBe(20);
    expect(f(e.right("hello"))).toBe(5);
    expect(() => f([null, null] as any)).toThrow();
  });
  test(`guard`, () => {
    expect(e.guard([1, null])).toBe(true);
    expect(e.guard([null, 2])).toBe(true);
    expect(e.guard([null, null])).toBe(false);
  });
  test(`guardOf`, () => {
    const g = e.guardOf(num.guard, str.guard);
    expect(g([1, null])).toBe(true);
    expect(g(["hello", null])).toBe(false);
    expect(g([null, "hello"])).toBe(true);
    expect(g([null, 2])).toBe(false);
    expect(g([null, null])).toBe(false);
  });
  test(`left`, () => {
    expect(e.left(1)).toEqual([1, null]);
  });
  test(`right`, () => {
    expect(e.right(2)).toEqual([null, 2]);
  });
  test(`cmp`, () => {
    expect(e.cmp([1, null], [1, null])).toBe(0);
    expect(e.cmp([1, null], [2, null])).toBe(-1);
    expect(e.cmp([2, null], [1, null])).toBe(1);
    expect(e.cmp([1, null], [null, null])).toBe(1);
    expect(e.cmp([null, null], [1, null])).toBe(-1);
    expect(e.cmp([null, 1], [1, null])).toBe(1);
    expect(e.cmp([-1, null], [null, 1])).toBe(-1);
    expect(e.cmp([null, 2], [null, 2])).toBe(0);
    expect(e.cmp([null, 1], [null, 2])).toBe(-1);
    expect(e.cmp([null, 2], [null, 1])).toBe(1);
    expect(e.cmp([null, null], [null, 1])).toBe(-1);
  });
  test(`eq`, () => {
    expect(e.eq([1, null], [1, null])).toBe(true);
    expect(e.eq([1, null], [2, null])).toBe(false);
    expect(e.eq([2, null], [1, null])).toBe(false);
    expect(e.eq([null, 1], [null, 2])).toBe(false);
    expect(e.eq([null, 2], [null, 1])).toBe(false);
    expect(e.eq([null, null], [null, null])).toBe(true);
  });
  test(`filterLeft`, () => {
    const f = e.filterLeft(num.gt(2));
    expect(f([1, null])).toEqual([null, null]);
    expect(f([3, null])).toEqual([3, null]);
    expect(f([null, 2])).toEqual([null, 2]);
    expect(f([null, null])).toEqual([null, null]);
  });
  test(`filterRight`, () => {
    const f = e.filterRight(num.gt(2));
    expect(f([1, null])).toEqual([1, null]);
    expect(f([null, 2])).toEqual([null, null]);
    expect(f([null, 3])).toEqual([null, 3]);
    expect(f([null, null])).toEqual([null, null]);
  });
  test(`mapLeft`, () => {
    const f = e.mapLeft(num.uadd(1));
    expect(f([1, null])).toEqual([2, null]);
    expect(f([null, 2])).toEqual([null, null]);
    expect(f([null, null])).toEqual([null, null]);
  });
  test(`mapLeftOr`, () => {
    const f = e.mapLeftOr(0, num.uadd(1));
    expect(f([1, null])).toEqual([2, null]);
    expect(f([null, 2])).toEqual([0, null]);
    expect(f([null, null])).toEqual([0, null]);
  });
  test(`mapLeftOrElse`, () => {
    const f = e.mapLeftOrElse(() => 0, num.uadd(1));
    expect(f([1, null])).toEqual([2, null]);
    expect(f([null, 2])).toEqual([0, null]);
    expect(f([null, null])).toEqual([0, null]);
  });
  test(`mapRight`, () => {
    const f = e.mapRight(num.uadd(1));
    expect(f([1, null])).toEqual([null, null]);
    expect(f([null, 2])).toEqual([null, 3]);
    expect(f([null, null])).toEqual([null, null]);
  });
  test(`mapRightOr`, () => {
    const f = e.mapRightOr(0, num.uadd(1));
    expect(f([1, null])).toEqual([null, 0]);
    expect(f([null, 2])).toEqual([null, 3]);
    expect(f([null, null])).toEqual([null, 0]);
  });
  test(`mapRightOrElse`, () => {
    const f = e.mapRightOrElse(() => 0, num.uadd(1));
    expect(f([1, null])).toEqual([null, 0]);
    expect(f([null, 2])).toEqual([null, 3]);
    expect(f([null, null])).toEqual([null, 0]);
  });
  test(`swap`, () => {
    expect(e.swap([1, null])).toEqual([null, 1]);
    expect(e.swap([null, 2])).toEqual([2, null]);
    expect(e.swap([null, null])).toEqual([null, null]);
  });
  test(`unwrapLeft`, () => {
    expect(e.unwrapLeft([1, null])).toBe(1);
    expect(() => e.unwrapLeft([null, 2])).toThrow();
    expect(() => e.unwrapLeft([null, null])).toThrow();
  });
  test(`unwrapLeftOr`, () => {
    const u = e.unwrapLeftOr(0);
    expect(u([1, null])).toBe(1);
    expect(u([null, 2])).toBe(0);
    expect(u([null, null])).toBe(0);
  });
  test(`unwrapLeftOrElse`, () => {
    const u = e.unwrapLeftOrElse(() => 0);
    expect(u([1, null])).toBe(1);
    expect(u([null, 2])).toBe(0);
    expect(u([null, null])).toBe(0);
  });
  test(`unwrapRight`, () => {
    expect(() => e.unwrapRight([1, null])).toThrow();
    expect(e.unwrapRight([null, 2])).toBe(2);
    expect(() => e.unwrapRight([null, null])).toThrow();
  });
  test(`unwrapRightOr`, () => {
    const u = e.unwrapRightOr(0);
    expect(u([1, null])).toBe(0);
    expect(u([null, 2])).toBe(2);
    expect(u([null, null])).toBe(0);
  });
  test(`unwrapRightOrElse`, () => {
    const u = e.unwrapRightOrElse(() => 0);
    expect(u([1, null])).toBe(0);
    expect(u([null, 2])).toBe(2);
    expect(u([null, null])).toBe(0);
  });
});