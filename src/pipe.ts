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
  type arg0 = argType<typeof first>;

  switch (args.length) {
    case 0:
      return (a: arg0) => a;
    case 1:
      return first;
    case 2:
      return (arg: arg0) => args[1](first(arg));
    case 3:
      return (arg: arg0) => args[2](args[1](first(arg)));
    case 4:
      return (arg: arg0) => args[3](args[2](args[1](first(arg))));
    case 5:
      return (arg: arg0) => args[4](args[3](args[2](args[1](first(arg)))));
    case 6:
      return (arg: arg0) => args[5](args[4](args[3](args[2](args[1](first(arg))))));
    case 7:
      return (arg: arg0) => args[6](args[5](args[4](args[3](args[2](args[1](first(arg)))))));
    case 8:
      return (arg: arg0) => args[7](args[6](args[5](args[4](args[3](args[2](args[1](first(arg))))))));
    case 9:
      return (arg: arg0) => args[8](args[7](args[6](args[5](args[4](args[3](args[2](args[1](first(arg)))))))));
    case 10:
      return (arg: arg0) => args[9](args[8](args[7](args[6](args[5](args[4](args[3](args[2](args[1](first(arg))))))))));
    default:
      return ((arg: arg0) => othersFns.reduce((retval, fn) => fn(retval), first(arg))) as any;
  }
};

export default pipe;
