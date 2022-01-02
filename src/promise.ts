export type promiseOf<a> = a extends Promise<infer b> ? b : never;

export type promisesOf<a extends any[]> = {
  [key in keyof a]: promiseOf<a[key]>
}
