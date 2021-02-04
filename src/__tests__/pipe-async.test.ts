import { toasync } from "../applicative";
import * as array from "../array";
import { pipe } from "../pipe";
import { pipeasync } from "../pipe-async";

const multiply = (by: number) => (value: number) => value * by;
const stringify = (arg: number) => String(arg);

describe(`pipe-async`, () => {
  it(`works with async functions`, async () => {
    const fn1 = async (arg: number) => arg;

    const asyncfn = pipeasync(fn1, toasync(multiply(2)), toasync(stringify));

    const result1 = await asyncfn(2);
    const result2 = await asyncfn(10);

    expect(result1).toBe("4");
    expect(result2).toBe("20");
  });

  it(`tests example`, async () => {
    interface Todo {
      completed: boolean;
      id: number;
      title: string;
      userId: number;
    }

    //#region mocks

    class Response {
      public constructor(private value: string) {}

      async json() {
        return JSON.parse(this.value);
      }
    }

    const jsonpayload =
      '[{"completed":false},{"completed":true,"id":10},{"completed":true,"id":2}]';

    const fetch = async (_: string) => new Response(jsonpayload);

    //#endregion

    const fetchapi = (url: string) => fetch(url);
    const tojson = (response: Response) => response.json();
    const filtercompleted = (todo: Todo) => todo.completed;
    const mapid = (todo: Todo) => todo.id;

    const mapcompletedids = pipe(
      array.filter(filtercompleted),
      array.map(mapid)
    );

    const mapcompletedidsasync = toasync(mapcompletedids);

    const getactivetodoids = pipeasync(fetchapi, tojson, mapcompletedidsasync);

    const result = await getactivetodoids(
      "https://jsonplaceholder.typicode.com/todos"
    );

    expect(result.length).toBe(2);
    expect(result.join()).toBe("10,2");
  });
});
