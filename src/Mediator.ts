import { FunctionQueue } from "./Stack";
import { FnBase } from "./common";
import { Result, Err, Ok } from "./Result";

interface MediatorChannels {
  [index: string]: FunctionQueue<FnBase>;
}

export class MediatorLike {
  protected _channels: MediatorChannels = {};

  /**
   * Publishes a list of arguments `args` to all subscribed functions in a channel returning a `Result<boolean, Error>`
   *
   * If the channel has not been created with the `subscribe` method, it will return an `Err`.
   *
   * ```ts
   * Mediator().subscribe(a => console.log(a)).publish(10) // logs 10
   * ```
   *
   * @param {string} channel
   * @param {...any[]} args
   * @returns {Result<boolean, Error>}
   * @memberof MediatorLike
   */
  public publish(channel: string, ...args: any[]): Result<boolean, Error> {
    if (!this._channels[channel]) {
      return Err(
        new ReferenceError(
          `Channel ${channel} does not exists in this mediator`
        )
      );
    }

    return this._channels[channel]
      .exec(args)
      .mapOrElse(err => Err(err), () => Ok(true));
  }

  /**
   * Publishes a list of arguments `args` to all subscribed functions in a channel returnin a Promise<Result<boolean, Error>>.
   *
   * The publishing is done asynchronously and every subscribed function is notified in the same order
   * it has been subscribed
   *
   * If the channel has not been created with the `subscribe` method, it will return an `Promise<Err>`.
   *
   * ```ts
   * Mediator().subscribe(a => console.log(a)).publishAsync(10) // logs 10
   * ```
   *
   * @param {string} channel
   * @param {...any[]} args
   * @returns {Promise<Result<boolean, Error>>}
   * @memberof MediatorLike
   */
  public async publishAsync(
    channel: string,
    ...args: any[]
  ): Promise<Result<boolean, Error>> {
    if (!this._channels[channel]) {
      return Err(
        new ReferenceError(
          `Channel ${channel} does not exists in this mediator`
        )
      );
    }

    const result = await this._channels[channel].execAsync(args);

    return result.mapOrElse(err => Err(err), () => Ok(true));
  }

  /**
   * Subscribes a function `fn` to a `channel` returning the `Mediator` itself.
   *
   * ```ts
   * Mediator().subscribe('foo', a => console.log(a));
   * ```
   *
   * @param {string} channel
   * @param {FnBase} fn
   * @returns {this}
   * @memberof MediatorLike
   */
  public subscribe(channel: string, fn: FnBase): this {
    this._channels[channel] = this._channels[channel] || FunctionQueue();

    this._channels[channel].enqueue(fn);

    return this;
  }
}

export type Mediator = MediatorLike;

/**
 * Type `Mediator` is the implementation of the mediator pattern.
 *
 * In software engineering, the mediator pattern defines an object that encapsulates
 * how a set of objects interact. This pattern is considered to be a behavioral pattern
 * due to the way it can alter the program's running behavior.
 *
 * It uses a `FunctionQueue` for storing the subscribed callbacks, so it can publish in synch or async.
 *
 * @export
 * @returns {Mediator}
 */
export function Mediator(): Mediator {
  return new MediatorLike();
}
