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

  it("anyof", () => {
    const stringornumber = tg.anyof(tg.isstring, tg.isnumber);

    expect(stringornumber(10)).toBeTruthy();
    expect(stringornumber("ì")).toBeTruthy();
    expect(stringornumber([])).toBeFalsy();
  });

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

  it("createtupleof", () => {
    const test = tg.createTupleOf(
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

  it("createstructof", () => {
    interface User {
      name: string;
      email: string;
    }

    const subscribeduser = tg.createStructOf<User>({
      name: tg.isstring,
      email: tg.isstring,
    });

    const userdata = tg.createStructOf({
      subscribeduser,
      age: tg.anyof(tg.isnull, tg.isnumber, tg.isundefined),
    });

    const test2 = tg.createStructOf({
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
});
