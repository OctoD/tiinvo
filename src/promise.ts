import type * as fn from './fn';
import type * as o from './option';

export type promiseOf<a> = a extends Promise<infer b> ? b : never;

export type promisesOf<a extends any[]> = {
  [key in keyof a]: promiseOf<a[key]>
}

/**
 * Creates a Promise that is resolved with an array of results when all of the provided Promises resolve, or rejected when any Promise is rejected.
 * 
 * ```ts
 * import { Promise } from 'tiinvo';
 * 
 * const p1 = Promise.resolve('hello');
 * const p2 = Promise.resolve('world');
 * 
 * Promise.all([p1, p2]).then(console.log); // => [ 'hello', 'world' ]
 * ```
 * @param p 
 * @returns 
 * 
 * @since 3.0.10
 */
export const all = Promise.all.bind(Promise);
/**
 * Maps a promise to a new promise.
 * If the promise catches, the new promise returns `none`, otherwise returns `some<b>`.
 * 
 * ```ts
 * import { Promise } from 'tiinvo';
 * 
 * const p1 = Promise.resolve('hello');
 * const p2 = Promise.reject('whoops');
 * const map = Promise.map((a: string) => a.length);
 * 
 * map(p1).then(console.log); // => 5
 * map(p2).then(console.log); // => null
 * ```
 * @param f 
 * @returns 
 * 
 * @since 3.0.10
 */
export const map = <a, b>(f: fn.unary<a, b>) => (p: Promise<a>): Promise<o.option<b>> => p.then(f).catch(_ => null as any);
/**
 * Maps a promise<a> to a new promise<b> if it does not catch, otherwise maps to a promise<or>.
 * 
 * ```ts
 * import { Promise } from 'tiinvo';
 * 
 * const p1 = Promise.resolve('hello');
 * const p2 = Promise.reject('whoops');
 * const fn = (a: string) => a.length;
 * const map = Promise.mapOr(0, fn);
 * 
 * map(p1).then(console.log); // => 5
 * map(p2).then(console.log); // => 0
 * 
 * ```
 * @param or 
 * @param f 
 * @returns 
 * 
 * @since 3.0.10
 */
export const mapOr = <a, b>(or: b, f: fn.unary<a, b>) => (p: Promise<a>): Promise<b> => p.then(f).catch(() => or);
/**
 * Maps a promise<a> to a new promise<b> if it does not catch, otherwise maps to a promise<or>.
 * @param or 
 * @param f 
 * @returns 
 */
export const mapOrElse = <a, b>(or: fn.nullary<b>, f: fn.unary<a, b>) => (p: Promise<a>): Promise<b> => p.then(f).catch(or);
/**
 * Creates a new resolved promise.
 * 
 * @since 3.0.10
 */
export const resolve = Promise.resolve.bind(Promise);
/**
 * Creates a new rejected promise for the provided reason.
 * 
 * @since 3.0.10
 */
export const reject = Promise.reject.bind(Promise);
