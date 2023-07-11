import { describe, expect, test } from 'vitest';
import * as Fn from './Fn.js';
import * as Obj from './Obj.js';
import * as Str from './Str.js';
import * as Num from './Num.js';
import * as Functors from './Functors.js';
import * as Predicate from './Predicate.js';

function makemap<T extends number>(guard: Functors.Guardable<T>, tn: string)
{
  function map<A>(m: Functors.Mappable<T, A>, t: T): A;
  function map<A>(m: Functors.Mappable<T, A>): Fn.Unary<T, A>;
  function map<A>(m: Functors.Mappable<T, A>, t?: T): any
  {
    const _map = (x: T) => guard(x) ? m(x) : new TypeError("Value not " + tn);

    if (Num.guard(t))
    {
      return _map(t);
    }

    return (b: T) => _map(b);
  }

  return map;
}

module Int8
{
  export type T = number;
  export const guard = Predicate.and(Num.guard, Num.gte(0), Num.lte(2 ** 8 - 1)) as Functors.Guardable<T>;
  export const map = makemap(guard, "Int8");
}

module Int16
{
  export type T = number;
  export const guard = Predicate.and(Num.guard, Num.gte(0), Num.lte(2 ** 16 - 1)) as Functors.Guardable<T>;
  export const map = makemap(guard, "Int16");
}

module LivingBeen
{
  export type LivingBeen<A> = {
    name: string;
  } & A;

  export type T<A> = LivingBeen<A>;

  export const eq = <A>(a: T<A>, b: T<A>): boolean =>
  {
    return Str.eq(a.name, b.name);
  };
}

module Animal
{
  export interface Animal
  {
    name: string;
    legs: number;
  }

  export type t = Animal;

  export const make: Functors.Buildable<t> = (p = {}) => ({
    legs: p.legs ?? 0,
    name: p.name ?? "",
  });

  export const guard = Obj.guardOf<t>({
    name: Str.guard,
    legs: Num.guard,
  });

  //#region accessors

  export const name = (t: t) => t.name;
  export const legs = (t: t) => t.legs;

  //#endregion
}

module Person
{
  export type Person = LivingBeen.T<{
    surname: string;
  }>;

  export type T = Person;

  export const make: Functors.Buildable<T> = (p = {}) => ({
    name: p.name ?? '',
    surname: p.surname ?? '',
  });

  export const eq = (a: T, b: T) =>
  {
    return LivingBeen.eq(a, b) && Str.eq(a.surname, b.surname);
  };
}

module User
{
  export type User = {
    name: string;
    surname: string;
  };

  export type t = User;

  export let make: Functors.Buildable<t> = (p = {}) => ({
    name: p.name ?? '',
    surname: p.surname ?? '',
  });

  export const guard = Obj.guardOf<t>({
    name: Str.guard,
    surname: Str.guard,
  });

  //#region accessors

  export const name = (t: t) => t.name;
  export const surname = (t: t) => t.surname;

  //#endregion
}

describe("Functors examples", () =>
{
  test("Buildable", () =>
  {
    expect(User.make()).toEqual({ name: '', surname: '' });
    expect(User.make({ name: 'John' })).toEqual({ name: 'John', surname: '' });
    expect(User.make({ name: 'John', surname: 'Doe' })).toEqual({ name: 'John', surname: 'Doe' });
  });

  test("BuildableModule", () =>
  {
    const greet = (x: Functors.BuildableMobule<User.t>, y: Partial<ReturnType<Functors.Buildable<User.t>>>) =>
    {
      const z = x.make(y);
      return `hello ${z.name} ${z.surname}`;
    };

    expect(greet(User, { name: 'John', surname: 'Doe' })).toEqual("hello John Doe");
    expect(greet(User, "" as any)).toEqual("hello  ");
  });

  test("Equatable", () =>
  {
    const duck = Animal.make({ legs: 2, name: 'duck' });
    const donaldDuck = Animal.make({ legs: 2, name: 'Donald' });
    const donald = Person.make({ name: 'Donald', surname: 'Duck' });

    expect(LivingBeen.eq(duck, donaldDuck)).toEqual(false);
    expect(LivingBeen.eq(donald, donaldDuck as LivingBeen.T<any>)).toEqual(true);
  });

  test("GuardableModule", () =>
  {
    const makeeq = <A extends number>(mod: Functors.GuardableModule<A>): Functors.Equatable<A> =>
    {
      function eq(a: A, b: A): boolean;
      function eq(a: A): Fn.Unary<A, boolean>;
      function eq(a: A, b?: A): any
      {
        const _eq = (x: A, y: A) =>
        {
          return mod.guard(x) && mod.guard(y) && Num.eq(x, y);
        };

        if (Num.guard(a) && Num.guard(b))
        {
          return _eq(a, b);
        }

        return (b: A) => _eq(a, b);
      }

      return eq;
    };

    const eqInt8 = makeeq(Int8);
    const eqInt16 = makeeq(Int16);

    expect(eqInt8(255, 255)).toEqual(true);
    expect(eqInt8(256, 256)).toEqual(false);

    expect(eqInt16(255, 255)).toEqual(true);
    expect(eqInt16(256, 256)).toEqual(true);
  });

  test("MappableModule", () =>
  {
    const toHex = <A extends number>(
      mod: Functors.MappableModule<A, string>,
      a: A,
    ) => mod.map(Num.toHex as Functors.Mappable<A, string>, a);

    expect(toHex(Int8, 255)).toEqual("0xff");
    expect(toHex(Int8, 256)).toEqual(TypeError("Value not Int8"));

    expect(toHex(Int16, 256)).toEqual("0x100");
    expect(toHex(Int16, 2 ** 16)).toEqual(TypeError("Value not Int16"));
  });

  test("Guardables types (dry test)", () =>
  {
    expect(1).toEqual(1);

    type a = Functors.GuardReturnType<typeof Str>;
    type b = Functors.GuardArrayReturnType<[typeof Str, typeof Num]>;

    let a0: a = "hello";
    // @ts-ignore ignored, since it's an error
    let a1: a = 10;

    let b0: b = ['hello', 100];
    // @ts-ignore ignored, since it's an error
    let b1: b = ['hello', 'world'];
  });
});
