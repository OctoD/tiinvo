import { describe, expect, test } from 'vitest';
import * as Functors from './Functors';
import * as Num from './Num';
import * as Range from './Range';
import * as Sequence from './Sequence';
import * as Str from './Str';

describe("Sequence", () =>
{
  test(Sequence.make.name, () =>
  {
    const s0 = Sequence.make(10, 20, 30);
    const s1 = Sequence.make([10, 20, 30]);

    expect(Sequence.guardOf(Num.guard)(s0)).toEqual(true);
    expect(Sequence.guardOf(Num.guard)(s1)).toEqual(true);
    expect(Sequence.toArray(s0)).toEqual([10, 20, 30]);
    expect(Sequence.toArray(s1)).toEqual([10, 20, 30]);
    expect(s0).toEqual(s1);
  });

  test(Sequence.guard.name, () =>
  {
    expect(Sequence.guard(10)).toEqual(false);
    expect(Sequence.guard([10, 20, 30])).toEqual(false);
    expect(Sequence.guard(Sequence.make())).toEqual(true);
  });

  test(Sequence.guardOf.name, () =>
  {
    const s0 = Sequence.make<number | string>(1, 'hello', 2);
    const s1 = Sequence.make('hello', 'world');
    const isStrSequence = Sequence.guardOf(Str.guard);

    expect(isStrSequence(s0)).toEqual(false);
    expect(isStrSequence(s1)).toEqual(true);
  });

  test(Sequence.cmp.name, () =>
  {
    const s0 = Sequence.make(0, 1, 2);
    const s1 = Sequence.make(0, 1, 2);
    const s2 = Sequence.make(0, 1, 2, 3);

    expect(Sequence.cmp(Num, s0, s1)).toEqual(0);
    expect(Sequence.cmp(Num, s0)(s1)).toEqual(0);
    expect(Sequence.cmp(Num)(s0, s1)).toEqual(0);
    expect(Sequence.cmp(Num.cmp, s0, s1)).toEqual(0);
    expect(Sequence.cmp(Num.cmp, s0)(s1)).toEqual(0);
    expect(Sequence.cmp(Num.cmp)(s0, s1)).toEqual(0);

    expect(Sequence.cmp(Num, s0, s2)).toEqual(-1);
    expect(Sequence.cmp(Num, s0)(s2)).toEqual(1);
    expect(Sequence.cmp(Num)(s0, s2)).toEqual(-1);

    expect(Sequence.cmp(Num.cmp, s0, s2)).toEqual(-1);
    expect(Sequence.cmp(Num.cmp, s0)(s2)).toEqual(1);
    expect(Sequence.cmp(Num.cmp)(s0, s2)).toEqual(-1);

    expect(Sequence.cmp(Num, s2, s0)).toEqual(1);
    expect(Sequence.cmp(Num, s2)(s0)).toEqual(-1);
    expect(Sequence.cmp(Num)(s2, s0)).toEqual(1);

    expect(Sequence.cmp(Num.cmp, s2, s0)).toEqual(1);
    expect(Sequence.cmp(Num.cmp, s2)(s0)).toEqual(-1);
    expect(Sequence.cmp(Num.cmp)(s2, s0)).toEqual(1);
  });

  test(Sequence.eq.name, () =>
  {
    const s0 = Sequence.make(0, 1, 2);
    const s1 = Sequence.make(0, 1, 2);
    const s2 = Sequence.make(0, 1, 2, 3);

    expect(Sequence.eq(Num, s0, s1)).toEqual(true);
    expect(Sequence.eq(Num, s0)(s1)).toEqual(true);
    expect(Sequence.eq(Num)(s0, s1)).toEqual(true);

    expect(Sequence.eq(Num, s0, s2)).toEqual(false);
    expect(Sequence.eq(Num, s0)(s2)).toEqual(false);
    expect(Sequence.eq(Num)(s0, s2)).toEqual(false);

    expect(Sequence.eq(Num.eq, s0, s1)).toEqual(true);
    expect(Sequence.eq(Num.eq, s0)(s1)).toEqual(true);
    expect(Sequence.eq(Num.eq)(s0, s1)).toEqual(true);

    expect(Sequence.eq(Num.eq, s0, s2)).toEqual(false);
    expect(Sequence.eq(Num.eq, s0)(s2)).toEqual(false);
    expect(Sequence.eq(Num.eq)(s0, s2)).toEqual(false);
  });

  test(Sequence.map.name, () =>
  {
    const s = Sequence.make(1, 2, 3);

    expect(Sequence.map(s, Num.mul(2))).toEqual(Sequence.make(2, 4, 6));
    expect(Sequence.map(Num.mul(2))(s)).toEqual(Sequence.make(2, 4, 6));
  });

  test(Sequence.filter.name, () =>
  {
    const s = Sequence.make(10, 20, 30, 40);

    expect(Sequence.filter(s, Num.gt(20))).toEqual(Sequence.make(30, 40));
    expect(Sequence.filter(Num.gt(20))(s)).toEqual(Sequence.make(30, 40));
  });

  test(Sequence.filterMap.name, () =>
  {
    const f: Functors.FilterMappableModule<number, string | Error> = {
      filter: Num.isOdd,
      map: Num.toBin,
    };
    const s = Sequence.make(...Range.make(0, 10));
    const m = Sequence.filterMap(f);

    const a = Sequence.filterMap(s, f);
    const b = m(s);

    expect(Sequence.toArray(a)).toEqual(["0b1", "0b11", "0b101", "0b111", "0b1001"]);
    expect(Sequence.toArray(b)).toEqual(["0b1", "0b11", "0b101", "0b111", "0b1001"]);
  });

  test(Sequence.filterReduce.name, () =>
  {
    const s = Sequence.make(1, 2, 3, 4, 5);
    const f: Functors.FilterReduceableModule<number, number> = {
      default: 0,
      filter: Num.isEven,
      reduce: Num.add,
    };

    expect(Sequence.filterReduce(s, f)).toEqual(6);
    expect(Sequence.filterReduce(f)(s)).toEqual(6);
  });

  test(Sequence.append.name, () =>
  {
    const s0 = Sequence.make(10, 20);

    expect(Sequence.toArray(Sequence.append(s0, 30))).toEqual(Sequence.toArray(Sequence.make(10, 20, 30)));
    expect(Sequence.toArray(Sequence.append(30)(s0))).toEqual(Sequence.toArray(Sequence.make(10, 20, 30)));
  });

  test(Sequence.concat.name, () =>
  {
    const s0 = Sequence.make(10, 20);
    const s1 = Sequence.make(30, 40);

    expect(Sequence.concat(s0, s1)).toEqual(Sequence.make(10, 20, 30, 40));
    expect(Sequence.concat(s1)(s0)).toEqual(Sequence.make(10, 20, 30, 40));
  });

  test(Sequence.prepend.name, () =>
  {
    const s0 = Sequence.make(10, 20);

    expect(Sequence.prepend(s0, 30)).toEqual(Sequence.make(30, 10, 20));
    expect(Sequence.prepend(30)(s0)).toEqual(Sequence.make(30, 10, 20));
  });

  test(Sequence.first.name, () =>
  {
    const s0 = Sequence.make(10, 20, 30);
    const s1 = Sequence.make();

    expect(Sequence.first(s0)).toEqual(10);
    expect(Sequence.first(s1)).toEqual(null);
  });

  test(Sequence.count.name, () =>
  {
    const s = Sequence.make(10, 20, 30);

    expect(Sequence.count(s, Num.gt(10))).toEqual(2);
    expect(Sequence.count(Num.gt(10))(s)).toEqual(2);
  });

  test(Sequence.get.name, () =>
  {
    const s = Sequence.make('hello', 'world');

    expect(Sequence.get(s, 0)).toEqual('hello');
    expect(Sequence.get(0)(s)).toEqual('hello');
    expect(Sequence.get(s, 9)).toEqual(new RangeError("Index out of bounds 9 for length 2"));
    expect(Sequence.get(9)(s)).toEqual(new RangeError("Index out of bounds 9 for length 2"));
  });

  test(Sequence.last.name, () =>
  {
    const s0 = Sequence.make(10, 20, 30);
    const s1 = Sequence.make();

    expect(Sequence.last(s0)).toEqual(30);
    expect(Sequence.last(s1)).toEqual(null);
  });

  test(Sequence.length.name, () =>
  {
    const s = Sequence.make(1, 2, 3);

    expect(Sequence.length(s)).toEqual(3);
  });

  test(Sequence.values.name, () =>
  {
    const s = Sequence.make('hello', 'world');

    expect(Sequence.values(s)).toEqual({ 0: 'hello', 1: 'world' });
  });

  test(Sequence.empty.name, () =>
  {
    const s = Sequence.make();
    const s1 = Sequence.make(10);

    expect(Sequence.empty(s)).toEqual(true);
    expect(Sequence.empty(s1)).toEqual(false);
  });

  test(Sequence.populated.name, () =>
  {
    const s = Sequence.make(10, 20, 30);

    expect(Sequence.populated(s)).toEqual(true);
    expect(Sequence.populated(Sequence.make())).toEqual(false);
  });

  test(Sequence.fromString.name, () =>
  {
    const x = Sequence.fromString<number>(`10,20,30`) as Sequence.T<number>;
    const t1 = Sequence.make(10, 20, 30);
    const t2 = Sequence.make(10, 30, 20);

    expect(Sequence.eq(Num, x, t2)).toEqual(false);
    expect(Sequence.eq(Num, x, t1)).toEqual(true);
    expect(Sequence.fromString<string>(`asd`)).toBeInstanceOf(Error);
  });

  test(Sequence.sort.name, () =>
  {
    const a = Sequence.make(5, 3, 1, 4, 2);
    const b = Sequence.sort(a, Num);

    expect(b).toEqual(Sequence.make(1, 2, 3, 4, 5));
    expect(Sequence.sort(Num)(a)).toEqual(Sequence.make(1, 2, 3, 4, 5));
    expect(Sequence.sort(Num.cmp)(a)).toEqual(Sequence.make(1, 2, 3, 4, 5));
  });

  test(Sequence.toArray.name, () =>
  {
    const s = Sequence.make(10, 20, 30);

    expect(Sequence.toArray(s)).toEqual([10, 20, 30]);
  });

  test(Sequence.toJSON.name, () =>
  {
    expect(Sequence.toJSON(Sequence.make(1, 2))).toEqual([1, 2]);
  });

  test(Sequence.toMap.name, () =>
  {
    const c = new Map();

    c.set("0", 1);
    c.set("1", 2);

    expect(Sequence.toMap(Sequence.make(1, 2))).toEqual(c);
  });

  test(Sequence.reduce.name, () =>
  {
    const s = Sequence.make(10, 20, 30);

    expect(Sequence.reduce(s, Num.add, 0)).toEqual(60);
    expect(Sequence.reduce<number, number>(Num.add, 0)(s)).toEqual(60);
  });

  test(Sequence.toSet.name, () =>
  {
    expect(Sequence.toSet(Sequence.make(10, 20, 30))).toEqual(new Set([10, 20, 30]));
  });

  test(Sequence.toString.name, () =>
  {
    expect(Sequence.toString(Sequence.make(10, 20, 30))).toEqual('10,20,30');
  });
});
