import { Option, None, Some } from "./Option";
import { ensureFunction, ArgsOf } from "./common";
import { Result, Ok, Err } from "./Result";
import { TryCatch, TryCatchAsync } from "./TryCatch";

export abstract class Stackable<T> {
  public constructor(protected elements: T[]) {}

  /**
   * Returns if is empty
   *
   * ```ts
   * Queue().isEmpty() // true
   * Queue([1,2]).isEmpty() // false
   * Stack().isEmpty() // true
   * Stack([1,2]).isEmpty() // false
   * ```
   *
   * @returns {boolean}
   * @memberof Stackable
   */
  public isEmpty(): boolean {
    return this.size() === 0;
  }

  /**
   *
   *
   * @abstract
   * @template Fn
   * @template U
   * @param {Fn} fn
   * @returns {Stackable<U>}
   * @memberof Stackable
   */
  public abstract map<Fn extends (arg: T) => any>(
    fn: Fn
  ): Stackable<ReturnType<Fn>>;

  /**
   * Returns current size
   *
   * ```ts
   * Queue().size() // 0
   * Stack().size() // 0
   * Queue([1,2]).size() // 2
   * Stack([1,2,3]).size() // 3
   * ```
   *
   * @returns {number}
   * @memberof Stackable
   */
  public size(): number {
    return this.elements.length;
  }

  /**
   * Returns nearest element to be removed from the pile
   *
   * ```ts
   * Queue([1,2,3]).top() // 1
   * Stack([1,2,3]).top() // 3
   * ```
   *
   * @abstract
   * @returns {Option<T>}
   * @memberof Stackable
   */
  public abstract top(): Option<T>;

  /**
   * Returns added elements
   *
   * @returns {T[]}
   * @memberof Stackable
   */
  public value(): T[] {
    return this.elements.slice();
  }
}

export class QueueLike<T> extends Stackable<T> {
  /**
   * Dequeues the oldest enqueued element, returning an `Option<T>` representing its value. If the queue is empty, a `None` will be returned
   *
   * ```ts
   * const q = Queue([1,2,3]);
   *
   * q.dequeue() // Option(1);
   * q.dequeue() // Option(2);
   * q.dequeue() // Option(3);
   * q.dequeue() // None();
   * ```
   *
   * @returns {Option<T>}
   * @memberof QueueLike
   */
  public dequeue(): Option<T> {
    if (this.isEmpty()) {
      return None();
    }

    return Some(this.elements.shift()!);
  }

  /**
   * Enqueues an element `T`, returning current `Queuelike<T>`
   *
   * ```ts
   * Queue<number>()
   *  .enqueue(1)
   *  .enqueue(2)
   *  .enqueue(3)
   * ```
   *
   * @param {T} arg
   * @returns {QueueLike<T>}
   * @memberof QueueLike
   */
  public enqueue(arg: T): this {
    this.elements.push(arg);
    return this;
  }

  /**
   * Maps a `Queue<T>` to a `Queue<U>` applying a function `Fn` to every enqueued element.
   *
   * ```ts
   * Queue([1,2,3]).map(arg => arg * 2) // Queue([2, 4, 6])
   * ```
   *
   * @template Fn
   * @param {Fn} fn
   * @returns {QueueLike<ReturnType<Fn>>}
   * @memberof QueueLike
   */
  public map<Fn extends (arg: T) => any>(fn: Fn): QueueLike<ReturnType<Fn>> {
    ensureFunction("map argument must be a function", fn);
    return new QueueLike(this.elements.map(fn));
  }

  /**
   * Converts a `Queue<T>` to a `Stack<T>`
   *
   * ```ts
   * Queue([1]).stack() // Stack([1])
   * ```
   *
   * @returns {StackLike<T>}
   * @memberof QueueLike
   */
  public stack(): StackLike<T> {
    return new StackLike<T>(this.elements.reverse());
  }

  /**
   * Returns oldest enqueued element `T` as an `Option<T>`. If the queue is empty, it returns `None`.
   *
   * ```ts
   * Queue([1,2,3]).top() // Option(1)
   * ```
   *
   * @returns {Option<T>}
   * @memberof QueueLike
   */
  public top(): Option<T> {
    return this.isEmpty() ? None() : Some(this.elements[0]);
  }
}

export class StackLike<T> extends Stackable<T> {
  /**
   * Maps a `Stack<T>` to a `Stack<U>` applying a function `Fn` to every stacked element.
   *
   * ```ts
   * Stack([1,2,3]).map(arg => arg * 2) // Stack([2, 4, 6])
   * ```
   * @template Fn
   * @param {Fn} fn
   * @returns {StackLike<ReturnType<Fn>>}
   * @memberof StackLike
   */
  public map<Fn extends (arg: T) => any>(fn: Fn): StackLike<ReturnType<Fn>> {
    ensureFunction("map argument must be a function", fn);
    return new StackLike(this.elements.map(fn));
  }

  /**
   * Pops latest pushed element to the Stack, returning an `Option<T>` if the stack is not empty or a `None` if the stack is empty.
   *
   * ```ts
   * const s = Stack([1,2,3]);
   * s.pop() // Option(3)
   * s.pop() // Option(2)
   * s.pop() // Option(1)
   * s.pop() // None()
   * ```
   *
   * @returns {Option<T>}
   * @memberof StackLike
   */
  public pop(): Option<T> {
    return this.isEmpty() ? None() : Some(this.elements.pop()!);
  }

  /**
   * Pushes an element to the Stack, returning `Stacklike<T>`
   *
   * ```ts
   * const s = Stack();
   *
   * s.push(1); // Stack([1])
   * s.push(2); // Stack([1, 2])
   * s.push(3); // Stack([1, 2, 3])
   * ```
   *
   * @param {T} arg
   * @returns {StackLike<T>}
   * @memberof StackLike
   */
  public push(arg: T): this {
    this.elements.push(arg);
    return this;
  }

  /**
   * Converts a `StackLike<T>` to a `QueueLike<T>`
   *
   * ```ts
   * Stack(['hello']).queue() // Queue(['hello'])
   * ```
   *
   * @returns {QueueLike<T>}
   * @memberof StackLike
   */
  public queue(): QueueLike<T> {
    return new QueueLike(this.elements.reverse());
  }

  /**
   * Returns latests pushed element as an `Option<T>` if the Stack is not empty, otherwise returns `None`
   *
   * ```ts
   * Stack([1,2,3]).top() // Option(3)
   * Stack([1,2]).top() // Option(2)
   * Stack([1]).top() // Option(1)
   * Stack().top() // None()
   * ```
   *
   * @returns {Option<T>}
   * @memberof StackLike
   */
  public top(): Option<T> {
    return this.isEmpty() ? None() : Some(this.elements[this.size() - 1]);
  }
}

export class FunctionQueueLike<
  Fn extends (...args: any[]) => any
> extends QueueLike<Fn> {
  /**
   * Enqueues an element `T`, returning current `Queuelike<T>`
   *
   * ```ts
   * Queue<number>()
   *  .enqueue(1)
   *  .enqueue(2)
   *  .enqueue(3)
   * ```
   *
   * @param {T} arg
   * @returns {QueueLike<T>}
   * @memberof QueueLike
   */
  public enqueue(fn: Fn): this {
    ensureFunction("enqueue argument must be a function", fn);

    super.enqueue(fn);

    return this;
  }

  /**
   * Execs a synchronous function queue with a given array of arguments. It returns `Err` and stops execution if a function invokation fails, otherwise returns `Ok<Queue<ReturnType<Fn>>>`;
   *
   * ```ts
   * // note, this is not a real life example
   * const q = FunctionQueue(
   *    [
   *      (url: string) => url.replace(/\s/g, '-'),
   *      (url: string) => url.length > 255 ? 'Url exceeds max length' : 'Url is ok',
   *    ]
   * );
   * q.exec('https://iamoctod.com/')
   *    .mapOrElse(
   *        error => false,
   *        queue => queue.value().map(console.log) || true,
   *    );
   * ```
   *
   * @template Returns
   * @param {Fn extends (... args: infer U) => any ? U : any[]} args
   * @returns {Result<Queue<ReturnType<Fn>>, Error>}
   * @memberof FunctionQueue
   */
  public exec(
    args: Fn extends (...args: infer U) => any ? U : any[]
  ): Result<Queue<ReturnType<Fn>>, Error> {
    const queue = Queue<ReturnType<Fn>>();
    let previousResult = Err("queue is empty");

    for (let i = 0; i < this.elements.length; i++) {
      previousResult = TryCatch(this.elements[i], args);

      if (previousResult.isError()) {
        return previousResult;
      }

      queue.enqueue(previousResult.unwrap());
    }

    return previousResult.isError() ? previousResult : Ok(queue);
  }

  /**
   * Execs an asynchronous function queue with a given array of arguments. It returns `Promise<Err>` and stops execution if a function invokation fails, otherwise returns `Promise<Ok<Queue<ReturnType<Fn>>>>`;
   *
   * ```ts
   * function backgroundWork(scriptPath: string, inputForCalculation: Int32Array) {
   *    return new Promise((resolve, reject) => {
   *        const worker = new Worker(scriptPath);
   *
   *        worker.addEventListener('message', result => {
   *            resolve(result);
   *            worker.terminate();
   *        });
   *
   *        worker.addEventListener('messageerror', result => {
   *            reject(result);
   *            worker.terminate();
   *        });
   *
   *        worker.postMessage([
   *          inputForCalculation,
   *        ]);
   *    })
   * }
   *
   * const queue = FunctionQueue(
   *    [
   *        (input: Int32Array) => backgroundWork('workers/binary-encoded.js', input),
   *        (input: Int32Array) => backgroundWork('workers/base64-encoded.js', input),
   *    ]
   * );
   *
   * queue.execAsync('<imagine this is a huge>')
   * ```
   *
   * @param {ArgsOf<Fn>} args
   * @returns {Promise<Result<Queue<ReturnType<Fn>>, Error>>}
   * @memberof FunctionQueue
   */
  public async execAsync(
    args: ArgsOf<Fn>
  ): Promise<Result<Queue<ReturnType<Fn>>, Error>> {
    const queue = Queue<ReturnType<Fn>>();
    let previousResult = Err("queue is empty");

    for (let i = 0; i < this.elements.length; i++) {
      previousResult = await TryCatchAsync(this.elements[i], args);

      if (previousResult.isError()) {
        return previousResult;
      }

      queue.enqueue(previousResult.unwrap());
    }

    return previousResult.isError() ? previousResult : Ok(queue);
  }
}

export class FunctionStackLike<
  Fn extends (...args: any[]) => any
> extends StackLike<Fn> {
  /**
   * Execs a synchronous function stack with a given array of arguments. It returns `Err` and stops execution if a function invokation fails, otherwise returns `Ok<Queue<ReturnType<Fn>>>`;
   *
   * ```ts
   * // note, this is not a real life example
   * const q = FunctionStack(
   *    [
   *      (url: string) => url.replace(/\s/g, '-'),
   *      (url: string) => url.length > 255 ? 'Url exceeds max length' : 'Url is ok',
   *    ]
   * );
   * q.exec('https://iamoctod.com/')
   *    .mapOrElse(
   *        error => false,
   *        queue => queue.value().map(console.log) || true,
   *    );
   * ```
   *
   * @template Returns
   * @param {Fn extends (... args: infer U) => any ? U : any[]} args
   * @returns {Result<Stack<ReturnType<Fn>>, Error>}
   * @memberof FunctionStack
   */
  public exec(args: ArgsOf<Fn>): Result<Stack<ReturnType<Fn>>, Error> {
    const queue = Queue<ReturnType<Fn>>();
    const copy = this.elements.slice();
    let previousResult = Err("queue is empty");

    while (copy.length > 0) {
      previousResult = TryCatch(copy.pop()!, args);

      if (previousResult.isError()) {
        return previousResult;
      }

      queue.enqueue(previousResult.unwrap());
    }

    return previousResult.isError() ? previousResult : Ok(queue.stack());
  }

  /**
   * Execs an asynchronous functions stack with a given array of arguments. It returns `Promise<Err>` and stops execution if a function invokation fails, otherwise returns `Promise<Ok<Queue<ReturnType<Fn>>>>`;
   *
   * ```ts
   * function backgroundWork(scriptPath: string, inputForCalculation: Int32Array) {
   *    return new Promise((resolve, reject) => {
   *        const worker = new Worker(scriptPath);
   *
   *        worker.addEventListener('message', result => {
   *            resolve(result);
   *            worker.terminate();
   *        });
   *
   *        worker.addEventListener('messageerror', result => {
   *            reject(result);
   *            worker.terminate();
   *        });
   *
   *        worker.postMessage([
   *          inputForCalculation,
   *        ]);
   *    })
   * }
   *
   * const stack = FunctionStack(
   *    [
   *        (input: Int32Array) => backgroundWork('workers/binary-encoded.js', input),
   *        (input: Int32Array) => backgroundWork('workers/base64-encoded.js', input),
   *    ]
   * );
   *
   * stack.execAsync('<imagine this is a huge>')
   * ```
   *
   * @param {ArgsOf<Fn>} args
   * @returns {Promise<Result<Stack<ReturnType<Fn>>, Error>>}
   * @memberof FunctionStack
   */
  public async execAsync(
    args: ArgsOf<Fn>
  ): Promise<Result<Stack<ReturnType<Fn>>, Error>> {
    const copy = this.elements.slice();
    const queue = Queue<ReturnType<Fn>>();
    let previousResult = Err("stack is empty");

    while (copy.length > 0) {
      previousResult = await TryCatchAsync(copy.pop()!, args);

      if (previousResult.isError()) {
        return previousResult;
      }

      queue.enqueue(previousResult.unwrap());
    }

    return previousResult.isError() ? previousResult : Ok(queue.stack());
  }

  /**
   * Pushes an element to the Stack, returning `Stacklike<T>`
   *
   * ```ts
   * const s = Stack();
   *
   * s.push(1); // Stack([1])
   * s.push(2); // Stack([1, 2])
   * s.push(3); // Stack([1, 2, 3])
   * ```
   *
   * @param {T} arg
   * @returns {StackLike<T>}
   * @memberof StackLike
   */
  public push(fn: Fn): this {
    ensureFunction("push argument must be a function", fn);

    super.push(fn);

    return this;
  }
}

/**
 * Represents a Queue of Functions data type
 *
 * Queue is a linear data structure in which addition or removal of element follows FIFO (first in, first out).
 *
 * ```ts
 * import { FunctionQueue } from 'tiinvo';
 *
 * const q = FunctionQueue();
 *
 * q.enqueue((arg: string) => 'name is: ' + arg);
 * q.enqueue((arg: string) => 'name length is: ' + arg);
 *
 * q.exec('FooBar') // Ok(Queue(['name is: FooBar', 'name length is: 6']))
 * ```
 *
 */
export type FunctionQueue<
  Fn extends (...args: any[]) => any
> = FunctionQueueLike<Fn>;

/**
 * Represents a Stack of Functions data type
 *
 * Stack is a linear data structure in which addition or removal of element follows LIFO (last in, first out).
 *
 * ```ts
 * import { FunctionStack } from 'tiinvo';
 *
 * const q = FunctionStack();
 *
 * q.push((arg: number) => arg * 2);
 * q.push((arg: number) => arg * 4);
 * q.push((arg: number) => arg * 6);
 *
 * q.exec(10) // Ok(Queue([20, 40, 60]))
 * ```
 *
 */
export type FunctionStack<
  Fn extends (...args: any[]) => any
> = FunctionStackLike<Fn>;

/**
 * Represents a Queue data type
 *
 * Queue is a linear data structure in which addition or removal of element follows FIFO (first in, first out).
 *
 * ```ts
 * import { Queue } from 'tiinvo';
 *
 * const q = Queue();
 *
 * q.enqueue('foo');
 * q.enqueue('bar');
 * q.enqueue('baz');
 *
 * q.length // 3
 *
 * q.top() // 'foo'
 * ```
 *
 */
export type Queue<T> = QueueLike<T>;

/**
 * Represents a Stack data type
 *
 * Stack is a linear data structure in which addition or removal of element follows LIFO (last in, first out).
 *
 * ```ts
 * import { Queue, Stack } from 'stack';
 *
 * const q = Queue();
 * const s = Stack();
 *
 * s.push(10);
 * s.push(20);
 * s.push(30);
 *
 * s.length // 3
 *
 * s.top() // 30
 *
 * q.enqueue('foo');
 * q.enqueue('bar');
 * q.enqueue('baz');
 *
 * q.length // 3
 *
 * q.top() // 'foo'
 * ```
 */
export type Stack<T> = StackLike<T>;

const ensureFunctionArray = (message: string) => (args: any[]) =>
  args.forEach(arg => ensureFunction(message, arg));

/**
 * Represents a Queue of Functions
 *
 * @export
 * @template Fn
 * @param {Fn[]} [args=[]]
 * @returns {FunctionQueue<Fn>}
 */
export function FunctionQueue<Fn extends (...args: any[]) => any>(
  args: Fn[] = []
): FunctionQueue<Fn> {
  ensureFunctionArray("FunctionQueue argument must be an array of functions")(
    args
  );
  return new FunctionQueueLike(args);
}

/**
 * Represents a Stack of Functions
 *
 * @export
 * @template Fn
 * @param {Fn[]} [args=[]]
 * @returns {FunctionStack<Fn>}
 */
export function FunctionStack<Fn extends (...args: any[]) => any>(
  args: Fn[] = []
): FunctionStack<Fn> {
  ensureFunctionArray("FunctionStack argument must be an array of functions")(
    args
  );
  return new FunctionStackLike(args);
}

/**
 * Represents a Queue data type
 *
 * @export
 * @template T
 * @param {T[]} [args=[]]
 * @returns {Queue<T>}
 */
export function Queue<T>(args: T[] = []): Queue<T> {
  return new QueueLike(args);
}

/**
 * Represents a Stack data type
 *
 * @export
 * @template T
 * @param {T[]} [args=[]]
 * @returns {Stack<T>}
 */
export function Stack<T>(args: T[] = []): Stack<T> {
  return new StackLike(args);
}
