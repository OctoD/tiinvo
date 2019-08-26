import { Edge, Vertex, Graph } from "../Graph";
import { Some, None } from "../Option";
import { Ok, Err } from "../Result";

describe(`Graph`, () => {
  //#region edge

  describe("Edge", () => {
    it("Creates a new Edge from two vertices", () => {
      expect(() => Edge(Vertex("a"), Vertex("b"))).not.toThrowError();
    });

    it("Gets the left connected `Vertex<T>` to an edge. It returns `Option<Vertex<T>>` if there is a vertex, otherwise returns `None`", () => {
      expect(Edge(Vertex("a"), Vertex("b")).left()).toStrictEqual(
        Some(Vertex("a"))
      );
    });

    it("Gets the right connected `Vertex<T>` to an edge. It returns `Option<Vertex<T>>` if there is a vertex, otherwise returns `None`", () => {
      expect(Edge(Vertex("a"), Vertex("b")).right()).toStrictEqual(
        Some(Vertex("b"))
      );
    });

    it("Retuns the opposing `Vertex<T>` of `vertex` as `Option<Vertex<T>>` if the `Edge` contains the passed `vertex`. If the `Edge` does not contains `vertex`, it will return `None`.", () => {
      const v1 = Vertex("a");
      const v2 = Vertex("b");
      const v3 = Vertex("c");
      const edge = Edge(v1, v2);

      expect(edge.opposing(v1)).toStrictEqual(Some(v2));
      expect(edge.opposing(v2)).toStrictEqual(Some(v1));
      expect(edge.opposing(v3)).toStrictEqual(None());
    });

    it("It returns stored value of an `Edge`.", () => {
      expect(Edge(Vertex("a"), Vertex("b"), 1001).value()).toBe(1001);
    });
  });

  //#endregion
  //#region vertex

  describe("Vertex", () => {
    it("Connects an `Edge` to the `Vertex<T>`. Returns a `Err<Vertex>` if the `Vertex` cannot be connected, otherwise returns `Ok<Vertex>`.", () => {
      const v1 = Vertex("a");
      const v2 = Vertex("b");
      const v3 = Vertex("c");

      expect(
        v1
          .connect(Edge(v1, v2))
          .unwrap()!
          .name()
      ).toStrictEqual(v2.name());
      expect(v2.connect(Edge(v2, v1))).toStrictEqual(
        Err(new ReferenceError("b is already sibling to a"))
      );
      expect(v3.connect(Edge(v1, v2))).toStrictEqual(
        Err(new ReferenceError("This edge does not contains vertex c"))
      );
    });

    it("Returns `true` if `Vertex<T>` is neighbour of `Vertex<U>`, otherwise returns `false`", () => {
      const v1 = Vertex("a");
      const v2 = Vertex("b");
      const v3 = Vertex("c");

      v1.connect(Edge(v1, v2));
      v2.connect(Edge(v2, v3));

      expect(v1.isNeighbourOf(v2)).toEqual(true);
      expect(v2.isNeighbourOf(v1)).toEqual(true);
      expect(v1.isNeighbourOf(v3)).toEqual(false);
      expect(v3.isNeighbourOf(v1)).toEqual(false);
      expect(v2.isNeighbourOf(v3)).toEqual(true);
    });

    it("Returns Vertex name", () => {
      expect(Vertex("a").name()).toEqual("a");
    });

    it("Returns all neighbours to a `Vertex<T>` as a `Option<Vertex[]>` is there are any, otherwise returns `None`.", () => {
      const v1 = Vertex("a");
      const v2 = Vertex("b");
      const v3 = Vertex("c");
      const v4 = Vertex("d");
      const v5 = Vertex("f");

      v1.connect(Edge(v1, v2));
      v1.connect(Edge(v1, v3));
      v1.connect(Edge(v1, v4));

      expect(expect.arrayContaining(v1.neighbours().unwrap()!)).toStrictEqual([
        Vertex("a"),
        Vertex("b"),
        Vertex("c"),
        Vertex("d")
      ]);
      expect(v5.neighbours()).toStrictEqual(None());
    });

    it("Returns `Vertex<T>` value as `Option<T>` if is `Just`, otherwise returns `None`", () => {
      expect(Vertex("a").value()).toStrictEqual(None());
      expect(Vertex("a", 100).value()).toStrictEqual(Some(100));
    });
  });

  //#endregion
  //#region graph

  describe("Graph", () => {
    it("Returns `true` if a `Vertex` is adjacent to another one.", () => {
      const graph = Graph();
      const v1 = Vertex("a");
      const v2 = Vertex("b");
      const v3 = Vertex("c");

      graph.connect(v1, v2);
      graph.connect(v2, v3);

      expect(graph.adjacent(v1, v2)).toBe(true);
      expect(graph.adjacent(v1, v3)).toBe(false);
      expect(graph.adjacent(v2, v3)).toBe(true);
      expect(graph.adjacent(v2, v3)).toBe(true);
    });

    it("Connects two vertices together, returning `Ok<Edge>` if the two vertices can be connected otherwise retuning an `Err`.", () => {
      const graph = Graph();
      const v1 = Vertex("a");
      const v2 = Vertex("b");
      const v3 = Vertex("c");

      expect(graph.connect(v1, v2)).toStrictEqual(Ok(Edge(v1, v2)));
      expect(graph.connect(v2, v3)).toStrictEqual(Ok(Edge(v2, v3)));
      expect(graph.connect(v2, v1)).toStrictEqual(
        Err(new ReferenceError("b is already sibling to a"))
      );
    });

    it("Returns all neighbours to a `Vertex<T>` as a `Option<Vertex[]>` is there are any, otherwise returns `None`.", () => {
      const graph = Graph();
      const v1 = Vertex("a");
      const v2 = Vertex("b");

      graph.connect(v1, v2);

      expect(graph.neighbours(v1)).toStrictEqual(v1.neighbours());
    });
  });

  //#endregion
});
