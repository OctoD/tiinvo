type asChain<
  f extends [funcType, ...funcType[]],
  g extends funcType[] = tail<f>
> = {
  [k in keyof f]: (arg: argType<f[k]>) => argType<lookup<g, k, any>, any>;
};

type argType<F, Else = never> = F extends (arg: infer A) => any ? A : Else;

type funcType = (arg: any) => any;

type lastIndexOf<a extends any[]> = ((...x: a) => void) extends (
  y: any,
  ...z: infer b
) => void
  ? b["length"]
  : never;

type lookup<t, k extends keyof any, el = never> = k extends keyof t
  ? t[k]
  : el;

type tail<a extends any[]> = ((...t: a) => void) extends (
  x: any,
  ...u: infer b
) => void
  ? b
  : never;

type pipe = <f extends [((arg: any) => any | (() => any)), ...Array<(arg: any) => any>]>(
  ...f: f & asChain<f>
) => 
f[0] extends () => any ? () => ReturnType<f[lastIndexOf<f>]> : f[0] extends (arg: infer U) => any ? (arg: U) => ReturnType<f[lastIndexOf<f>]> : never;

// (arg: ArgType<F[0]>) => ReturnType<F[LastIndexOf<F>]>;

/**
 * Creates a pipeline of synchronous functions
 *
 * @example
 * ```ts
 * import { Pipe, Number, Maybe } from 'tiinvo/pipe';
 * 
 * const piped = pipe(
 *    Number.uadd(10), 
 *    Number.umultiply(2), 
 *    Number.iseven, 
 *    Maybe.mapOrElse(() => 'odd', () => 'even'),
 * );
 * 
 * piped(2); // `even`
 * piped(1); // `even`
 * ```
 *
 * @param {Array<(... args: any[]) => any>} args
 * @returns
 */
export const pipe: pipe = (...args) => {
  const [first, ...othersFns] = args;
  return ((arg: unknown) => othersFns.reduce((retval, fn) => fn(retval), first(arg))) as any;
};

export default pipe;
