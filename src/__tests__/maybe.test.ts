import * as m from '../maybe';

describe(`maybe`, () => {
  test(`isjust or isnothing`, () => {
    expect(m.isJust(10)).toBe(true);
    expect(m.isJust(true)).toBe(true);
    expect(m.isJust(`hello world`)).toBe(true);
    expect(m.isJust(null)).toBe(false);
    expect(m.isJust(false)).toBe(false);
    expect(m.isJust(undefined)).toBe(false);
    expect(m.isNothing(10)).toBe(false);
    expect(m.isNothing(null)).toBe(true);
    expect(m.isNothing(``)).toBe(true);
    expect(m.isNothing(undefined)).toBe(true);
    expect(m.isNothing(0)).toBe(true);
  });

  test(`isMaybeOf`, () => {
    const g = (x: unknown): x is number => typeof x === 'number';
    const gof = m.isMaybeOf(g);

    expect(gof(10)).toBe(true);
    expect(gof(new Date())).toBe(false);
    expect(gof(null)).toBe(true);
    expect(gof(undefined)).toBe(true);
    expect(gof(false)).toBe(true);
    expect(gof(0)).toBe(true);
    expect(gof('')).toBe(true);
    expect(gof('hello')).toBe(false);
  })

  test(`cmp`, () => {
    expect(m.cmp(null, null)).toBe(0);
    expect(m.cmp(undefined, undefined)).toBe(0);
    expect(m.cmp(0, 0)).toBe(0);
    expect(m.cmp(0, 1)).toBe(-1);
    expect(m.cmp(1, 0)).toBe(1);
    expect(m.cmp(1, 1)).toBe(0);

    const a = `hello`;
    const b = `world`;

    expect(m.cmp(a, a)).toBe(0);
    expect(m.cmp(a, b)).toBe(-1);
    expect(m.cmp(b, a)).toBe(1);
  });

  test(`eq`, () => {
    expect(m.eq(null, null)).toBe(true);
    expect(m.eq(undefined, undefined)).toBe(true);
    expect(m.eq(undefined, null)).toBe(true);
    expect(m.eq(null, undefined)).toBe(true);
    expect(m.eq(0, undefined)).toBe(true);
    expect(m.eq(0, false as any)).toBe(true);
    expect(m.eq(0, 0)).toBe(true);
    expect(m.eq(0, 1)).toBe(false);
    expect(m.eq(1, 0)).toBe(false);
    expect(m.eq(1, 1)).toBe(true);

    const a = `hello`;
    const b = `world`;

    expect(m.eq(a, a)).toBe(true);
    expect(m.eq(a, b)).toBe(false);
    expect(m.eq(b, a)).toBe(false);
  })

  test(`filter`, () => {
    const p = (a: string) => a.length > 4;
    const f = m.filter(p);

    expect(f(null)).toBe(null);
    expect(f(undefined)).toBe(null);
    expect(f(``)).toBe(null);
    expect(f(`hello`)).toBe(`hello`);
    expect(f(`hello world`)).toBe(`hello world`);
  })

  test(`map`, () => {
    const f = (a: string) => a.length;
    const nothing1 = null as m.nothing
    const nothing2 = undefined as m.nothing
    const or = 0 as m.maybe<number>;
    const orElse = () => or;

    const map = m.map(f);
    const mapOr = m.mapOr(or, f);
    const mapOrElse = m.mapOrElse(orElse, f);
    
    expect(map(nothing1)).toBe(null);
    expect(map(nothing2)).toBe(null);
    expect(map(``)).toBe(null);
    expect(map(`hello`)).toBe(5);
    expect(map(`hello world`)).toBe(11);

    expect(mapOr(nothing1)).toBe(0);
    expect(mapOr(nothing2)).toBe(0);
    expect(mapOr(``)).toBe(0);
    expect(mapOr(`hello`)).toBe(5);
    expect(mapOr(`hello world`)).toBe(11);

    expect(mapOrElse(nothing1)).toBe(0);
    expect(mapOrElse(nothing2)).toBe(0);
    expect(mapOrElse(``)).toBe(0);
    expect(mapOrElse(`hello`)).toBe(5);
    expect(mapOrElse(`hello world`)).toBe(11);
  })

  test(`unwrappables`, () => {
    const nothing = null as m.nothing;
    const just = 10 as m.maybe<number>;
    const or = 0 as m.maybe<number>;
    const orElse = () => or;

    expect(() => m.unwrap(nothing)).toThrow()
    expect(m.unwrap(just)).toBe(10);

    expect(m.unwrapOr(or)(nothing)).toBe(0);
    expect(m.unwrapOr(or)(just)).toBe(10);

    expect(m.unwrapOrElse(orElse)(nothing)).toBe(0);
    expect(m.unwrapOrElse(orElse)(just)).toBe(10);
  });
});
