import { describe, expect, test } from 'vitest';
import * as m from '../maybe';
import * as n from '../num';
import { pipeasync, toasync } from '../pipe.async';

describe(`pipe.async`, () => {
  test(`async version of pipe`, async () => {
    const wait = (ms: number) => (arg: string): Promise<string> => new Promise(resolve => setTimeout(() => resolve(arg), ms));

    const piped = pipeasync(
      toasync(n.uadd(10)),
      toasync(n.umul(2)),
      toasync(n.isEven),
      toasync(m.mapOrElse(() => 'odd', () => 'even')),
      wait(10),
    );

    expect(await piped(2)).toBe(`even`);
    expect(await piped(1)).toBe(`even`);
    expect(await piped(1.3)).toBe(`odd`);
  });
});