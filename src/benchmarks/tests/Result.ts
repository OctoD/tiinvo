import { Options, Suite, Event } from "benchmark";
import { Err, Ok } from "../..";

export function run(suite: Suite, options: Options) {
  suite
    .add("Err#fn", () => Err(""))
    .add("Ok#fn", () => Ok(""))

    .add("Err#and", () => Err("").and(Err("")))
    .add("Ok#and", () => Ok("").and(Ok("")))

    .add("Err#andThen", () => Err("").andThen(() => Err("")))
    .add("Ok#andThen", () => Ok("").andThen(() => Ok("")))

    .add("Err#err", () => Err("").err())
    .add("Ok#err", () => Ok("").err())

    .add("Err#expect", () => Err("").expect("ok"))
    .add("Ok#expect", () => Ok("").expect("ok"))

    .add("Err#expectErr", () => Err("").expectErr("err"))
    .add("Ok#expectErr", () => Ok("").expectErr("err"))

    .add("Err#isError", () => Err("").isError())
    .add("Ok#isError", () => Ok("").isError())

    .add("Err#isOk", () => Err("").isOk())
    .add("Ok#isOk", () => Ok("").isOk())

    .add("Err#map", () => Err("").map(a => a))
    .add("Ok#map", () => Ok("").map(a => a))

    .add("Err#mapOrElse", () => Err("").mapOrElse(() => "", a => a))
    .add("Ok#mapOrElse", () => Ok("").mapOrElse(() => "", a => a))

    .add("Err#ok", () => Err("").ok())
    .add("Ok#ok", () => Ok("").ok())

    .add("Err#or", () => Err("").or(Ok("")))
    .add("Ok#or", () => Ok("").or(Ok("")))

    .add("Err#orElse", () => Err("").orElse(() => Ok("")))
    .add("Ok#orElse", () => Ok("").orElse(() => Ok("")))

    .add("Err#unwrap", () => Err("").unwrap())
    .add("Ok#unwrap", () => Ok("").unwrap())

    .add("Err#unwrap", () => Err("").unwrapErr())
    .add("Ok#unwrap", () => Ok("").unwrapErr())

    .add("Err#unwrapOr", () => Err("").unwrapOr(Ok(1)))
    .add("Ok#unwrapOr", () => Ok("").unwrapOr(Ok(1)))

    .add("Err#unwrapOrElse", () => Err("").unwrapOrElse(() => Ok(1)))
    .add("Ok#unwrapOrElse", () => Ok("").unwrapOrElse(() => Ok(1)));

  suite
    .on("cycle", function(event: Event) {
      console.log(String(event.target));
    })
    .on("complete", function(this: Suite) {
      console.log("end");
    });

  suite.run(options);
}
