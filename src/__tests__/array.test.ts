import * as a from '../array';
import * as n from '../num';
import * as o from '../option';

describe(`array`, () => {
  test(a.cmp.name, () => {
    const a1 = [1, 2, 3];
    const a2 = [1, 2, 3];
    const a3 = [1, 2, 4];

    expect(a.cmp(a1, a2)).toBe(0);
    expect(a.cmp(a1, a3)).toBe(-1);
    expect(a.cmp(a3, a1)).toBe(1);
  });

  test(a.concat.name, () => {
    const a1 = [1, 2, 3];
    const a2 = [4, 5, 6];

    expect(a.concat(a2)(a1)).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test(a.contains.name, () => {
    const a1 = [1, 2, 3];

    expect(a.contains(2)(a1)).toBe(true);
    expect(a.contains(4)(a1)).toBe(false);
  });

  test(a.empty.name, () => {
    expect(a.empty([])).toBe(true)
    expect(a.empty([1, 2, 3])).toBe(false)
  });

  test(a.eq.name, () => {
    const a1 = [1, 2, 3];
    const a2 = [1, 2, 3];
    const a3 = [1, 2, 4];

    expect(a.eq(a1, a2)).toBe(true);
    expect(a.eq(a1, a3)).toBe(false);
  });

  test(a.every.name, () => {
    const a1 = [1, 2, 3];

    expect(a.every(n.gt(0))(a1)).toBe(true);
    expect(a.every(n.gt(1))(a1)).toBe(false);
  });

  test(a.filter.name, () => {
    const a1 = [1, 2, 3];

    expect(a.filter(n.gt(0))(a1)).toEqual([1, 2, 3]);
    expect(a.filter(n.gt(1))(a1)).toEqual([2, 3]);
  });

  test(a.find.name, () => {
    const a1 = [1, 2, 3];

    expect(a.find(n.gt(0))(a1)).toBe(1);
    expect(a.find(n.gt(1))(a1)).toBe(2);
    expect(a.find(n.gt(2))(a1)).toBe(3);
  });

  test(a.first.name, () => {
    const a1 = [1, 2, 3];

    expect(a.first(a1)).toBe(1);
  });

  test(a.firstOr.name, () => {
    const a1 = [1, 2, 3];

    expect(a.firstOr(4)(a1)).toBe(1);
    expect(a.firstOr(4)([])).toBe(4);
  });

  test(a.flat.name, () => {
    const a1 = [[1, 2, 3], [4, 5, 6]];

    expect(expect.arrayContaining(a.flat(a1))).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test(a.fromfunctions.name, () => {
    const fn1 = (x: number) => x + 1;
    const fn2 = (x: string) => x.length;

    expect(a.fromfunctions(fn1, fn2)([10, "hello"])).toEqual([11, 5]);
  });

  test(a.get.name, () => {
    const a1 = [1, 2, 3];

    expect(a.get(1)(a1)).toBe(2);
    expect(a.get(3)(a1)).toEqual(new Error(`Index out of bounds 3 for length 3`));
  });

  test(a.guard.name, () => {
    expect(a.guard([])).toBe(true);
    expect(a.guard([1, 2, 3])).toBe(true);
    expect(a.guard(`hello world`)).toBe(false);
  });

  test(a.guardOf.name, () => {
    const numguard = a.guardOf(n.guard);

    expect(numguard([])).toBe(true);
    expect(numguard([1, 2, 3])).toBe(true);
    expect(numguard([`hello world`])).toBe(false);
  });

  test(a.join.name, () => {
    const a1 = [1, 2, 3];

    expect(a.join(`-`)(a1)).toBe(`1-2-3`);
  });

  test(a.last.name, () => {
    const a1 = [1, 2, 3];

    expect(a.last(a1)).toBe(3);
    expect(o.isNone(a.last([]))).toBeTruthy();
  });

  test(a.lastOr.name, () => {
    const a1 = [1, 2, 3];

    expect(a.lastOr(4)(a1)).toBe(3);
    expect(a.lastOr(4)([])).toBe(4);
  });

  test(a.map.name, () => {
    const inc = n.uadd(1);

    expect(expect.arrayContaining(a.map(inc)([1, 2, 3]))).toEqual([2, 3, 4]);
  });

  test(a.none.name, () => {
    const p = n.isEven;

    expect(a.none(p)([1, 2, 3])).toBe(false);
    expect(a.none(p)([2, 4, 6])).toBe(false);
    expect(a.none(p)([3, 7, 9])).toBe(true);
  });

  test(a.rand.name, () => {
    const a1 = [1, 2, 3];

    expect(a1.includes(a.rand(a1))).toBeTruthy()
    expect(a1.includes(a.rand(a1))).toBeTruthy()
    expect(a1.includes(a.rand(a1))).toBeTruthy()
    expect(a1.includes(a.rand(a1))).toBeTruthy()
    expect(a1.includes(a.rand(a1))).toBeTruthy()
    expect(a1.includes(a.rand(a1))).toBeTruthy()
    expect(a1.includes(a.rand(a1))).toBeTruthy()
    expect(a1.includes(a.rand(a1))).toBeTruthy()
    expect(a1.includes(a.rand(a1))).toBeTruthy()
    expect(a1.includes(a.rand(a1))).toBeTruthy()
  });

  test(a.reduce.name, () => {
    const a1 = [1, 2, 3];
    const r = a.reduce(n.badd);

    expect(r(0)(a1)).toBe(6);
  });

  test(a.reduceright.name, () => {
    const a1 = [1, 2, 3];
    const r = a.reduceright(n.bsub);

    expect(r(0)(a1)).toBe(-6);
  });

  test(a.reverse.name, () => {
    const a1 = [1, 2, 3];

    expect(expect.arrayContaining(a.reverse(a1))).toEqual([3, 2, 1]);
  });

  test(a.shuffle.name, () => {
    const a1 = [1, 2, 3];

    expect(a.shuffle(a1).includes(1)).toBeTruthy();
    expect(a.shuffle(a1).includes(2)).toBeTruthy();
    expect(a.shuffle(a1).includes(3)).toBeTruthy();
  });

  test(a.slice.name, () => {
    const a1 = [1, 2, 3];

    expect(expect.arrayContaining(a.slice(1, 3)(a1))).toEqual([2, 3]);
    expect(expect.arrayContaining(a.slice(undefined, 1)(a1))).toEqual([1]);
    expect(expect.arrayContaining(a.slice(2)(a1))).toEqual([3]);
  });

  test(a.some.name, () => {
    const p = n.isEven;

    expect(a.some(p)([1, 2, 3])).toBe(true);
    expect(a.some(p)([2, 4, 6])).toBe(true);
    expect(a.some(p)([3, 7, 9])).toBe(false);
  });

  test(a.sort.name, () => {
    const a1 = [1, 2, 3];
    const a2 = [3, 2, 1];

    expect(expect.arrayContaining(a.sort(n.asc)(a2))).toEqual([1, 2, 3]);
    expect(expect.arrayContaining(a.sort(n.desc)(a1))).toEqual([3, 2, 1]);
  });
})