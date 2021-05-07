import { fallback, num, pipe, str } from '..';
import { branch, fi, fifn, multi } from "../conditionals";

describe("conditionals", () => {
  it("fi", () => {
    expect(fi(true, 1, 0)).toBe(1);
    expect(fi(false, 1, 0)).toBe(0);
  });

  it("fifn", () => {
    const tru = jest.fn().mockReturnValue(1);
    const fal = jest.fn().mockReturnValue(2);

    expect(fifn(true, tru, fal)).toBe(1);
    expect(fifn(false, tru, fal)).toBe(2);
  });

  it(`branch`, () => {
    const tostring = (label: 'even' | 'odd') => (arg: number) => `${arg} is ${label}`
    const evenstostring = tostring('even');
    const oddstostring = tostring('odd');

    const dosomething = branch(num.iseven, evenstostring, oddstostring);

    expect(dosomething(10)).toBe(`10 is even`) // "10 is even"
    expect(dosomething(11)).toBe(`11 is odd`) // "11 is odd"
  })

  it(`multi`, () => {
    const switchcase = pipe(
      str.length,
      multi(
        `Not valid`,
        [num.equals(0), `Required`],
        [num.lessthan(10), `Too short`],
        [num.greaterthan(20), `Too long`],
        [num.greaterthan(8), `Valid`],
      )
    );
    const switchcasefn = pipe(
      str.length,
      multi(
        fallback(`Not valid`),
        [num.equals(0), `Required`],
        [num.lessthan(10), fallback(`Too short`)],
        [num.greaterthan(20), `Too long`],
        [num.greaterthan(8), fallback(`Valid`)],
      )
    );

    expect(switchcase('hello world')).toBe(`Valid`);
    expect(switchcase('foo')).toBe(`Too short`);
    expect(switchcase('123456789012345678901234567890')).toBe(`Too long`);
    expect(switchcase('')).toBe(`Required`);
    expect(switchcase(11 as any)).toBe(`Not valid`);

    expect(switchcasefn('hello world')).toBe(`Valid`);
    expect(switchcasefn('foo')).toBe(`Too short`);
    expect(switchcasefn('123456789012345678901234567890')).toBe(`Too long`);
    expect(switchcasefn('')).toBe(`Required`);
    expect(switchcasefn(11 as any)).toBe(`Not valid`);
  })
});
