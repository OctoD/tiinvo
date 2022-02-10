import { pipe } from '../pipe'
import * as n from '../num'
import * as m from '../maybe'

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
})
