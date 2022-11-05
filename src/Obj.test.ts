import { describe, expect, test } from 'vitest';
import * as Bool from './Bool.js';
import * as Num from './Num.js';
import * as Obj from './Obj.js';
import * as Str from './Str.js';

describe("Obj", () => {
  test(Obj.guard.name, () => {
    expect(Obj.guard({})).toEqual(true);
    expect(Obj.guard(null)).toEqual(false);
  });

  test(Obj.guardOf.name, () => {
    const guardStruct = Obj.guardOf({
      a: Str.guard,
      b: Num.guard,
      c: Bool.guard
    });

    expect(guardStruct({ a: `foo`, b: 1, c: true })).toEqual(true);
    expect(guardStruct({ a: `foo`, b: false, c: 1 })).toEqual(false);
    expect(guardStruct(10)).toEqual(false);
    expect(() => Obj.guardOf(10)).toThrow();

    const rectest = Obj.guardOf({
      y: {
        z: Num.guard,
      },
      x: guardStruct,
    });

    expect(rectest({ x: { a: `foo`, b: 1, c: true }, y: { z: 10 } })).toEqual(true);
  });

  test(Obj.hasKey.name, () => {
    const hasa = Obj.hasKey('a');

    expect(hasa({})).toEqual(false);
    expect(hasa({ a: 1 })).toEqual(true);
  });

  test(Obj.hasKeyOf.name, () => {
    const hasa = Obj.hasKeyOf('a', Num.guard);

    expect(hasa({})).toEqual(false);
    expect(hasa({ a: 1 })).toEqual(true);
    expect(hasa({ a: `nope` })).toEqual(false);
    expect(Obj.hasKeyOf('a', Num.guard, { a: 10 })).toEqual(true);
  });

  test(Obj.assign.name, () => {
    const a = { a: 1, b: 2 };
    const b = { b: 3, c: 4 };
    const c = { c: 5, d: 6 };

    expect(Obj.assign(a, b, c)).toEqual({ a: 1, b: 3, c: 5, d: 6 });
  });

  test(Obj.entries.name, () => {
    expect(Obj.entries({ a: 1, b: 2 })).toEqual([['a', 1], ['b', 2]]);
  });

  test(Obj.freeze.name, () => {
    const a = { a: 1, b: 2 };
    Obj.freeze(a);
    expect(() => a.a = 100).toThrow();
  });

  test(Obj.fromEntries.name, () => {
    expect(Obj.fromEntries([['a', 1], ['b', 2]])).toEqual({ a: 1, b: 2 });
  });

  test(Obj.get.name, () => {
    const get = Obj.get(`foo`);

    expect(get({ foo: `bar` })).toEqual(`bar`);
    expect(get({})).toEqual(null);
  });

  test(Obj.omit.name, () => {
    const omit = Obj.omit(['a', 'b']);
    expect(omit({ a: 1, b: 2, c: 3 })).toEqual({ c: 3 });
    expect(omit({ a: 1, b: 2 })).toEqual({});
    expect(Obj.omit(['a', 'b'], { a: 1, b: 2 })).toEqual({});
  });

  test(Obj.pick.name, () => {
    const pick = Obj.pick(['a', 'b']);
    expect(pick({ a: 1, b: 2, c: 3 })).toEqual({ a: 1, b: 2 });
    expect(pick({ a: 1, b: 2 })).toEqual({ a: 1, b: 2 });
    expect(Obj.pick(['a', 'b'], { a: 1, b: 2, c: 3, d: 3 })).toEqual({ a: 1, b: 2 });
  });

  test(Obj.map.name, () => {
    expect(Obj.map(Object.keys)({ a: 10, b: 20 })).toEqual(['a', 'b']);
    expect(Obj.map((x: Record<string, number>) => x.a ?? 0)({ a: 10 })).toEqual(10);
    expect(Obj.map((x: Record<string, number>) => x.a ?? 0)({ b: 10 })).toEqual(0);
    expect(Obj.map((x: Record<string, number>) => x.a ?? 0)(10 as any)).toEqual(null);
  });

  test(Obj.keys.name, () => {
    expect(Obj.keys({ a: 10, b: 20 })).toEqual(['a', 'b']);
  });

  test(Obj.size.name, () => {
    expect(Obj.size({ a: 1, b: 2 })).toEqual(2);
    expect(Obj.size({})).toEqual(0);
  });

  test(Obj.values.name, () => {
    expect(Obj.values({ a: 1, b: 2 })).toEqual([1, 2]);
    expect(Obj.values({})).toEqual([]);
  });
});