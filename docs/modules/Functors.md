[tiinvo](../README.md) / [Exports](../modules.md) / Functors

# Namespace: Functors

## Table of contents

### Factories

- [Buildable](Functors.md#buildable)
- [BuildableMobule](Functors.md#buildablemobule)

### Type Aliases

- [DefaultableModule](Functors.md#defaultablemodule)
- [Catchable](Functors.md#catchable)
- [CatchableAsyncModule](Functors.md#catchableasyncmodule)
- [CatchableSyncModule](Functors.md#catchablesyncmodule)
- [CatchableModule](Functors.md#catchablemodule)
- [ComparableResult](Functors.md#comparableresult)
- [Comparable](Functors.md#comparable)
- [ComparableModule](Functors.md#comparablemodule)
- [Equatable](Functors.md#equatable)
- [EquatableModule](Functors.md#equatablemodule)
- [Guardable](Functors.md#guardable)
- [GuardableModule](Functors.md#guardablemodule)
- [Filterable](Functors.md#filterable)
- [FilterableModule](Functors.md#filterablemodule)
- [FilterMappableModule](Functors.md#filtermappablemodule)
- [FilterReduceableModule](Functors.md#filterreduceablemodule)

### Variables

- [catchableAsync](Functors.md#catchableasync)
- [catchableSync](Functors.md#catchablesync)

### Mappables

- [Mappable](Functors.md#mappable)
- [MappableModule](Functors.md#mappablemodule)
- [Reduceable](Functors.md#reduceable)
- [ReduceableModule](Functors.md#reduceablemodule)

## Factories

### Buildable

Ƭ **Buildable**<`a`\>: (`a?`: `Partial`<`a`\>) => `a`

#### Type parameters

| Name |
| :------ |
| `a` |

#### Type declaration

▸ (`a?`): `a`

Represents a builder (or factory) function.

It accepts a `Partial<a>` and must return a `a` type.

**`Example`**

```ts
import { Functors } from 'tiinvo';

export interface User {
   name: string;
   surname: string;
}

export type t = User;

export const make: Functors.Buildable<t> = (p = {}) => ({
   name: p.name ?? '',
   surname: p.surname ?? '',
})

make()                                   
// { name: '', surname: '' }

make({ name: 'John' })                   
// { name: 'John', surname: '' }

make({ name: 'John', surname: 'Doe' })   
// { name: 'John', surname: 'Doe' }
```

**`Since`**

4.0.0

##### Parameters

| Name | Type |
| :------ | :------ |
| `a?` | `Partial`<`a`\> |

##### Returns

`a`

#### Defined in

[src/Functors.ts:38](https://github.com/OctoD/tiinvo/blob/44a62fc/src/Functors.ts#L38)

___

### BuildableMobule

Ƭ **BuildableMobule**<`a`\>: `Object`

Represents a builder (or factory) module.

This module must have a `Buildable<a>` function called `make`.

**`Example`**

```ts
////// module User.ts
import { Functors } from 'tiinvo';

export interface User {
   name: string;
   surname: string;
}

export type t = User;

export const make: Functors.Buildable<t> = (p = {}) => ({
   name: p.name ?? '',
   surname: p.surname ?? '',
})

/////// Module Foo.ts
import * as User from './User.ts';
import { Functors } from 'tiinvo';

export const greet = (x: Functors.BuildableMobule<User.t>, y: Partial<ReturnType<Functors.Buildable<User.t>>>) => {
   const z = x.make(y);
   return `hello ${z.name} ${z.surname}`
}

greet(User, { name: 'John', surname: 'Doe' })  // "hello John Doe"
greet(User, "" as any)                         // "hello  "
```

**`Since`**

4.0.0

#### Type parameters

| Name |
| :------ |
| `a` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `make` | [`Buildable`](Functors.md#buildable)<`a`\> |

#### Defined in

[src/Functors.ts:79](https://github.com/OctoD/tiinvo/blob/44a62fc/src/Functors.ts#L79)

## Type Aliases

### DefaultableModule

Ƭ **DefaultableModule**<`a`\>: `Object`

The default value module-like.

**`Example`**

```ts
////// module User.ts
export interface User {
   name: string;
   surnname: string;
}

export type t = User;

export const toString = (t: t) => `hello ${t.name} ${t.surname}`;

export default {
   name: "name",
   surname: "surname",
}

////// module Animal.ts
export interface Animal {
   name: string;
   legs: number;
} 

export type t = Animal;

export const toString = (t: t) => `a ${t.name} has ${t.legs} legs`;

export default {
   name: "raccoon",
   legs: 4, 
}

////// module X.ts
import * as Animal.ts
import * as User.ts
import { Fn, Functors } from 'tiinvo'

type Stringifiable<a> = Record<'toString', Fn.Unary<a, string>> & Functors.DefaultableModule<a>
const describe = <a>(x: Stringifiable<a>) => x.toString(x.default);

describe(Animal)     // "a raccoon has 4 legs"
describe(User)       // "hello name surname"
```

**`Since`**

4.0.0

#### Type parameters

| Name |
| :------ |
| `a` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `default` | `a` |

#### Defined in

[src/Functors.ts:133](https://github.com/OctoD/tiinvo/blob/44a62fc/src/Functors.ts#L133)

___

### Catchable

Ƭ **Catchable**<`f`\>: `Object`

Represents a catchable functor

**`Since`**

4.0.0

#### Type parameters

| Name | Type |
| :------ | :------ |
| `f` | extends [`AnyFn`](Fn.md#anyfn) |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `catch` | (`error`: `Error`, `args`: `Parameters`<`f`\>) => `ReturnType`<`f`\> |
| `func` | `f` |

#### Defined in

[src/Functors.ts:157](https://github.com/OctoD/tiinvo/blob/44a62fc/src/Functors.ts#L157)

___

### CatchableAsyncModule

Ƭ **CatchableAsyncModule**<`f`\>: `Object`

Represents a catchable async module functor

**`Since`**

4.0.0

#### Type parameters

| Name | Type |
| :------ | :------ |
| `f` | extends [`AnyAsyncFn`](Fn.md#anyasyncfn) |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `[catchableAsync]` | () => [`Catchable`](Functors.md#catchable)<`f`\> |

#### Defined in

[src/Functors.ts:167](https://github.com/OctoD/tiinvo/blob/44a62fc/src/Functors.ts#L167)

___

### CatchableSyncModule

Ƭ **CatchableSyncModule**<`f`\>: `Object`

Represents a catchable sync module functor

**`Since`**

4.0.0

#### Type parameters

| Name | Type |
| :------ | :------ |
| `f` | extends [`AnyFn`](Fn.md#anyfn) |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `[catchableSync]` | () => [`Catchable`](Functors.md#catchable)<`f`\> |

#### Defined in

[src/Functors.ts:176](https://github.com/OctoD/tiinvo/blob/44a62fc/src/Functors.ts#L176)

___

### CatchableModule

Ƭ **CatchableModule**<`f`\>: [`CatchableAsyncModule`](Functors.md#catchableasyncmodule)<`f`\> \| [`CatchableSyncModule`](Functors.md#catchablesyncmodule)<`f`\>

Represents a catchable module functor

**`Since`**

4.0.0

#### Type parameters

| Name | Type |
| :------ | :------ |
| `f` | extends [`AnyFn`](Fn.md#anyfn) |

#### Defined in

[src/Functors.ts:185](https://github.com/OctoD/tiinvo/blob/44a62fc/src/Functors.ts#L185)

___

### ComparableResult

Ƭ **ComparableResult**: ``-1`` \| ``0`` \| ``1``

Is the result of a comparison made by a `Comparable<A>` functor

- -1 means that a is less than b
- 0 means that a equals to b
- 1 means that a is more than b

**`Since`**

4.0.0

#### Defined in

[src/Functors.ts:200](https://github.com/OctoD/tiinvo/blob/44a62fc/src/Functors.ts#L200)

___

### Comparable

Ƭ **Comparable**<`A`\>: (`a`: `A`, `b`: `A`) => [`ComparableResult`](Functors.md#comparableresult)(`a`: `A`) => (`b`: `A`) => [`ComparableResult`](Functors.md#comparableresult)

#### Type parameters

| Name | Description |
| :------ | :------ |
| `A` | is the type of the compared values |

#### Type declaration

▸ (`a`, `b`): [`ComparableResult`](Functors.md#comparableresult)

Is a comparable functor

**`Since`**

4.0.0

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `A` | the first value to compare |
| `b` | `A` | the second value to compare |

##### Returns

[`ComparableResult`](Functors.md#comparableresult)

- -1 means that a is less than b
- 0 means that a equals to b
- 1 means that a is more than b

▸ (`a`): (`b`: `A`) => [`ComparableResult`](Functors.md#comparableresult)

Is a comparable functor

**`Since`**

4.0.0

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `A` | the first value to compare |

##### Returns

`fn`

- -1 means that a is less than b
- 0 means that a equals to b
- 1 means that a is more than b

▸ (`b`): [`ComparableResult`](Functors.md#comparableresult)

##### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `A` |

##### Returns

[`ComparableResult`](Functors.md#comparableresult)

#### Defined in

[src/Functors.ts:215](https://github.com/OctoD/tiinvo/blob/44a62fc/src/Functors.ts#L215)

___

### ComparableModule

Ƭ **ComparableModule**<`a`\>: `Object`

Is a comparable functor module

**`Since`**

4.0.0

#### Type parameters

| Name | Description |
| :------ | :------ |
| `a` | is the type of the compared values |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `cmp` | [`Comparable`](Functors.md#comparable)<`a`\> |

#### Defined in

[src/Functors.ts:226](https://github.com/OctoD/tiinvo/blob/44a62fc/src/Functors.ts#L226)

___

### Equatable

Ƭ **Equatable**<`a`\>: (`a`: `a`, `b`: `a`) => `boolean`(`a`: `a`) => (`b`: `a`) => `boolean`

#### Type parameters

| Name | Description |
| :------ | :------ |
| `a` | is the type of the compared values |

#### Type declaration

▸ (`a`, `b`): `boolean`

Is a comparable functor

**`Example`**

```ts
import { Functors, Str, Num } from 'tiinvo';

module LivingBeen {
   export type LivingBeen<A> = {
     name: string;
   } & A;

   export type T<A> = LivingBeen<A>;

   export const eq = <A>(a: T<A>, b: T<A>): boolean => {
     return Str.eq(a.name, b.name);
   }
}

module Animal {
   export type Animal = LivingBeen.T<{
     legs: number;
   }>;

   export type T = Animal;

   export const make: Functors.Buildable<T> = (p = {}) => ({
     name: p.name ?? '',
     legs: p.legs ?? 0,
   })

   export const eq: Functors.Equatable<T> = (a, b) => {
     return LivingBeen.eq(a, b) && Num.eq(a.legs, b.legs)
   }
}

module Person {
   export type Person = LivingBeen.T<{
     surname: string;
   }>

   export type T = Person;

   export const make: Functors.Buildable<T> = (p = {}) => ({
     name: p.name ?? '',
     surname: p.surname ?? '',
   })

   export const eq = (a: T, b: T) => {
     return LivingBeen.eq(a, b) && Str.eq(a.surname, b.surname)
   }
}

const duck = Animal.make({ legs: 2, name: 'duck' })
const donaldDuck = Animal.make({ legs: 2, name: 'Donald' })
const donald = Person.make({ name: 'Donald', surname: 'Duck' });

LivingBeen.eq(duck, donaldDuck)                            // false
LivingBeen.eq(donald, donaldDuck as LivingBeen.T<any>)     // true
```

**`Since`**

4.0.0

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `a` | the first value to compare |
| `b` | `a` | the second value to compare |

##### Returns

`boolean`

true if a and b are equal

▸ (`a`): (`b`: `a`) => `boolean`

Is a comparable functor

**`Example`**

```ts
import { Functors, Str, Num } from 'tiinvo';

module LivingBeen {
   export type LivingBeen<A> = {
     name: string;
   } & A;

   export type T<A> = LivingBeen<A>;

   export const eq = <A>(a: T<A>, b: T<A>): boolean => {
     return Str.eq(a.name, b.name);
   }
}

module Animal {
   export type Animal = LivingBeen.T<{
     legs: number;
   }>;

   export type T = Animal;

   export const make: Functors.Buildable<T> = (p = {}) => ({
     name: p.name ?? '',
     legs: p.legs ?? 0,
   })

   export const eq: Functors.Equatable<T> = (a, b) => {
     return LivingBeen.eq(a, b) && Num.eq(a.legs, b.legs)
   }
}

module Person {
   export type Person = LivingBeen.T<{
     surname: string;
   }>

   export type T = Person;

   export const make: Functors.Buildable<T> = (p = {}) => ({
     name: p.name ?? '',
     surname: p.surname ?? '',
   })

   export const eq = (a: T, b: T) => {
     return LivingBeen.eq(a, b) && Str.eq(a.surname, b.surname)
   }
}

const duck = Animal.make({ legs: 2, name: 'duck' })
const donaldDuck = Animal.make({ legs: 2, name: 'Donald' })
const donald = Person.make({ name: 'Donald', surname: 'Duck' });

LivingBeen.eq(duck, donaldDuck)                            // false
LivingBeen.eq(donald, donaldDuck as LivingBeen.T<any>)     // true
```

**`Since`**

4.0.0

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `a` | the first value to compare |

##### Returns

`fn`

true if a and b are equal

▸ (`b`): `boolean`

##### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `a` |

##### Returns

`boolean`

#### Defined in

[src/Functors.ts:299](https://github.com/OctoD/tiinvo/blob/44a62fc/src/Functors.ts#L299)

___

### EquatableModule

Ƭ **EquatableModule**<`a`\>: `Object`

Is an equatable functor module

**`Since`**

4.0.0

#### Type parameters

| Name | Description |
| :------ | :------ |
| `a` | the value type |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `eq` | [`Equatable`](Functors.md#equatable)<`a`\> |

#### Defined in

[src/Functors.ts:310](https://github.com/OctoD/tiinvo/blob/44a62fc/src/Functors.ts#L310)

___

### Guardable

Ƭ **Guardable**<`a`\>: (`x`: `unknown`) => x is a

#### Type parameters

| Name |
| :------ |
| `a` |

#### Type declaration

▸ (`x`): x is a

Express a function which guards if a passed parameter `x` is of a certain type `a`.

Read more about typeguards on ts doc pages.

**`Example`**

```ts
import { Functors } from 'tiinvo';

let is0: Functors.Guardable<0> = (x: unknown): x is 0 => x === 0;

is0(10)    // false
is0("")    // false
is0(-1)    // false
is0(0)     // true
```

**`Since`**

4.0.0

##### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `unknown` |

##### Returns

x is a

#### Defined in

[src/Functors.ts:338](https://github.com/OctoD/tiinvo/blob/44a62fc/src/Functors.ts#L338)

___

### GuardableModule

Ƭ **GuardableModule**<`a`\>: `Object`

Represents a module which have an exported function `guard` of type `Guardable<a>`

**`Example`**

```ts
import { Fn, Num, Predicate, Functors } from 'tiinvo';

module Int8 {
  export type T = number;
  export const guard = Predicate.and(Num.guard, Num.gte(0), Num.lte(2**8 - 1)) as Functors.Guardable<T>;
}

module Int16 {
  export type T = number;
  export const guard = Predicate.and(Num.guard, Num.gte(0), Num.lte(2**16 - 1)) as Functors.Guardable<T>;
}

const makeeq = <A extends number>(mod: Functors.GuardableModule<A>): Functors.Equatable<A> => {
   function eq(a: A, b: A): boolean
   function eq(a: A): Fn.Unary<A, boolean>
   function eq(a: A, b?: A): any
   {
      const _eq = (x: A, y: A) => {
         return mod.guard(x) && mod.guard(y) && Num.eq(x, y)
      }

      if (Num.guard(a) && Num.guard(b)) {
         return _eq(a, b)
      }

      return (b: A) => _eq(a, b)
   }

   return eq;
}

const eqInt8 = makeeq(Int8)
const eqInt16 = makeeq(Int16)

eqInt8(255, 255) // true
eqInt8(256, 256) // false

eqInt16(255, 255) // true
eqInt16(256, 256) // true
```

**`Since`**

4.0.0

#### Type parameters

| Name |
| :------ |
| `a` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `guard` | [`Guardable`](Functors.md#guardable)<`a`\> |

#### Defined in

[src/Functors.ts:388](https://github.com/OctoD/tiinvo/blob/44a62fc/src/Functors.ts#L388)

___

### Filterable

Ƭ **Filterable**<`a`\>: (`a`: `a`) => `boolean`

#### Type parameters

| Name |
| :------ |
| `a` |

#### Type declaration

▸ (`a`): `boolean`

Is a filter predicate.

**`Since`**

4.0.0

##### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `a` |

##### Returns

`boolean`

#### Defined in

[src/Functors.ts:401](https://github.com/OctoD/tiinvo/blob/44a62fc/src/Functors.ts#L401)

___

### FilterableModule

Ƭ **FilterableModule**<`a`\>: `Object`

**`Since`**

4.0.0

#### Type parameters

| Name |
| :------ |
| `a` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `filter` | [`Filterable`](Functors.md#filterable)<`a`\> |

#### Defined in

[src/Functors.ts:408](https://github.com/OctoD/tiinvo/blob/44a62fc/src/Functors.ts#L408)

___

### FilterMappableModule

Ƭ **FilterMappableModule**<`a`, `b`\>: [`FilterableModule`](Functors.md#filterablemodule)<`a`\> & { `map`: [`Mappable`](Functors.md#mappable)<`a`, `b`\>  }

Compound module of `ModuleFilterable<a>` and `ModuleMappable<a, b>`

**`Since`**

4.0.0

#### Type parameters

| Name |
| :------ |
| `a` |
| `b` |

#### Defined in

[src/Functors.ts:519](https://github.com/OctoD/tiinvo/blob/44a62fc/src/Functors.ts#L519)

___

### FilterReduceableModule

Ƭ **FilterReduceableModule**<`a`, `b`\>: [`FilterableModule`](Functors.md#filterablemodule)<`a`\> & [`ReduceableModule`](Functors.md#reduceablemodule)<`a`, `b`\> & [`DefaultableModule`](Functors.md#defaultablemodule)<`b`\>

Compound module of `ModuleFilterable<a>` and `ModuleMappable<a, b>` with a default value `b`.

**`Since`**

4.0.0

#### Type parameters

| Name |
| :------ |
| `a` |
| `b` |

#### Defined in

[src/Functors.ts:526](https://github.com/OctoD/tiinvo/blob/44a62fc/src/Functors.ts#L526)

## Variables

### catchableAsync

• `Const` **catchableAsync**: typeof [`catchableAsync`](Functors.md#catchableasync)

Is the symbol used to express the presence of an async catchable function

**`Since`**

4.0.0

#### Defined in

[src/Functors.ts:144](https://github.com/OctoD/tiinvo/blob/44a62fc/src/Functors.ts#L144)

___

### catchableSync

• `Const` **catchableSync**: typeof [`catchableSync`](Functors.md#catchablesync)

Is the symbol used to express the presence of a sync catchable function

**`Since`**

4.0.0

#### Defined in

[src/Functors.ts:150](https://github.com/OctoD/tiinvo/blob/44a62fc/src/Functors.ts#L150)

## Mappables

### Mappable

Ƭ **Mappable**<`A`, `B`\>: (`a`: `A`) => `B`

#### Type parameters

| Name | Description |
| :------ | :------ |
| `A` | the starting value |
| `B` | the mapped value |

#### Type declaration

▸ (`a`): `B`

A map function. Maps a value `A` to a value `B`

**`Since`**

4.0.0

##### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `A` |

##### Returns

`B`

#### Defined in

[src/Functors.ts:424](https://github.com/OctoD/tiinvo/blob/44a62fc/src/Functors.ts#L424)

___

### MappableModule

Ƭ **MappableModule**<`A`, `B`\>: `Object`

A module with a map function `Mappable<A, B>`.

**`Example`**

```ts
import { Fn, Functors, Num } from 'tiinvo';

function makemap<T extends number>(guard: Functors.Guardable<T>, tn: string) {
   function map<A>(m: Functors.Mappable<T, A>, t: T): A
   function map<A>(m: Functors.Mappable<T, A>): Fn.Unary<T, A>
   function map<A>(m: Functors.Mappable<T, A>, t?: T): any
   {
     const _map = (x: T) => guard(x) ? m(x) : new TypeError("Value not " + tn)
     
     if (Num.guard(t)) {
       return _map(t)
     }

     return (b: T) => _map(b)
   }

   return map;
}

module Int8 {
   export type T = number;
   export const guard = Predicate.and(
     Num.guard, 
     Num.gte(0), 
     Num.lte(2 ** 8 - 1)
   ) as Functors.Guardable<T>;
   export const map = makemap(guard, "Int8");
}

module Int16 {
  export type T = number;
  export const guard = Predicate.and(
    Num.guard,
    Num.gte(0), 
    Num.lte(2 ** 16 - 1)
  ) as Functors.Guardable<T>;
  export const map = makemap(guard, "Int16");
}

const toHex = <A extends number>(
   mod: Functors.MappableModule<A, string>, 
   a: A,
) => mod.map(Num.toHex as Functors.Mappable<A, string>, a)

toHex(Int8, 255)       // "0xff"
toHex(Int8, 256)       // TypeError("Value not Int8")

toHex(Int16, 256)      // "0x100"
toHex(Int16, 2 ** 16)  // TypeError("Value not Int16")
```

**`Since`**

4.0.0

#### Type parameters

| Name | Description |
| :------ | :------ |
| `A` | the starting value |
| `B` | the mapped value |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `map` | (`m`: [`Mappable`](Functors.md#mappable)<`A`, `B`\>, `a`: `A`) => `B`(`m`: [`Mappable`](Functors.md#mappable)<`A`, `B`\>) => (`a`: `A`) => `B` |

#### Defined in

[src/Functors.ts:487](https://github.com/OctoD/tiinvo/blob/44a62fc/src/Functors.ts#L487)

___

### Reduceable

Ƭ **Reduceable**<`a`, `b`\>: (`p`: `b`, `c`: `a`) => `b`

#### Type parameters

| Name |
| :------ |
| `a` |
| `b` |

#### Type declaration

▸ (`p`, `c`): `b`

Reduce a value `A` to a value `B` aggregating the previous value `B` to the current.

**`Since`**

4.0.0

##### Parameters

| Name | Type |
| :------ | :------ |
| `p` | `b` |
| `c` | `a` |

##### Returns

`b`

#### Defined in

[src/Functors.ts:498](https://github.com/OctoD/tiinvo/blob/44a62fc/src/Functors.ts#L498)

___

### ReduceableModule

Ƭ **ReduceableModule**<`a`, `b`\>: `Object`

A module with a reduce function exposed.

**`Since`**

4.0.0

#### Type parameters

| Name |
| :------ |
| `a` |
| `b` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `reduce` | [`Reduceable`](Functors.md#reduceable)<`a`, `b`\> |

#### Defined in

[src/Functors.ts:506](https://github.com/OctoD/tiinvo/blob/44a62fc/src/Functors.ts#L506)
