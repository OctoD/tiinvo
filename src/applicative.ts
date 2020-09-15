/**
 * Shorthand for undefined
 */
export type _ = undefined;

/**
 * Extracts the arguments types from a function
 *
 * @example
 * const foo = (a: string, b: number) => a.repeat(b);
 *
 * type ArgsOfFoo = ArgsOf<typeof foo> // [string, number]
 */
export type ArgsOf<Fn extends FnBase> = Fn extends (...args: infer U) => any
  ? U
  : any[];

/**
 * A generic function type
 */
export type FnBase = (...args: any[]) => any;

/**
 * Binds a function to a null `this`, then returns it
 *
 * @example
 * const myfn = (text: string, repeat: number) => text.repeat(repeat);
 * const bound = bind(myfn, 'abc', 3);
 *
 * bound() // 'abcabcabc';
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
 * check(true, 'does not throw')(10)        // 10
 * check(true, 'does not throw')('hello')   // 'hello'
 * check(false, 'this throws')('hello')     // Uncaught Error: this throws
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
 * either.unwrapLeftOrElse(fallback(10))(right(20)) // 10
 *
 * @param arg
 */
export const fallback = <T>(arg: T) => () => arg;

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
