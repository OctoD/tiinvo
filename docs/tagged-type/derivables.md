Derivables are function which wrap a unary function and return a new function with the same signature.
Calling this new function will return a `TaggedType`.

They are really useful when encapsulating functions and using them in pipelines.

Here it is an example using option:

```ts
import { array, option, pipe } from 'tiinvo';

interface User { 
   data: UserData | undefined; 
}

interface UserData {
   firstname: string;
   lastname: string;
}

const mapuserdata = (user: User) => user.data;
const mapfirstname = (userdata: UserData) => userdata.firstname;
const maplastname = (userdata: UserData) => userdata.lastname;
const mapfullname = pipe(
   array.fromfunctions(mapfirstname, maplastname), 
   array.join(' ')
);

// here we go
const mapfullnamesafe = pipe(
   option.fromfunction(mapuserdata),
   option.map(mapfullname),
   option.unwrapOr('unknown')
);

mapfullnamesafe({ 
   data: undefined 
})                      // 'unknown'
mapfullnamesafe({ 
   data: { 
      firstname: `hello`, 
      lastname: `world` 
   } 
})                      // 'hello world'
```

## createderivefromfunction  <!-- {docsify-ignore} -->

Creates a function `Fn1` which wraps a function `Fn2`.
Once the `Fn2` is called, it returns a `Tagged` type with the value of `ReturnValue<Fn2>`

This function comes very handy when dealing with pipelines

```ts
import { createderivefromfunction } from 'tiinvo';

const mytagged = taggedFactory('foo');
const mytaggedfromfunction = createderivefromfunction(mytagged);

const doublefn = (arg: number) => arg * 2;
const mytaggeddouble = mytaggedfromfunction(doublefn);

doublefn(10) // 20
mytaggeddouble(10) // { __tag: 'foo', value: 20 }
```

An example using `Option`

```ts
import { option, pipe } from 'tiinvo';

interface User {
   id: number;
   data?: UserData;
}

interface UserData {
   age: number;
   name: string;
   surname: string;
}

const mapuserdata = (user: User) => user.data!;
const mapuserdataname = (userdata: UserData) => userdata.name;

const getname = pipe(
   option.fromfunction(mapuserdata),
   option.map(mapuserdataname),
   option.unwrapOr('no name')
);

getname({ id: 100 }) // 'no name'
getname({ id: 50, data: { age: 433, name: 'Thomas', surname: 'Hobbes' } }) // 'Thomas'
```