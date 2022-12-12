export type AsChain<
  f extends [FuncType, ...FuncType[]],
  g extends FuncType[] = Tail<f>
> = {
    [k in keyof f]: (arg: ArgType<f[k]>) => ArgType<Lookup<g, k, any>, any>;
  };

export type AsAsyncChain<
  f extends [FuncType, ...FuncType[]],
  g extends FuncType[] = Tail<f>
> = {
    [k in keyof f]: (
      arg: ArgType<f[k]>
    ) => Promise<ArgType<Lookup<g, k, any>, any>>;
  };

export type ArgType<F, Else = never> = F extends (arg: infer A) => any ? A : Else;

export type FuncType = (arg: any) => any;

export type LastIndexOf<a extends any[]> = ((...x: a) => void) extends (
  y: any,
  ...z: infer b
) => void
  ? b["length"]
  : never;

export type Lookup<t, k extends keyof any, el = never> = k extends keyof t
  ? t[k]
  : el;

export type Tail<a extends any[]> = ((...t: a) => void) extends (
  x: any,
  ...u: infer b
) => void
  ? b
  : never;

export type Pipe = <f extends [((arg: any) => any | (() => any)), ...Array<(arg: any) => any>]>(
  ...f: f & AsChain<f>
) =>
  f[0] extends () => any ? () => ReturnType<f[LastIndexOf<f>]> : f[0] extends (arg: infer U) => any ? (arg: U) => ReturnType<f[LastIndexOf<f>]> : never;

export type PipeAsync = <
  f extends [((arg: any) => Promise<any> | (() => Promise<any>)), ...Array<(arg: any) => Promise<any>>]
>(
  ...f: f & AsAsyncChain<f>
) =>
  f[0] extends () => any ? () => ReturnType<f[LastIndexOf<f>]> : f[0] extends (arg: infer U) => any ? (arg: U) => ReturnType<f[LastIndexOf<f>]> : never;

/**
 * Same as the sync version, but handles promises.
 * 
 * @since 4.0.0
 */
export const async: PipeAsync = (...args) => {
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
 * Creates a pipeline of synchronous functions
 * 
 * @example
 *
 * ```ts
 * import { Num, Pipe } from 'tiinvo'
 * 
 * const vat = Pipe.sync(Num.div(100), Num.mul(22));
 * 
 * vat(100)     // 22
 * vat(150)     // 33
 * vat(200)     // 44
 * ```
 *
 * @since 4.0.0
 */
export const sync: Pipe = (...args) => {
  const [first, ...othersFns] = args;
  type arg0 = ArgType<typeof first>;

  switch (args.length) {
    case 0: return (a: arg0) => a;
    case 1: return first;
    case 2: return (arg: arg0) => args[1](first(arg));
    case 3: return (arg: arg0) => args[2](args[1](first(arg)));
    case 4: return (arg: arg0) => args[3](args[2](args[1](first(arg))));
    case 5: return (arg: arg0) => args[4](args[3](args[2](args[1](first(arg)))));
    case 6: return (arg: arg0) => args[5](args[4](args[3](args[2](args[1](first(arg))))));
    case 7: return (arg: arg0) => args[6](args[5](args[4](args[3](args[2](args[1](first(arg)))))));
    case 8: return (arg: arg0) => args[7](args[6](args[5](args[4](args[3](args[2](args[1](first(arg))))))));
    case 9: return (arg: arg0) => args[8](args[7](args[6](args[5](args[4](args[3](args[2](args[1](first(arg)))))))));
    case 10: return (arg: arg0) => args[9](args[8](args[7](args[6](args[5](args[4](args[3](args[2](args[1](first(arg))))))))));
    default: return ((arg: arg0) => othersFns.reduce((retval, fn) => fn(retval), first(arg))) as any;
  }
};
