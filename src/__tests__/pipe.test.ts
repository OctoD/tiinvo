import { maybe, num } from '..';
import { pipe } from "../pipe";

describe("pipe", () => {
  it("pipes functions", () => {
    const piped = pipe(
      num.uadd(10),
      num.umultiply(2),
      maybe.frompredicate(num.iseven),
      maybe.fold(`odd`, `even`)
    );

    expect(piped(5)).toBe(`even`);
  });
});
