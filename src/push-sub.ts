import { ArgsOf, check, FnBase, panic } from "./applicative";
import { isfunction } from "./typeguards";

export interface PushSub<Fn extends FnBase> {
  (...args: ArgsOf<Fn>): void;
  unsubscribe: UnsubscribeFn;
}

export type Notify<Fn extends FnBase> = (...args: ArgsOf<Fn>) => void;
export type UnsubscribeFn = () => void;

/**
 * A subscription/notify type. You can subscribe any function and notify it later.
 *
 * @example
 * ```ts
 * import { pushsub } from 'tiinvo';
 *
 * let counter = 0;
 *
 * const increment = (value: number) => counter += value;
 * const subscribed = pushsub(increment);
 *
 * subscribed(20)
 *
 * console.log(counter) // 20
 *
 * subscribed(1)
 *
 * console.log(counter) // 21
 *
 * subscribed.unsubscribe()
 *
 * subscribed(1) // throws error
 * ```
 *
 * @param fn
 */
export const pushsub = <Fn extends FnBase>(fn: Fn): PushSub<Fn> => {
  let subscribed = true;

  const notify = ((...args) => {
    check(subscribed, "Cannot notify an unsubscribed function")(subscribed);
    check(
      isfunction(fn),
      "pushsub subscribed callback must be a function"
    )(fn).apply(null, args);
  }) as PushSub<Fn>;

  notify.unsubscribe = () => (subscribed = false);

  return notify;
};
