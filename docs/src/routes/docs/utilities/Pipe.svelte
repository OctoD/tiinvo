<script>
  import DocItemTitle from "$lib/DocItemTitle.svelte";
  import PageTitle from "$lib/PageTitle.svelte";
  import PrismJs from "$lib/PrismJS.svelte";
  import SinceVersion from "$lib/SinceVersion.svelte";
</script>

<PageTitle title="docs - Pipe" description="Pipe" />

<h2>Pipe</h2>

<article>
  <DocItemTitle title="pipe" />
  <p>Creates a pipeline of synchronous functions</p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    language="ts"
    code={`
import { Pipe, Number, Maybe } from 'tiinvo/pipe';

const piped = pipe(
   Number.uadd(10), 
   Number.umultiply(2), 
   Number.iseven, 
   Maybe.mapOrElse(() => 'odd', () => 'even'),
);

piped(2); // "even"
piped(1); // "even"
    `}
  />
</article>
<article>
  <DocItemTitle title="pipeasync" />
  <p>Creates a pipeline of asynchronous functions.</p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    language="ts"
    code={`
import { PipeAsync, Array, Functors } from 'tiinvo/pipe.async'

interface Todo {
  completed: boolean;
  id: number;
  title: string;
	 userId: number;
}

const fetchapi = (url: string) => fetch(url);
const tojson = (response: Response) => response.json();
const filtercompleted: Functors.predicateE<Todo> = todo => todo.completed;
const mapid: Functors.map<Todo, number> = todo => todo.id;

const mapcompletedids = pipe(
  Array.filter(filtercompleted),
  Array.map(mapid),
)
 
const mapcompleteidsasync = PipeAsync.toasync(mapcompletedids);

const getactivetodoids = PipeAsync.pipeasync(
  fetchapi,
  tojson,
  mapcompleteidsasync,
);

await getactivetodoids('https://jsonplaceholder.typicode.com/todos');
    `}
  />
</article>
<article>
  <DocItemTitle title="toasync" />
  <p>Returns an async version of a function <code>f</code>.</p>
  <SinceVersion>3.0.0</SinceVersion>
  <PrismJs
    language="ts"
    code={`
import { PipeAsync } from 'tiinvo'

const f = (x: number) => x + 1;
const g = PipeAsync.toasync(f);
g(1) // returns a Promise<number>
    `}
  />
</article>
