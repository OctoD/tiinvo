import { describe, expect, test, vitest } from 'vitest';
import * as Num from './Num.js';
import * as Range from './Range.js';

describe("Range", () => {
  test(Range.make.name, () => {
    const testlinear = vitest.fn();
    const teststepped = vitest.fn();

    let i = 0;

    for (const r of Range.make(0, 10)) {
      testlinear(r);
      expect(testlinear).toBeCalledWith(i);
      i++;
    }

    i = 0;

    for (const r of Range.make(0, 10, 2)) {
      teststepped(r);
      expect(teststepped).toBeCalledWith(i);
      i += 2;
    }

    expect(testlinear).toHaveBeenCalledTimes(11);
    expect(teststepped).toHaveBeenCalledTimes(6);
  });

  test(Range.map.name, () => {
    const r = Range.make(20, 30);
    const m = Range.map(Num.toHex);

    expect(m(r)).toEqual(['0x14', '0x15', '0x16', '0x17', '0x18', '0x19', '0x1a', '0x1b', '0x1c', '0x1d', '0x1e']);
  });

  test(Range.toArray.name, () => {
    const r = Range.make(0, 10);

    expect(Range.toArray(r)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });
});
