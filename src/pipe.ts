type asChain<
  f extends [funcType, ...funcType[]],
  g extends funcType[] = tail<f>
  > = {
    [k in keyof f]: (arg: argType<f[k]>) => argType<lookup<g, k, any>, any>;
  };

type asAsyncChain<
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

type pipeasync = <
  f extends [((arg: any) => Promise<any> | (() => Promise<any>)), ...Array<(arg: any) => Promise<any>>]
  >(
  ...f: f & asAsyncChain<f>
) =>
  f[0] extends () => any ? () => ReturnType<f[lastIndexOf<f>]> : f[0] extends (arg: infer U) => any ? (arg: U) => ReturnType<f[lastIndexOf<f>]> : never;

/**
 * Same as the sync version, but handles promises.
 * 
 * @since 4.0.0
 */
export const async: pipeasync = (...args) => {
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
export const sync: pipe = (...args) => {
  const [first, ...othersFns] = args;
  type arg0 = argType<typeof first>;

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
