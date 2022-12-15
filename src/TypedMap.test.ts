import { describe, expect, test } from 'vitest';
import * as Str from './Str.js';
import * as Num from './Num.js';
import * as TypedMap from './TypedMap.js';

describe(`TypedMap`, function () {
  test(TypedMap.cmp.name, function cmp() {
    const m0 = TypedMap.make(Str, Num, [["a", 1], ["b", 2]]);
    const m1 = TypedMap.make(Str, Num, [["a", 1]]);
    const m2 = TypedMap.make(Str, Num, [["a", 1], ["b", 2]]);
    const m3 = TypedMap.make(Str, Num, [["b", 1], ["c", 2]]);

    expect(TypedMap.cmp(Str, Num, m0, m1)).toEqual(1);
    expect(TypedMap.cmp(Str, Num, m0, m2)).toEqual(0);
    expect(TypedMap.cmp(Str, Num, m0, m3)).toEqual(-1);

    expect(TypedMap.cmp(Str, Num, m0)(m1)).toEqual(-1);
    expect(TypedMap.cmp(Str, Num, m0)(m2)).toEqual(0);
    expect(TypedMap.cmp(Str, Num, m0)(m3)).toEqual(1);

    expect(TypedMap.cmp(Str, Num)(m0, m1)).toEqual(1);
    expect(TypedMap.cmp(Str, Num)(m0, m2)).toEqual(0);
    expect(TypedMap.cmp(Str, Num)(m0, m3)).toEqual(-1);

    expect(TypedMap.cmp(Str.cmp, Num, m0, m1)).toEqual(1);
    expect(TypedMap.cmp(Str.cmp, Num, m0, m2)).toEqual(0);
    expect(TypedMap.cmp(Str.cmp, Num, m0, m3)).toEqual(-1);

    expect(TypedMap.cmp(Str.cmp, Num, m0)(m1)).toEqual(-1);
    expect(TypedMap.cmp(Str.cmp, Num, m0)(m2)).toEqual(0);
    expect(TypedMap.cmp(Str.cmp, Num, m0)(m3)).toEqual(1);

    expect(TypedMap.cmp(Str.cmp, Num)(m0, m1)).toEqual(1);
    expect(TypedMap.cmp(Str.cmp, Num)(m0, m2)).toEqual(0);
    expect(TypedMap.cmp(Str.cmp, Num)(m0, m3)).toEqual(-1);

    expect(TypedMap.cmp(Str, Num.cmp, m0, m1)).toEqual(1);
    expect(TypedMap.cmp(Str, Num.cmp, m0, m2)).toEqual(0);
    expect(TypedMap.cmp(Str, Num.cmp, m0, m3)).toEqual(-1);

    expect(TypedMap.cmp(Str, Num.cmp, m0)(m1)).toEqual(-1);
    expect(TypedMap.cmp(Str, Num.cmp, m0)(m2)).toEqual(0);
    expect(TypedMap.cmp(Str, Num.cmp, m0)(m3)).toEqual(1);

    expect(TypedMap.cmp(Str, Num.cmp)(m0, m1)).toEqual(1);
    expect(TypedMap.cmp(Str, Num.cmp)(m0, m2)).toEqual(0);
    expect(TypedMap.cmp(Str, Num.cmp)(m0, m3)).toEqual(-1);

    expect(TypedMap.cmp(Str.cmp, Num.cmp, m0, m1)).toEqual(1);
    expect(TypedMap.cmp(Str.cmp, Num.cmp, m0, m2)).toEqual(0);
    expect(TypedMap.cmp(Str.cmp, Num.cmp, m0, m3)).toEqual(-1);

    expect(TypedMap.cmp(Str.cmp, Num.cmp, m0)(m1)).toEqual(-1);
    expect(TypedMap.cmp(Str.cmp, Num.cmp, m0)(m2)).toEqual(0);
    expect(TypedMap.cmp(Str.cmp, Num.cmp, m0)(m3)).toEqual(1);

    expect(TypedMap.cmp(Str.cmp, Num.cmp)(m0, m1)).toEqual(1);
    expect(TypedMap.cmp(Str.cmp, Num.cmp)(m0, m2)).toEqual(0);
    expect(TypedMap.cmp(Str.cmp, Num.cmp)(m0, m3)).toEqual(-1);
  });
  test(TypedMap.delete.name, function _delete() {
    const m0 = TypedMap.make(Str, Num, [['a', 0], ['b', 1]]);
    const m1 = TypedMap.delete('a', m0);

    expect(Array.from(TypedMap.keys(m1))).toEqual(['b']);

    expect(TypedMap.delete('a')(m0)).toEqual(m1);
    expect(() => TypedMap.delete(100, m0 as any)).toThrow();
  });
  test(TypedMap.entries.name, function entries() {
    const m = TypedMap.make(Str, Num, [['a', 100], ['b', 200]]);

    expect(Array.from(TypedMap.entries(m))).toEqual([['a', 100], ['b', 200]]);
  });
  test(TypedMap.eq.name, function eq() {
    const m0 = TypedMap.make(Str, Num, [["a", 1], ["b", 2]]);
    const m1 = TypedMap.make(Str, Num, [["a", 1]]);
    const m2 = TypedMap.make(Str, Num, [["a", 1], ["b", 2]]);
    const m3 = TypedMap.make(Str, Num, [["b", 1], ["c", 2]]);

    expect(TypedMap.eq(Str, Num, m0, m1)).toEqual(false);
    expect(TypedMap.eq(Str, Num, m0, m2)).toEqual(true);
    expect(TypedMap.eq(Str, Num, m0, m3)).toEqual(false);

    expect(TypedMap.eq(Str, Num, m0)(m1)).toEqual(false);
    expect(TypedMap.eq(Str, Num, m0)(m2)).toEqual(true);
    expect(TypedMap.eq(Str, Num, m0)(m3)).toEqual(false);

    expect(TypedMap.eq(Str, Num)(m0, m1)).toEqual(false);
    expect(TypedMap.eq(Str, Num)(m0, m2)).toEqual(true);
    expect(TypedMap.eq(Str, Num)(m0, m3)).toEqual(false);

    expect(() => TypedMap.make(Str, Num, [["a", 1], [2, 2] as any])).toThrow();
    expect(() => TypedMap.make(Str, Num, [["a", 1], ["2", "2"] as any])).toThrow();
  });
  test(TypedMap.get.name, function get() {
    const foo = TypedMap.make(Str, Num, [['a', 1], ['b', 2]]);

    expect(TypedMap.get("a", foo)).toEqual(1);
    expect(TypedMap.get("b", foo)).toEqual(2);
    expect(TypedMap.get("c", foo)).toEqual(null);

    expect(TypedMap.get("a")(foo)).toEqual(1);
    expect(TypedMap.get("b")(foo)).toEqual(2);
    expect(TypedMap.get("c")(foo)).toEqual(null);
  });
  test(TypedMap.guard.name, function guard() {
    expect(TypedMap.guard(10)).toEqual(false);
    expect(TypedMap.guard({})).toEqual(false);
    expect(TypedMap.guard(TypedMap.make(Num, Str))).toEqual(true);
  });
  test(TypedMap.guardOf.name, function guardOf() {
    expect(TypedMap.guardOf(Str, Num, 10)).toEqual(false);
    expect(TypedMap.guardOf(Str, Num)(10)).toEqual(false);
    expect(TypedMap.guardOf(Str, Num, TypedMap.make(Str, Num, [["hello", 10]]))).toEqual(true);
    expect(TypedMap.guardOf(Num, Num, TypedMap.make(Str, Num, [["hello", 10]]))).toEqual(false);
    expect(TypedMap.guardOf(Num, Num, TypedMap.make(Num, Str, [[10, "10"]]))).toEqual(false);
    expect(TypedMap.guardOf(Str, Num)(TypedMap.make(Str, Num, [["hello", 10]]))).toEqual(true);
    expect(TypedMap.guardOf(Num, Num)(TypedMap.make(Str, Num, [["hello", 10]]))).toEqual(false);
    expect(TypedMap.guardOf(Num, Num)(TypedMap.make(Num, Str, [[10, "10"]]))).toEqual(false);
    
    expect(TypedMap.guardOf(Str.guard, Num, 10)).toEqual(false);
    expect(TypedMap.guardOf(Str.guard, Num)(10)).toEqual(false);
    expect(TypedMap.guardOf(Str.guard, Num, TypedMap.make(Str, Num, [["hello", 10]]))).toEqual(true);
    expect(TypedMap.guardOf(Num.guard, Num, TypedMap.make(Str, Num, [["hello", 10]]))).toEqual(false);
    expect(TypedMap.guardOf(Num.guard, Num, TypedMap.make(Num, Str, [[10, "10"]]))).toEqual(false);
    expect(TypedMap.guardOf(Str.guard, Num)(TypedMap.make(Str, Num, [["hello", 10]]))).toEqual(true);
    expect(TypedMap.guardOf(Num.guard, Num)(TypedMap.make(Str, Num, [["hello", 10]]))).toEqual(false);
    expect(TypedMap.guardOf(Num.guard, Num)(TypedMap.make(Num, Str, [[10, "10"]]))).toEqual(false);

    expect(TypedMap.guardOf(Str, Num.guard, 10)).toEqual(false);
    expect(TypedMap.guardOf(Str, Num.guard)(10)).toEqual(false);
    expect(TypedMap.guardOf(Str, Num.guard, TypedMap.make(Str, Num, [["hello", 10]]))).toEqual(true);
    expect(TypedMap.guardOf(Num, Num.guard, TypedMap.make(Str, Num, [["hello", 10]]))).toEqual(false);
    expect(TypedMap.guardOf(Num, Num.guard, TypedMap.make(Num, Str, [[10, "10"]]))).toEqual(false);
    expect(TypedMap.guardOf(Str, Num.guard)(TypedMap.make(Str, Num, [["hello", 10]]))).toEqual(true);
    expect(TypedMap.guardOf(Num, Num.guard)(TypedMap.make(Str, Num, [["hello", 10]]))).toEqual(false);
    expect(TypedMap.guardOf(Num, Num.guard)(TypedMap.make(Num, Str, [[10, "10"]]))).toEqual(false);

    expect(TypedMap.guardOf(Str.guard, Num.guard, 10)).toEqual(false);
    expect(TypedMap.guardOf(Str.guard, Num.guard)(10)).toEqual(false);
    expect(TypedMap.guardOf(Str.guard, Num.guard, TypedMap.make(Str, Num, [["hello", 10]]))).toEqual(true);
    expect(TypedMap.guardOf(Num.guard, Num.guard, TypedMap.make(Str, Num, [["hello", 10]]))).toEqual(false);
    expect(TypedMap.guardOf(Num.guard, Num.guard, TypedMap.make(Num, Str, [[10, "10"]]))).toEqual(false);
    expect(TypedMap.guardOf(Str.guard, Num.guard)(TypedMap.make(Str, Num, [["hello", 10]]))).toEqual(true);
    expect(TypedMap.guardOf(Num.guard, Num.guard)(TypedMap.make(Str, Num, [["hello", 10]]))).toEqual(false);
    expect(TypedMap.guardOf(Num.guard, Num.guard)(TypedMap.make(Num, Str, [[10, "10"]]))).toEqual(false);
  });
  test(TypedMap.has.name, function has() {
    const m = TypedMap.make(Str, Num, [["hello", 100]]);

    expect(TypedMap.has("hello", m)).toEqual(true);
    expect(TypedMap.has("world", m)).toEqual(false);

    expect(TypedMap.has("hello")(m)).toEqual(true);
    expect(TypedMap.has("world")(m)).toEqual(false);

    expect(TypedMap.has("hello")(m)).toEqual(true);
    expect(() => TypedMap.has(100, m as any)).toThrow();
  });
  test(TypedMap.keys.name, function keys() {
    const m = TypedMap.make(Str, Num, [["a", 1], ["b", 2]]);

    expect(Array.from(TypedMap.keys(m))).toEqual(["a", "b"]);
  });
  test(TypedMap.make.name, function make() {
    const m = new Map<string, number>([['hello', 100], ['world', 200]]);

    TypedMap.make(Str, Num);
    TypedMap.make(Str, Num, m);
    TypedMap.make(Str.guard, Num);
    TypedMap.make(Str.guard, Num, m);
    TypedMap.make(Str, Num.guard);
    TypedMap.make(Str, Num.guard, m);
    TypedMap.make(Str.guard, Num.guard);
    TypedMap.make(Str.guard, Num.guard, m);
  });
  test(TypedMap.set.name, function set() {
    const m0 = TypedMap.make(Str, Num);
    const m1 = TypedMap.set("hello", 100, m0);
    const setHello = TypedMap.set("hello", 100);
    const set = TypedMap.set(m0);

    expect(Array.from(TypedMap.values(m0))).toEqual([]);
    expect(Array.from(TypedMap.values(m1))).toEqual([100]);
    expect(Array.from(TypedMap.values(setHello(m1)))).toEqual([100]);
    expect(Array.from(TypedMap.values(m0))).toEqual([]);
    expect(Array.from(TypedMap.values(set("hello", 100)))).toEqual([100]);
    expect(Array.from(TypedMap.values(set("world", 200)))).toEqual([200]);
    expect(Array.from(TypedMap.values(m0))).toEqual([]);
  });
  test(TypedMap.size.name, function size() {
    const m = TypedMap.make(Str, Num, [["a", 1], ["b", 2]]);

    expect(TypedMap.size(m)).toEqual(2);
  });
  test(TypedMap.values.name, function values() {
    const m = TypedMap.make(Str, Num, [["a", 1], ["b", 2]]);

    expect(Array.from(TypedMap.values(m))).toEqual([1, 2]);
  });
  test("iterable", function () {
    const m = TypedMap.make(Str, Num, [["a", 1], ["b", 2]]);
    let arr: any[] = [];

    expect(typeof m[Symbol.iterator]).toEqual("function");

    for (const x of m) {
      arr.push(x);
    }

    expect(arr).toEqual([1, 2]);
    expect([...m]).toEqual([1, 2]);
    expect(Array.from(m)).toEqual([1, 2]);
  });
});