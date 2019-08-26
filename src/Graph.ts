import { Some, Option, None } from "./Option";
import { Maybe } from "./Maybe";
import { Result, Err, Ok } from "./Result";

export class EdgeLike {
  public constructor(
    protected _value: number,
    protected _left: Vertex,
    protected _right: Vertex
  ) {}

  /**
   * Gets the left connected `Vertex<T>` to an edge. It returns `Option<Vertex<T>>` if there is a vertex, otherwise returns `None`
   *
   * ```ts
   * const edge = Edge(Vertex('a'), Vertex('b'))
   * edge.left() // Option(Vertex('a'))
   * ```
   *
   * @returns {Option<VertexLike>}
   * @memberof EdgeLike
   */
  public left(): Option<VertexLike> {
    return Maybe(this._left).option();
  }

  /**
   * Retuns the opposing `Vertex<T>` of `vertex` as `Option<Vertex<T>>` if the `Edge` contains the passed `vertex`. If the `Edge` does not contains `vertex`, it will return `None`.
   *
   * ```ts
   * const v1 = Vertex('a');
   * const v2 = Vertex('b');
   * const v3 = Vertex('c');
   * const edge = Edge(v1, v2);
   *
   * edge.opposing(v1) // Option<Vertex('b')>
   * edge.opposing(v2) // Option<Vertex('a')>
   * edge.opposing(v3) // None
   * ```
   *
   * @param {Vertex} vertex
   * @returns {Option<Vertex>}
   * @memberof EdgeLike
   */
  public opposing(vertex: Vertex): Option<Vertex> {
    switch (true) {
      case this._left.name() === vertex.name():
        return this.right();
      case this._right.name() === vertex.name():
        return this.left();
      default:
        return None();
    }
  }

  /**
   * Gets the right connected `Vertex<T>` to an edge. It returns `Option<Vertex<T>>` if there is a vertex, otherwise returns `None`
   *
   * ```ts
   * const edge = Edge(Vertex('a'), Vertex('b'))
   * edge.right() // Option(Vertex('b'))
   * ```
   *
   * @returns {Option<VertexLike>}
   * @memberof EdgeLike
   */
  public right(): Option<VertexLike> {
    return Maybe(this._right).option();
  }

  /**
   * It returns stored value of an `Edge`.
   *
   * ```ts
   * const edge = Edge(Vertex('a'), Vertex('b'), 1001)
   * edge.value() // 1001
   * ```
   *
   * @returns {number}
   * @memberof EdgeLike
   */
  public value(): number {
    return this._value;
  }
}

export class GraphLike {
  public constructor(
    protected vertices: Set<VertexLike> = new Set(),
    protected edges: Set<EdgeLike> = new Set()
  ) {}

  /**
   *
   *
   * @param {Vertex} left
   * @param {Vertex} right
   * @returns {boolean}
   * @memberof GraphLike
   */
  public adjacent(left: Vertex, right: Vertex): boolean {
    return left.isNeighbourOf(right);
  }

  /**
   *
   *
   * @param {Vertex} left
   * @param {Vertex} right
   * @param {number} [weight=0]
   * @returns {Result<EdgeLike, ReferenceError>}
   * @memberof GraphLike
   */
  public connect(
    left: Vertex,
    right: Vertex,
    weight: number = 0
  ): Result<EdgeLike, ReferenceError> {
    const edge = new EdgeLike(weight, left, right);

    return left
      .connect(edge)
      .and(right.connect(edge))
      .mapOrElse(
        err => Err(err),
        () => {
          this.edges.add(edge);
          this.vertices.add(left);
          this.vertices.add(right);
          return Ok(edge);
        }
      );
  }

  /**
   *
   *
   * @param {Vertex} vertex
   * @returns {Option<Vertex[]>}
   * @memberof GraphLike
   */
  public neighbors(vertex: Vertex): Option<Vertex[]> {
    return vertex.neighbours();
  }
}

export class VertexLike<T = unknown> {
  protected connections: Map<string, EdgeLike> = new Map();

  public constructor(protected _name: string, protected _value: T) {}

  /**
   * Connects an `Edge` to the `Vertex<T>`. Returns a `Err<Vertex>` if the `Vertex` cannot be connected, otherwise returns `Ok<Vertex>`.
   *
   * ```ts
   * const v1 = Vertex('a');
   * const v2 = Vertex('b');
   * const v3 = Vertex('c');
   *
   * v1.connect(Edge(v1, v2)) // Ok(Vertex('b'))
   * v2.connect(Edge(v2, v1)) // Err('b is already sibling to a');
   * v3.connect(Edge(v1, v2)) // Err('This edge does not contains vertex c');
   * ```
   *
   * @param {string} name
   * @param {Edge} edge
   * @returns {Result<Vertex, Error>}
   * @memberof VertexLike
   */
  public connect(edge: Edge): Result<Vertex, Error> {
    return edge.opposing(this).mapOrElse(
      () =>
        Err(
          new ReferenceError(`This edge does not contains vertex ${this._name}`)
        ),
      vertex => {
        const name = vertex!.name();

        if (this.connections.has(name)) {
          return Err(
            new ReferenceError(`${this._name} is already sibling to ${name}`)
          );
        }

        this.connections.set(name, edge);

        return Ok(vertex!);
      }
    );
  }

  /**
   * Returns `true` if `Vertex<T>` is neighbour of `Vertex<U>`, otherwise returns `false`
   *
   * ```ts
   * const v1 = Vertex('a');
   * const v2 = Vertex('b');
   * const v3 = Vertex('c');
   *
   * v1.connect(Edge(v1, v2));
   * v2.connect(Edge(v2, v3));
   *
   * v1.isNeighbourOf(v2) // true
   * v2.isNeighbourOf(v1) // true
   * v1.isNeighbourOf(v3) // false
   * v3.isNeighbourOf(v1) // false
   * v2.isNeighbourOf(v3) // true
   * ```
   *
   * @template U
   * @param {Vertex} vertex
   * @returns {boolean}
   * @memberof VertexLike
   */
  public isNeighbourOf<U>(vertex: Vertex<U>): boolean {
    return this.connections.has(vertex.name());
  }

  /**
   * Returns Vertex name
   *
   * ```ts
   * Vertex('a').name() // 'a'
   * ```
   *
   * @returns {string}
   * @memberof VertexLike
   */
  public name(): string {
    return this._name;
  }

  /**
   * Returns all neighbours to a `Vertex<T>` as a `Option<Vertex[]>` is there are any, otherwise returns `None`.
   *
   * ```ts
   * const v1 = Vertex('a');
   * const v2 = Vertex('b');
   * const v3 = Vertex('c');
   * const v4 = Vertex('d');
   * const v5 = Vertex('f');
   *
   * v1.connect(Edge(v1, v2))
   * v1.connect(Edge(v1, v3))
   * v1.connect(Edge(v1, v4))
   *
   * v1.neighbours() // Some([Vertex('a'), Vertex('b'), Vertex('c'), Vertex('d')])
   * v5.neighbours() // None()
   * ```
   *
   * @returns {Option<Vertex[]>}
   * @memberof VertexLike
   */
  public neighbours(): Option<Vertex[]> {
    if (this.connections.size === 0) {
      return None();
    }

    return Some(
      Array.from(this.connections.values()).map(edge =>
        edge.right().unwrap() === this
          ? edge.right().unwrap()!
          : edge.left().unwrap()!
      )
    );
  }

  public value(): Option<T> {
    return Maybe(this._value).option();
  }
}

export type Graph = GraphLike;
export type Edge = EdgeLike;
export type Vertex<T = unknown> = VertexLike<T>;

/**
 * Creates a new `Edge` from two `Vertex<T>`
 *
 * @export
 * @template T
 * @template U
 * @param {Vertex} left
 * @param {Vertex} right
 * @param {number} [value=0]
 * @returns {Edge}
 */
export function Edge<T, U>(
  left: Vertex<T>,
  right: Vertex<U>,
  value: number = 0
): Edge {
  return new EdgeLike(value, left, right);
}

/**
 *
 *
 * @export
 * @param {Vertex[]} vertices
 * @param {Edge[]} edges
 * @returns {Graph}
 */
export function Graph(vertices: Vertex[], edges: Edge[]): Graph {
  return new GraphLike(new Set(vertices), new Set(edges));
}

/**
 *
 *
 * @export
 * @template T
 * @param {string} name
 * @param {T} value
 * @returns {Vertex<T>}
 */
export function Vertex<T = undefined>(
  name: string,
  value: T = undefined as any
): Vertex<T> {
  return new VertexLike<T>(name, value);
}
