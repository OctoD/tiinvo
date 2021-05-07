import { fallback } from "../applicative";
import { createMap } from '../mappables';
import {
  map,
  mapOr,
  mapOrElse, none, some, unwrapOrElse
} from "../option";
import { isTaggedWith, Tagged, taggedFactory } from '../tagged-type';

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

  test(`createMap example`, () => {
    const eventag = `even`;
    const oddtag = `odd`;

    type eventag = typeof eventag;
    type oddtag = typeof oddtag;
    type integertag = eventag | oddtag;

    const even = taggedFactory<integertag>(eventag);
    const odd = taggedFactory<integertag>(oddtag);
    const integer = <T>(arg: T) => typeof arg === 'number' && arg % 2 === 0 ? even(arg) : odd(arg);

    const iseven = isTaggedWith(eventag);

    const map = createMap<Tagged<number, integertag>, integertag>(iseven, integer);
    const mapperfn = (arg: number) => arg / 2;

    //  Tagged<'10.00', 'even'>;
    expect(map(mapperfn)(integer(10)).__tag).toBe(oddtag);
    //  Tagged<undefined, 'odd'>;
    expect(map(mapperfn)(integer(4)).__tag).toBe(eventag);
  })
});
