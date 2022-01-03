import * as tryto from '../try';
import * as m from '../maybe'
import * as o from '../option'
import * as r from '../result'
import * as num from '../num'

describe(`try`, () => {
  const fn = (arg: number) => {
    if (num.isEven(arg)) {
      return arg * 2;
    }

    throw new Error(`${arg} is not even`);
  }

  const fnasync = async (arg: number) => {
    if (num.isEven(arg)) {
      return Promise.resolve(arg * 2);
    }

    return Promise.reject(new Error(`${arg} is not even`));
  }

  test(tryto.trymaybe.name, () => {
    expect(tryto.trymaybe(fn)(2)).toEqual(4);
    expect(tryto.trymaybe(fn)(3)).toEqual(null);
    expect(m.isJust(tryto.trymaybe(fn)(2))).toBeTruthy();
    expect(m.isNothing(tryto.trymaybe(fn)(3))).toBeTruthy();
  })

  test(tryto.trymaybeasync.name, async () => {
    expect(await tryto.trymaybeasync(fnasync)(2)).toEqual(4);
    expect(await tryto.trymaybeasync(fnasync)(3)).toEqual(null);
    expect(m.isJust(await tryto.trymaybeasync(fnasync)(2))).toBeTruthy();
    expect(m.isNothing(await tryto.trymaybeasync(fnasync)(3))).toBeTruthy();
  })

  test(tryto.tryoption.name, () => {
    expect(tryto.tryoption(fn)(2)).toEqual(4);
    expect(tryto.tryoption(fn)(3)).toEqual(null);
    expect(o.isSome(tryto.tryoption(fn)(2))).toBeTruthy();
    expect(o.isNone(tryto.tryoption(fn)(3))).toBeTruthy();
  });

  test(tryto.tryoptionasync.name, async () => {
    expect(await tryto.tryoptionasync(fnasync)(2)).toEqual(4);
    expect(await tryto.tryoptionasync(fnasync)(3)).toEqual(null);
    expect(o.isSome(await tryto.tryoptionasync(fnasync)(2))).toBeTruthy();
    expect(o.isNone(await tryto.tryoptionasync(fnasync)(3))).toBeTruthy();
  });

  test(tryto.tryresult.name, () => {
    expect(tryto.tryresult(fn)(2)).toEqual(4);
    expect(tryto.tryresult(fn)(3)).toEqual(new Error(`3 is not even`));
    expect(r.isOk(tryto.tryresult(fn)(2))).toBeTruthy();
    expect(r.isErr(tryto.tryresult(fn)(3))).toBeTruthy();
  });

  test(tryto.tryresultasync.name, async () => {
    expect(await tryto.tryresultasync(fnasync)(2)).toEqual(4);
    expect(await tryto.tryresultasync(fnasync)(3)).toEqual(new Error(`3 is not even`));
    expect(r.isOk(await tryto.tryresultasync(fnasync)(2))).toBeTruthy();
    expect(r.isErr(await tryto.tryresultasync(fnasync)(3))).toBeTruthy();
  });
});
