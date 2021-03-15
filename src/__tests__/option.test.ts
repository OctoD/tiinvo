import { array, num } from '..';
import * as option from "../option";
import { pipe } from '../pipe';
import { isstring } from "../typeguards";

describe("option", () => {
  it("option", () => {
    expect(option.option(10)).toEqual(option.some(10));
    expect(option.option(null)).toEqual(option.none());
    expect(option.option(void 0)).toEqual(option.none());
  });

  it("isOptionOf", () => {
    const optionof = option.isOptionOf(isstring);

    expect(optionof(option.some(10))).toBeFalsy();
    expect(optionof(option.some(""))).toBeTruthy();
  });

  it(`plays around`, () => {
    interface User {
      name: string;
      age?: number;
    }

    const mapage = (user: User) => user.age;

    const user1: User = { name: 'foo' };
    const user2: User = { name: 'foo', age: 22 };
    const user3: User = { name: 'foo', age: 14 };

    const isadult = pipe(
      option.fromfunction(mapage),
      option.map(num.greaterthan(18)),
      option.unwrapOr(false)
    );

    expect(isadult(user1)).toBeFalsy();
    expect(isadult(user2)).toBeTruthy();
    expect(isadult(user3)).toBeFalsy();
  });
});
