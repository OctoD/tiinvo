import type * as f from './functors';
import type * as fn from './fn';

export const bind = <f extends fn.anyfn>(f: f, ... args: fn.argsOf<f>): fn.nullary<fn.returnTypeOf<f>> => () => f(... args as any);

export const call = <f extends fn.anyfn>(f: f, ... args: fn.argsOf<f>): fn.returnTypeOf<f> => f(...args as any);

export const cmp: f.comparableE<fn.anyfn, fn.anyfn> = (a, b) => {
  const namea = String(a.name).toLowerCase();
  const nameb = String(b.name).toLowerCase();
  const n = namea < nameb ? -1 : namea > nameb ? 1 : 0;
  return a.length === b.length ? n : a.length < b.length ? -1 : 1;
};

export const eq: f.equatableE<fn.anyfn> = (a, b) => cmp(a, b) === 0;

export const guard = (a => typeof a === 'function') as f.guard<fn.nary<unknown[]>>;

export const curry2 = <a extends fn.binary<any, any, any>>(f: a) => (a: fn.argsOf<a>[0]) => (b: fn.argsOf<a>[1]): fn.returnTypeOf<a> => f(a, b);

export const curry3 = <a extends fn.ternary<any, any, any, any>>(f: a) => (a: fn.argsOf<a>[0]) => (b: fn.argsOf<a>[1]) => (c: fn.argsOf<a>[2]): fn.returnTypeOf<a> => f(a, b, c);

export const curry4 = <a extends fn.quaternary<any, any, any, any, any>>(f: a) => (a: fn.argsOf<a>[0]) => (b: fn.argsOf<a>[1]) => (c: fn.argsOf<a>[2]) => (d: fn.argsOf<a>[3]): fn.returnTypeOf<a> => f(a, b, c, d);

export const curry5 = <a extends fn.quinary<any, any, any, any, any, any>>(f: a) => (a: fn.argsOf<a>[0]) => (b: fn.argsOf<a>[1]) => (c: fn.argsOf<a>[2]) => (d: fn.argsOf<a>[3]) => (e: fn.argsOf<a>[4]): fn.returnTypeOf<a> => f(a, b, c, d, e);

export const curry6 = <a extends fn.senary<any, any, any, any, any, any, any>>(f: a) => (a: fn.argsOf<a>[0]) => (b: fn.argsOf<a>[1]) => (c: fn.argsOf<a>[2]) => (d: fn.argsOf<a>[3]) => (e: fn.argsOf<a>[4]) => (g: fn.argsOf<a>[5]): fn.returnTypeOf<a> => f(a, b, c, d, e, g);

export const curry7 = <a extends fn.septenary<any, any, any, any, any, any, any, any>>(f: a) => (a: fn.argsOf<a>[0]) => (b: fn.argsOf<a>[1]) => (c: fn.argsOf<a>[2]) => (d: fn.argsOf<a>[3]) => (e: fn.argsOf<a>[4]) => (g: fn.argsOf<a>[5]) => (h: fn.argsOf<a>[6]): fn.returnTypeOf<a> => f(a, b, c, d, e, g, h);

export const curry8 = <a extends fn.octonary<any, any, any, any, any, any, any, any, any>>(f: a) => (a: fn.argsOf<a>[0]) => (b: fn.argsOf<a>[1]) => (c: fn.argsOf<a>[2]) => (d: fn.argsOf<a>[3]) => (e: fn.argsOf<a>[4]) => (g: fn.argsOf<a>[5]) => (h: fn.argsOf<a>[6]) => (i: fn.argsOf<a>[7]): fn.returnTypeOf<a> => f(a, b, c, d, e, g, h, i);

export const curry9 = <a extends fn.nonary<any, any, any, any, any, any, any, any, any, any>>(f: a) => (a: fn.argsOf<a>[0]) => (b: fn.argsOf<a>[1]) => (c: fn.argsOf<a>[2]) => (d: fn.argsOf<a>[3]) => (e: fn.argsOf<a>[4]) => (g: fn.argsOf<a>[5]) => (h: fn.argsOf<a>[6]) => (i: fn.argsOf<a>[7]) => (j: fn.argsOf<a>[8]): fn.returnTypeOf<a> => f(a, b, c, d, e, g, h, i, j);

export const curry10 = <a extends fn.decenary<any, any, any, any, any, any, any, any, any, any, any>>(f: a) => (a: fn.argsOf<a>[0]) => (b: fn.argsOf<a>[1]) => (c: fn.argsOf<a>[2]) => (d: fn.argsOf<a>[3]) => (e: fn.argsOf<a>[4]) => (g: fn.argsOf<a>[5]) => (h: fn.argsOf<a>[6]) => (i: fn.argsOf<a>[7]) => (j: fn.argsOf<a>[8]) => (k: fn.argsOf<a>[9]): fn.returnTypeOf<a> => f(a, b, c, d, e, g, h, i, j, k);
