import benchmark from "benchmark";
import { Option, Some, None, Err } from "../../src";

export function run(suite: benchmark.Suite, options: benchmark.Options) {
  suite
    .add(`Option#fn`, () => Option(10))
    .add(`Some#fn`, () => Some(10))
    .add(`None#fn`, () => None())

    .add(`Option#and`, () => Option(10).and(Option(12)))
    .add(`Some#and`, () => Some(10).and(Some(12)))
    .add(`None#and`, () => None().and(Some(12)))

    .add(`Option#andThen`, () =>
      Option(10).andThen(arg => Some(arg.toString()))
    )
    .add(`Some#andThen`, () => Some(10).andThen(arg => Some(arg.toString())))
    .add(`None#andThen`, () => None().andThen(arg => Some(arg)))

    .add(`Option#expect`, () => Option(10).expect("number"))
    .add(`Some#expect`, () => Some(10).expect("number"))
    .add(`None#expect`, () => None().expect("number"))

    .add(`Option#filter`, () => Option(10).filter(a => a > 5))
    .add(`Some#filter`, () => Some(10).filter(a => a > 5))
    .add(`None#filter`, () => None().filter((a: any) => a > 5))

    .add(`Option#flattern`, () => Option(Some(10)).flattern())
    .add(`Some#flattern`, () => Some(Some(10)).flattern())
    .add(`None#flattern`, () => Some(None()).flattern())

    .add(`Option#isNone`, () => Option(10).isNone())
    .add(`Some#isNone`, () => Some(10).isNone())
    .add(`None#isNone`, () => None().isNone())

    .add(`Option#isSome`, () => Option(10).isSome())
    .add(`Some#isSome`, () => Some(10).isSome())
    .add(`None#isSome`, () => None().isSome())

    .add(`Option#map`, () => Option(10).map(arg => String(arg)))
    .add(`Some#map`, () => Some(10).map(arg => String(arg)))
    .add(`None#map`, () => None().map(arg => String(arg)))

    .add(`Option#mapOr`, () => Option(10).mapOr("10", arg => String(arg)))
    .add(`Some#mapOr`, () => Some(10).mapOr("10", arg => String(arg)))
    .add(`None#mapOr`, () => None().mapOr("10", arg => String(arg)))

    .add(`Option#mapOrElse`, () =>
      Option(10).mapOrElse(() => "10", arg => String(arg))
    )
    .add(`Some#mapOrElse`, () =>
      Some(10).mapOrElse(() => "10", arg => String(arg))
    )
    .add(`None#mapOrElse`, () =>
      None().mapOrElse(() => "10", arg => String(arg))
    )

    .add(`Option#okOr`, () => Option(10).okOr(Err("err")))
    .add(`Some#okOr`, () => Some(10).okOr(Err("err")))
    .add(`None#okOr`, () => None().okOr(Err("err")))

    .add(`Option#okOrElse`, () => Option(10).okOrElse(() => Err("err")))
    .add(`Some#okOrElse`, () => Some(10).okOrElse(() => Err("err")))
    .add(`None#okOrElse`, () => None().okOrElse(() => Err("err")))

    .add(`Option#or`, () => Option(10).or(Some("or")))
    .add(`Some#or`, () => Some(10).or(Some("or")))
    .add(`None#or`, () => None().or(Some("or")))

    .add(`Option#orElse`, () => Option(10).orElse(() => Some("orElse")))
    .add(`Some#orElse`, () => Some(10).orElse(() => Some("orElse")))
    .add(`None#orElse`, () => None().orElse(() => Some("orElse")))

    .add(`Option#transpose`, () => Option(10).transpose())
    .add(`Some#transpose`, () => Some(10).transpose())
    .add(`None#transpose`, () => None().transpose())

    .add(`Option#unwrap`, () => Option(10).unwrap())
    .add(`Some#unwrap`, () => Some(10).unwrap())
    .add(`None#unwrap`, () => None().unwrap())

    .add(`Option#unwrapOr`, () => Option(10).unwrapOr("the or"))
    .add(`Some#unwrapOr`, () => Some(10).unwrapOr("the or"))
    .add(`None#unwrapOr`, () => None().unwrapOr("the or"));

  suite
    .on("cycle", function(event: benchmark.Event) {
      console.log(String(event.target));
    })
    .on("complete", function(this: benchmark.Suite) {
      console.log("end");
    });

  suite.run(options);
}
