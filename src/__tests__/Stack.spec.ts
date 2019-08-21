import { Queue, Stack, FunctionQueue, FunctionStack } from "../Stack";
import { Option, None } from "../Option";

describe(`Stackables and Queables`, () => {
  //#region Queue

  describe(`Queue`, () => {
    it("Dequeues the oldest enqueued element, returning an `Option<T>` representing its value. If the queue is empty, a `None` will be returned", () => {
      const q = Queue([1, 2, 3]);

      expect(q.dequeue()).toStrictEqual(Option(1));
      expect(q.dequeue()).toStrictEqual(Option(2));
      expect(q.dequeue()).toStrictEqual(Option(3));
      expect(q.dequeue()).toStrictEqual(None());
    });

    it("Enqueues an element `T`, returning current `Queuelike<T>`", () => {
      expect(
        Queue<number>()
          .enqueue(1)
          .enqueue(2)
          .enqueue(3)
      ).toStrictEqual(Queue([1, 2, 3]));
    });

    it("Returns oldest enqueued element `T` as an `Option<T>`. If the queue is empty, it returns `None`.", () => {
      expect(Queue([1, 2, 3]).top()).toStrictEqual(Option(1));
      expect(Queue().top()).toStrictEqual(None());
    });

    it("Maps a `Queue<T>` to a `Queue<U>` applying a function `Fn` to every enqueued element.", () => {
      expect(Queue([1, 2, 3]).map(arg => arg * 2)).toStrictEqual(
        Queue([2, 4, 6])
      );
    });

    it("Converts a `Queue<T>` to a `Stack<T>`", () => {
      expect(Queue([1]).stack()).toStrictEqual(Stack([1]));
    });
  });

  //#endregion

  //#region Stack

  describe("Stack", () => {
    it("Maps a `Queue<T>` to a `Queue<U>` applying a function `Fn` to every enqueued element.", () => {
      expect(Stack([1, 2, 3]).map(arg => arg * 2)).toStrictEqual(
        Stack([2, 4, 6])
      );
    });

    it("Pops latest pushed element to the Stack, returning an `Option<T>` if the stack is not empty or a `None` if the stack is empty.", () => {
      const s = Stack([1, 2, 3]);

      expect(s.pop()).toStrictEqual(Option(3));
      expect(s.pop()).toStrictEqual(Option(2));
      expect(s.pop()).toStrictEqual(Option(1));
      expect(s.pop()).toStrictEqual(None());
      expect(s.value()).toStrictEqual([]);
    });

    it("Pushes an element to the Stack, returning `Stacklike<T>`", () => {
      const s = Stack();

      s.push(1);
      expect(s).toStrictEqual(Stack([1]));

      s.push(2);
      expect(s).toStrictEqual(Stack([1, 2]));

      s.push(3);
      expect(s).toStrictEqual(Stack([1, 2, 3]));
    });

    it("Converts a `StackLike<T>` to a `QueueLike<T>`", () => {
      expect(Stack(["hello", "world"]).queue()).toStrictEqual(
        Queue(["world", "hello"])
      );
    });

    it("Returns latests pushed element as an `Option<T>` if the Stack is not empty, otherwise returns `None`", () => {
      expect(Stack([1, 2, 3]).top()).toStrictEqual(Option(3));
      expect(Stack([1, 2]).top()).toStrictEqual(Option(2));
      expect(Stack([1]).top()).toStrictEqual(Option(1));
      expect(Stack().top()).toStrictEqual(None());
    });
  });

  //#endregion

  //#region FunctionQueue

  describe("FunctionQueue", () => {
    it("Execs a function queue with a given array of arguments. It returns `Err` and stops execution if a function invokation fails", () => {
      expect(
        FunctionQueue()
          .exec([])
          .isError()
      ).toBeTruthy();
      expect(
        FunctionQueue()
          .enqueue(
            jest.fn(() => {
              throw new Error("foobar");
            })
          )
          .enqueue(jest.fn().mockReturnValue(10))
          .exec([])
          .isError()
      ).toBeTruthy();

      expect(() => FunctionQueue(1 as any)).toThrowError();
      expect(() => FunctionQueue([1] as any)).toThrowError();
    });

    it("Execs a function queue with a given array of arguments. It returns `Ok<Queue<ReturnType<Fn>>>`;", () => {
      const fn1 = jest.fn(() => 10);
      const fn2 = jest.fn(() => 20);

      const result = FunctionQueue()
        .enqueue(fn1)
        .enqueue(fn2)
        .exec([]);

      expect(result.isError()).toBeFalsy();
      expect(result.unwrap()).toStrictEqual(Queue([10, 20]));
      expect(fn1).toHaveBeenCalled();
      expect(fn2).toHaveBeenCalled();
    });

    it("Execs an asynchronous function queue with a given array of arguments. It returns `Err` and stops execution if a function invokation fails", async () => {
      expect((await FunctionQueue().execAsync([])).isError()).toBeTruthy();
      expect(
        (await FunctionQueue()
          .enqueue(
            jest.fn(() => {
              throw new Error("");
            })
          )
          .enqueue(jest.fn().mockReturnValue(10))
          .execAsync([])).isError()
      ).toBeTruthy();
    });

    it("Execs an asynchronous function queue with a given array of arguments. It returns `Ok<Queue<ReturnType<Fn>>>`;", async () => {
      const fn1 = jest.fn().mockReturnValue(10);
      const fn2 = jest.fn().mockReturnValue(20);

      const result = await FunctionQueue()
        .enqueue(fn1)
        .enqueue(fn2)
        .execAsync([]);

      expect(result.isError()).toBeFalsy();
      expect(result.unwrap()).toStrictEqual(Queue([10, 20]));
      expect(fn1).toHaveBeenCalled();
      expect(fn2).toHaveBeenCalled();
    });
  });

  //#endregion

  //#region FunctionStack

  describe("FunctionStack", () => {
    it("Execs a function stack with a given array of arguments. It returns `Err` and stops execution if a function invokation fails", () => {
      const result = FunctionStack()
        .push(
          jest.fn(() => {
            throw new Error("");
          })
        )
        .push(jest.fn().mockReturnValue(10))
        .exec([]);

      expect(() => FunctionStack(1 as any)).toThrowError();
      expect(() => FunctionStack([1] as any)).toThrowError();
      expect(
        FunctionStack()
          .exec([])
          .isError()
      ).toBeTruthy();
      expect(result.isError()).toBeTruthy();
    });

    it("Execs a function stack with a given array of arguments. It returns `Ok<Queue<ReturnType<Fn>>>`;", () => {
      const fn1 = jest.fn(() => 10);
      const fn2 = jest.fn(() => 20);

      const result = FunctionStack()
        .push(fn1)
        .push(fn2)
        .exec([]);

      expect(result.isError()).toBeFalsy();
      expect(result.unwrap()).toStrictEqual(Stack([10, 20]));
      expect(fn1).toHaveBeenCalled();
      expect(fn2).toHaveBeenCalled();
    });

    it("Execs an asynchronous function stack with a given array of arguments. It returns `Err` and stops execution if a function invokation fails", async () => {
      expect((await FunctionStack().execAsync([])).isError()).toBeTruthy();
      expect(
        (await FunctionStack()
          .push(
            jest.fn(() => {
              throw new Error("");
            })
          )
          .push(jest.fn().mockReturnValue(10))
          .execAsync([])).isError()
      ).toBeTruthy();
    });

    it("Execs an asynchronous function stack with a given array of arguments. It returns `Ok<Queue<ReturnType<Fn>>>`;", async () => {
      const fn1 = jest.fn().mockReturnValue(10);
      const fn2 = jest.fn().mockReturnValue(20);

      const result = await FunctionStack()
        .push(fn1)
        .push(fn2)
        .execAsync([]);

      expect(result.isError()).toBeFalsy();
      expect(result.unwrap()).toStrictEqual(Stack([10, 20]));
      expect(fn1).toHaveBeenCalled();
      expect(fn2).toHaveBeenCalled();
    });
  });

  //#endregion
});
