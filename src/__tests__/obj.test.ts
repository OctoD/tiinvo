import * as obj from '../obj';

const testobject = { foo: 100, bar: 200, baz: 300 };

describe(`obj`, () => {
  test(`entries`, () => {
    expect(expect.arrayContaining(obj.entries(testobject))).toEqual(Object.entries(testobject));
  });

  test(`flatten`, () => {
    const myobj = { a: { b: { c: 100 } }, d: 20 };
    const testa = obj.flattern(myobj);
    const expectedkeys = obj.keys(testa);

    expect(expect.arrayContaining(expectedkeys)).toEqual(['a.b.c', 'd']);
    expect(testa['a.b.c']).toBe(100);
    expect(testa.d).toBe(20);
  })

  test(`is`, () => {
    expect(obj.is(testobject)(testobject)).toBeTruthy();
    expect(obj.is(1)(1)).toBeTruthy();
    expect(obj.is(1)(2)).toBeFalsy();
  });

  test(`isExtensible`, () => {
    const test = { foo: 100 }

    expect(obj.isExtensible(test)).toBe(true);

    Object.preventExtensions(test);

    expect(obj.isExtensible(test)).toBe(false);
  });

  test(`isFrozen`, () => {
    const test = { foo: 100 }

    expect(obj.isFrozen(test)).toBe(false);

    Object.freeze(test);

    expect(obj.isFrozen(test)).toBe(true);
  });

  test(`isSealed`, () => {
    const test = { foo: 100 }

    expect(obj.isSealed(test)).toBe(false);

    Object.seal(test);

    expect(obj.isSealed(test)).toBe(true);
  });

  test(`keys`, () => {
    expect(expect.arrayContaining(obj.keys({ foo: 1, bar: 2, baz: 3 }))).toEqual(["foo", "bar", "baz"]);
  });

  test(`mapkey`, () => {
    const fn = obj.mapkey<typeof testobject>('baz');
    
    expect(fn(testobject)).toBe(testobject.baz);
  })

  test(`omit`, () => {
    const myobject = { foo: 10, bar: 20, baz: 'qwerty' };
    const omitfn = obj.omit(`foo`, `bar`);

    expect(omitfn(myobject)).toEqual({ baz: `qwerty` });
  });

  test(`pick`, () => {
    expect(obj.pick(`foo`, `baz`)(testobject)).toEqual({ foo: 100, baz: 300 })
  });

  test(`values`, () => {
    expect(expect.arrayContaining(obj.values(testobject))).toEqual([100, 200, 300])
  });
});
