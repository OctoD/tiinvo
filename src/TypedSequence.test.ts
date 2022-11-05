import { describe, expect, test } from 'vitest';
import * as Num from './Num.js';
import * as Str from './Str.js';
import * as Sequence from './Sequence.js';
import * as TypedSequence from './TypedSequence.js';

describe("TypedSequence", () => {
  test(TypedSequence.make.name, () => {
    const ts0 = TypedSequence.make(Num, 1, 2, 3);
    const ts1 = TypedSequence.make(Num.guard, 1, 2, 3);

    expect(() => TypedSequence.make(null as any)).toThrow();
    expect(() => TypedSequence.make({} as any, 1, 2, 3)).toThrow();
    expect(() => TypedSequence.make(Num, 1, 2, "hello" as any)).toThrow();
    expect(Sequence.eq(Num, ts0, ts1)).toEqual(true);
  });

  test(TypedSequence.append.name, () => {
    const s0 = TypedSequence.make(Num, 10, 20);

    expect(TypedSequence.append(s0, 30)).toEqual(TypedSequence.make(Num, 10, 20, 30));
    expect(TypedSequence.append(30)(s0)).toEqual(TypedSequence.make(Num, 10, 20, 30));
  });

  test(TypedSequence.prepend.name, () => {
    const s0 = TypedSequence.make(Num, 10, 20);

    expect(TypedSequence.prepend(s0, 30)).toEqual(TypedSequence.make(Num, 30, 10, 20));
    expect(TypedSequence.prepend(30)(s0)).toEqual(TypedSequence.make(Num, 30, 10, 20));
  });

  test(TypedSequence.concat.name, () => {
    const s0 = TypedSequence.make(Num, 10, 20);
    const s1 = TypedSequence.make(Num, 30, 40);

    expect(TypedSequence.concat(s0, s1)).toEqual(TypedSequence.make(Num, 10, 20, 30, 40));
    expect(TypedSequence.concat(s1)(s0)).toEqual(TypedSequence.make(Num, 10, 20, 30, 40));
  });

  test(TypedSequence.guard.name, () => {
    const a = TypedSequence.make(Num);
    const b = Sequence.make();

    expect(TypedSequence.guard(a)).toEqual(true);
    expect(TypedSequence.guard(b)).toEqual(false);
  });

  test(TypedSequence.sort.name, () => {
    const a = TypedSequence.make(Num, 5, 3, 1, 4, 2);
    const b = TypedSequence.sort(a, Num);
    const c = TypedSequence.sort(a, Num.cmp);
    const d = TypedSequence.sort(Num.cmp)(a);

    expect(b).toEqual(TypedSequence.make(Num, 1, 2, 3, 4, 5));
    expect(b).toEqual(c);
    expect(d).toEqual(c);
  });

  test(TypedSequence.count.name, () => {
    const s = TypedSequence.make(Num, 10, 20, 30);

    expect(TypedSequence.count(s, Num.gt(10))).toEqual(2);
    expect(TypedSequence.count(Num.gt(10))(s)).toEqual(2);
  });

  test(TypedSequence.get.name, () => {
    const s = TypedSequence.make(Str, 'hello', 'world');

    expect(TypedSequence.get(s, 0)).toEqual('hello');
    expect(TypedSequence.get(s, 9)).toEqual(new RangeError("Index out of bounds 9 for length 2"));
  });

  test(TypedSequence.first.name, () => {
    const s0 = TypedSequence.make(Num, 10, 20, 30);
    const s1 = TypedSequence.make(Num);

    expect(TypedSequence.first(s0)).toEqual(10);
    expect(TypedSequence.first(s1)).toEqual(null);
  });

  test(TypedSequence.last.name, () => {
    const s0 = TypedSequence.make(Num, 10, 20, 30);
    const s1 = TypedSequence.make(Num);

    expect(TypedSequence.last(s0)).toEqual(30);
    expect(TypedSequence.last(s1)).toEqual(null);
  });

  test(TypedSequence.length.name, () => {
    const s = TypedSequence.make(Num, 1, 2, 3);

    expect(TypedSequence.length(s)).toEqual(3);
  });

  test(TypedSequence.values.name, () => {
    const s = TypedSequence.make(Str, 'hello', 'world');

    expect(TypedSequence.values(s)).toEqual({ 0: 'hello', 1: 'world' });
  });

  test(TypedSequence.empty.name, () => {
    const s = TypedSequence.make(Num);
    const s1 = TypedSequence.make(Num, 10);

    expect(TypedSequence.empty(s)).toEqual(true);
    expect(TypedSequence.empty(s1)).toEqual(false);
  });

  test(TypedSequence.populated.name, () => {
    const s = TypedSequence.make(Num, 10, 20, 30);

    expect(TypedSequence.populated(s)).toEqual(true);
    expect(TypedSequence.populated(TypedSequence.make(Num))).toEqual(false);
  });

  test(TypedSequence.toArray.name, () => {
    const sl = TypedSequence.make(Num, 3, 2, 1);

    expect(TypedSequence.toArray(sl)).toEqual([3, 2, 1]);
  });

  test(TypedSequence.toJSON.name, () => {
    const sl = TypedSequence.make(Num, 3, 2, 1);

    expect(TypedSequence.toJSON(sl)).toEqual([3, 2, 1]);
  });

  test(TypedSequence.toMap.name, () => {
    const sl = TypedSequence.make(Num, 3, 2, 1);
    const m = new Map();

    m.set("0", 3);
    m.set("1", 2);
    m.set("2", 1);

    expect(TypedSequence.toMap(sl)).toEqual(m);
  });

  test(TypedSequence.toSet.name, () => {
    const sl = TypedSequence.make(Num, 3, 2, 1);

    expect(TypedSequence.toSet(sl)).toEqual(new Set([3, 2, 1]));
  });

  test(TypedSequence.toString.name, () => {
    const sl = TypedSequence.make(Num, 3, 2, 1);

    expect(TypedSequence.toString(sl)).toEqual("3,2,1");
  });
});
