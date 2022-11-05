import { describe, expect, test, vitest } from 'vitest';
import * as Pipe from './Pipe.js';
import * as Num from './Num.js';

describe(`Pipe`, () => {
  test(Pipe.async.name, async () => {

    async function test1(x: number) {
      return x + 1;
    }
    async function test2(x: number) {
      return x + 2;
    }
    async function test3(x: number) {
      return x + 3;
    }

    const x1 = vitest.fn(test1);
    const x2 = vitest.fn(test2);
    const x3 = vitest.fn(test3);

    const piped = Pipe.async(x1, x2, x3);

    expect(await piped(1)).toEqual(7);
    expect(x1).toHaveBeenCalled();
    expect(x1).toBeCalledWith(1);
    expect(x2).toHaveBeenCalled();
    expect(x2).toBeCalledWith(2);
    expect(x3).toHaveBeenCalled();
    expect(x3).toBeCalledWith(4);
  });
  test(Pipe.sync.name, () => {
    const vat = Pipe.sync(Num.div(100), Num.mul(22));

    expect(vat(100)).toEqual(22);
    expect(vat(150)).toEqual(33);
    expect(vat(200)).toEqual(44);
  });

  test(`o(n) pipe`, () => {
    const f = Num.add(1);
    // @ts-ignore
    const p0 = Pipe.sync();
    const p1 = Pipe.sync(f);
    const p2 = Pipe.sync(f, f);
    const p3 = Pipe.sync(f, f, f);
    const p4 = Pipe.sync(f, f, f, f);
    const p5 = Pipe.sync(f, f, f, f, f);
    const p6 = Pipe.sync(f, f, f, f, f, f);
    const p7 = Pipe.sync(f, f, f, f, f, f, f);
    const p8 = Pipe.sync(f, f, f, f, f, f, f, f);
    const p9 = Pipe.sync(f, f, f, f, f, f, f, f, f);
    const p10 = Pipe.sync(f, f, f, f, f, f, f, f, f, f);
    const p11 = Pipe.sync(f, f, f, f, f, f, f, f, f, f, f);

    expect(p0(0)).toBe(0);
    expect(p1(0)).toBe(1);
    expect(p2(0)).toBe(2);
    expect(p3(0)).toBe(3);
    expect(p4(0)).toBe(4);
    expect(p5(0)).toBe(5);
    expect(p6(0)).toBe(6);
    expect(p7(0)).toBe(7);
    expect(p8(0)).toBe(8);
    expect(p9(0)).toBe(9);
    expect(p10(0)).toBe(10);
    expect(p11(0)).toBe(11);
  });
});
