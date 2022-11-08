import { describe, expect, test } from 'vitest';
import * as DateRange from './DateRange';
import * as Range from './Range';

describe("DateRange", () => {
  test(DateRange.make.name, () => {
    const dr0 = DateRange.make(new Date('2020-01-01'), new Date('2020-01-03'), 'day');
    const dr1 = DateRange.make(new Date('2020-01-03'), new Date('2020-01-01'), 'day');
    const dr2 = DateRange.make(new Date('2020-01-01'), new Date('2023-01-01'), 'year');
    const dr3 = DateRange.make(new Date('2020-01-01'), new Date('2020-12-01'), 'month');

    expect(Array.from(dr0)).toEqual([new Date(2020, 0, 1), new Date(2020, 0, 2), new Date(2020, 0, 3)]);
    expect(Array.from(dr1)).toEqual([new Date(2020, 0, 3), new Date(2020, 0, 2), new Date(2020, 0, 1)]);
    expect(Array.from(dr2)).toEqual([new Date(2020, 0, 1), new Date(2021, 0, 1), new Date(2022, 0, 1), new Date(2023, 0, 1)]);
    expect(Array.from(dr3)).toEqual([
      new Date(2020, 0, 1),
      new Date(2020, 1, 1),
      new Date(2020, 2, 1),
      new Date(2020, 3, 1),
      new Date(2020, 4, 1),
      new Date(2020, 5, 1),
      new Date(2020, 6, 1),
      new Date(2020, 7, 1),
      new Date(2020, 8, 1),
      new Date(2020, 9, 1),
      new Date(2020, 10, 1),
      new Date(2020, 11, 1),
    ]);
  });

  test(DateRange.guard.name, () => {
    expect(DateRange.guard(0)).toEqual(false);
    expect(DateRange.guard(Range.make(0, 2))).toEqual(false);
    expect(DateRange.guard(DateRange.make(new Date(), new Date()))).toEqual(true);
  });

  test(DateRange.inRange.name, () => {
    const dr = DateRange.make(new Date('2020-01-01'), new Date('2020-01-03'), 'day');

    expect(DateRange.inRange(dr, new Date('2020-01-02'))).toEqual(true);
    expect(DateRange.inRange(dr, new Date('2020-01-03'))).toEqual(true);
    expect(DateRange.inRange(dr, new Date('2020-01-04'))).toEqual(false);

    expect(DateRange.inRange(new Date('2020-01-02'))(dr)).toEqual(true);
    expect(DateRange.inRange(new Date('2020-01-03'))(dr)).toEqual(true);
    expect(DateRange.inRange(new Date('2020-01-04'))(dr)).toEqual(false);
  });

  test(DateRange.map.name, () => {
    const f = (x: Date) => x.getFullYear();
    const m = DateRange.map(f);
    const dr = DateRange.make(new Date('2020-01-01'), new Date('2023-01-01'), 'year');

    expect(m(dr)).toEqual(DateRange.map(dr, f))

    expect(m(dr)).toEqual([2020, 2021, 2022, 2023]);
    expect(DateRange.map(dr, f)).toEqual([2020, 2021, 2022, 2023]);
  });

  test(DateRange.toArray.name, () => {
    const dr = DateRange.make(new Date('2020-01-01'), new Date('2020-01-03'), 'day');

    expect(DateRange.toArray(dr)).toEqual([new Date(2020, 0, 1), new Date(2020, 0, 2), new Date(2020, 0, 3)]);
  });
});
