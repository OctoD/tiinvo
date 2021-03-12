import { either, num, pipe } from '..';
import { branch, fi, fifn } from "../conditionals";

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
});
