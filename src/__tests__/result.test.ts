import * as r from '../result';

describe(`result`, () => {
  test(`checks if is ok or err`, () => {
    expect(r.isOk(10)).toBe(true);
    expect(r.isOk(Error)).toBe(true);
    expect(r.isOk(new Error())).toBe(false);
    expect(r.isErr(new Error())).toBe(true);
    expect(r.isErr(Error)).toBe(false);
    expect(r.isErr(null)).toBe(false);
    expect(r.isErr({ name: 'foo', message: 'bar', cause: 'baz' })).toBe(true);
  });

  test(`isResultOf`, () => {
    const g = (x: unknown): x is number => typeof x === 'number';
    const gof = r.isResultOf(g);

    expect(gof(10)).toBe(true);
    expect(gof(Error)).toBe(false);
    expect(gof(new Error())).toBe(true);
    expect(gof('hello')).toBe(false);
  });

  test(`comparables`, () => {
    expect(r.cmp(10, 20)).toBe(-1);
    expect(r.cmp(20, 10)).toBe(1);
    expect(r.cmp(10, 10)).toBe(0);
    expect(r.cmp(10, new Error())).toBe(0);
    expect(r.cmp(new Error(), 10)).toBe(0);
    expect(r.cmp(new Error(), new TypeError())).toBe(0);

  });

  test(`equatables`, () => {
    expect(r.eq(20, 20)).toBe(true);
    expect(r.eq(new Error(), new TypeError())).toBe(true);
    expect(r.eq(new Error(), new Error())).toBe(true);
    expect(r.eq(10, 20)).toBe(false);
  });

  test(`filter`, () => {
    const filterfn = (arg: number) => arg > 0;
    const filter = r.filter(filterfn);
    const e = new TypeError('hello');

    expect(filter(10)).toBe(10);
    expect(filter(0)).toEqual(new Error(`0 is not ok`));
    expect(filter(e)).toEqual(e);
  });

  test(`mappables`, () => {
    const mapfn = (s: string) => s.length;
    const map = r.map(mapfn);
    const mapor = r.mapOr(0, mapfn);
    const maporelse = r.mapOrElse(() => 0, mapfn);

    const ok = 'hello';
    const err = new Error();

    expect(map(ok)).toBe(5);
    expect(map(err)).toBe(err);
    expect(mapor(ok)).toBe(5);
    expect(mapor(err)).toBe(0);
    expect(maporelse(ok)).toBe(5);
    expect(maporelse(err)).toBe(0);
  });

  test(`unwrappables`, () => {
    const ok = 'hello' as r.result<string>;
    const err = new Error();
    const or = `world` as r.result<string>;
    const orElse = () => or;

    expect(r.unwrap(ok)).toBe(ok);
    expect(() => r.unwrap(err)).toThrow();
    expect(r.unwrapOr(or)(ok)).toBe(ok);
    expect(r.unwrapOr(or)(err)).toBe(or);
    expect(r.unwrapOrElse(orElse)(ok)).toBe(ok);
    expect(r.unwrapOrElse(orElse)(err)).toBe(or);
  });
});