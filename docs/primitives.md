Primitive functions are all functions which involve primitive types

* [array](primitives/array.md)
* [number](primitives/num.md)
* [object](primitives/obj.md)
* [string](primitives/str.md)

These functions are ideal for composition

<!-- tabs:start --->

#### **node**

```ts
import { array, obj, num, str, pipe } from 'tiinvo';

interface User {
  bday: string;
  firstname: string;
  lastname: string;
}

interface UserMap {
  [index: string]: User;
}

const mapbday = (user: User) => user.bday;
const mapfirstname = (user: User) => user.firstname;
const maplastname = (user: User) => user.lastname;
const mapdisplayname = pipe(
  array.fromfunctions(mapfirstname, maplastname),
  array.join(' ')
);

const sortbybday = (user1: User, user2: User) => 
  str.sortasc(mapbday(user1), mapbday(user2))

const getdisplaynames = pipe(
  obj.entries,
  array.unsafecast<[string, User]>(),
  array.map(([key, user]: [string, User]) => user),
  array.sort(sortbybday),
  array.map(mapdisplayname),
) as FnUnary<UserMap, string[]>

getdisplaynames({
  '100': { bday: `1980-02-01`, firstname: `hello`, lastname: `world` },
  '200': { bday: `1992-08-31`, firstname: `foobar`, lastname: `baz` },
  '300': { bday: `1979-05-21`, firstname: `john`, lastname: `doe` },
}); // [ `john doe`, `hello world`, `foobar baz` ]
```

#### **deno/esm**

```ts
import { array, obj, num, str, pipe } from 'https://cdn.skypack.dev/tiinvo?dts';

interface User {
  bday: string;
  firstname: string;
  lastname: string;
}

interface UserMap {
  [index: string]: User;
}

const mapbday = (user: User) => user.bday;
const mapfirstname = (user: User) => user.firstname;
const maplastname = (user: User) => user.lastname;
const mapdisplayname = pipe(
  array.fromfunctions(mapfirstname, maplastname),
  array.join(' ')
);

const sortbybday = (user1: User, user2: User) => 
  str.sortasc(mapbday(user1), mapbday(user2))

const getdisplaynames = pipe(
  obj.entries,
  array.unsafecast<[string, User]>(),
  array.map(([key, user]: [string, User]) => user),
  array.sort(sortbybday),
  array.map(mapdisplayname),
) as FnUnary<UserMap, string[]>

getdisplaynames({
  '100': { bday: `1980-02-01`, firstname: `hello`, lastname: `world` },
  '200': { bday: `1992-08-31`, firstname: `foobar`, lastname: `baz` },
  '300': { bday: `1979-05-21`, firstname: `john`, lastname: `doe` },
}); // [ `john doe`, `hello world`, `foobar baz` ]
```

<!-- tabs:end --->
