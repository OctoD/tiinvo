Unwrappables are functions responsible for unwrapping a `TaggedType<T>` value `T`.

There are three factory functions, createUnwrap, createUnwrapOr and createUnwrapOrElse

Both unwrapOr and unwrapOrElse are considered safe (they will not throw), otherwise unwrap functions should throw if the given predicate is not satisfied (an exception to this is `Either.unwrapEither`)

## createUnwrap

Takes a `Predicate<T>` and an error message `string` returning a `unwrap` function.

If the passed `TaggedType<T>` does not satisfied the `Predicate<T>` constraint,
an error will be thrown.

## createUnwrapOr

Similar to `createUnwrap`, but the returned `unwrapOr` function accepts a fallback value. 

If the passed `TaggedType<T>` does not satisfied the `Predicate<T>` constraint,
the fallback `T` will be returned instead of throwing.

## createUnwrapOrElse

Similar to `createUnwrap`, but the returned `unwrapOr` function accepts a `NullaryFn` function. 

If the passed `TaggedType<T>` does not satisfied the `Predicate<T>` constraint,
the fallback `NullaryFn<T>` will be called and the return value will be returned instead of throwing.




