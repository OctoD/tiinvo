import { num, predicate, str } from '..';
import { pipe } from '../pipe';
import * as tg from "../typeguards";

describe("typeguards", () => {
  it("primitives", () => {
    expect(tg.isarray([])).toBeTruthy();
    expect(!tg.isarray(123)).toBeTruthy();

    expect(tg.isobject(null)).toBeTruthy();
    expect(tg.isobject([])).toBeTruthy();
    expect(tg.isobject({})).toBeTruthy();

    expect(tg.isnumber(0)).toBeTruthy();
    expect(!tg.isnumber(!0)).toBeTruthy();

    expect(tg.isstring("hello")).toBeTruthy();
    expect(!tg.isstring(123)).toBeTruthy();

    expect(tg.isundefined(undefined)).toBeTruthy();
    expect(!tg.isundefined(123)).toBeTruthy();

    expect(tg.isnull(null)).toBeTruthy();
    expect(!tg.isnull(123)).toBeTruthy();

    expect(!tg.isbigint(123)).toBeTruthy();
    // @ts-ignore
    expect(tg.isbigint(123n)).toBeTruthy();

    expect(tg.nullable(tg.isstring)(null)).toBeTruthy();
    expect(tg.nullable(tg.isstring)("")).toBeTruthy();

    expect(tg.optional(tg.isstring)(undefined)).toBeTruthy();
    expect(tg.optional(tg.isstring)("")).toBeTruthy();

    expect(tg.isdefined(10)).toBeTruthy();
    expect(!tg.isdefined(undefined)).toBeTruthy();

    expect(tg.isnotnull(10)).toBeTruthy();
    expect(!tg.isnotnull(null)).toBeTruthy();

    expect(tg.iserror(new Error())).toBeTruthy();
    expect(!tg.iserror({})).toBeTruthy();
  });

  it("combine", () => {
    const combined = tg.combine(
      tg.isstring,
      (arg: unknown): arg is string => tg.isstring(arg) && arg.length > 5
    );
    expect(!combined(10)).toBeTruthy();
    expect(!combined("10")).toBeTruthy();
    expect(combined("hello world")).toBeTruthy();
  });

  it(`combine example`, () => {
    const haslengthof5 = pipe(
      str.length,
      num.greaterequalthan(5),
    ) as tg.Typeguard<string>;

    const isstringwithminlengthof5 = tg.combine<string>(
      tg.isstring,
      haslengthof5,
    );

    expect(isstringwithminlengthof5(`a`)).toBe(false);
    expect(isstringwithminlengthof5(`abcde`)).toBe(true);
  })

  it("anyof", () => {
    const stringornumber = tg.anyof(tg.isstring, tg.isnumber);

    expect(stringornumber(10)).toBeTruthy();
    expect(stringornumber("ì")).toBeTruthy();
    expect(stringornumber([])).toBeFalsy();
  });

  it(`anyof example`, () => {
    const Variadic1 = `hello`;
    const Variadic2 = 10000000;
    const Variadic3 = false;

    type Variadic1 = typeof Variadic1;
    type Variadic2 = typeof Variadic2;
    type Variadic3 = typeof Variadic3;

    type MyVariadicEnum = Variadic1 | Variadic2 | Variadic3;

    const isVariadic1 = predicate.withsamevalue(Variadic1) as tg.Typeguard<Variadic1>;
    const isVariadic2 = predicate.withsamevalue(Variadic2) as tg.Typeguard<Variadic2>;
    const isVariadic3 = predicate.withsamevalue(Variadic3) as tg.Typeguard<Variadic3>;
    const isMyVariadicEnum = tg.anyof<MyVariadicEnum>(
      isVariadic1,
      isVariadic2,
      isVariadic3,
    );

    expect(isMyVariadicEnum(123)).toBe(false);
    expect(isMyVariadicEnum(true)).toBe(false);
    expect(isMyVariadicEnum('aa')).toBe(false);
    expect(isMyVariadicEnum('hello')).toBe(true);
    expect(isMyVariadicEnum(false)).toBe(true);
    expect(isMyVariadicEnum(10000000)).toBe(true);
  })

  it("isarrayof", () => {
    const numarray = tg.isarrayof(tg.isnumber);
    const stringarray = tg.isarrayof(tg.isstring);
    const t1 = ["", "", ""];
    const t2 = [1, 1, 1];
    const t3 = [1, "1", 1];

    expect(numarray(t1)).toBeFalsy();
    expect(numarray(t2)).toBeTruthy();
    expect(numarray(t3)).toBeFalsy();

    expect(stringarray(t1)).toBeTruthy();
    expect(stringarray(t2)).toBeFalsy();
    expect(stringarray(t3)).toBeFalsy();
  });

  it("istuple", () => {
    const test = tg.istuple(
      tg.isstring,
      tg.isnumber,
      tg.isboolean,
      tg.isnumber
    );

    expect(test([])).toBeFalsy();
    expect(test(["", 1])).toBeFalsy();
    expect(test(["", 1, false])).toBeFalsy();
    expect(test(["", 1, false, ""])).toBeFalsy();
    expect(test(["", 1, !0, 0])).toBeTruthy();
    expect(test([1, "", 0, !0])).toBeFalsy();
  });

  it("implementing", () => {
    interface User {
      name: string;
      email: string;
    }

    const subscribeduser = tg.implementing<User>({
      name: tg.isstring,
      email: tg.isstring,
    });

    const userdata = tg.implementing({
      subscribeduser,
      age: tg.anyof(tg.isnull, tg.isnumber, tg.isundefined),
    });

    const test2 = tg.implementing({
      foo: tg.isnumber,
      bar: {
        baz: tg.isnumber,
      },
    });

    expect(subscribeduser({ name: "", email: "" })).toBeTruthy();
    expect(subscribeduser({ email: "" })).toBeFalsy();
    expect(subscribeduser({ email: "" })).toBeFalsy();

    expect(userdata({ subscribeduser: { name: "", email: "" } })).toBeTruthy();
    expect(
      userdata({ subscribeduser: { name: "", email: "" }, age: null })
    ).toBeTruthy();
    expect(
      userdata({ subscribeduser: { name: "", email: "" }, age: undefined })
    ).toBeTruthy();
    expect(
      userdata({ subscribeduser: { name: "", email: "" }, age: 10 })
    ).toBeTruthy();
    expect(userdata({ subscribeduser: "hello world", age: 10 })).toBeFalsy();
    expect(userdata({ age: 10 })).toBeFalsy();

    expect(test2({ foo: 10, bar: { baz: 100 } })).toBeTruthy();
    expect(test2({ foo: 10, bar: { baz: "100" } })).toBeFalsy();
    expect(test2({ foo: 10 })).toBeFalsy();
    expect(test2({ foo: "10", bar: { baz: 100 } })).toBeFalsy();
  });

  it("isexact", () => {
    const is10 = tg.isexact(10);

    expect(is10(20)).toBeFalsy();
    expect(is10(2)).toBeFalsy();
    expect(is10("10")).toBeFalsy();
    expect(is10(10)).toBeTruthy();
  });

  it("isFloat32Array", () => {
    expect(tg.isFloat32Array(new Float32Array())).toBeTruthy();
    expect(tg.isFloat32Array([])).toBeFalsy();
  })
  it("isFloat64Array", () => {
    expect(tg.isFloat64Array(new Float64Array())).toBeTruthy();
    expect(tg.isFloat64Array([])).toBeFalsy();
  })
  it("isInt8Array", () => {
    expect(tg.isInt8Array(new Int8Array())).toBeTruthy();
    expect(tg.isInt8Array([])).toBeFalsy();
  })
  it("isInt16Array", () => {
    expect(tg.isInt16Array(new Int16Array())).toBeTruthy();
    expect(tg.isInt16Array([])).toBeFalsy();
  })
  it("isInt32Array", () => {
    expect(tg.isInt32Array(new Int32Array())).toBeTruthy();
    expect(tg.isInt32Array([])).toBeFalsy();
  })
  it("isUint8Array", () => {
    expect(tg.isUint8Array(new Uint8Array())).toBeTruthy();
    expect(tg.isUint8Array([])).toBeFalsy();
  })
  it("isUint8ClampedArray", () => {
    expect(tg.isUint8ClampedArray(new Uint8ClampedArray())).toBeTruthy();
    expect(tg.isUint8ClampedArray([])).toBeFalsy();
  })
  it("isUint16Array", () => {
    expect(tg.isUint16Array(new Uint16Array())).toBeTruthy();
    expect(tg.isUint16Array([])).toBeFalsy();
  })
  it("isUint32Array", () => {
    expect(tg.isUint32Array(new Uint32Array())).toBeTruthy();
    expect(tg.isUint32Array([])).toBeFalsy();
  })
});
