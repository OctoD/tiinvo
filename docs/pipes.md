## pipe

Creates a pipeline of synchronous functions

<!-- tabs:start --->

#### **node**

```ts
import { pipe, num, maybe } from 'tiinvo';

const piped = pipe(
   num.uadd(10), 
   num.umultiply(2), 
   maybe.fromfunction(num.iseven), 
   maybe.fold(`odd`, `even`),
);

piped(2); // 24
```

#### **deno/esm**

```ts
import { pipe, num, maybe } from 'https://cdn.skypack.dev/tiinvo?dts';

const piped = pipe(
   num.uadd(10), 
   num.umultiply(2), 
   maybe.fromfunction(num.iseven), 
   maybe.fold(`odd`, `even`),
);

piped(2); // 24
```

<!-- tabs:end --->

## pipeasync

Same as `pipe`, but it accepts async functions. 

To use a sync function into an async pipeline, you have to wrap it with the `toasync`.

<!-- tabs:start --->

#### **node**

```ts
import { array, createStructOf, pipe, pipeasync, toasync } from 'tiinvo';

interface Todo {
 completed: boolean;
 id: number;
 title: string;
	userId: number;
}

const fetchapi = (url: string) => fetch(url);
const tojson = (response: Response) => response.json();
const filtercompleted = (todo: Todo) => todo.completed;
const mapid = (todo: Todo) => todo.id;

const mapcompletedids = pipe(
   array.filter(filtercompleted),
   array.map(mapid),
)

const getactivetodoids = pipeasync(
   fetchapi,
   tojson,
   // note: if you do not wrap it, it will explode
   toasync(mapcompletedids),
);

await getactivetodoids('https://jsonplaceholder.typicode.com/todos');
```

#### **deno/esm**

```ts
import { array, createStructOf, pipe, pipeasync, toasync } from 'https://cdn.skypack.dev/tiinvo?dts';

interface Todo {
 completed: boolean;
 id: number;
 title: string;
	userId: number;
}

const fetchapi = (url: string) => fetch(url);
const tojson = (response: Response) => response.json();
const filtercompleted = (todo: Todo) => todo.completed;
const mapid = (todo: Todo) => todo.id;

const mapcompletedids = pipe(
   array.filter(filtercompleted),
   array.map(mapid),
)

const getactivetodoids = pipeasync(
   fetchapi,
   tojson,
   toasync(mapcompletedids),
);

await getactivetodoids('https://jsonplaceholder.typicode.com/todos');
```

<!-- tabs:end --->