import * as obj from '../obj';
import * as bool from '../bool';
import * as num from '../num';
import * as str from '../str';
import * as o from '../option';

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
    const a = { a: 1, b: { c: 2 } };

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

  test(obj.guardOf.name, () => {
    const isshape = obj.guardOf({
      a: str.guard,
      b: num.guard,
      c: bool.guard
    });
    const isshapeb = obj.guardOf({
      a: isshape,
      b: bool.guard,
    })
    const isshapec = obj.guardOf({
      b: bool.guard,
      c: o.isOptionOf(num.guard),
    })
    const isshaped = obj.guardOf({
      a: {
        b: num.guard
      }
    })

    expect(isshape({ a: `foo`, b: 1, c: true })).toBe(true);
    expect(isshape({ a: `foo`, b: false, c: 1 })).toBe(false);
    expect(isshape(0)).toBe(false);
    expect(isshapeb({ a: { a: `foo`, b: 1, c: true }, b: true })).toBe(true);
    expect(isshapeb({ a: { a: `foo`, b: false, c: 1 }, b: true })).toBe(false);
    expect(isshapeb({ a: 2, b: false })).toBe(false);
    expect(isshapec({ b: true, c: 1 })).toBe(true);
    expect(isshapec({ b: true })).toBe(true);
    expect(isshapec({ b: 2, c: false })).toBe(false);
    expect(isshapec({ b: 2 })).toBe(false);
    expect(isshaped({ a: { b: 1 } })).toBe(true);
    expect(isshaped({ a: { b: false } })).toBe(false);
  })

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

  test(obj.assign.name, () => {
    const a = { a: 1, b: 2 };
    const b = { b: 3, c: 4 };
    const c = { c: 5, d: 6 };

    expect(obj.assign(a, b, c)).toEqual({ a: 1, b: 3, c: 5, d: 6 });
  })

  test(obj.size.name, () => {
    const a = { a: 1, b: { c: 2 } };
    const b = {};

    expect(obj.size(a)).toBe(2);
    expect(obj.size(b)).toBe(0);
  })
});