import { toasync } from "../applicative";
import { isErr, isOk } from "../result";
import { trycatch, trycatchAsync } from "../trycatch";

const fnok = (arg: number) => arg + 1;
const fnerr = (arg: string) => {
  throw new Error("errored: " + arg);
};
const fnokasync = toasync(fnok);
const fnerrasync = toasync(fnerr);

describe("trycatch", () => {
  it("trycatch", () => {
    const resultok = trycatch(fnok, 10);
    const resulterr = trycatch(fnerr, "ouch");

    expect(isOk(resultok)).toBeTruthy();
    expect(isErr(resulterr)).toBeTruthy();
  });

  it(`trycatch example`, () => {
    const thisthrows = () => { throw new Error(`This is Sparta`) }
    const thisisok = (what: string) => `we love ${what}`
    
    const test1 = trycatch(thisthrows);
    const test2 = trycatch(thisisok, 'kittens');
    
    expect(isErr(test1)).toBeTruthy();
    expect(isOk(test2)).toBeTruthy();
  });

  it("trycatchasync", async () => {
    const resultok = await trycatchAsync(fnokasync, 10);
    const resulterr = await trycatchAsync(fnerrasync, "ouch");

    expect(isOk(resultok)).toBeTruthy();
    expect(isErr(resulterr)).toBeTruthy();
  });

  it(`trycatchasync example`, async () => {
    const fail = async () => { throw new Error('oops I did it again') }
    const success = async (num: number) => num;
    
    const test1 = trycatchAsync(fail).then(isErr)       // Promise<true>
    const test2 = trycatchAsync(success, 10).then(isOk) // Promise<true>

    const res1 = await test1;
    const res2 = await test2;

    expect(res1).toBeTruthy();
    expect(res2).toBeTruthy();
  });
});
