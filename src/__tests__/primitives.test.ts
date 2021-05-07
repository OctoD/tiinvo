import { array, obj, pipe, str } from '..';
import { FnUnary } from '../applicative';

describe(`tests primitives.md readme`, () => {
  test(`the first example`, () => {
    interface User {
      bday: string;
      firstname: string;
      lastname: string;
    }

    interface UserMap {
      [index: string]: User;
    }

    const mapbday = (user: User) => user.bday;
    const mapfirstname = (user: User) => user.firstname;
    const maplastname = (user: User) => user.lastname;
    const mapdisplayname = pipe(
      array.fromfunctions(mapfirstname, maplastname),
      array.join(' ')
    );

    const sortbybday = (user1: User, user2: User) => 
      str.sortasc(mapbday(user1), mapbday(user2))

    const getdisplaynames = pipe(
      obj.entries,
      array.unsafecast<[string, User]>(),
      array.map(([key, user]: [string, User]) => user),
      array.sort(sortbybday),
      array.map(mapdisplayname),
    ) as FnUnary<UserMap, string[]>

    const t = getdisplaynames({
      '100': { bday: `1980-02-01`, firstname: `hello`, lastname: `world` },
      '200': { bday: `1992-08-31`, firstname: `foobar`, lastname: `baz` },
      '300': { bday: `1979-05-21`, firstname: `john`, lastname: `doe` },
    });

    expect(expect.arrayContaining(t)).toEqual([
      `john doe`,
      `hello world`,
      `foobar baz`
    ])
  })
})