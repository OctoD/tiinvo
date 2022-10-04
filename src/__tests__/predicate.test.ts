import { describe, expect, test } from 'vitest';
import { Number } from '..';
import * as p from '../predicate';

describe(`predicate`, () => {
  test(`and`, () => {
    const p1 = (a: string) => a.length > 4;
    const p2 = (a: string) => a.length < 10;
    const f = p.and(p1, p2);

    expect(f(``)).toBe(false);
    expect(f(`hello`)).toBe(true);
    expect(f(`hello world`)).toBe(false);
  });

  test(`eq`, () => {
    const f = p.eq(`hello`);

    expect(f(``)).toBe(false);
    expect(f(`hello`)).toBe(true);
    expect(f(`hello world`)).toBe(false);
  });

  test(`invert`, () => {
    const f = p.invert(p.eq(`hello`));

    expect(f(``)).toBe(true);
    expect(f(`hello`)).toBe(false);
    expect(f(`hello world`)).toBe(true);
  });

  test(`neq`, () => {
    const f = p.neq(10);

    expect(f(5)).toBe(true);
    expect(f(6)).toBe(true);
    expect(f(10)).toBe(false);
    expect(f(11)).toBe(true);
  });

  test(`noneof`, () => {
    const f = p.noneof(p.eq(10), p.eq(11));

    expect(f(5)).toBe(true);
    expect(f(6)).toBe(true);
    expect(f(10)).toBe(false);
    expect(f(11)).toBe(false);
  });

  test(`or`, () => {
    const f = p.or(p.eq(10), p.eq(11));

    expect(f(5)).toBe(false);
    expect(f(6)).toBe(false);
    expect(f(10)).toBe(true);
    expect(f(11)).toBe(true);
  });

  test(`linearity (and)`, () => {
    const and0 = p.and();
    const and1 = p.and(Number.gt(0));
    const and2 = p.and(Number.gt(0), Number.gt(1));
    const and3 = p.and(Number.gt(0), Number.gt(1), Number.gt(2));
    const and4 = p.and(Number.gt(0), Number.gt(1), Number.gt(2), Number.gt(3));
    const and5 = p.and(Number.gt(0), Number.gt(1), Number.gt(2), Number.gt(3), Number.gt(4));
    const and6 = p.and(Number.gt(0), Number.gt(1), Number.gt(2), Number.gt(3), Number.gt(4), Number.gt(5));
    const and7 = p.and(Number.gt(0), Number.gt(1), Number.gt(2), Number.gt(3), Number.gt(4), Number.gt(5), Number.gt(6));
    const and8 = p.and(Number.gt(0), Number.gt(1), Number.gt(2), Number.gt(3), Number.gt(4), Number.gt(5), Number.gt(6), Number.gt(7));
    const and9 = p.and(Number.gt(0), Number.gt(1), Number.gt(2), Number.gt(3), Number.gt(4), Number.gt(5), Number.gt(6), Number.gt(7), Number.gt(8));
    const and10 = p.and(Number.gt(0), Number.gt(1), Number.gt(2), Number.gt(3), Number.gt(4), Number.gt(5), Number.gt(6), Number.gt(7), Number.gt(8), Number.gt(9));
    const and11 = p.and(Number.gt(0), Number.gt(1), Number.gt(2), Number.gt(3), Number.gt(4), Number.gt(5), Number.gt(6), Number.gt(7), Number.gt(8), Number.gt(9), Number.gt(10));

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

  test(`linearity (noneof)`, () => {
    const noneof0 = p.noneof();
    const noneof1 = p.noneof(Number.gt(10));
    const noneof2 = p.noneof(Number.gt(10), Number.lt(0));
    const noneof3 = p.noneof(Number.gt(10), Number.lt(0), Number.lt(-9));
    const noneof4 = p.noneof(Number.gt(10), Number.lt(0), Number.lt(-9), Number.gt(9));
    const noneof5 = p.noneof(Number.gt(10), Number.lt(0), Number.lt(-9), Number.gt(9), Number.gt(8));
    const noneof6 = p.noneof(Number.gt(10), Number.lt(0), Number.lt(-9), Number.gt(9), Number.gt(8), Number.gt(7));
    const noneof7 = p.noneof(Number.gt(10), Number.lt(0), Number.lt(-9), Number.gt(9), Number.gt(8), Number.gt(7), Number.gt(6));
    const noneof8 = p.noneof(Number.gt(10), Number.lt(0), Number.lt(-9), Number.gt(9), Number.gt(8), Number.gt(7), Number.gt(6), Number.gt(5));
    const noneof9 = p.noneof(Number.gt(10), Number.lt(0), Number.lt(-9), Number.gt(9), Number.gt(8), Number.gt(7), Number.gt(6), Number.gt(5), Number.gt(4));
    const noneof10 = p.noneof(Number.gt(10), Number.lt(0), Number.lt(-9), Number.gt(9), Number.gt(8), Number.gt(7), Number.gt(6), Number.gt(5), Number.gt(4), Number.gt(3));
    const noneof11 = p.noneof(Number.gt(10), Number.lt(0), Number.lt(-9), Number.gt(9), Number.gt(8), Number.gt(7), Number.gt(6), Number.gt(5), Number.gt(4), Number.gt(3), Number.gt(2));

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

  test(`linearity (or)`, () => {
    const or0 = p.or();
    const or1 = p.or(Number.eq(0));
    const or2 = p.or(Number.eq(0), Number.eq(1));
    const or3 = p.or(Number.eq(0), Number.eq(1), Number.eq(2));
    const or4 = p.or(Number.eq(0), Number.eq(1), Number.eq(2), Number.eq(3));
    const or5 = p.or(Number.eq(0), Number.eq(1), Number.eq(2), Number.eq(3), Number.eq(4));
    const or6 = p.or(Number.eq(0), Number.eq(1), Number.eq(2), Number.eq(3), Number.eq(4), Number.eq(5));
    const or7 = p.or(Number.eq(0), Number.eq(1), Number.eq(2), Number.eq(3), Number.eq(4), Number.eq(5), Number.eq(6));
    const or8 = p.or(Number.eq(0), Number.eq(1), Number.eq(2), Number.eq(3), Number.eq(4), Number.eq(5), Number.eq(6), Number.eq(7));
    const or9 = p.or(Number.eq(0), Number.eq(1), Number.eq(2), Number.eq(3), Number.eq(4), Number.eq(5), Number.eq(6), Number.eq(7), Number.eq(8));
    const or10 = p.or(Number.eq(0), Number.eq(1), Number.eq(2), Number.eq(3), Number.eq(4), Number.eq(5), Number.eq(6), Number.eq(7), Number.eq(8), Number.eq(9));
    const or11 = p.or(Number.eq(0), Number.eq(1), Number.eq(2), Number.eq(3), Number.eq(4), Number.eq(5), Number.eq(6), Number.eq(7), Number.eq(8), Number.eq(9), Number.eq(10));

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
});