import { createderivefromfunction } from "../derivables";
import { taggedFactory } from "../tagged-type";
import * as option from "../option";
import { pipe } from "../pipe";
import { array } from '..';

describe(`derivables`, () => {
  it(`tests first example`, () => {
    const mytagged = taggedFactory("foo");
    const mytaggedfromfunction = createderivefromfunction(mytagged);

    const doublefn = (arg: number) => arg * 2;
    const mytaggeddouble = mytaggedfromfunction(doublefn);

    const expected1 = 20;
    const expected2 = { __tag: "foo", value: 20 };

    expect(doublefn(10)).toEqual(expected1);
    expect(mytaggeddouble(10)).toEqual(expected2);
  });

  it(`tests second example`, () => {
    interface User {
      id: number;
      data?: UserData;
    }

    interface UserData {
      age: number;
      name: string;
      surname: string;
    }

    const mapuserdata = (user: User) => user.data!;
    const mapuserdataname = (userdata: UserData) => userdata.name;

    const getname = pipe(
      option.fromfunction(mapuserdata),
      option.map(mapuserdataname),
      option.unwrapOr("no name")
    );

    getname({ id: 100 }); // 'no name'
    getname({ id: 50, data: { age: 433, name: "Thomas", surname: "Hobbes" } }); // 'Thomas'
  });

  test('readme example', () => {
    interface User {
      data: UserData | undefined;
    }

    interface UserData {
      firstname: string;
      lastname: string;
    }

    const mapuserdata = (user: User) => user.data;
    const mapfirstname = (userdata: UserData) => userdata.firstname;
    const maplastname = (userdata: UserData) => userdata.lastname;
    const mapfullname = pipe(
      array.fromfunctions(mapfirstname, maplastname),
      array.join(' ')
    );

    // here we go
    const mapfullnamesafe = pipe(
      option.fromfunction(mapuserdata),
      option.map(mapfullname),
      option.unwrapOr('unknown')
    );

    const res1 = mapfullnamesafe({
      data: undefined
    })                      // 'unknown'
    const res2 = mapfullnamesafe({
      data: {
        firstname: `hello`,
        lastname: `world`
      }
    })

    expect(res1).toBe(`unknown`);
    expect(res2).toBe(`hello world`);
  })
});
