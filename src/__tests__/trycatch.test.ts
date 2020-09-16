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

  it("trycatchasync", async () => {
    const resultok = await trycatchAsync(fnokasync, 10);
    const resulterr = await trycatchAsync(fnerrasync, "ouch");

    expect(isOk(resultok)).toBeTruthy();
    expect(isErr(resulterr)).toBeTruthy();
  });
});
