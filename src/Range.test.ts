import { describe, expect, test, vitest } from 'vitest';
import * as Num from './Num.js';
import * as Range from './Range.js';

describe("Range", () => {
  test(Range.make.name, () => {
    const testlinear = vitest.fn();
    const testlinearinverted = vitest.fn();
    const teststepped = vitest.fn();
    const teststeppedinverted = vitest.fn();

    let i = 0;

    for (const r of Range.make(0, 10)) {
      testlinear(r);
      expect(testlinear).toBeCalledWith(i);
      i++;
    }

    i = 10;

    for (const r of Range.make(10, 0)) {
      testlinearinverted(r);
      expect(testlinearinverted).toBeCalledWith(i);
      i--;
    }

    i = 0;

    for (const r of Range.make(0, 10, 2)) {
      teststepped(r);
      expect(teststepped).toBeCalledWith(i);
      i += 2;
    }

    i = 10;

    for (const r of Range.make(10, 0, 2)) {
      teststeppedinverted(r);
      expect(teststeppedinverted).toBeCalledWith(i);
      i -= 2;
    }

    expect(testlinear).toHaveBeenCalledTimes(11);
    expect(testlinearinverted).toHaveBeenCalledTimes(11);
    expect(teststepped).toHaveBeenCalledTimes(6);
    expect(teststeppedinverted).toHaveBeenCalledTimes(6);
  });

  test(Range.guard.name, () => {
    expect(Range.guard(10)).toEqual(false);
    expect(Range.guard([])).toEqual(false);
    expect(Range.guard({})).toEqual(false);
    expect(Range.guard({ start: 10, end: 20 })).toEqual(false);
    expect(Range.guard({ start: 10, end: 20, step: 12 })).toEqual(false);
    expect(Range.guard(Range.make(1, 2))).toEqual(true);
  });

  test(Range.map.name, () => {
    const r = Range.make(20, 30);
    const m = Range.map(Num.toHex);

    expect(m(r)).toEqual(['0x14', '0x15', '0x16', '0x17', '0x18', '0x19', '0x1a', '0x1b', '0x1c', '0x1d', '0x1e']);
    expect(Range.map(r, Num.toHex)).toEqual(['0x14', '0x15', '0x16', '0x17', '0x18', '0x19', '0x1a', '0x1b', '0x1c', '0x1d', '0x1e']);
  });

  test(Range.inRange.name, () => {
    const r0 = Range.make(3, 8);
    const r1 = Range.make(8, 3);

    expect(Range.inRange(r0, 10)).toEqual(false);
    expect(Range.inRange(10)(r0)).toEqual(false);
    expect(Range.inRange(r0, 6)).toEqual(true);
    expect(Range.inRange(6)(r0)).toEqual(true);
    
    expect(Range.inRange(r1, 10)).toEqual(false);
    expect(Range.inRange(10)(r1)).toEqual(false);
    expect(Range.inRange(r1, 6)).toEqual(true);
    expect(Range.inRange(6)(r1)).toEqual(true);
  });

  test(Range.toArray.name, () => {
    const r = Range.make(0, 10);

    expect(Range.toArray(r)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });
});
