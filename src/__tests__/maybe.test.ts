import { isstring, maybe } from "..";
import { bind } from "../applicative";

describe(`maybe`, () => {
  test(`isJustOf`, () => {
    const isjustStr = maybe.isJustOf(isstring);

    expect(isjustStr(10)).toBe(false);
    expect(isjustStr(maybe.just(10))).toBe(false);
    expect(isjustStr(maybe.just('abc'))).toBe(true);
    expect(isjustStr(maybe.nothing())).toBe(false);
  });

  test(`frompredicate`, () => {
    const isgreaterthan10 = (value: number) => value > 10;
    const fn = maybe.frompredicate(isgreaterthan10);

    expect(maybe.isJust(fn(11))).toBeTruthy(); // Just<number>
    expect(maybe.isNothing(fn(9))).toBeTruthy(); // Nothing
  });

  test("justfromfunction", () => {
    const myobject = { foo: 10, bar: 20, baz: undefined };
    const mapmyobjectkey = (key: keyof typeof myobject) => myobject[key];
    const fn = maybe.justfromfunction(mapmyobjectkey);

    expect(maybe.isJust(fn("foo"))).toBeTruthy(); // Just<number>
    expect(maybe.isJust(fn("bar"))).toBeTruthy(); // Just<number>
    expect(bind(fn, "baz")).toThrow(); // throws
  });

  test("maybefromfunction", () => {
    const myobject = { foo: 10, bar: 20, baz: undefined };
    const mapmyobjectkey = (key: keyof typeof myobject) => myobject[key];
    const fn = maybe.maybefromfunction(mapmyobjectkey);

    expect(maybe.isJust(fn("foo"))).toBeTruthy(); // Just<number>
    expect(maybe.isJust(fn("bar"))).toBeTruthy(); // Just<number>
    expect(maybe.isNothing(fn("baz"))).toBeTruthy(); // Nothing
  });
});
