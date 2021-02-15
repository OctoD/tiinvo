import { FnBase } from "./applicative";
import { PushSub, pushsub } from "./push-sub";
import { isarrayof, isfunction } from "./typeguards";

export interface Mediator {
  publish: <T extends any[]>(topic: string, ...args: T) => void;
  subscribe: <Fn extends FnBase>(topic: string, fn: Fn) => PushSub<Fn>;
  unsubscribe: (channel: string) => void;
}

const isfunctionarray = isarrayof(isfunction);

/**
 * A mediator pattern helps you to decouple code by mediating parts.
 *
 * @example
 *
 * ```ts
 * import { bind, mediator } from 'tiinvo';
 *
 * let counter = 0;
 * let evennumber = true;
 * let changeset = 0;
 *
 * const mm = mediator();
 * const incrementchangeset = () => changeset++;
 * const incrementcounter = (value: number) => counter += value;
 * const iseven = (value: number) => evennumber = value % 2 === 0;
 *
 * const applychangeset = bind(mm.publish, 'changeset');
 *
 * mm.subscribe('counter', incrementcounter);
 * mm.subscribe('counter', iseven);
 * mm.subscribe('counter', applychangeset);
 * mm.subscribe('changeset', incrementchangeset);
 *
 * mm.publish('counter', 20);
 * mm.publish('counter', 1);
 *
 * console.log(counter, evennumber, changeset) // logs 21, false, 2
 *
 * mm.publish('changeset');
 *
 * console.log(counter, evennumber, changeset) // logs 21, false, 3
 * ```
 */
export const mediator = (): Mediator => {
  const map = new Map<string, PushSub<any>[]>();

  const publish: Mediator["publish"] = (channel, ...args) => {
    const subscribedpushsubs = map.get(channel);

    if (isfunctionarray(subscribedpushsubs)) {
      subscribedpushsubs.forEach((ps) => ps.apply(null, args));
    }
  };

  const subscribe: Mediator["subscribe"] = (topic, fn) => {
    const subscribeepushsub = pushsub(fn);
    const topicsubs = map.get(topic);

    if (isfunctionarray(topicsubs)) {
      map.set(topic, topicsubs.concat(subscribeepushsub));
    } else {
      map.set(topic, [subscribeepushsub]);
    }

    return subscribeepushsub;
  };

  const unsubscribe: Mediator["unsubscribe"] = (channel) => {
    const subscribedpushsubs = map.get(channel);

    if (isfunctionarray(subscribedpushsubs)) {
      subscribedpushsubs.forEach((ps) => ps.unsubscribe());
    }
  };

  return {
    publish,
    subscribe,
    unsubscribe,
  };
};
