import * as p from '../predicate';

describe(`predicate`, () => {
  test(`and`, () => {
    const p1 = (a: string) => a.length > 4;
    const p2 = (a: string) => a.length < 10;
    const f = p.and(p1, p2);

    expect(f(``)).toBe(false);
    expect(f(`hello`)).toBe(true);
    expect(f(`hello world`)).toBe(false);
  });

  test(`eq`, () => {
    const f = p.eq(`hello`);

    expect(f(``)).toBe(false);
    expect(f(`hello`)).toBe(true);
    expect(f(`hello world`)).toBe(false);
  });

  test(`invert`, () => {
    const f = p.invert(p.eq(`hello`));

    expect(f(``)).toBe(true);
    expect(f(`hello`)).toBe(false);
    expect(f(`hello world`)).toBe(true);
  });

  test(`neq`, () => {
    const f = p.neq(10);

    expect(f(5)).toBe(true);
    expect(f(6)).toBe(true);
    expect(f(10)).toBe(false);
    expect(f(11)).toBe(true);
  });

  test(`noneof`, () => {
    const f = p.noneof(p.eq(10), p.eq(11));

    expect(f(5)).toBe(true);
    expect(f(6)).toBe(true);
    expect(f(10)).toBe(false);
    expect(f(11)).toBe(false);
  });

  test(`or`, () => {
    const f = p.or(p.eq(10), p.eq(11));

    expect(f(5)).toBe(false);
    expect(f(6)).toBe(false);
    expect(f(10)).toBe(true);
    expect(f(11)).toBe(true);
  })
})