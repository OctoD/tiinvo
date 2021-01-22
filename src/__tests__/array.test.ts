import * as predicate from "../predicate";
import * as array from "../array";
import * as option from "../option";
import { pipe } from "../pipe";
import {
  anyof,
  createStructOf,
  isnullOrUndefined,
  isnumber,
} from "../typeguards";

const testarray = [100, 200, 300, 400, 500];

describe(`array`, () => {
  it(`eq`, () => {
    expect(array.eq(5)(testarray)).toBeUndefined();
    expect(array.eq(3)(testarray)).toBe(400);
  });

  it(`every`, () => {
    const everynumber = array.every(isnumber);
    expect(everynumber([1, 2, 3, 4])).toBe(true);
    expect(everynumber([1, 2, 3, "nope"])).toBe(false);
  });

  it(`eqOr`, () => {
    expect(array.eqOr(5)(1000)(testarray)).toBe(1000);
    expect(array.eqOr(3)(1000)(testarray)).toBe(400);
  });

  it(`getfirst`, () => {
    expect(array.getfirst()(testarray)).toBe(100);
  });

  it(`getfirstOr`, () => {
    expect(array.getfirstOr(1000)([])).toBe(1000);
    expect(array.getfirstOr(1000)(testarray)).toBe(100);
  });

  it(`getlast`, () => {
    expect(array.getlast()([])).toBeUndefined();
    expect(array.getlast()(testarray)).toBe(500);
  });
  it(`getlastOr`, () => {
    expect(array.getlastOr(1000)([])).toBe(1000);
    expect(array.getlastOr(1000)(testarray)).toBe(500);
  });

  it(`filter`, () => {
    const filterfn = (num: number) => num % 2 === 0;
    const arrfilterfn = array.filter(filterfn);
    const arr = [1, 2, 3, 4, 5];
    const expected = [2, 4];

    expect(expect.arrayContaining(arrfilterfn(arr))).toEqual(expected);
  });

  it(`find`, () => {
    const findfn = array.find(predicate.withsamevalue(300));
    const wrongfindfn = array.find(predicate.withsamevalue(123));

    expect(findfn(testarray)).toBe(300);
    expect(wrongfindfn(testarray)).toBeUndefined();
  });

  it(`flattern`, () => {
    const flatnummatris = array.flattern<number>();
    const matrix = [
      [1, 2],
      [3, 4],
    ];
    const expected = [1, 2, 3, 4];

    expect(expect.arrayContaining(flatnummatris(matrix))).toEqual(expected);
  });

  it(`includes`, () => {
    const includes100 = array.includes(100);

    expect(includes100([10, 20, 30, 100])).toBe(true);
    expect(includes100([10, 20, 30, 900])).toBe(false);
  });

  it(`isempty`, () => {
    expect(array.isempty()([])).toBeTruthy();
    expect(array.isempty()(testarray)).toBeFalsy();
  });

  it(`length`, () => {
    expect(array.length()([])).toBe(0);
    expect(array.length()(testarray)).toBe(5);
  });

  it(`map`, () => {
    expect(
      expect.arrayContaining(array.map((num: number) => num * 2)(testarray))
    ).toEqual([200, 400, 600, 800, 1000]);
  });

  it(`reduce`, () => {
    expect(
      array.reduce(0, (prev: number, next: number) => prev + next)(testarray)
    ).toBe(1500);
  });

  it(`reduceright`, () => {
    expect(
      array.reduceright(
        0,
        (prev: number, next: number) => prev - next
      )(testarray)
    ).toBe(-1500);
  });

  it(`reverse`, () => {
    expect(expect.arrayContaining(array.reverse()(testarray))).toEqual([
      500,
      400,
      300,
      200,
      100,
    ]);
  });

  it(`some`, () => {
    const somenumber = array.some(isnumber);
    expect(somenumber([1, 2, 3, 4])).toBe(true);
    expect(somenumber([null, undefined, "nope"])).toBe(false);
  });

  it(`sort`, () => {
    expect(
      expect.arrayContaining(
        array.sort((a: number, b: number) => b - a)(testarray)
      )
    ).toEqual([500, 400, 300, 200, 100]);
  });

  it(`unsafecast`, () => {
    expect(array.unsafecast<string>()(testarray)).toBeDefined();
  });

  it(`filters even numbers, multiply them by 2 and returns number less than 10`, () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const expected = [4, 8];
    const filtereven = (arg: number) => arg % 2 === 0;
    const multiply = (arg: number) => arg * 2;
    const filterlessthan = (arg: number) => arg < 10;
    const testfn = pipe(
      array.filter(filtereven),
      array.map(multiply),
      array.filter(filterlessthan)
    );

    expect(expect.arrayContaining(testfn(numbers))).toEqual(expected);
  });

  it(`filters an array of objects using a typeguard, maps a property and returns the greater value`, () => {
    interface TestType {
      value?: number | null;
    }

    const create = (value?: number | null): TestType => ({ value });
    const test = [
      100,
      "banana",
      "pizza",
      null,
      undefined,
      new Date(),
      {},
      create(),
      create(1),
      create(null),
      create(2),
    ];
    const expected = 2;
    const isTestType = createStructOf<TestType>({
      value: anyof(isnullOrUndefined, isnumber),
    });
    const sort = (a: number, b: number) => a - b;
    const mapvalue = (arg: TestType) => arg.value;

    const testfn = pipe(
      array.filter(isTestType),
      array.unsafecast<TestType>(),
      array.map(mapvalue),
      array.map(option.option),
      array.map(option.unwrapOr(-1)),
      array.sort(sort),
      array.getlast()
    );

    expect(testfn(test)).toBe(expected);
  });
});
