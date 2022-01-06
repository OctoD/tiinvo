import * as a from '../array';
import * as d from '../date';

describe(`date`, () => {
  test(d.cmp.name, () => {
    const d1 = new Date(2018, 0, 1);
    const d2 = new Date(2018, 0, 2);

    expect(d.cmp(d1, d2)).toBe(-1);
    expect(d.cmp(d2, d1)).toBe(1);
    expect(d.cmp(d1, d1)).toBe(0);
  });
  test(d.guard.name, () => {
    expect(d.guard(new Date())).toBe(true);
    expect(d.guard(new Date(2018, 0, 1))).toBe(true);
    expect(d.guard(new Date(2018, 0, 1, 12, 0, 0))).toBe(true);
    expect(d.guard({})).toBe(false);
  });
  test(d.eq.name, () => {
    const d1 = d.make(2018, d.Month.Jan, 1);
    const d2 = d.make(2018, d.Month.Jan, 1);

    expect(d.eq(d1, d2))
  });
  test(d.make.name, () => {
    expect(d.make(2018, d.Month.Jan, 1)).toEqual(new Date(2018, 0, 1));
  });
  test(d.inrange.name, () => {
    const d1 = new Date(2018, 0, 1);
    const d2 = new Date(2018, 0, 2);
    const d3 = new Date(2018, 0, 3);

    expect(d.inrange(d1, d3)(d2)).toBe(true);
    expect(d.inrange(d1, d3)(d1)).toBe(true);
    expect(d.inrange(d1, d3)(d3)).toBe(true);
    expect(d.inrange(d1, d2)(d3)).toBe(false);
  });
  test(d.invalid.name, () => {
    expect(d.invalid(new Date())).toBe(false)
    expect(d.invalid(new Date(2018, 0, 1))).toBe(false)
    expect(d.invalid(new Date(2018, 0, 1, 12, 0, 0))).toBe(false)
    expect(d.invalid(new Date(`a`))).toBe(true)
  });
  test(d.isleap.name, () => {
    expect(d.isleap(new Date(2018, 0, 1))).toBe(false);
    expect(d.isleap(new Date(2016, 0, 1))).toBe(true);
    expect(d.isleap(new Date(400, 0, 1))).toBe(true);
    expect(d.isleap(new Date(100, 0, 1))).toBe(false);
  });
  test(d.notinrange.name, () => {
    const d1 = new Date(2018, 0, 1);
    const d2 = new Date(2018, 0, 2);
    const d3 = new Date(2018, 0, 3);

    expect(d.notinrange(d1, d3)(d2)).toBe(false);
    expect(d.notinrange(d1, d3)(d1)).toBe(false);
    expect(d.notinrange(d1, d3)(d3)).toBe(false);
    expect(d.notinrange(d1, d2)(d3)).toBe(true);
  });
  test(d.valid.name, () => {
    expect(d.valid(new Date())).toBe(true)
    expect(d.valid(new Date(2018, 0, 1))).toBe(true)
    expect(d.valid(new Date(2018, 0, 1, 12, 0, 0))).toBe(true)
    expect(d.valid(new Date(`a`))).toBe(false)
  });
  test(d.add.name, () => {
    const d1 = d.make(2018, d.Month.January, 1);
    
    expect(d.add()(d1)).toEqual(d1);
    expect(d.add(1)(d1)).toEqual(d.make(2019, d.Month.Jan, 1));
    expect(d.add(1, 1)(d1)).toEqual(d.make(2019, d.Month.Feb, 1));
    expect(d.add(1, 1, 1)(d1)).toEqual(d.make(2019, d.Month.Feb, 2));
  });
  test(d.addYears.name, () => {
    const d1 = d.make(2018, d.Month.January, 1);
    const d2 = d.make(2019, d.Month.January, 1);
    expect(d.addYears(1)(d1)).toEqual(d2);
  });
  test(d.addMonths.name, () => {
    const d1 = d.make(2018, d.Month.January, 1);
    const d2 = d.make(2018, d.Month.Feb, 1);
    expect(d.addMonths(1)(d1)).toEqual(d2);
  });
  test(d.addDays.name, () => {
    const d1 = d.make(2018, d.Month.January, 1);
    const d2 = d.make(2018, d.Month.January, 2);
    expect(d.addDays(1)(d1)).toEqual(d2);
  });
  test(d.sub.name, () => {
    const d1 = d.make(2018, d.Month.January, 1);
    
    expect(d.sub()(d1)).toEqual(d1);
    expect(d.sub(1)(d1)).toEqual(d.make(2017, d.Month.Jan, 1));
    expect(d.sub(1, 1)(d1)).toEqual(d.make(2016, d.Month.December, 1));
    expect(d.sub(1, 1, 1)(d1)).toEqual(d.make(2016, d.Month.November, 30));
  });
  test(d.subYears.name, () => {
    const d1 = d.make(2018, d.Month.January, 1);
    const d2 = d.make(2017, d.Month.January, 1);
    expect(d.subYears(1)(d1)).toEqual(d2);
  });
  test(d.subMonths.name, () => {
    const d1 = d.make(2018, d.Month.January, 1);
    const d2 = d.make(2017, d.Month.December, 1);
    expect(d.subMonths(1)(d1)).toEqual(d2);
  });
  test(d.subDays.name, () => {
    const d1 = d.make(2018, d.Month.January, 1);
    const d2 = d.make(2017, d.Month.December, 31);
    expect(d.subDays(1)(d1)).toEqual(d2);
  });
  test(d.addYear.name, () => {
    const d1 = d.make(2018, d.Month.January, 1);
    const d2 = d.make(2019, d.Month.January, 1);
    expect(d.addYear(d1)).toEqual(d2);
  });
  test(d.addMonth.name, () => {
    const d1 = d.make(2018, d.Month.January, 1);
    const d2 = d.make(2018, d.Month.Feb, 1);
    expect(d.addMonth(d1)).toEqual(d2);
  });
  test(d.addDay.name, () => {
    const d1 = d.make(2018, d.Month.January, 1);
    const d2 = d.make(2018, d.Month.January, 2);
    expect(d.addDay(d1)).toEqual(d2);
  });
  test(d.subYear.name, () => {
    const d1 = d.make(2018, d.Month.January, 1);
    const d2 = d.make(2017, d.Month.January, 1);
    expect(d.subYear(d1)).toEqual(d2);
  });
  test(d.subMonth.name, () => {
    const d1 = d.make(2018, d.Month.January, 1);
    const d2 = d.make(2017, d.Month.December, 1);
    expect(d.subMonth(d1)).toEqual(d2);
  });
  test(d.subDay.name, () => {
    const d1 = d.make(2018, d.Month.January, 1);
    const d2 = d.make(2017, d.Month.December, 31);
    expect(d.subDay(d1)).toEqual(d2);
  });
  test(d.getYear.name, () => {
    const d1 = d.make(2018, d.Month.January, 1);
    expect(d.getYear(d1)).toBe(2018);
  });
  test(d.getMonth.name, () => {
    const d1 = d.make(2018, d.Month.January, 1);
    expect(d.getMonth(d1)).toBe(d.Month.January);
  });
  test(d.getDay.name, () => {
    const d1 = d.make(2018, d.Month.January, 1);
    expect(d.getDay(d1)).toBe(1);
  });
  test(d.asc.name, () => {
    const d1 = d.make(2018, d.Month.January, 1);
    const d2 = d.make(2018, d.Month.January, 2);
    expect(d.asc(d1, d2)).toBe(1);
    expect(d.asc(d2, d1)).toBe(-1);
    expect(d.asc(d2, d2)).toBe(0);
  });
  test(d.desc.name, () => {
    const d1 = d.make(2018, d.Month.January, 1);
    const d2 = d.make(2018, d.Month.January, 2);
    expect(d.desc(d1, d2)).toBe(-1);
    expect(d.desc(d2, d1)).toBe(1);
    expect(d.desc(d2, d2)).toBe(0);
  });
  test(d.toString.name, () => {
    const d1 = d.make(2018, d.Month.January, 1);
    const d2 = d.make(2018, d.Month.Nov, 20);
    expect(d.toString(d1)).toBe(`2018-01-01`);
    expect(d.toString(d2)).toBe(`2018-11-20`);
  });
})