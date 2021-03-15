import {
  fromfunction,
  frompredicate,
  isEitherOf,
  isLeft,
  isLeftOf,
  isRight,
  isRightOf,
  left,
  right,
} from "../either";
import { usubtract, iseven } from '../num';
import { withsamevalue } from "../predicate";
import { isnumber, isstring } from "../typeguards";

describe("either", () => {
  it("iseitherof", () => {
    const test = isEitherOf(isstring);
    expect(test(right(20))).toBeFalsy();
    expect(test(right("hello world"))).toBeTruthy();
  });

  it("isleftof", () => {
    const test = isLeftOf(isnumber);
    expect(test(left(20))).toBeTruthy();
    expect(test(right(20))).toBeFalsy();
    expect(test(right("hello world"))).toBeFalsy();
  });

  it("isrightof", () => {
    const test = isRightOf(isstring);
    expect(test(right(20))).toBeFalsy();
    expect(test(right("hello world"))).toBeTruthy();
    expect(test(left(20))).toBeFalsy();
    expect(test(left("hello world"))).toBeFalsy();
  });

  it("frompredicate", () => {
    const byvalue = withsamevalue(10);
    const either = frompredicate(byvalue);

    expect(isLeft(either(20))).toBeTruthy();
    expect(isRight(either(10))).toBeTruthy();
  });

  it(`fromfunction`, () => {
    const fn = fromfunction(usubtract(1), iseven);
    
    expect(isLeft(fn(10))).toBeTruthy(); // Left<9>
    expect(isRight(fn(11))).toBeTruthy(); // Right<10>
  });
});
