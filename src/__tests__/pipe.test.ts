import { pipe } from "../pipe";

const divide = (by: number) => (arg: number) => arg / by;
const multiply = (by: number) => (arg: number) => arg * by;
const subtract = (by: number) => (arg: number) => arg - by;
const sum = (add: number) => (arg: number) => arg + add;

describe("pipe", () => {
  it("pipes functions", () => {
    const piped = pipe(sum(5), multiply(3), divide(2), subtract(4));
    const getvat = (vatperc: number) => pipe(divide(100), multiply(vatperc));

    expect(piped(5)).toBe(11);
    expect(getvat(22)(100)).toBe(22);
  });
});
