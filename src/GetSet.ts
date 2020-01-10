/**
 * Defines a get/set object
 *
 * ```ts
 * import { GetSet } from 'tiinvo';
 *
 * const mynumber = GetSet(10);
 *
 * mynumber.get() // 10
 * mynumber.set(11)
 * mynumber.get() // 11
 * ```
 *
 * @export
 * @interface GetSet
 * @template T
 */
export interface GetSet<T> {
  /**
   * Gets current value
   *
   * ```ts
   * const value = GetSet(10);
   * value.get() // 10
   * ```
   *
   * @returns {T}
   * @memberof GetSet
   */
  get(): T;
  /**
   *
   *
   * @param {T} value
   * @memberof GetSet
   */
  set(value: T): void;
}

/**
 * Returns a GetSet
 *
 * @export
 * @template T
 * @param {T} initialValue
 * @returns {GetSet<T>}
 */
export function GetSet<T>(initialValue: T): GetSet<T> {
  let value = initialValue;

  return {
    get: () => value,
    set: newvalue => (value = newvalue)
  };
}
