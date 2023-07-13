[tiinvo](../README.md) / [Exports](../modules.md) / Obj

# Namespace: Obj

## Table of contents

### Type Aliases

- [T](Obj.md#t)
- [Entries](Obj.md#entries)
- [GuardsFromStruct](Obj.md#guardsfromstruct)
- [KeysOf](Obj.md#keysof)
- [ValuesOf](Obj.md#valuesof)

### Guardables

- [guard](Obj.md#guard)
- [guardOf](Obj.md#guardof)
- [hasKey](Obj.md#haskey)
- [hasKeyOf](Obj.md#haskeyof)

### Natives

- [assign](Obj.md#assign)
- [entries](Obj.md#entries-1)
- [freeze](Obj.md#freeze)
- [fromEntries](Obj.md#fromentries)
- [get](Obj.md#get)
- [omit](Obj.md#omit)
- [pick](Obj.md#pick)

### Functions

- [map](Obj.md#map)
- [keys](Obj.md#keys)
- [size](Obj.md#size)
- [values](Obj.md#values)

## Type Aliases

### T

Ƭ **T**: `object`

A type alias for object

**`Since`**

4.0.0

#### Defined in

[src/Obj.ts:10](https://github.com/OctoD/tiinvo/blob/5743591/src/Obj.ts#L10)

___

### Entries

Ƭ **Entries**<`O`\>: { [k in keyof O]: [k, O[k]] }[keyof `O`][]

Represents the entries of an object `O` as an array of key/value pair tuples

**`Since`**

4.0.0

#### Type parameters

| Name | Description |
| :------ | :------ |
| `O` | the object |

#### Defined in

[src/Obj.ts:18](https://github.com/OctoD/tiinvo/blob/5743591/src/Obj.ts#L18)

___

### GuardsFromStruct

Ƭ **GuardsFromStruct**<`S`\>: { [key in keyof S]: S[key] extends T<infer A\> ? Guardable<T<A\>\> \| GuardsFromStruct<S[key]\> : Guardable<S[key]\> \| GuardsFromStruct<S[key]\> }

Represents the resulting type from a struct of guards

**`Since`**

4.0.0

#### Type parameters

| Name | Description |
| :------ | :------ |
| `S` | the guard represented as a struct (or shape) |

#### Defined in

[src/Obj.ts:28](https://github.com/OctoD/tiinvo/blob/5743591/src/Obj.ts#L28)

___

### KeysOf

Ƭ **KeysOf**<`O`\>: keyof `O`[]

Extracts keys `K[]` from object `O`

**`Since`**

4.0.0

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `O` | extends `object` | the object |

#### Defined in

[src/Obj.ts:38](https://github.com/OctoD/tiinvo/blob/5743591/src/Obj.ts#L38)

___

### ValuesOf

Ƭ **ValuesOf**<`O`\>: `O`[keyof `O`][]

Extracts values `A[]` from object `O`

**`Since`**

4.0.0

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `O` | extends `object` | the object |

#### Defined in

[src/Obj.ts:46](https://github.com/OctoD/tiinvo/blob/5743591/src/Obj.ts#L46)

## Guardables

### guard

▸ **guard**(`x`): x is object

Returns true if `x` is of type `object` and not null

**`Example`**

```ts
import { Obj } from 'tiinvo';

Obj.guard({});    // true
Obj.guard(null);  // false
```

**`Since`**

4.0.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `unknown` | the object |

#### Returns

x is object

- true if x is object and not null
 - false otherwise

#### Defined in

[src/Functors.ts:338](https://github.com/OctoD/tiinvo/blob/5743591/src/Functors.ts#L338)

___

### guardOf

▸ **guardOf**<`A`\>(`s`): (`v`: `unknown`) => v is A

Returns a guard which checks if a value `v` implements a shape `s`

**`Example`**

```ts
import { Obj, Str, Num, Bool } from 'tiinvo';

const isABC = Obj.guardOf({
   a: Str.guard,
   b: Num.guard,
   c: Bool.guard
});

isABC({ a: `foo`, b: 1, c: true });  // true
isABC({ a: `foo`, b: false, c: 1 }); // false

// you can also set recursive shapes, or directly more comples ones

const isUser = Obj.guardOf({
   name: Str.guard,
   surname: Str.guard,
   age: Num.guard,
   billing: {
     address: Str.guard,
     city: Str.guard,
   }
})

isUser(10)   // false
isUser({})   // false
isUser({
   name: 'john',
   surname: 'doe',
   age: 44,
})   // false
isUser({
   name: 'john',
   surname: 'doe',
   age: 44,
   billing: {

   }
})   // false
isUser({
   name: 'john',
   surname: 'doe',
   age: 44,
   billing: {
     address: '',
   }
})   // false
isUser({
   name: 'john',
   surname: 'doe',
   age: 44,
   billing: {
     address: 'some address',
     city: 'some city',
   }
})   // true
```

**`Since`**

4.0.0

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `A` | extends `unknown` | the guard structure |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `s` | [`GuardsFromStruct`](Obj.md#guardsfromstruct)<`A`\> | the struct which represents the guarded type |

#### Returns

`fn`

the `Guardable<A>` if s is an `object`, otherwise it throws a `TypeError`

▸ (`v`): v is A

##### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `unknown` |

##### Returns

v is A

#### Defined in

[src/Obj.ts:139](https://github.com/OctoD/tiinvo/blob/5743591/src/Obj.ts#L139)

___

### hasKey

▸ **hasKey**<`K`\>(`k`, `o`): o is Record<K, unknown\>

Returns true if a is a `object` and has property `k`

**`Example`**

```ts
import { Obj } from 'tiinvo';

Obj.hasKey('a', {});        // false
Obj.hasKey('a', { a: 1 });  // true

const hasa = Obj.hasKey('a');
hasa({});        // false
hasa({ a: 1 });  // true
```

**`Since`**

4.0.0

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `K` | extends `string` | the key type |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `k` | `K` | the key |
| `o` | `unknown` | - |

#### Returns

o is Record<K, unknown\>

- true if `o` is an `object` and has a key `K`
 - false otherwise

#### Defined in

[src/Obj.ts:197](https://github.com/OctoD/tiinvo/blob/5743591/src/Obj.ts#L197)

▸ **hasKey**<`K`\>(`k`): (`o`: `unknown`) => o is Record<K, unknown\>

Returns a guard which checks if a is a `object` and has property `k`

**`Example`**

```ts
import { Obj } from 'tiinvo';

const hasa = Obj.hasKey('a');

hasa({});        // false
hasa({ a: 1 });  // true
```

**`Since`**

4.0.0

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `K` | extends `string` | the key type |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `k` | `K` | the key |

#### Returns

`fn`

the unary function which checks if `o` is an `object` and has the key `K`

▸ (`o`): o is Record<K, unknown\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `o` | `unknown` |

##### Returns

o is Record<K, unknown\>

#### Defined in

[src/Obj.ts:218](https://github.com/OctoD/tiinvo/blob/5743591/src/Obj.ts#L218)

___

### hasKeyOf

▸ **hasKeyOf**<`A`, `K`\>(`k`, `g`, `o`): o is Record<K, A\>

Returns true if `o` is an `object` and has property `K` of type `A`

**`Example`**

```ts
import { Obj, Num } from 'tiinvo';

Obj.hasKeyOf('a', Num.guard, {})            // false
Obj.hasKeyOf('a', Num.guard, { a: 1 })      // true
Obj.hasKeyOf('a', Num.guard, { a: `nope` }) // false
```

**`Since`**

4.0.0

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `A` | `A` | the value type |
| `K` | extends `string` | the key type |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `k` | `K` | the key |
| `g` | [`Guardable`](Functors.md#guardable)<`A`\> | the guard to check if `o[K]` is of it's type |
| `o` | `unknown` | the value to check |

#### Returns

o is Record<K, A\>

- `true` if `o` is an `object`, has a key `K` and `o[K]` is of type `A`
 - `false` otherwise

#### Defined in

[src/Obj.ts:253](https://github.com/OctoD/tiinvo/blob/5743591/src/Obj.ts#L253)

▸ **hasKeyOf**<`A`, `K`\>(`k`, `g`): (`o`: `unknown`) => o is Record<K, A\>

Returns a guard which checks if `o` is an `object` and has property `K` of type `A`

**`Example`**

```ts
import { Obj, Num } from 'tiinvo';

const hasa = Obj.hasKeyOf('a', Num.guard);

hasa({})            // false
hasa({ a: 1 })      // true
hasa({ a: `nope` }) // false
```

**`Since`**

4.0.0

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `A` | `A` | the value type |
| `K` | extends `string` | the key type |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `k` | `K` | the key |
| `g` | [`Guardable`](Functors.md#guardable)<`A`\> | the guard to check if `o[K]` is of it's type |

#### Returns

`fn`

▸ (`o`): o is Record<K, A\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `o` | `unknown` |

##### Returns

o is Record<K, A\>

#### Defined in

[src/Obj.ts:277](https://github.com/OctoD/tiinvo/blob/5743591/src/Obj.ts#L277)

## Natives

### assign

▸ **assign**<`T`, `U`\>(`target`, `source`): `T` & `U`

Copy the values of all of the enumerable own properties from one or more source objects to a new object. 

**important**: This will not mutate any object, it will always return a new one instead.

**`Example`**

```ts
import { Obj } from 'tiinvo';

const a = { a: 1, b: 2 };
const b = { b: 3, c: 4 };
const c = { c: 5, d: 6 };

Obj.assign(a, b, c);
// { a: 1, b: 3, c: 5, d: 6 }
```

**`Since`**

4.0.0

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Object` |
| `U` | `U` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `T` |
| `source` | `U` |

#### Returns

`T` & `U`

The target object

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:286

▸ **assign**<`T`, `U`, `V`\>(`target`, `source1`, `source2`): `T` & `U` & `V`

Copy the values of all of the enumerable own properties from one or more source objects to a new object. 

**important**: This will not mutate any object, it will always return a new one instead.

**`Example`**

```ts
import { Obj } from 'tiinvo';

const a = { a: 1, b: 2 };
const b = { b: 3, c: 4 };
const c = { c: 5, d: 6 };

Obj.assign(a, b, c);
// { a: 1, b: 3, c: 5, d: 6 }
```

**`Since`**

4.0.0

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Object` |
| `U` | `U` |
| `V` | `V` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `T` |
| `source1` | `U` |
| `source2` | `V` |

#### Returns

`T` & `U` & `V`

The target object

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:295

▸ **assign**<`T`, `U`, `V`, `W`\>(`target`, `source1`, `source2`, `source3`): `T` & `U` & `V` & `W`

Copy the values of all of the enumerable own properties from one or more source objects to a new object. 

**important**: This will not mutate any object, it will always return a new one instead.

**`Example`**

```ts
import { Obj } from 'tiinvo';

const a = { a: 1, b: 2 };
const b = { b: 3, c: 4 };
const c = { c: 5, d: 6 };

Obj.assign(a, b, c);
// { a: 1, b: 3, c: 5, d: 6 }
```

**`Since`**

4.0.0

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Object` |
| `U` | `U` |
| `V` | `V` |
| `W` | `W` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `T` |
| `source1` | `U` |
| `source2` | `V` |
| `source3` | `W` |

#### Returns

`T` & `U` & `V` & `W`

The target object

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:305

▸ **assign**(`target`, `...sources`): `any`

Copy the values of all of the enumerable own properties from one or more source objects to a new object. 

**important**: This will not mutate any object, it will always return a new one instead.

**`Example`**

```ts
import { Obj } from 'tiinvo';

const a = { a: 1, b: 2 };
const b = { b: 3, c: 4 };
const c = { c: 5, d: 6 };

Obj.assign(a, b, c);
// { a: 1, b: 3, c: 5, d: 6 }
```

**`Since`**

4.0.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `object` |
| `...sources` | `any`[] |

#### Returns

`any`

The target object

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:313

___

### entries

▸ **entries**<`O`\>(`o`): [`Entries`](Obj.md#entries)<`O`\>

Returns an array of key/values of the enumerable properties of an object `o`

**`Example`**

```ts
import { Obj } from 'tiinvo';

Obj.entries({ a: 1, b: 2 }); // [ ['a', 1], ['b', 2] ]
```

**`Since`**

4.0.0

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `O` | extends `object` | the object's type |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `o` | `O` | the object |

#### Returns

[`Entries`](Obj.md#entries)<`O`\>

the entries

#### Defined in

[src/Obj.ts:336](https://github.com/OctoD/tiinvo/blob/5743591/src/Obj.ts#L336)

___

### freeze

▸ **freeze**<`T`\>(`f`): `T`

Prevents the modification of existing property attributes and values, 
and prevents the addition of new properties.

**`Example`**

```ts
import { Obj } from 'tiinvo';

const a = { a: 1, b: 2 };
Obj.freeze(a);
a.a = 100; // throws
```

**`Since`**

4.0.0

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Function` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | `T` |

#### Returns

`T`

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:221

▸ **freeze**<`T`, `U`\>(`o`): `Readonly`<`T`\>

Prevents the modification of existing property attributes and values, 
and prevents the addition of new properties.

**`Example`**

```ts
import { Obj } from 'tiinvo';

const a = { a: 1, b: 2 };
Obj.freeze(a);
a.a = 100; // throws
```

**`Since`**

4.0.0

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Object` |
| `U` | extends `string` \| `number` \| `bigint` \| `boolean` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `o` | `T` |

#### Returns

`Readonly`<`T`\>

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:227

▸ **freeze**<`T`\>(`o`): `Readonly`<`T`\>

Prevents the modification of existing property attributes and values, 
and prevents the addition of new properties.

**`Example`**

```ts
import { Obj } from 'tiinvo';

const a = { a: 1, b: 2 };
Obj.freeze(a);
a.a = 100; // throws
```

**`Since`**

4.0.0

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `o` | `T` |

#### Returns

`Readonly`<`T`\>

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:233

___

### fromEntries

▸ **fromEntries**<`T`\>(`entries`): `Object`

Returns an object created by key-value entries for properties and methods

**`Example`**

```ts
import { Obj } from 'tiinvo';

Obj.fromEntries([ ['a', 1], ['b', 2] ]) // { a: 1, b: 2 }
```

**`Since`**

4.0.0

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `entries` | `Iterable`<readonly [`PropertyKey`, `T`]\> | the entries |

#### Returns

`Object`

#### Defined in

node_modules/typescript/lib/lib.es2019.object.d.ts:28

▸ **fromEntries**(`entries`): `any`

Returns an object created by key-value entries for properties and methods

**`Example`**

```ts
import { Obj } from 'tiinvo';

Obj.fromEntries([ ['a', 1], ['b', 2] ]) // { a: 1, b: 2 }
```

**`Since`**

4.0.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `entries` | `Iterable`<readonly `any`[]\> | the entries |

#### Returns

`any`

#### Defined in

node_modules/typescript/lib/lib.es2019.object.d.ts:34

___

### get

▸ **get**<`a`\>(`a`): <b\>(`b`: `b`) => [`T`](Opt.md#t)<`b` extends `Record`<`a`, `u`\> ? `u` : ``null``\>

Gets a property `a` from an object `b` and returns a `Option.t<c>`

**`Example`**

```ts
import { Obj } from 'tiinvo';

const get = Obj.get(`foo`);

get({ foo: `bar` }); // some<`bar`>
get({});             // none
```

**`Since`**

4.0.0

#### Type parameters

| Name | Type |
| :------ | :------ |
| `a` | extends `string` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `a` | the property to get |

#### Returns

`fn`

▸ <`b`\>(`b`): [`T`](Opt.md#t)<`b` extends `Record`<`a`, `u`\> ? `u` : ``null``\>

##### Type parameters

| Name |
| :------ |
| `b` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `b` |

##### Returns

[`T`](Opt.md#t)<`b` extends `Record`<`a`, `u`\> ? `u` : ``null``\>

#### Defined in

[src/Obj.ts:394](https://github.com/OctoD/tiinvo/blob/5743591/src/Obj.ts#L394)

___

### omit

▸ **omit**<`K`, `O`\>(`k`, `o`): `Exclude`<`O`, `K`\>

Omits the keys in `A` that are in `O`

**`Example`**

```ts
import { Obj } from 'tiinvo';

Obj.omit(['a', 'b'], { a: 10, b: 20, c: 30 }) // { c: 30 }
```

**`Since`**

4.0.0

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `K` | extends `string` | the keys |
| `O` | extends `Record`<`string`, `any`\> | the object |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `k` | `K`[] | the list of properties to omit |
| `o` | `O` | the object |

#### Returns

`Exclude`<`O`, `K`\>

#### Defined in

[src/Obj.ts:415](https://github.com/OctoD/tiinvo/blob/5743591/src/Obj.ts#L415)

▸ **omit**<`K`, `O`\>(`k`): [`Unary`](Fn.md#unary)<`O`, `Exclude`<`O`, `K`\>\>

Returns a unary `Unary<O, Exclude<A, O>>` function which omits the keys in `A` that are in `O`

**`Example`**

```ts
import { Obj } from 'tiinvo';

const omit = Obj.omit(['a', 'b'])
omit({ a: 1, b: 2, c: 3 })           // { c: 3 }
omit({ a: 1, b: 2 })                 // {}
```

**`Since`**

4.0.0

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `K` | extends `string` | the keys |
| `O` | extends `Record`<`string`, `any`\> | the object |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `k` | `K`[] | the list of properties to omit |

#### Returns

[`Unary`](Fn.md#unary)<`O`, `Exclude`<`O`, `K`\>\>

#### Defined in

[src/Obj.ts:436](https://github.com/OctoD/tiinvo/blob/5743591/src/Obj.ts#L436)

___

### pick

▸ **pick**<`K`, `O`\>(`keys`, `o`): `Pick`<`O`, `K`\>

Returns a new object with the keys of `a` that are in `b`

**`Example`**

```ts
import { Obj } from 'tiinvo';

Obj.pick(['a', 'b'], { a: 1, b: 2, c: 3 }) // { a: 1, b: 2 }

const pick = Obj.pick(['a', 'b']);
pick({ a: 1, b: 2, c: 3 });      // { a: 1, b: 2 }
pick({ a: 1, b: 2 });            // { a: 1, b: 2 }
```

**`Since`**

4.0.0

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `K` | extends `string` | the keys |
| `O` | extends `Record`<`string`, `any`\> | the object |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `keys` | `K`[] | the keys |
| `o` | `O` | the object |

#### Returns

`Pick`<`O`, `K`\>

#### Defined in

[src/Obj.ts:488](https://github.com/OctoD/tiinvo/blob/5743591/src/Obj.ts#L488)

▸ **pick**<`K`, `O`\>(`keys`): [`Unary`](Fn.md#unary)<`O`, `Pick`<`O`, `K`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `string` |
| `O` | extends `Record`<`string`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `keys` | `K`[] |

#### Returns

[`Unary`](Fn.md#unary)<`O`, `Pick`<`O`, `K`\>\>

#### Defined in

[src/Obj.ts:489](https://github.com/OctoD/tiinvo/blob/5743591/src/Obj.ts#L489)

## Functions

### map

▸ **map**<`a`, `b`\>(`m`): (`a`: `a`) => [`T`](Opt.md#t)<`b`\>

Maps an object `a` to a value `b`

**`Example`**

```ts
import { Obj } from 'tiinvo';

Obj.map(Object.keys)({ a: 10, b: 20 }); // ['a', 'b']
Obj.map((x: Record<string, number>) => x.a ?? 0)({ a: 10 });      // 10
Obj.map((x: Record<string, number>) => x.a ?? 0)({ b: 10 });      // 0
```

**`Since`**

4.0.0

#### Type parameters

| Name | Type |
| :------ | :------ |
| `a` | extends `object` |
| `b` | `b` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `m` | [`Mappable`](Functors.md#mappable)<`a`, `b`\> |

#### Returns

`fn`

▸ (`a`): [`T`](Opt.md#t)<`b`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `a` |

##### Returns

[`T`](Opt.md#t)<`b`\>

#### Defined in

[src/Obj.ts:538](https://github.com/OctoD/tiinvo/blob/5743591/src/Obj.ts#L538)

___

### keys

▸ **keys**<`x`\>(`x`): [`KeysOf`](Obj.md#keysof)<`x`\>

Returns the names of the enumerable string properties and methods of an object.

**`Example`**

```ts
import { Obj } from 'tiinvo';

Obj.keys({ a: 10, b: 20 })       // ['a', 'b']
```

**`Since`**

4.0.0

#### Type parameters

| Name | Type |
| :------ | :------ |
| `x` | extends `object` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `x` |

#### Returns

[`KeysOf`](Obj.md#keysof)<`x`\>

#### Defined in

[src/Obj.ts:552](https://github.com/OctoD/tiinvo/blob/5743591/src/Obj.ts#L552)

___

### size

▸ **size**(`x`): `number`

Returns an object size

**`Example`**

```ts
import { Obj } from 'tiinvo';

Obj.size({ a: 1, b: 2 })       // 2
Obj.size({})                   // 0
```

**`Since`**

4.0.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `object` | the object |

#### Returns

`number`

the size (count of keys) of the object

#### Defined in

[src/Obj.ts:570](https://github.com/OctoD/tiinvo/blob/5743591/src/Obj.ts#L570)

___

### values

▸ **values**<`a`\>(`o`): [`ValuesOf`](Obj.md#valuesof)<`a`\>

Returns an array of values of the enumerable properties of an object

**`Example`**

```ts
import { Obj } from 'tiinvo';

Obj.values({ a: 1, b: 2 }) // [1, 2]
Obj.values({})             // []
```

**`Since`**

4.0.0

#### Type parameters

| Name | Type |
| :------ | :------ |
| `a` | extends `object` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `o` | `a` |

#### Returns

[`ValuesOf`](Obj.md#valuesof)<`a`\>

#### Defined in

[src/Obj.ts:588](https://github.com/OctoD/tiinvo/blob/5743591/src/Obj.ts#L588)
