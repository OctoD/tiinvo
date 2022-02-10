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

  test(tryto.maybe.name, () => {
    expect(tryto.maybe(fn)(2)).toEqual(4);
    expect(tryto.maybe(fn)(3)).toEqual(null);
    expect(m.isJust(tryto.maybe(fn)(2))).toBeTruthy();
    expect(m.isNothing(tryto.maybe(fn)(3))).toBeTruthy();
  })

  test(tryto.maybeAsync.name, async () => {
    expect(await tryto.maybeAsync(fnasync)(2)).toEqual(4);
    expect(await tryto.maybeAsync(fnasync)(3)).toEqual(null);
    expect(m.isJust(await tryto.maybeAsync(fnasync)(2))).toBeTruthy();
    expect(m.isNothing(await tryto.maybeAsync(fnasync)(3))).toBeTruthy();
  })

  test(tryto.option.name, () => {
    expect(tryto.option(fn)(2)).toEqual(4);
    expect(tryto.option(fn)(3)).toEqual(null);
    expect(o.isSome(tryto.option(fn)(2))).toBeTruthy();
    expect(o.isNone(tryto.option(fn)(3))).toBeTruthy();
  });

  test(tryto.optionAsync.name, async () => {
    expect(await tryto.optionAsync(fnasync)(2)).toEqual(4);
    expect(await tryto.optionAsync(fnasync)(3)).toEqual(null);
    expect(o.isSome(await tryto.optionAsync(fnasync)(2))).toBeTruthy();
    expect(o.isNone(await tryto.optionAsync(fnasync)(3))).toBeTruthy();
  });

  test(tryto.result.name, () => {
    expect(tryto.result(fn)(2)).toEqual(4);
    expect(tryto.result(fn)(3)).toEqual(new Error(`3 is not even`));
    expect(r.isOk(tryto.result(fn)(2))).toBeTruthy();
    expect(r.isErr(tryto.result(fn)(3))).toBeTruthy();
  });

  test(tryto.resultAsync.name, async () => {
    expect(await tryto.resultAsync(fnasync)(2)).toEqual(4);
    expect(await tryto.resultAsync(fnasync)(3)).toEqual(new Error(`3 is not even`));
    expect(r.isOk(await tryto.resultAsync(fnasync)(2))).toBeTruthy();
    expect(r.isErr(await tryto.resultAsync(fnasync)(3))).toBeTruthy();
  });
});
