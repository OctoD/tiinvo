import { Node, Just, Nothing, LinkedList } from "..";

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

  describe(`LinkedList`, () => {
    it("Appends a `Node<T>` to the `LinkedList<T>`", () => {
      expect(
        LinkedList()
          .append(Node(1))
          .append(Node(2))
          .value()
      ).toStrictEqual([1, 2]);
    });

    it("Calls a function `Fn` for each `Node<T>`.", () => {
      const fn = jest.fn();

      LinkedList([1, 2, 3]).forEach(fn);

      expect(fn).toHaveBeenCalledTimes(3);
    });

    it("Returns list's head as `Just<Node<T>>` if the list has a head, otherwise returns a `Nothing<Node<T>>` if the list does not have a head. ", () => {
      expect(LinkedList().head()).toStrictEqual(Nothing(undefined));
      expect(LinkedList([1]).head()).toStrictEqual(Just(Node(1)));
    });

    it("Applies `Fn` to every `Node<T>` to a `Node<U>` in a `LinkedList<T>` and returns a `LinkedList<U>`", () => {
      const l1 = LinkedList([1, 2, 3]);
      const l2 = LinkedList(["number is 1", "number is 2", "number is 3"]);

      expect(l1.map(arg => `number is ${arg.unwrap()}`)).toStrictEqual(l2);
    });

    it("Returns List size", () => {
      expect(LinkedList([1, 2, 3, 4]).size()).toBe(4);
    });

    it("Returns `Just<Node<T>>` if the `LinkedList<T>` has a tail, otherwise returns `Nothing`", () => {
      expect(LinkedList().tail()).toStrictEqual(Nothing(undefined));
      expect(LinkedList([1]).tail()).toStrictEqual(Just(Node(1)));
    });

    it("Returns `LinkedList<T>` value as an array of `T`.", () => {
      expect(
        expect.arrayContaining(LinkedList([1, 2, 3]).value())
      ).toStrictEqual([1, 2, 3]);
    });
  });
});
