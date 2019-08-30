import { Node, Just, Nothing } from "..";

describe(`LinkedList`, () => {
  describe("Node", () => {
    it("Returns a `Maybe<Node<T>>` of the farthest linked node to the left", () => {
      const start = Node(1);
      expect(
        start
          .setRight(Node(2))
          .setRight(Node(3))
          .setRight(Node(4))
          .farleft()
          .unwrap()
      ).toStrictEqual(start);
    });

    it("Returns a `Maybe<Node<T>>` of the farthest linked node to the right", () => {
      const start = Node(1);
      expect(
        start
          .setLeft(Node(2))
          .setLeft(Node(3))
          .setLeft(Node(4))
          .farright()
          .unwrap()
      ).toStrictEqual(start);
    });

    it("Returns a `Maybe<Node<T>>` of the linked node to the left", () => {
      const start = Node(1);
      expect(
        start
          .setRight(Node(2))
          .left()
          .unwrap()
      ).toStrictEqual(start);
    });

    it("Returns a `Maybe<Node<T>>` of the linked node to the right", () => {
      const start = Node(1);
      expect(
        start
          .setLeft(Node(2))
          .right()
          .unwrap()
      ).toStrictEqual(start);
    });

    it("Sets a `Node<T>` to left. Returns linked node to left", () => {
      const left = Node(2);
      expect(left.setLeft(left)).toStrictEqual(left);
    });

    it("Sets a `Node<T>` to right. Returns linked node to right", () => {
      const right = Node(2);
      expect(right.setRight(right)).toStrictEqual(right);
    });

    it("Returns `Node<T>` shadowed value as a `Maybe<T>`.", () => {
      expect(Node("foobar").value()).toStrictEqual(Just("foobar"));
      expect(Node().value()).toStrictEqual(Nothing(undefined));
    });
  });
});
