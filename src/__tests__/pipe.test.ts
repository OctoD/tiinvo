import { pipe } from '../pipe'
import * as n from '../num'
import * as m from '../maybe'
import { Number, Option } from '..'

describe(`pipe`, () => {
  test(`pipe example`, () => {
    const piped = pipe(
      n.uadd(10),
      n.umul(2),
      n.isEven,
      m.mapOrElse(() => 'odd', () => 'even'),
    )
    expect(piped(2)).toBe(`even`)
    expect(piped(1)).toBe(`even`)
    expect(piped(1.3)).toBe(`odd`)
  })

  test(`o(n) pipe`, () => {
    const f = Number.uadd(1);
    // @ts-ignore
    const p0 = pipe();
    const p1 = pipe(f);
    const p2 = pipe(f, f);
    const p3 = pipe(f, f, f);
    const p4 = pipe(f, f, f, f);
    const p5 = pipe(f, f, f, f, f); 
    const p6 = pipe(f, f, f, f, f, f);
    const p7 = pipe(f, f, f, f, f, f, f);
    const p8 = pipe(f, f, f, f, f, f, f, f);
    const p9 = pipe(f, f, f, f, f, f, f, f, f);
    const p10 = pipe(f, f, f, f, f, f, f, f, f, f);
    const p11 = pipe(f, f, f, f, f, f, f, f, f, f, f);

    expect(p0(0)).toBe(0)
    expect(p1(0)).toBe(1)
    expect(p2(0)).toBe(2)
    expect(p3(0)).toBe(3)
    expect(p4(0)).toBe(4)
    expect(p5(0)).toBe(5)
    expect(p6(0)).toBe(6)
    expect(p7(0)).toBe(7)
    expect(p8(0)).toBe(8)
    expect(p9(0)).toBe(9)
    expect(p10(0)).toBe(10)
    expect(p11(0)).toBe(11)
  })

  test(`complex scenario`, () => {
    const optadd = Option.map(Number.uadd(1));
    const optfilter = Option.filter(Number.isEven);
    const optmultiply = Option.map(Number.umul(2));

    const piped = pipe(optadd, optfilter, optmultiply);

    expect(piped(0)).toBe(null)
    expect(piped(1)).toBe(4)
    expect(piped(2)).toBe(null)
    expect(piped(3)).toBe(8)
  })
})
