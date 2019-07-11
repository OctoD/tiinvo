import { Option, None, Some } from "./Option";

class ResultLike<R, E> {
  public constructor(protected value: R | E) {}

  public err(): Option<E> {
    return instanceOfError<R, E>(this.value) ? Some(this.value) : None();
  }

  public isError(): boolean {
    return instanceOfError<R, E>(this.value);
  }

  public isOk(): Option<R> {
    return instanceOfError<R, E>(this.value) ? None() : Some(this.value);
  }
}

function instanceOfError<T, E>(value: T | E): value is E {
  return (
    value instanceof Error ||
    ("name" in value && "message" in value && "stack" in value)
  );
}

export function Ok<T>(value: T) {
  return new ResultLike<T, Error>(value);
}
