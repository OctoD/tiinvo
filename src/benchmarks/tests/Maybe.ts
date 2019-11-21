import { Event, Options, Suite } from "benchmark";
import { Just, Maybe, Nothing } from "../..";

export function run(suite: Suite, options: Options) {
  suite
    .add("Maybe#fn", () => Maybe(1))
    .add("Just#fn", () => Just(1))
    .add("Nothing#fn", () => Nothing(1))

    .add("Maybe#and", () => Maybe(1).and(Maybe(2)))
    .add("Just#and", () => Just(1).and(Just(2)))
    .add("Nothing#and", () => Nothing(1).and(Nothing(2)))

    .add("Maybe#andThen", () => Maybe(1).andThen(() => Maybe(2)))
    .add("Just#andThen", () => Just(1).andThen(() => Just(2)))
    .add("Nothing#andThen", () => Nothing(1).andThen(() => Nothing(2)))

    .add("Maybe#cata", () => Maybe(1).cata({ Just: () => 1, Nothing: () => 2 }))
    .add("Just#cata", () => Just(1).cata({ Just: () => 1, Nothing: () => 2 }))
    .add("Nothing#cata", () =>
      Nothing(1).cata({ Just: () => 1, Nothing: () => 2 })
    )

    .add("Maybe#either", () => Maybe(1).either())
    .add("Just#either", () => Just(1).either())
    .add("Nothing#either", () => Nothing(1).either())

    .add("Maybe#isJust", () => Maybe(1).isJust())
    .add("Just#isJust", () => Just(1).isJust())
    .add("Nothing#isJust", () => Nothing(1).isJust())

    .add("Maybe#isNothing", () => Maybe(1).isNothing())
    .add("Just#isNothing", () => Just(1).isNothing())
    .add("Nothing#isNothing", () => Nothing(1).isNothing())

    .add("Maybe#map", () => Maybe(1).map(a => a))
    .add("Just#map", () => Just(1).map(a => a))
    .add("Nothing#map", () => Nothing(1).map(a => a))

    .add("Maybe#mapOrElse", () => Maybe(1).mapOrElse(() => 1, a => a))
    .add("Just#mapOrElse", () => Just(1).mapOrElse(() => 1, a => a))
    .add("Nothing#mapOrElse", () => Nothing(1).mapOrElse(() => 1, a => a))

    .add("Maybe#option", () => Maybe(1).option())
    .add("Just#option", () => Just(1).option())
    .add("Nothing#option", () => Nothing(1).option())

    .add("Maybe#unwrap", () => Maybe(1).unwrap())
    .add("Just#unwrap", () => Just(1).unwrap())
    .add("Nothing#unwrap", () => Nothing(1).unwrap());

  suite
    .on("cycle", function(event: Event) {
      console.log(String(event.target));
    })
    .on("complete", function(this: Suite) {
      console.log("end");
    });

  suite.run(options);
}
