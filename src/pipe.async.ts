import { argsOf, returnTypeOf } from './fn';

type asChain<
  f extends [funcType, ...funcType[]],
  g extends funcType[] = tail<f>
> = {
  [k in keyof f]: (
    arg: argType<f[k]>
  ) => Promise<argType<lookup<g, k, any>, any>>;
};

type argType<F, Else = never> = F extends (arg: infer A) => any ? A : Else;

type funcType = (arg: any) => any;

type lastIndexOf<a extends any[]> = ((...x: a) => void) extends (
  y: any,
  ...z: infer b
) => void
  ? b["length"]
  : never;

type lookup<a, k extends keyof any, el = never> = k extends keyof a
  ? a[k]
  : el;

type tail<a extends any[]> = ((...t: a) => void) extends (
  x: any,
  ...u: infer b
) => void
  ? b
  : never;

type pipeasync = <
  f extends [((arg: any) => Promise<any> | (() => Promise<any>)), ...Array<(arg: any) => Promise<any>>]
>(
  ...f: f & asChain<f>
) => 
f[0] extends () => any ? () => ReturnType<f[lastIndexOf<f>]> : f[0] extends (arg: infer U) => any ? (arg: U) => ReturnType<f[lastIndexOf<f>]> : never;

/**
 * Creates a pipeline of asynchronous functions.
 *
 * ```typescript
 * import { pipeasync, toasync } from 'tiinvo/pipe.async'
 * import * as array from 'tiinvo/array'
 * import * as f from 'tiinvo/functors'
 *
 * interface Todo {
 *   completed: boolean;
 *   id: number;
 *   title: string;
 * 	 userId: number;
 * }
 *
 * const fetchapi = (url: string) => fetch(url);
 * const tojson = (response: Response) => response.json();
 * const filtercompleted: f.predicateE<Todo> = todo => todo.completed;
 * const mapid: f.map<Todo, number> = todo => todo.id;
 *
 * const mapcompletedids = pipe(
 *   array.filter(filtercompleted),
 *   array.map(mapid),
 * )
 * 
 * const mapcompleteidsasync = toasync(mapcompletedids);
 *
 * const getactivetodoids = pipeasync(
 *   fetchapi,
 *   tojson,
 *   mapcompleteidsasync,
 * );
 *
 * await getactivetodoids('https://jsonplaceholder.typicode.com/todos');
 * ```
 *
 * @param {Array<(... args: any[]) => any>} args
 * @returns
 * @since 3.0.0
 */
export const pipeasync: pipeasync = (...args) => {
  const [first, ...othersFns] = args;
  return (async (arg: any) => {
    const firstvalue = await first(arg);
    let latestvalue = firstvalue;

    for (var i = 0; i < othersFns.length; i++) {
      latestvalue = await othersFns[i](latestvalue);
    }

    return latestvalue;
  }) as any;
};

/**
 * Returns an async version of a function `f`
 * 
 * ```typescript
 * import { toasync } from 'tiinvo/pipe.async'
 * 
 * const f = (x: number) => x + 1;
 * 
 * const g = toasync(f);
 * 
 * g(1) // returns a Promise<number>
 * ```
 * 
 * @param f 
 * @returns 
 * @since 3.0.0
 */
export const toasync = <f extends (... arg: any[]) => any>(f: f): (... args: argsOf<f>) => Promise<returnTypeOf<f>> => (... args) => Promise.resolve(f(... args));