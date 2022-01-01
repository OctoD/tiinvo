import * as o from '../option';

describe(`option`, () => {
  test(`checks if is some or none`, () => {
    expect(o.isNone(null)).toBe(true);
    expect(o.isNone(undefined)).toBe(true);
    expect(o.isNone(0)).toBe(false);
    expect(o.isNone('')).toBe(false);
    expect(o.isSome(false)).toBe(true);
    expect(o.isSome('')).toBe(true);
    expect(o.isSome(0)).toBe(true);
    expect(o.isSome(null)).toBe(false);
    expect(o.isSome(undefined)).toBe(false);
  });

  test(`isOptionOf`, () => {
    const g = (x: unknown): x is number => typeof x === 'number';
    const gof = o.isOptionOf(g);

    expect(gof(10)).toBe(true);
    expect(gof(Error)).toBe(false);
    expect(gof(null)).toBe(true);
    expect(gof(undefined)).toBe(true);
    expect(gof('hello')).toBe(false);
  })

  test(`mappables`, () => {
    const mapfn = (s: string) => s.length;
    const map = o.map(mapfn);
    const mapor = o.mapOr(0, mapfn);
    const maporelse = o.mapOrElse(() => 0, mapfn);

    const some = 'hello';

    expect(map(null)).toBe(null);
    expect(map(undefined)).toBe(undefined);
    expect(map(some)).toBe(5);
    expect(mapor(null)).toBe(0);
    expect(mapor(undefined)).toBe(0);
    expect(mapor(some)).toBe(5);
    expect(maporelse(null)).toBe(0);
    expect(maporelse(undefined)).toBe(0);
    expect(maporelse(some)).toBe(5);
  })

  test(`comparables`, () => {
    expect(o.cmp(null, null)).toBe(0);
    expect(o.cmp(undefined, undefined)).toBe(0);
    expect(o.cmp(0, 0)).toBe(0);
    expect(o.cmp(0, 1)).toBe(-1);
    expect(o.cmp(1, 0)).toBe(1);
    expect(o.cmp(1, 1)).toBe(0);

    const a = `hello`;
    const b = `world`;

    expect(o.cmp(a, a)).toBe(0);
    expect(o.cmp(a, b)).toBe(-1);
    expect(o.cmp(b, a)).toBe(1);
  })

  test(`equatables`, () => {
    expect(o.eq(null, undefined)).toBe(true);
    expect(o.eq(null, null)).toBe(true);
    expect(o.eq(undefined, null)).toBe(true);
    expect(o.eq(undefined, undefined)).toBe(true);
    expect(o.eq(0, 0)).toBe(true);
    expect(o.eq(0, 1)).toBe(false);
    expect(o.eq(1, 0)).toBe(false);
  })

  test(`filterables`, () => {
    const p = (value: number) => value > 0;
    const f = o.filter(p);

    expect(f(10)).toBe(10)
    expect(f(-10)).toBe(null)
    expect(f(0)).toBe(null)
  })

  test(`mappable types`, () => {
    const mapfn1 = (s: string) => s.length;
    const mapfn2 = (s: number) => `count:${s}`;
    const map1 = o.map(mapfn1);
    const map2 = o.map(mapfn2);
    const none = null as o.none;

    expect(map2(map1(''))).toBe(`count:0`);
    expect(map2(map1('hello'))).toBe(`count:5`);
    expect(map2(map1(none))).toBe(none);
    expect(map2(map1(undefined))).toBe(undefined);
  });

  test(`unwrappables`, () => {
    const none = null as o.none;
    const or = 0 as o.option<number>

    expect(() => o.unwrap(none)).toThrowError();
    expect(o.unwrapOr(or)(none)).toBe(0);
    expect(o.unwrapOrElse(() => or)(none)).toBe(0);

    expect(() => o.unwrap(undefined)).toThrowError();
    expect(o.unwrapOr(or)(undefined)).toBe(0);
    expect(o.unwrapOrElse(() => or)(undefined)).toBe(0);

    expect(() => o.unwrap(10)).not.toThrowError();
    expect(o.unwrap(10)).toBe(10)
    expect(o.unwrapOr(0)(10)).toBe(10);
    expect(o.unwrapOrElse(() => 0)(10)).toBe(10);
  })
});
