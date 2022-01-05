import * as t from '../tuple'
import * as str from '../str'
import * as num from '../num'
import * as o from '../option'

describe(`tuple`, () => {
  test(`guardOf`, () => {
    const guard = t.guardOf(num.guard, str.guard, num.guard);

    expect(guard([1, 'a', 2])).toBe(true)
    expect(guard([1, 'a', 'b'])).toBe(false)
  })

  test(`cmp`, () => {
    const a: t.tuple<[number, number, number]> = [1, 2, 3]
    const b: t.tuple<[number, number, number]> = [1, 2, 3]
    const c: t.tuple<[number, number, number]> = [1, 2, 4]
    const d: t.tuple<[number, number]> = [1, 2];

    expect(t.cmp(a, b)).toBe(0)
    expect(t.cmp(a, c)).toBe(-1)
    expect(t.cmp(c, a)).toBe(1)
    expect(t.cmp(d, a)).toBe(-1)
    expect(t.cmp(a, d)).toBe(1)
    expect(t.cmp(null, a)).toBe(-1)
    expect(t.cmp(null, undefined)).toBe(0)
  })

  test(`eq`, () => {
    const a: t.tuple<[number, number, number]> = [1, 2, 3]
    const b: t.tuple<[number, number, number]> = [1, 2, 3]
    const c: t.tuple<[number, number, number]> = [1, 2, 4]
    const d: t.tuple<[number, number]> = [1, 2];

    expect(t.eq(a, b)).toBe(true)
    expect(t.eq(a, c)).toBe(false)
    expect(t.eq(c, a)).toBe(false)
    expect(t.eq(d, a as any)).toBe(false)
    expect(t.eq(a, d as any)).toBe(false)
    expect(t.eq(null, a)).toBe(false)
    expect(t.eq(null, undefined)).toBe(true)
  })

  test(`get`, () => {
    const tuple: t.tuple<[number, number, number]> = [10, 20, 30];

    expect(t.get(0)(tuple)).toBe(10)
    expect(t.get(5)(tuple)).toBe(null)

    expect(o.isSome(t.get(0)(tuple))).toBe(true)
    expect(o.isNone(t.get(5)(tuple))).toBe(true)
  })

  test(`intersect`, () => {
    const a: t.tuple<[number, number, number]> = [1, 2, 3]
    const b: t.tuple<[number, number, number]> = [1, 2, 3]
    const c: t.tuple<[number, number, number]> = [1, 2, 4]
    const d: t.tuple<[number, number]> = [1, 2];

    expect(t.intersect(a)(b)).toEqual(a)
    expect(t.intersect(a)(c)).toEqual([1, 2])
    expect(t.intersect(a)(d)).toEqual([1, 2])
  })

  test(`length`, () => {
    const tuple: t.tuple<[number, number, number]> = [10, 20, 30];

    expect(t.length(tuple)).toBe(3)
    expect(t.length([])).toBe(0)
  })

  test(`map`, () => {
    const tuple: t.tuple<[number, number, number]> = [10, 20, 4];
    const m = t.map(num.uadd(2), num.udiv(2), num.uroot(2));

    expect(m(tuple)).toEqual([12, 10, 2])
  })

  test(`union`, () => {
    const a: t.tuple<[number, number, number]> = [1, 2, 3]
    const b: t.tuple<[number, number, number]> = [1, 2, 3]
    const c: t.tuple<[number, number, number]> = [1, 2, 4]
    const d: t.tuple<[number, number]> = [1, 2];

    expect(t.union(a)(b)).toEqual(a)
    expect(t.union(a)(c)).toEqual([1, 2, 3, 4])
    expect(t.union(a)(d)).toEqual([1, 2, 3])
  })
})
