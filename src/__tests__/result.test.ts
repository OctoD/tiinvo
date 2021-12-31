import * as r from '../result';

describe(`result`, () => {
  test(`checks if is ok or err`, () => {
    expect(r.isok(10)).toBe(true);
    expect(r.isok(Error)).toBe(true);
    expect(r.isok(new Error())).toBe(false);
    expect(r.iserr(new Error())).toBe(true);
    expect(r.iserr(Error)).toBe(false);
  });

  test(`comparables`, () => {
    expect(r.cmp(10, 20)).toBe(-1);
    expect(r.cmp(20, 10)).toBe(1);
    expect(r.cmp(10, 10)).toBe(0);
    expect(r.cmp(10, new Error())).toBe(0);
    expect(r.cmp(new Error(), 10)).toBe(0);
    expect(r.cmp(new Error(), new TypeError())).toBe(0);

  })

  test(`equatables`, () => {
    expect(r.eq(20, 20)).toBe(true);
    expect(r.eq(new Error(), new TypeError())).toBe(true);
    expect(r.eq(new Error(), new Error())).toBe(true);
    expect(r.eq(10, 20)).toBe(false);
  })

  test(`filter`, () => {
    const filterfn = (arg: number) => arg > 0;
    const filter = r.filter(filterfn);

    expect(filter(10)).toBe(10);
    expect(filter(0)).toEqual(new Error(`0 is not ok`));
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
  })

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
  })
})