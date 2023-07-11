import { describe, expect, test } from 'vitest';
import * as Catch from './Catch.js';
import * as Functors from './Functors.js';
import * as Num from './Num.js';

describe("Catch", () =>
{
  test(Catch.make.name, () =>
  {
    function catchy(arg: number)
    {
      if (Num.isEven(arg))
      {
        throw new TypeError("I expected an odd number :(");
      }

      return arg;
    }

    const c: Functors.CatchableModule<typeof catchy> = {
      [Functors.catchableSync]()
      {
        return {
          catch: (_, args) => args[0] - 1,
          func: catchy,
        };
      }
    };

    const catched = Catch.make(c);

    expect(catched(10)).toEqual(9);
    expect(catched(7)).toEqual(7);

    expect(() => Catch.make({} as any)).toThrow();
  });
});
