export type argsOf<a extends (... args: any) => any> = a extends (... args: infer A) => any ? A : never;

export type argsOfMany<a extends ((... args: any) => any)[]> = [
  ... {
    [k in keyof a]: a[k] extends ((i: infer b) => any) ? b : never
  }
];

export type firstArgOf<a extends (... args: any) => any> = a extends (first: infer A, ... args: any[]) => any ? A : void;

export type lastArgOf<a extends (... args: any) => any> = a extends (... args: infer A) => any ? A extends [... any, infer b] ? b : void : void;

export type returnTypeOf<a extends (... args: any) => any> = a extends (... args: any) => infer r ? r : void;

export type returnTypeOfMany<a extends ((... args: any) => any)[]> = [
  ... {
    [k in keyof a]: a[k] extends ((i: any) => infer r) ? r : never
  }
];

export type nullary<a> = () => a;

export type unary<a, b> = (a: a) => b;

export type binary<a, b, c> = (a: a, b: b) => c;

export type ternary<a, b, c, d> = (a: a, b: b, c: c) => d;

export type quaternary<a, b, c, d, e> = (a: a, b: b, c: c, d: d) => e;

export type quinary<a, b, c, d, e, f> = (a: a, b: b, c: c, d: d, e: e) => f;

export type senary<a, b, c, d, e, f, g> = (a: a, b: b, c: c, d: d, e: e, f: f) => g;

export type septenary<a, b, c, d, e, f, g, h> = (a: a, b: b, c: c, d: d, e: e, f: f, g: g) => h;

export type octonary<a, b, c, d, e, f, g, h, i> = (a: a, b: b, c: c, d: d, e: e, f: f, g: g, h: h) => i;

export type nonary<a, b, c, d, e, f, g, h, i, j> = (a: a, b: b, c: c, d: d, e: e, f: f, g: g, h: h, i: i) => j;

export type decenary<a, b, c, d, e, f, g, h, i, j, k> = (a: a, b: b, c: c, d: d, e: e, f: f, g: g, h: h, i: i, j: j) => k;

export type nary<a extends any[]> = (... args: a extends [... infer b, any] ? b : [void]) => a extends [... any, infer c] ? c : void;
