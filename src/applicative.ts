/**
 * Shorthand for undefined
 */
export type _ = undefined;

/**
 * Extracts the arguments types from a function
 *
 * @example
 * ```ts
 * const foo = (a: string, b: number) => a.repeat(b);
 *
 * type ArgsOfFoo = ArgsOf<typeof foo> // [string, number]
 * ```
 */
export type ArgsOf<Fn extends FnBase> = Fn extends (...args: infer U) => any
  ? U
  : any[];

/**
 * A generic function type
 */
export type FnBase = (...args: any[]) => any;

/**
 * A function which takes one argument
 * @deprecated use FnUnary
 */
export type Fn1<FnIn, FnOut> = (arg: FnIn) => FnOut;

/**
 * Primitives
 */
export type Primitives = string | number | object | symbol;

/**
 * Maps a primitive type method
 */
export type PrimitiveMethodMapper<T extends Primitives> = <key extends keyof T>(key: key) => (... args: T[key] extends (... args: infer Args) => any ? Args : never) => (arg: T) => T[key] extends (... args: any) => infer U ? U : never;

//#region arity types

export type FnNullary<T> = () => T;
export type FnUnary<T, U> = (arg: T) => U;
export type FnBinary<T, U, W> = (arg1: T, arg2: U) => W;
export type FnTernary<T, U, W, Z> = (arg1: T, arg2: U, arg3: W) => Z;
export type FnNary<T extends any[], U> = (... args: T) => U;

//#endregion

/**
 * Binds a function to a null `this`, then returns it
 *
 * @example
 * ```ts
 * const myfn = (text: string, repeat: number) => text.repeat(repeat);
 * const bound = bind(myfn, 'abc', 3);
 *
 * bound() // 'abcabcabc';
 * ```
 *
 * @param fn
 * @param args
 */
export const bind = <Fn extends FnBase>(
  fn: Fn,
  ...args: ArgsOf<Fn>
): (() => ReturnType<Fn>) => () => fn(...args) as ReturnType<Fn>;

/**
 * Checks if a given condition is true, otherwise throws an error with the given error message
 *
 * @example
 * ```ts
 * check(true, 'does not throw')(10)        // 10
 * check(true, 'does not throw')('hello')   // 'hello'
 * check(false, 'this throws')('hello')     // Uncaught Error: this throws
 * ```
 *
 * @param {boolean} condition
 * @param {string} errormessage
 * @returns {<T>(arg: T): T | never}
 */
export const check = (condition: boolean, errormessage: string) => <T>(
  arg: T
): T | never => (condition ? arg : panic(errormessage));

/**
 * Creates a function which returns a fallback function
 *
 * @example
 * ```ts
 * either.unwrapLeftOrElse(fallback(10))(right(20)) // 10
 * ```
 *
 * @param arg
 */
export const fallback = <T>(arg: T) => () => arg;

/**
 * A function which passes the given argument.
 * 
 * @param arg 
 * @returns 
 */
export const pass = <T>(arg: T): T => arg;

/**
 * Throws an error with the given message
 *
 * @template E
 * @param {string} message
 * @param {E} [ctor=Error as E]
 * @returns {never}
 */
export const panic = <E extends ErrorConstructor>(
  message: string,
  ctor: E = Error as E
): never => {
  throw new ctor(message);
};

/**
 * Converts a sync function to an async one
 *
 * @template Fn
 * @param {Fn} fn
 * @returns {(... args: ArgsOf<Fn>) => Promise<ReturnType<Fn>>}
 */
export const toasync = <Fn extends FnBase>(
  fn: Fn
): ((...args: ArgsOf<Fn>) => Promise<ReturnType<Fn>>) => async (
  ...args: ArgsOf<Fn>
) => fn(...args);
