import { describe, expect, test } from 'vitest';
import { MappableModule } from './Functors.js';
import * as Num from './Num.js';
import * as Str from './Str.js';
import * as Tuple from './Tuple.js';

describe("Tuple", () =>
{
  test("guardOf", () =>
  {
    expect(Tuple.guardOf([Str, Num], ["hello"])).toEqual(false);
    expect(Tuple.guardOf([Str, Num], ["hello", 100])).toEqual(true);
    expect(Tuple.guardOf([Str, Num], ["hello", "world"])).toEqual(false);
    expect(Tuple.guardOf([Str, Num], ["hello", 100, 100])).toEqual(false);
    expect(Tuple.guardOf([10 as any, Num.guard], ["hello", 100])).toEqual(false);
    expect(Tuple.guardOf([Str.guard, Num.guard], ["hello"])).toEqual(false);
    expect(Tuple.guardOf([Str.guard, Num.guard], ["hello", 100])).toEqual(true);
    expect(Tuple.guardOf([Str.guard, Num.guard], ["hello", "world"])).toEqual(false);
    expect(Tuple.guardOf([Str.guard, Num.guard], ["hello", 100, 100])).toEqual(false);
    const guard = Tuple.guardOf([Str, Num]);

    expect(guard(["hello"])).toEqual(false);
    expect(guard(["hello", 100])).toEqual(true);
    expect(guard(["hello", "world"])).toEqual(false);
    expect(guard(["hello", 100, 100])).toEqual(false);
    expect(guard(10)).toEqual(false);
  });

  test("get", () =>
  {
    const t = [10, "hello"];
    const get0 = Tuple.get(0);
    const get1 = Tuple.get(1);
    const get2 = Tuple.get(2);
    const getWrong = Tuple.get("a" as any);

    expect(Tuple.get([10, 'hello'], 0)).toEqual(10);
    expect(Tuple.get([10, 'hello'], 1)).toEqual("hello");
    expect(Tuple.get([10, 'hello'], 2)).toEqual(null);
    expect(get0(t)).toEqual(10);
    expect(get1(t)).toEqual("hello");
    expect(get2(t)).toEqual(null);
    expect(getWrong(t)).toEqual(null);
  });

  test("length", () =>
  {
    expect(Tuple.length([10, 20, 30])).toEqual(3);
  });

  test("map", () =>
  {
    const m0 = (x: string) => x.length;
    const m1 = (x: Date) => x.getFullYear();
    const modulemap = { map: Str.charAt(0) } as unknown as MappableModule<string, number>;
    const map = Tuple.map([Str.length, modulemap, Num.gt(0), Num.toHex]);

    expect(Tuple.map([m0, m1], ["hello", new Date(2022, 1, 2, 3, 4)])).toEqual([5, 2022]);
    expect(map(["hello", "hello", 10, 10])).toEqual([5, "h", true, "0xa"]);
  });
});