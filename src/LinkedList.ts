import { Maybe } from "./Maybe";
import { ensureFunction } from "./common";

export class NodeLike<T> {
  public constructor(
    protected _value: T,
    protected _left?: NodeLike<T>,
    protected _right?: NodeLike<T>
  ) {}

  /**
   * Returns a `Maybe<Node<T>>` of the farthest linked node to the left
   *
   * ```ts
   * Node(1).setRight(Node(2)).setRight(Node(3)).setRight(Node(4)).farleft() // Node(1)
   * ```
   *
   * @returns {Maybe<Node<T>>}
   * @memberof NodeLike
   */
  public farleft(): Maybe<Node<T>> {
    let left = this.left();

    while (
      left.isJust() &&
      left
        .unwrap()
        .left()
        .isJust()
    ) {
      left = left.unwrap().left();
    }

    return left;
  }

  /**
   * Returns a `Maybe<Node<T>>` of the farthest linked node to the right
   *
   * ```ts
   * Node(1).setLeft(Node(2)).setLeft(Node(3)).setLeft(Node(4)).farright() // Node(1)
   * ```
   *
   * @returns {Maybe<Node<T>>}
   * @memberof NodeLike
   */
  public farright(): Maybe<Node<T>> {
    let right = this.right();

    while (
      right.isJust() &&
      right
        .unwrap()
        .right()
        .isJust()
    ) {
      right = right.unwrap().right();
    }

    return right;
  }

  /**
   * Returns a `Maybe<Node<T>>` of the linked node to the left
   *
   * ```ts
   * Node(1).setRight(Node(2)).left() // Node(1)
   * ```
   *
   * @returns {Maybe<Node<T>>}
   * @memberof NodeLike
   */
  public left(): Maybe<Node<T>> {
    return Maybe(this._left as Node<T>);
  }

  /**
   * Returns a `Maybe<Node<T>>` of the linked node to the right
   *
   * ```ts
   * Node(1).setLeft(Node(2)).right() // Node(1)
   * ```
   *
   * @returns {Maybe<Node<T>>}
   * @memberof NodeLike
   */
  public right(): Maybe<Node<T>> {
    return Maybe(this._right as Node<T>);
  }

  /**
   * Sets a `Node<T>` to left. Returns linked node to left
   *
   * ```ts
   * Node(1).setLeft(Node(2)) // Node(2)
   * ```
   *
   * @param {NodeLike<T>} node
   * @returns {NodeLike<T>}
   * @memberof NodeLike
   */
  public setLeft(node: NodeLike<T>): NodeLike<T> {
    this.left().mapOrElse(
      () => {
        this._left = node;
        node._right = this;
      },
      oldleft => {
        this._left = node;

        node._left = oldleft;
        node._right = this;
        oldleft._right = node;
      }
    );
    return node;
  }

  /**
   * Sets a `Node<T>` to right. Returns linked node to right
   *
   * ```ts
   * Node(1).setRight(Node(2)) // Node(2)
   * ```
   *
   * @param {NodeLike<T>} node
   * @returns {NodeLike<T>}
   * @memberof NodeLike
   */
  public setRight(node: NodeLike<T>): NodeLike<T> {
    this.right().mapOrElse(
      () => {
        this._right = node;
        node._left = this;
      },
      oldright => {
        this._right = node;

        node._left = this;
        node._right = oldright;
        oldright._left = node;
      }
    );
    return node;
  }

  /**
   * Returns `Node<T>` shadowed value as a `Maybe<T>`.
   *
   * ```ts
   * Node('foobar').value() // Just('foobar')
   * Node().value() // Nothing(undefined)
   * ```
   *
   * @returns {Maybe<T>}
   * @memberof NodeLike
   */
  public value(): Maybe<T> {
    return Maybe(this._value);
  }
}

export class LinkedListLike<T> {
  protected _head?: NodeLike<T>;
  protected _tail?: NodeLike<T>;

  public constructor(initialValues: T[] = []) {
    // initialValues.forEach(value => this.)
  }

  /**
   *
   *
   * @param {NodeLike<T>} node
   * @returns {this}
   * @memberof LinkedListLike
   */
  public addToHead(node: NodeLike<T>): this {
    this.head().mapOrElse(
      () => (this._head = node),
      head => {
        head.farright().mapOrElse(
          () => head.setRight(node),
          farright => {
            farright.setRight(node);
            this._tail = node;
          }
        );
      }
    );
    return this;
  }

  /**
   *
   *
   * @param {NodeLike<T>} node
   * @returns {this}
   * @memberof LinkedListLike
   */
  public addToTail(node: NodeLike<T>): this {
    this.tail().mapOrElse(
      () => (this._tail = this._head = node),
      tail => {
        tail.left().mapOrElse(
          () => tail.setLeft(node),
          left => {
            left.setLeft(node);
            this._tail = node;
          }
        );
      }
    );
    return this;
  }

  /**
   *
   *
   * @template Fn
   * @param {Fn} fn
   * @memberof LinkedListLike
   */
  public forEach<Fn extends (arg: Maybe<Node<T>>) => any>(fn: Fn): void {
    ensureFunction("forEach argument must be a function", fn);

    let next = this.head();

    while (next.isJust()) {
      fn(next);
      next = next.unwrap().right();
    }
  }

  /**
   *
   *
   * @returns {Maybe<Node<T>>}
   * @memberof LinkedListLike
   */
  public head(): Maybe<Node<T>> {
    return Maybe(this._head as Node<T>);
  }

  /**
   * Applies `Fn` to every `Node<T>` to a `Node<U>` in a `LinkedList<T>` and returns a `LinkedList<U>`
   *
   * ```ts
   * LinkedList([1, 2, 3])
   *    .map(arg =>
   *        arg.cata({
   *            Nothing: () => 'empty',
   *            Just: val => `Number ${val} is ${val % 2 === 0 ? 'even' : 'odd'}`
   *        })
   *    )
   * ```
   *
   * @template Fn
   * @template U
   * @param {Fn} fn
   * @returns {LinkedListLike<U>}
   * @memberof LinkedListLike
   */
  public map<Fn extends (value: Maybe<T>) => U, U>(fn: Fn): LinkedListLike<U> {
    ensureFunction("LinkedList map argument must be a function", fn);

    const list = new LinkedListLike<U>();

    this.forEach(node => list.addToHead(Node(fn(node.unwrap().value()))));

    return list;
  }

  /**
   * Returns List size
   *
   * ```ts
   * LinkedList().addToHead(Node(1)).addToHead(Node(2)).addToHead(Node(3)).size() // 3
   * ```
   *
   * @returns {number}
   * @memberof LinkedListLike
   */
  public size(): number {
    let length = 0;

    this.forEach(() => length++);

    return length;
  }

  /**
   *
   *
   * @returns {Maybe<Node<T>>}
   * @memberof LinkedListLike
   */
  public tail(): Maybe<Node<T>> {
    return Maybe(this._tail as Node<T>);
  }
}

export type Node<T = unknown> = NodeLike<T>;
export type LinkedList<T = unknown> = LinkedListLike<T>;

/**
 *
 *
 * @export
 * @template T
 * @param {T} [value]
 * @returns {Node<T>}
 */
export function Node<T = unknown>(value?: T): Node<T> {
  return new NodeLike<T>(value as T);
}

/**
 *
 *
 * @export
 * @template T
 * @param {T[]} [initialValues=[]]
 * @returns {LinkedList<T>}
 */
export function LinkedList<T = unknown>(
  initialValues: T[] = []
): LinkedList<T> {
  return new LinkedListLike(initialValues);
}
