import { describe, expect, test } from 'vitest';
import * as b from '../bool';

describe(`bool`, () => {
  test(`cmp`, () => {
    expect(b.cmp(true, true)).toBe(0)
    expect(b.cmp(true, false)).toBe(1)
    expect(b.cmp(false, true)).toBe(-1)
  })

  test(`eq`, () => {
    expect(b.eq(true, true)).toBe(true)
    expect(b.eq(true, false)).toBe(false)
    expect(b.eq(false, true)).toBe(false)
  })

  test(`flip`, () => {
    expect(b.flip(true)).toBe(false)
    expect(b.flip(false)).toBe(true)
  })

  test(`guard`, () => {
    expect(b.guard(true)).toBe(true)
    expect(b.guard(false)).toBe(true)
    expect(b.guard(0)).toBe(false)
  })

  test(`tobit`, () => {
    expect(b.toBit(true)).toBe(1)
    expect(b.toBit(false)).toBe(0)
  })
})