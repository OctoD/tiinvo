import { Option, None, Some } from "./Option";
import { ensureFunction } from "./common";

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
  public enqueue(arg: T): QueueLike<T> {
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
    return new StackLike<T>(this.elements);
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
  public push(arg: T): StackLike<T> {
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
    return new QueueLike(this.elements);
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

/**
 * Represents a Queue data type
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
