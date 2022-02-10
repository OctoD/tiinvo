import * as p from '../promise';

describe(`promise`, () => {
  test(p.map.name, async () => {
    const m = p.map((a: string) => a.length);
    const ok = Promise.resolve('hello');
    const ko = Promise.reject('hello');
    const ko2 = Promise.reject(new TypeError('err'));

    expect(await m(ok)).toBe(5);
    expect(await m(ko)).toBeInstanceOf(Error);
    expect(await m(ko2)).toBeInstanceOf(Error);
  })

  test(p.mapOr.name, async () => {
    const m = p.mapOr(0, (a: string) => a.length);
    const ok = Promise.resolve('hello');
    const ko = Promise.reject('hello');

    expect(await m(ok)).toBe(5);
    expect(await m(ko)).toBe(0);
  })

  test(p.mapOrElse.name, async () => {
    const m = p.mapOrElse(() => 0, (a: string) => a.length);
    const ok = Promise.resolve('hello');
    const ko = Promise.reject('foobar');

    expect(await m(ok)).toBe(5);
    expect(await m(ko)).toBe(0);
  })

  test(p.all.name, async () => {
    expect(await p.all([Promise.resolve('hello')])).toEqual(['hello']);
  });

  test(p.resolve.name, async () => {
    expect(await p.resolve('hello')).toEqual(await Promise.resolve('hello'));
  })

  test(p.reject.name, async () => {
    let r1;
    let r2;

    try { await p.reject('hello') } catch (e) { r1 = e }
    try { await Promise.reject('hello') } catch (e) { r2 = e }
    
    expect(r1).toEqual(r2);
  })
});
