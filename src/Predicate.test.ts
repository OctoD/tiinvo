import { describe, expect, test } from 'vitest';
import * as Predicate from './Predicate.js';
import * as Num from './Num.js';

describe("Predicate", () => {
  test(Predicate.and.name, () => {
    const and = Predicate.and(Num.gt(3), Num.lt(10));

    expect(and(5)).toEqual(true);
    expect(and(2)).toEqual(false);
  });

  test(Predicate.eq.name, () => {
    const eq0 = Predicate.eq(0);

    expect(eq0(10)).toEqual(false);
    expect(eq0(0)).toEqual(true);
    expect(Predicate.eq(0, 10)).toEqual(false);
    expect(Predicate.eq(0, 0)).toEqual(true);
  });

  test(Predicate.guard.name, () => {
    expect(Predicate.guard((x: number, b: number) => x + b)).toEqual(false);
    expect(Predicate.guard((x: number) => x > 0)).toEqual(true);
  });

  test(Predicate.invert.name, () => {
    const i = Predicate.invert(Num.gt(0));

    expect(i(10)).toEqual(false);
    expect(i(-1)).toEqual(true);
  });

  test(Predicate.neq.name, () => {
    const neq = Predicate.neq(0);

    expect(neq(10)).toEqual(true);
    expect(neq(0)).toEqual(false);
    expect(Predicate.neq(0, 10)).toEqual(true);
    expect(Predicate.neq(0, 0)).toEqual(false);
  });

  test(Predicate.none.name, () => {
    const n = Predicate.none(Num.gt(0), Num.isEven);

    expect(n(4)).toEqual(false);
    expect(n(5)).toEqual(false);
    expect(n(-4)).toEqual(false);
    expect(n(-5)).toEqual(true);
  });

  test(Predicate.or.name, () => {
    const or = Predicate.or(Num.gt(0), Num.isEven);

    expect(or(-1)).toEqual(false);
    expect(or(1)).toEqual(true);
    expect(or(2)).toEqual(true);
  });

  test("and linearity", () => {
    const and0 = Predicate.and();
    const and1 = Predicate.and(Num.gt(0));
    const and2 = Predicate.and(Num.gt(0), Num.gt(1));
    const and3 = Predicate.and(Num.gt(0), Num.gt(1), Num.gt(2));
    const and4 = Predicate.and(Num.gt(0), Num.gt(1), Num.gt(2), Num.gt(3));
    const and5 = Predicate.and(Num.gt(0), Num.gt(1), Num.gt(2), Num.gt(3), Num.gt(4));
    const and6 = Predicate.and(Num.gt(0), Num.gt(1), Num.gt(2), Num.gt(3), Num.gt(4), Num.gt(5));
    const and7 = Predicate.and(Num.gt(0), Num.gt(1), Num.gt(2), Num.gt(3), Num.gt(4), Num.gt(5), Num.gt(6));
    const and8 = Predicate.and(Num.gt(0), Num.gt(1), Num.gt(2), Num.gt(3), Num.gt(4), Num.gt(5), Num.gt(6), Num.gt(7));
    const and9 = Predicate.and(Num.gt(0), Num.gt(1), Num.gt(2), Num.gt(3), Num.gt(4), Num.gt(5), Num.gt(6), Num.gt(7), Num.gt(8));
    const and10 = Predicate.and(Num.gt(0), Num.gt(1), Num.gt(2), Num.gt(3), Num.gt(4), Num.gt(5), Num.gt(6), Num.gt(7), Num.gt(8), Num.gt(9));
    const and11 = Predicate.and(Num.gt(0), Num.gt(1), Num.gt(2), Num.gt(3), Num.gt(4), Num.gt(5), Num.gt(6), Num.gt(7), Num.gt(8), Num.gt(9), Num.gt(10));

    expect(and0(0)).toBe(true);
    expect(and1(1)).toBe(true);
    expect(and2(2)).toBe(true);
    expect(and3(3)).toBe(true);
    expect(and4(4)).toBe(true);
    expect(and5(5)).toBe(true);
    expect(and6(6)).toBe(true);
    expect(and7(7)).toBe(true);
    expect(and8(8)).toBe(true);
    expect(and9(9)).toBe(true);
    expect(and10(10)).toBe(true);
    expect(and11(11)).toBe(true);
    expect(and0(-1)).toBe(true);
    expect(and1(0)).toBe(false);
    expect(and2(1)).toBe(false);
    expect(and3(2)).toBe(false);
    expect(and4(3)).toBe(false);
    expect(and5(4)).toBe(false);
    expect(and6(5)).toBe(false);
    expect(and7(6)).toBe(false);
    expect(and8(7)).toBe(false);
    expect(and9(8)).toBe(false);
    expect(and10(9)).toBe(false);
    expect(and11(10)).toBe(false);
  });

  test(`linearity (or)`, () => {
    const p = Predicate;
    const or0 = p.or();
    const or1 = p.or(Num.eq(0));
    const or2 = p.or(Num.eq(0), Num.eq(1));
    const or3 = p.or(Num.eq(0), Num.eq(1), Num.eq(2));
    const or4 = p.or(Num.eq(0), Num.eq(1), Num.eq(2), Num.eq(3));
    const or5 = p.or(Num.eq(0), Num.eq(1), Num.eq(2), Num.eq(3), Num.eq(4));
    const or6 = p.or(Num.eq(0), Num.eq(1), Num.eq(2), Num.eq(3), Num.eq(4), Num.eq(5));
    const or7 = p.or(Num.eq(0), Num.eq(1), Num.eq(2), Num.eq(3), Num.eq(4), Num.eq(5), Num.eq(6));
    const or8 = p.or(Num.eq(0), Num.eq(1), Num.eq(2), Num.eq(3), Num.eq(4), Num.eq(5), Num.eq(6), Num.eq(7));
    const or9 = p.or(Num.eq(0), Num.eq(1), Num.eq(2), Num.eq(3), Num.eq(4), Num.eq(5), Num.eq(6), Num.eq(7), Num.eq(8));
    const or10 = p.or(Num.eq(0), Num.eq(1), Num.eq(2), Num.eq(3), Num.eq(4), Num.eq(5), Num.eq(6), Num.eq(7), Num.eq(8), Num.eq(9));
    const or11 = p.or(Num.eq(0), Num.eq(1), Num.eq(2), Num.eq(3), Num.eq(4), Num.eq(5), Num.eq(6), Num.eq(7), Num.eq(8), Num.eq(9), Num.eq(10));

    expect(or0(0)).toBe(true);
    expect(or1(0)).toBe(true);
    expect(or2(1)).toBe(true);
    expect(or3(2)).toBe(true);
    expect(or4(3)).toBe(true);
    expect(or5(4)).toBe(true);
    expect(or6(5)).toBe(true);
    expect(or7(6)).toBe(true);
    expect(or8(7)).toBe(true);
    expect(or9(8)).toBe(true);
    expect(or10(9)).toBe(true);
    expect(or11(10)).toBe(true);
    expect(or11(11)).toBe(false);
  });

  test(`linearity (noneof)`, () => {
    const noneof0 = Predicate.none();
    const noneof1 = Predicate.none(Num.gt(10));
    const noneof2 = Predicate.none(Num.gt(10), Num.lt(0));
    const noneof3 = Predicate.none(Num.gt(10), Num.lt(0), Num.lt(-9));
    const noneof4 = Predicate.none(Num.gt(10), Num.lt(0), Num.lt(-9), Num.gt(9));
    const noneof5 = Predicate.none(Num.gt(10), Num.lt(0), Num.lt(-9), Num.gt(9), Num.gt(8));
    const noneof6 = Predicate.none(Num.gt(10), Num.lt(0), Num.lt(-9), Num.gt(9), Num.gt(8), Num.gt(7));
    const noneof7 = Predicate.none(Num.gt(10), Num.lt(0), Num.lt(-9), Num.gt(9), Num.gt(8), Num.gt(7), Num.gt(6));
    const noneof8 = Predicate.none(Num.gt(10), Num.lt(0), Num.lt(-9), Num.gt(9), Num.gt(8), Num.gt(7), Num.gt(6), Num.gt(5));
    const noneof9 = Predicate.none(Num.gt(10), Num.lt(0), Num.lt(-9), Num.gt(9), Num.gt(8), Num.gt(7), Num.gt(6), Num.gt(5), Num.gt(4));
    const noneof10 = Predicate.none(Num.gt(10), Num.lt(0), Num.lt(-9), Num.gt(9), Num.gt(8), Num.gt(7), Num.gt(6), Num.gt(5), Num.gt(4), Num.gt(3));
    const noneof11 = Predicate.none(Num.gt(10), Num.lt(0), Num.lt(-9), Num.gt(9), Num.gt(8), Num.gt(7), Num.gt(6), Num.gt(5), Num.gt(4), Num.gt(3), Num.gt(2));

    expect(noneof0(0)).toBe(true);
    expect(noneof1(1)).toBe(true);
    expect(noneof2(1)).toBe(true);
    expect(noneof3(1)).toBe(true);
    expect(noneof4(1)).toBe(true);
    expect(noneof5(1)).toBe(true);
    expect(noneof6(1)).toBe(true);
    expect(noneof7(1)).toBe(true);
    expect(noneof8(1)).toBe(true);
    expect(noneof9(1)).toBe(true);
    expect(noneof10(1)).toBe(true);
    expect(noneof11(1)).toBe(true);
  });
});