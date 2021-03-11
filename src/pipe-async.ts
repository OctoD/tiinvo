type AsChain<
  F extends [FuncType, ...FuncType[]],
  G extends FuncType[] = Tail<F>
> = {
  [K in keyof F]: (
    arg: ArgType<F[K]>
  ) => Promise<ArgType<Lookup<G, K, any>, any>>;
};

type ArgType<F, Else = never> = F extends (arg: infer A) => any ? A : Else;

type FuncType = (arg: any) => any;

type LastIndexOf<T extends any[]> = ((...x: T) => void) extends (
  y: any,
  ...z: infer U
) => void
  ? U["length"]
  : never;

type Lookup<T, K extends keyof any, Else = never> = K extends keyof T
  ? T[K]
  : Else;

type Tail<T extends any[]> = ((...t: T) => void) extends (
  x: any,
  ...u: infer U
) => void
  ? U
  : never;

type PipeAsync = <
  F extends [((arg: any) => Promise<any> | (() => Promise<any>)), ...Array<(arg: any) => Promise<any>>]
>(
  ...f: F & AsChain<F>
) => 
F[0] extends () => any ? () => ReturnType<F[LastIndexOf<F>]> : F[0] extends (arg: infer U) => any ? (arg: U) => ReturnType<F[LastIndexOf<F>]> : never;

/**
 * Creates a pipeline of asynchronous functions.
 *
 * @example
 * ```ts
 * import { array, createStructOf, pipe, pipeasync, toasync } from 'tiinvo'
 *
 * interface Todo {
 *  completed: boolean;
 *  id: number;
 *  title: string;
 * 	userId: number;
 * }
 *
 * const fetchapi = (url: string) => fetch(url);
 * const tojson = (response: Response) => response.json();
 * const filtercompleted = (todo: Todo) => todo.completed;
 * const mapid = (todo: Todo) => todo.id;
 *
 * const mapcompletedids = pipe(
 *    array.filter(filtercompleted),
 *    array.map(mapid),
 * )
 *
 * const getactivetodoids = pipeasync(
 *    fetchapi,
 *    tojson,
 *    toasync(mapcompletedids),
 * );
 *
 * await getactivetodoids('https://jsonplaceholder.typicode.com/todos');
 * ```
 *
 * @param {Array<(... args: any[]) => any>} args
 * @returns
 */
export const pipeasync: PipeAsync = (...args) => {
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
