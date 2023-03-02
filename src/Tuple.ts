import type { Guardable, GuardableModule, GuardArrayReturnType, Mappable, MappableModule, MappableReturnTypes } from './Functors.js';
import type * as Option from './Option.js';

/**
 * Describes a tuple type.
 * 
 * @example
 * ```ts
 * import type { T } from 'tiinvo/Tuple'
 * 
 * type SomeTuple = T<[0 | 1, string, 'foo' | 'bar']>
 * 
 * let a: SomeTuple = [0, 'hello', 'foo']
 * let b: SomeTuple = [1, 'hello', 'bar']
 * let c: SomeTuple = [2, 'hello', 'baz'] // wrong type
 * ```
 * 
 * @template A the tuple data content type
 * @since 4.0.0
 */
export type T<A extends any[]> = A;

//#region guards

/**
 * Guards if `x` is a tuple `T` which satisfies guards `A`
 *
 * @example
 *
 * ```ts
 * import { Tuple, Str, Num } from 'tiinvo'
 * 
 * Tuple.guardOf([Str, Num], ["hello"])               // false
 * Tuple.guardOf([Str, Num], ["hello", 100])          // true
 * Tuple.guardOf([Str, Num], ["hello", "world"])      // false
 * Tuple.guardOf([Str, Num], ["hello", 100, 100])     // false
 * ```
 *
 * @template A 
 * @group guardables
 * @since 4.0.0
 */
export function guardOf<A extends Array<Guardable<any> | GuardableModule<any>>>(a: A, x: unknown): x is T<GuardArrayReturnType<A>>;
/**
 * Returns a Guardable<a> from a tuple of guards `A`
 *
 * @example
 *
 * ```ts
 * import { Tuple, Str, Num } from 'tiinvo'
 * 
 * const guard = Tuple.guardOf([Str, Num])
 * 
 * guard(["hello"])               // false
 * guard(["hello", 100])          // true
 * guard(["hello", "world"])      // false
 * guard(["hello", 100, 100])     // false
 * ```
 *
 * @template A 
 * @group guardables
 * @since 4.0.0
 */
export function guardOf<A extends Array<Guardable<any> | GuardableModule<any>>>(a: A): (x: unknown) => x is T<GuardArrayReturnType<A>>;
export function guardOf<a extends Array<Guardable<any> | GuardableModule<any>>>(a: a, x?: unknown): any {
  const _g = (x: a, y: unknown): y is T<GuardArrayReturnType<a>> => {
    if (Array.isArray(y)) {
      if (y.length !== x.length) {
        return false;
      }

      for (let i = 0; i < x.length; i++) {
        const z = x[i];

        if (typeof z === 'function') {
          if (!z(y[i])) {
            return false;
          }
        } else if (typeof z === 'object' && 'guard' in z && typeof z.guard === 'function') {
          if (!z.guard(y[i])) {
            return false;
          }
        } else {
          return false;
        }
      }

      return true;
    }

    return false;
  };

  if (arguments.length === 2) {
    return _g(a, x);
  }

  return (z: unknown): z is GuardArrayReturnType<a> => _g(a, z);
}

//#endregion

//#region accessors

/**
 * Gets a value at a specified index, returning it as an `Option.T<A[index]>`
 *
 * @example
 *
 * ```ts
 * import { Tuple } from 'tiinvo'
 * 
 * Tuple.get([10, 'hello'], 0)  // 10
 * Tuple.get([10, 'hello'], 1)  // "hello"
 * Tuple.get([10, 'hello'], 2)  // null
 * ```
 *
 * @group accessors
 * @since 4.0.0
 */
export function get<A extends any[]>(tuple: T<A>, index: number): Option.T<T<A>[typeof index]>;
/**
 * sets a specified index, returning a unary function which accepts a Tuple.T<any> 
 * and returns the value at that index as an `Option.T<A[index]>`
 *
 * @example
 *
 * ```ts
 * import { Tuple } from 'tiinvo'
 * 
 * const t = [10, "hello"]
 * const get0 = Tuple.get(0);
 * const get1 = Tuple.get(1);
 * const get2 = Tuple.get(2);
 * 
 * get0(t)  // 10
 * get1(t)  // "hello"
 * get2(t)  // null
 * ```
 *
 * @group accessors
 * @since 4.0.0
 */
export function get(tuple: number): <A extends any[]>(x: T<A>) => Option.T<T<A>[typeof tuple]>;
export function get<A extends any[]>(tuple: T<A> | number, index?: number): any {
  if (arguments.length === 2 && typeof tuple !== 'number' && typeof index === 'number') {
    return tuple[index] ?? null;
  }

  return <A extends any[]>(t: T<A>) => typeof tuple === 'number' ? t[tuple] ?? null : null;
}

/**
 * Returns a Tuple's length
 *
 * @example
 *
 * ```ts
 * import { Tuple } from 'tiinvo'
 * 
 * Tuple.length([10, 20, 30]) // 3
 * ```
 *
 * @group accessors
 * @since 4.0.0
 */
export const length = (a: T<any>): number => a.length;

//#endregion

//#region mappables

/**
 * Uses a tuple of mappables to map a tuple `T<A>` to `T<B>`
 *
 * @example
 *
 * ```ts
 * import { Tuple } from 'tiinvo'
 * 
 * const m0 = (x: string) => x.length;
 * const m1 = (x: Date) => x.getFullYear();
 * 
 * Tuple.map([m0, m1], ["hello", new Date(2022, 1, 2, 3, 4)])   // [5, 2022]
 * ```
 *
 * @template M the tuple of Mappables
 * @template B the tuple of values
 * @group Mappables
 * @returns the mapped tuple
 * @since 4.0.0
 */
export function map<M extends Array<Mappable<any, any> | MappableModule<any, any>>, B extends any[]>(m: M, t: T<B>): T<MappableReturnTypes<M>>;
/**
 * Uses a tuple of mappables to return a Mappable which maps a tuple `T<A>` to `T<B>`
 *
 * @example
 *
 * ```ts
 * import { Tuple, Str, Num } from 'tiinvo'
 * 
 * const map = Tuple.map([Str.length, Str.charAt(0), Num.gt(0), Num.toHex])
 * 
 * map(["hello", "hello", 10, 10])    // [5, "h", true, "0xa"]
 * ```
 *
 * @template M the tuple of Mappables
 * @group Mappables
 * @returns the Mappable function
 * @since 4.0.0
 */
export function map<M extends Array<Mappable<any, any> | MappableModule<any, any>>>(m: M): <B extends any[]>(x: T<B>) => T<MappableReturnTypes<M>>;
export function map<M extends Array<Mappable<any, any> | MappableModule<any, any>>, B extends any[]>(m: M, t?: T<B>): any {
  const _map = (m: M, t: T<any[]>): T<MappableReturnTypes<M>> => {
    return m.map((x, i) => {
      if (typeof x === 'function') {
        return x(t[i]);
      } else if (typeof x === 'object' && !!x && typeof x === 'object' && 'map' in x && typeof x.map === 'function') {
        return x.map(t[i]);
      }
    }) as MappableReturnTypes<M>;
  };

  if (arguments.length === 2 && Array.isArray(t)) {
    return _map(m, t);
  }

  return <A extends any[]>(y: T<A>) => _map(m, y);
}

//#endregion
