type AsChain<
  F extends [FuncType, ...FuncType[]],
  G extends FuncType[] = Tail<F>
> = {
  [K in keyof F]: (arg: ArgType<F[K]>) => ArgType<Lookup<G, K, any>, any>;
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

type Pipe = <F extends [(arg: any) => any, ...Array<(arg: any) => any>]>(
  ...f: F & AsChain<F>
) => (arg: ArgType<F[0]>) => ReturnType<F[LastIndexOf<F>]>;

/**
 *
 * @example
 * const add = (toadd: number) => (arg: number) => arg + toadd;
 * const multiply = (multiplier: number) => (arg: number) => arg * multiplier;
 * const printiseven = (arg: number) => arg % 2 === 0 ? 'even' : 'odd';
 *
 * pipe(add(10), multiply(2), printiseven)(2); // 24
 *
 * @param {Array<(... args: any[]) => any>} args
 * @returns
 */
export const pipe: Pipe = (...args) => {
  const [first, ...othersFns] = args;
  return (arg) => othersFns.reduce((retval, fn) => fn(retval), first(arg));
};
