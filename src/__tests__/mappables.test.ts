import { fallback } from "../applicative";
import {
  some,
  isSome,
  none,
  isNone,
  map,
  mapOr,
  mapOrElse,
  unwrapOrElse,
} from "../option";

const multiply = (arg: number) => arg * 2;
const fallbackfn = fallback(0);
const u = unwrapOrElse(fallbackfn);

describe("mappables", () => {
  it("createMap", () => {
    const tm = map(multiply);
    const tsome = tm(some(10));
    const tnone = tm(none());

    expect(u(tsome)).toBe(20);
    expect(u(tnone)).toBe(0);
  });

  it("createMapOr", () => {
    const one = some(1);
    const tm = mapOr(one, multiply);
    const tsome = tm(some(10));
    const tnone = tm(none());

    expect(u(tsome)).toBe(20);
    expect(u(tnone)).toBe(1);
  });

  it("createMapOrElse", () => {
    const one = some(1);
    const tm = mapOrElse(fallbackfn, multiply);
    const tsome = tm(some(10));
    const tnone = tm(none());

    expect(u(tsome)).toBe(20);
    expect(u(tnone)).toBe(0);
  });
});
