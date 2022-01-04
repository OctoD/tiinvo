import * as obj from '../obj';
import * as num from '../num';
import * as str from '../str';

describe('obj', () => {
  test(obj.cmp.name, () => {
    const a = { a: 1, b: { c: 2 } };
    const b = { a: 1, b: { c: 3 } };
    const c = { a: 1, b: { c: 2 } };
    const d = { a: 1, b: { c: 2, d: 3 } };
    const e = { a: 1, b: { c: 3, d: 3, e: 4 } };

    expect(obj.cmp(a, b)).toBe(-1);
    expect(obj.cmp(b, a)).toBe(1);
    expect(obj.cmp(a, c)).toBe(0);
    expect(obj.cmp(a, d)).toBe(1);
    expect(obj.cmp(e, c)).toBe(-1);
  });

  test(obj.entries.name, () => {
    const a = { a: 1, b: { c: 2 } };

    expect(expect.arrayContaining(obj.entries(a))).toEqual([['a', 1], ['b', { c: 2 }]]);
  });

  test(obj.flat.name, () => {
    const a  = { a: 1, b: { c: 2 } };

    expect(obj.flat(a)).toEqual({ a: 1, 'b.c': 2 });
  });

  test(obj.get.name, () => {
    const a = { a: 1, b: { c: 2 } };

    expect(obj.get('a')(a)).toEqual(1);
    expect(obj.get('b')(a)).toEqual({ c: 2 });
    expect(obj.get('c')(a)).toBeNull();
  });

  test(obj.guard.name, () => {
    expect(obj.guard({})).toBeTruthy();
    expect(obj.guard(null)).toBeFalsy();
    expect(obj.guard(undefined)).toBeFalsy();
  });

  test(obj.haskey.name, () => {
    expect(obj.haskey('a')({ a: 1 })).toBeTruthy();
    expect(obj.haskey('b')({ a: 1 })).toBeFalsy();
  });

  test(obj.haskeyOf.name, () => {
    expect(obj.haskeyOf('a', num.guard)({ a: 1 })).toBeTruthy();
    expect(obj.haskeyOf('a', str.guard)({ a: 1 })).toBeFalsy();
    expect(obj.haskeyOf('b', num.guard)({ a: 1 })).toBeFalsy();
  });

  test(obj.keys.name, () => {
    expect(expect.arrayContaining(obj.keys({ a: 1, b: { c: 2 } }))).toEqual(['a', 'b']);
  });

  test(obj.omit.name, () => {
    expect(obj.omit(['a'])({ a: 1, b: { c: 2 } })).toEqual({ b: { c: 2 } });
  });

  test(obj.pick.name, () => {
    expect(obj.pick(['a'])({ a: 1, b: { c: 2 } })).toEqual({ a: 1 });
  });

  test(obj.values.name, () => {
    const a = { a: 1, b: { c: 2 } };
    const v = obj.values(a);
    expect(expect.arrayContaining(v)).toEqual([1, { c: 2 }]);
  });
});