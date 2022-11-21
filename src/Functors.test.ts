import { describe, expect, test } from 'vitest';
import * as Obj from './Obj.js';
import * as Str from './Str.js';
import * as Num from './Num.js';
import * as Functors from './Functors.js';

module Animal {
  export interface Animal {
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

module User {
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

describe("Functors examples", () => {
  test("Buildable", () => {
    expect(User.make()).toEqual({ name: '', surname: '' });
    expect(User.make({ name: 'John' })).toEqual({ name: 'John', surname: '' });
    expect(User.make({ name: 'John', surname: 'Doe' })).toEqual({ name: 'John', surname: 'Doe' });
  });

  test("BuildableModule", () => {
    const greet = (x: Functors.BuildableMobule<User.t>, y: Partial<ReturnType<Functors.Buildable<User.t>>>) => {
      const z = x.make(y);
      return `hello ${z.name} ${z.surname}`;
    };

    expect(greet(User, { name: 'John', surname: 'Doe' })).toEqual("hello John Doe");
    expect(greet(User, "" as any)).toEqual("hello  ");
  });

  test("GuardableModule", () => {
    function typechecker(mod: Functors.GuardableModule<any>, typename: string) {
      return (x: unknown) => (mod.guard(x) ? "is of type " : "not of type ") + typename;
    }

    const checkAnimal = typechecker(Animal, "Animal");
    const checkUser = typechecker(User, "User");

    expect(checkAnimal(10)).toEqual("not of type Animal");
    expect(checkAnimal(Animal.make())).toEqual("is of type Animal");
    expect(checkUser(10)).toEqual("not of type User");
    expect(checkUser(User.make())).toEqual("is of type User");
  });
});
