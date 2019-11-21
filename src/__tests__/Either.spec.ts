import { Left, Right } from "../Either";
import { None, Some } from "../Option";
import { Err, Ok } from "../Result";

describe(`Either`, () => {
  it("Returns `Either<U>` if is `Right`, otherwise returns `Either<T>`", () => {
    expect(Left(1).and(Left(2))).toStrictEqual(Left(1));
    expect(Right(1).and(Right(2))).toStrictEqual(Right(2));
    expect(Right(1).and(Left(3))).toStrictEqual(Left(3));
  });

  it("Returns `Fn` result if is `Right`, otherwise returns `Either<T>`", () => {
    expect(Right(100).andThen(value => Right(value + 1))).toStrictEqual(
      Right(101)
    );
    expect(Left(100).andThen(value => Right(value + 1))).toStrictEqual(
      Left(100)
    );
  });

  it("Returns `Either<U>` if is `Left`, otherwise returns `Either<T>`", () => {
    expect(Left(1).or(Right(2))).toStrictEqual(Right(2));
    expect(Right(1).or(Right(2))).toStrictEqual(Right(1));
    expect(Left(1).or(Left(3))).toStrictEqual(Left(3));
  });

  it("Returns `Fn` result if is `Left`, otherwise returns `Either<T>`", () => {
    expect(Right(100).orThen(value => Right(value + 1))).toStrictEqual(
      Right(100)
    );
    expect(Left(100).orThen(value => Right(value + 1))).toStrictEqual(
      Right(101)
    );
  });

  it("Returns `true` if is `Left`", () => {
    expect(Left().isLeft()).toBeTruthy();
    expect(Right().isLeft()).toBeFalsy();
  });

  it("Returns `true` if is `Right`", () => {
    expect(Left().isRight()).toBeFalsy();
    expect(Right().isRight()).toBeTruthy();
  });

  it("Returns `leftFn` result if is `Left`, otherwise returns `rightFn` if is `Right`", () => {
    expect(Left(100).fold(a => a / 2, b => b * 2)).toBe(50);
    expect(Right(100).fold(a => a / 2, b => b * 2)).toBe(200);
  });

  it("Returns `Some<T>` if is `Right`, otherwise returns `None`", () => {
    expect(Left(100).option()).toStrictEqual(None());
    expect(Right(100).option()).toStrictEqual(Some(100));
  });

  it("Returns `Ok<T>` if is `Right`, otherwise returns `Err` if is `Left`", () => {
    expect(Left(100).result()).toStrictEqual(Err("Value 100 is not right."));
    expect(Right(20).result()).toStrictEqual(Ok(20));
  });

  it("Swaps `Right<T>` to `Left<T>` if is `Right<T>`, otherwise swaps `Left<T>` to `Right<T>` if is `Left<T>`", () => {
    expect(Left(100).swap()).toStrictEqual(Right(100));
    expect(Right(20).swap()).toStrictEqual(Left(20));
  });

  it("Unwraps value `T`", () => {
    expect(Left(10).unwrap()).toBe(10);
    expect(Right(`hello world`).unwrap()).toBe("hello world");
  });
});
