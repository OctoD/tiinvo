import { describe, expect, test } from 'vitest';
import * as Bool from './Bool.js';

describe(`Bool`, () => {
  test(Bool.flip.name, () => {
    expect(Bool.flip(true)).toEqual(false);
  });
  test(Bool.guard.name, () => {
    expect(Bool.guard(true)).toEqual(true);
    expect(Bool.guard(1000)).toEqual(false);
  });
  test(Bool.toNumber.name, () => {
    expect(Bool.toNumber(true)).toEqual(1);
    expect(Bool.toNumber(false)).toEqual(0);
  });
});