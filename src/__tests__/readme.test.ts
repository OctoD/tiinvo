import { describe, expect, test } from 'vitest';
import * as array from '../array';
import * as n from '../num';
import * as obj from '../obj';
import * as o from '../option';
import * as p from '../predicate';
import * as str from '../str';

describe(`readme examples`, () => {
  test(`predicate example`, () => {
    const inrange = p.and(n.gt(0), n.lt(10));
    const outofrange = p.invert(inrange);

    expect(inrange(2)).toBe(true);
    expect(inrange(0)).toBe(false);
    expect(outofrange(0)).toBe(true);
    expect(outofrange(2)).toBe(false);
  });

  test(`typeguards`, () => {
    type UserArray = User[];

    interface User {
      age: number;
      email: string;
      firstname: string;
      lastname: string;
      nickname?: string;
    }

    const isUser = obj.guardOf<User>({
      age: n.guard,
      email: str.guard,
      firstname: str.guard,
      lastname: str.guard,
      nickname: o.isOptionOf(str.guard),
    });

    const isUserArray = array.guardOf(isUser);

    const user000: User = {
      age: 22,
      email: 'hello.world@foo.bar',
      firstname: 'Hello',
      lastname: 'World',
    };

    const user001: User = {
      age: 54,
      email: 'john.doe@domain.com',
      firstname: 'John',
      lastname: 'Doe',
      nickname: 'BionicPizza',
    };

    isUser(user000);                 // true, user000 is User
    isUser(user001);                 // true, user001 is User
    isUser(1000000);                 // false
    isUserArray([user000, user001]); // true
    isUserArray(['pizza', user001]); // false
  });
});