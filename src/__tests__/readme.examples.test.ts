import { array, num, obj, pipe, predicate, str } from '..';

describe(`readme examples`, () => {
  it(`array functions`, () => {
    const filterevendoubles = pipe(
      array.map(num.umultiply(2)),
      array.filter(num.iseven),
    );
    
    expect(expect.arrayContaining(filterevendoubles([ 1, 2, 3, 2.5, 3.75 ]))).toEqual([2, 4, 6]) // [2, 4, 6]
  })

  it(`primitives`, () => {
    interface User {
      firstname: string;
      lastname: string;
      birthdate: string;
    }
    
    const mapfirstname = obj.mapkey<User>('firstname');
    const maplastname = obj.mapkey<User>('lastname');
    const mapbirthdate = obj.mapkey<User>('birthdate');
    const maptodate = (arg: string) => new Date(arg);
    const mapdateyear = (date: Date) => date.getFullYear();

    const isadult = pipe(
      mapbirthdate,
      maptodate,
      mapdateyear,
      num.usubtract(new Date().getFullYear()),
      Math.abs,
      num.greaterequalthan(18),
    );
    
    const isvalidname = pipe(
      str.trim,
      str.length,
      num.greaterequalthan(2),
    );
    
    const isvalidfirstname = pipe(mapfirstname, isvalidname)
    const isvalidlastname = pipe(maplastname, isvalidname)
    const isvaliduser = predicate.and(isvalidfirstname, isvalidlastname, isadult);

    const testuser1: User = { firstname: 'John', lastname: 'Connor', birthdate: `1983-11-14` };
    const testuser2: User = { firstname: 'Lorem', lastname: 'Ipsum', birthdate: `2018-01-02` };
    const testuser3: User = { firstname: 'foo', lastname: '', birthdate: `2020-04-05` };

    expect(isadult(testuser1)).toBe(true)
    expect(isadult(testuser2)).toBe(false)
    expect(isadult(testuser3)).toBe(false)

    expect(isvaliduser(testuser1)).toBe(true)
    expect(isvaliduser(testuser2)).toBe(false)
    expect(isvaliduser(testuser3)).toBe(false)
  })
});
