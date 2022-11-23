[tiinvo](../README.md) / [Exports](../modules.md) / Obj

# Namespace: Obj

## Table of contents

### Type Aliases

- [t](Obj.md#t)
- [Entries](Obj.md#entries)
- [GuardsFromStruct](Obj.md#guardsfromstruct)
- [KeysOf](Obj.md#keysof)
- [ValuesOf](Obj.md#valuesof)

### Functions

- [guard](Obj.md#guard)
- [guardOf](Obj.md#guardof)
- [hasKey](Obj.md#haskey)
- [hasKeyOf](Obj.md#haskeyof)
- [assign](Obj.md#assign)
- [entries](Obj.md#entries-1)
- [freeze](Obj.md#freeze)
- [fromEntries](Obj.md#fromentries)
- [get](Obj.md#get)
- [omit](Obj.md#omit)
- [pick](Obj.md#pick)
- [map](Obj.md#map)
- [keys](Obj.md#keys)
- [size](Obj.md#size)
- [values](Obj.md#values)

## Type Aliases

### t

Ƭ **t**: `object`

#### Defined in

src/Obj.ts:5

___

### Entries

Ƭ **Entries**<`a`\>: { [k in keyof a]: [k, a[k]] }[keyof `a`][]

Represents the entries of an object `a` as an array of key/value pair tuples

#### Type parameters

| Name |
| :------ |
| `a` |

#### Defined in

src/Obj.ts:10

___

### GuardsFromStruct

Ƭ **GuardsFromStruct**<`a`\>: { [key in keyof a]: a[key] extends T<infer b\> ? Guardable<T<b\>\> \| GuardsFromStruct<a[key]\> : Guardable<a[key]\> \| GuardsFromStruct<a[key]\> }

#### Type parameters

| Name |
| :------ |
| `a` |

#### Defined in

src/Obj.ts:14

___

### KeysOf

Ƭ **KeysOf**<`a`\>: keyof `a`[]

Extracts keys `k` from object `a`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `a` | extends `object` |

#### Defined in

src/Obj.ts:21

___

### ValuesOf

Ƭ **ValuesOf**<`a`\>: `a`[keyof `a`][]

Extracts values `x` from object `a`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `a` | extends `object` |

#### Defined in

src/Obj.ts:26

## Functions

### guard

▸ **guard**(`x`): x is object

Returns true if a is a `object` and not null

```typescript
import { Obj } from 'tiinvo';

Obj.guard({});    // true
Obj.guard(null);  // false
```

**`Since`**

4.0.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `unknown` |

#### Returns

x is object

#### Defined in

src/Functors.ts:338

___

### guardOf

▸ **guardOf**<`a`\>(`s`): (`v`: `unknown`) => v is a

Returns `true` if a value `v` implements a shape `s`

```typescript
import { Obj, Str, Num, Bool } from 'tiinvo';

const guardStruct = Obj.guardOf({
   a: Str.guard,
   b: Num.guard,
   c: Bool.guard
});

guardStruct({ a: `foo`, b: 1, c: true });  // true
guardStruct({ a: `foo`, b: false, c: 1 }); // false
```

**`Since`**

4.0.0

#### Type parameters

| Name | Type |
| :------ | :------ |
| `a` | extends `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `s` | [`GuardsFromStruct`](Obj.md#guardsfromstruct)<`a`\> |

#### Returns

`fn`

▸ (`v`): v is a

##### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `unknown` |

##### Returns

v is a

#### Defined in

src/Obj.ts:66

___

### hasKey

▸ **hasKey**<`k`\>(`k`): (`o`: `unknown`) => o is Record<k, unknown\>

Returns true if a is a `object` and has property `k`

```typescript
import { Obj } from 'tiinvo';

const hasa = Obj.hasKey('a');
hasa({});        // false
hasa({ a: 1 });  // true
```

**`Since`**

4.0.0

#### Type parameters

| Name | Type |
| :------ | :------ |
| `k` | extends `string` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `k` | `k` |

#### Returns

`fn`

▸ (`o`): o is Record<k, unknown\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `o` | `unknown` |

##### Returns

o is Record<k, unknown\>

#### Defined in

src/Obj.ts:110

___

### hasKeyOf

▸ **hasKeyOf**<`a`, `k`\>(`k`, `g`, `o`): o is Record<k, a\>

Returns true if a is a `object` and has property `k` of type `g`

```typescript
import { Obj, Num } from 'tiinvo';

const hasa = Obj.hasKeyOf('a', Num.guard);

hasa({})            // false
hasa({ a: 1 })      // true
hasa({ a: `nope` }) // false
```

**`Since`**

4.0.0

#### Type parameters

| Name | Type |
| :------ | :------ |
| `a` | `a` |
| `k` | extends `string` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `k` | `k` |
| `g` | [`Guardable`](Functors.md#guardable)<`a`\> |
| `o` | `unknown` |

#### Returns

o is Record<k, a\>

#### Defined in

src/Obj.ts:130

▸ **hasKeyOf**<`a`, `k`\>(`k`, `g`): (`o`: `unknown`) => o is Record<k, a\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `a` | `a` |
| `k` | extends `string` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `k` | `k` |
| `g` | [`Guardable`](Functors.md#guardable)<`a`\> |

#### Returns

`fn`

▸ (`o`): o is Record<k, a\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `o` | `unknown` |

##### Returns

o is Record<k, a\>

#### Defined in

src/Obj.ts:131

___

### assign

▸ **assign**<`T`, `U`\>(`target`, `source`): `T` & `U`

Copy the values of all of the enumerable own properties from one or more source objects to a target object. Returns the target object.

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

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | `T` | The target object to copy to. |
| `source` | `U` | - |

#### Returns

`T` & `U`

The target object

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:286

▸ **assign**<`T`, `U`, `V`\>(`target`, `source1`, `source2`): `T` & `U` & `V`

Copy the values of all of the enumerable own properties from one or more source objects to a target object. Returns the target object.

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

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | `T` | The target object to copy to. |
| `source1` | `U` | - |
| `source2` | `V` | - |

#### Returns

`T` & `U` & `V`

The target object

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:295

▸ **assign**<`T`, `U`, `V`, `W`\>(`target`, `source1`, `source2`, `source3`): `T` & `U` & `V` & `W`

Copy the values of all of the enumerable own properties from one or more source objects to a target object. Returns the target object.

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

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | `T` | The target object to copy to. |
| `source1` | `U` | - |
| `source2` | `V` | - |
| `source3` | `W` | - |

#### Returns

`T` & `U` & `V` & `W`

The target object

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:305

▸ **assign**(`target`, ...`sources`): `any`

Copy the values of all of the enumerable own properties from one or more source objects to a target object. Returns the target object.

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

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | `object` | The target object to copy to. |
| `...sources` | `any`[] | One or more source objects from which to copy properties |

#### Returns

`any`

The target object

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:313

___

### entries

▸ **entries**<`a`\>(`a`): [`Entries`](Obj.md#entries)<`a`\>

Returns object entries

**`Example`**

```ts
import { Obj } from 'tiinvo';

Obj.entries({ a: 1, b: 2 }); // [ ['a', 1], ['b', 2] ]
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
| `a` | `a` |

#### Returns

[`Entries`](Obj.md#entries)<`a`\>

#### Defined in

src/Obj.ts:183

___

### freeze

▸ **freeze**<`T`\>(`a`): readonly `T`[]

Prevents the modification of existing property attributes and values, and prevents the addition of new properties.

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
| `a` | `T`[] |

#### Returns

readonly `T`[]

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:221

▸ **freeze**<`T`\>(`f`): `T`

Prevents the modification of existing property attributes and values, and prevents the addition of new properties.

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

node_modules/typescript/lib/lib.es5.d.ts:227

▸ **freeze**<`T`, `U`\>(`o`): `Readonly`<`T`\>

Prevents the modification of existing property attributes and values, and prevents the addition of new properties.

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

node_modules/typescript/lib/lib.es5.d.ts:233

▸ **freeze**<`T`\>(`o`): `Readonly`<`T`\>

Prevents the modification of existing property attributes and values, and prevents the addition of new properties.

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

node_modules/typescript/lib/lib.es5.d.ts:239

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

| Name | Type |
| :------ | :------ |
| `entries` | `Iterable`<readonly [`PropertyKey`, `T`]\> |

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

| Name | Type |
| :------ | :------ |
| `entries` | `Iterable`<readonly `any`[]\> |

#### Returns

`any`

#### Defined in

node_modules/typescript/lib/lib.es2019.object.d.ts:34

___

### get

▸ **get**<`a`\>(`a`): <b\>(`b`: `b`) => [`T`](Option.md#t)<`b` extends `Record`<`a`, `u`\> ? `u` : ``null``\>

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

▸ <`b`\>(`b`): [`T`](Option.md#t)<`b` extends `Record`<`a`, `u`\> ? `u` : ``null``\>

##### Type parameters

| Name |
| :------ |
| `b` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `b` |

##### Returns

[`T`](Option.md#t)<`b` extends `Record`<`a`, `u`\> ? `u` : ``null``\>

#### Defined in

src/Obj.ts:238

___

### omit

▸ **omit**<`a`, `b`\>(`k`, `b`): `Exclude`<`b`, `a`\>

Omits the keys in `a` that are in `b`

**`Example`**

```typescript
import { Obj } from 'tiinvo';

const omit = Obj.omit(['a', 'b'])
omit({ a: 1, b: 2, c: 3 })           // { c: 3 }
omit({ a: 1, b: 2 })                 // {}
```

**`Since`**

4.0.0

#### Type parameters

| Name | Type |
| :------ | :------ |
| `a` | extends `string` |
| `b` | extends `Record`<`string`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `k` | `a`[] |
| `b` | `b` |

#### Returns

`Exclude`<`b`, `a`\>

#### Defined in

src/Obj.ts:257

▸ **omit**<`a`, `b`\>(`k`): [`Unary`](Fn.md#unary)<`b`, `Exclude`<`b`, `a`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `a` | extends `string` |
| `b` | extends `Record`<`string`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `k` | `a`[] |

#### Returns

[`Unary`](Fn.md#unary)<`b`, `Exclude`<`b`, `a`\>\>

#### Defined in

src/Obj.ts:258

___

### pick

▸ **pick**<`a`, `b`\>(`keys`, `b`): `Pick`<`b`, `a`\>

Returns a new object with the keys of `a` that are in `b`

```typescript
import { Obj } from 'tiinvo';

const pick = Obj.pick(['a', 'b']);
pick({ a: 1, b: 2, c: 3 });      // { a: 1, b: 2 }
pick({ a: 1, b: 2 });            // { a: 1, b: 2 }
```

**`Since`**

4.0.0

#### Type parameters

| Name | Type |
| :------ | :------ |
| `a` | extends `string` |
| `b` | extends `Record`<`string`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `keys` | `a`[] |
| `b` | `b` |

#### Returns

`Pick`<`b`, `a`\>

#### Defined in

src/Obj.ts:297

▸ **pick**<`a`, `b`\>(`keys`): [`Unary`](Fn.md#unary)<`b`, `Pick`<`b`, `a`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `a` | extends `string` |
| `b` | extends `Record`<`string`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `keys` | `a`[] |

#### Returns

[`Unary`](Fn.md#unary)<`b`, `Pick`<`b`, `a`\>\>

#### Defined in

src/Obj.ts:298

___

### map

▸ **map**<`a`, `b`\>(`m`): (`a`: `a`) => [`T`](Option.md#t)<`b`\>

Maps an object `a` to a value `b`

```typescript
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

▸ (`a`): [`T`](Option.md#t)<`b`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `a` |

##### Returns

[`T`](Option.md#t)<`b`\>

#### Defined in

src/Obj.ts:340

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

src/Obj.ts:354

___

### size

▸ **size**(`x`): `number`

Returns an object size

```typescript
import { Obj } from 'tiinvo';

Obj.size({ a: 1, b: 2 })       // 2
Obj.size({})                   // 0
```

**`Since`**

4.0.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `object` |

#### Returns

`number`

#### Defined in

src/Obj.ts:370

___

### values

▸ **values**<`a`\>(`o`): [`ValuesOf`](Obj.md#valuesof)<`a`\>

Returns an array of values of the enumerable properties of an object

```typescript
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

src/Obj.ts:386
