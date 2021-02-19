tiinvo

# tiinvo

## Table of contents

### Namespaces

- [array](modules/array.md)
- [assertables](modules/assertables.md)
- [derivables](modules/derivables.md)
- [either](modules/either.md)
- [filterables](modules/filterables.md)
- [foldables](modules/foldables.md)
- [mappables](modules/mappables.md)
- [maybe](modules/maybe.md)
- [option](modules/option.md)
- [predicate](modules/predicate.md)
- [result](modules/result.md)
- [unwrappables](modules/unwrappables.md)

### Interfaces

- [Mediator](interfaces/mediator.md)
- [PushSub](interfaces/pushsub.md)

### Type aliases

- [ArgsOf](README.md#argsof)
- [Fn1](README.md#fn1)
- [FnBase](README.md#fnbase)
- [IndexableObject](README.md#indexableobject)
- [Notify](README.md#notify)
- [Tagged](README.md#tagged)
- [TaggedFactory](README.md#taggedfactory)
- [TypegardsTuple](README.md#typegardstuple)
- [Typeguard](README.md#typeguard)
- [TypeguardsFromStruct](README.md#typeguardsfromstruct)
- [TypeguardsStruct](README.md#typeguardsstruct)
- [UnsubscribeFn](README.md#unsubscribefn)
- [WithLength](README.md#withlength)
- [\_](README.md#_)

### Functions

- [anyof](README.md#anyof)
- [bind](README.md#bind)
- [cast](README.md#cast)
- [check](README.md#check)
- [combine](README.md#combine)
- [createCast](README.md#createcast)
- [createStructOf](README.md#createstructof)
- [createTupleOf](README.md#createtupleof)
- [fallback](README.md#fallback)
- [fi](README.md#fi)
- [fifn](README.md#fifn)
- [haskey](README.md#haskey)
- [haskeyWithValue](README.md#haskeywithvalue)
- [haskeyoftype](README.md#haskeyoftype)
- [haslength](README.md#haslength)
- [haslengthof](README.md#haslengthof)
- [isTagged](README.md#istagged)
- [isTaggedOf](README.md#istaggedof)
- [isTaggedWith](README.md#istaggedwith)
- [isarray](README.md#isarray)
- [isarrayof](README.md#isarrayof)
- [isbigint](README.md#isbigint)
- [isboolean](README.md#isboolean)
- [isdefined](README.md#isdefined)
- [iserror](README.md#iserror)
- [isexact](README.md#isexact)
- [isfunction](README.md#isfunction)
- [isindexable](README.md#isindexable)
- [isnotNullOrUndefined](README.md#isnotnullorundefined)
- [isnotnull](README.md#isnotnull)
- [isnull](README.md#isnull)
- [isnullOrUndefined](README.md#isnullorundefined)
- [isnumber](README.md#isnumber)
- [isobject](README.md#isobject)
- [isstring](README.md#isstring)
- [isundefined](README.md#isundefined)
- [mediator](README.md#mediator)
- [nullable](README.md#nullable)
- [optional](README.md#optional)
- [panic](README.md#panic)
- [pipe](README.md#pipe)
- [pipeasync](README.md#pipeasync)
- [pushsub](README.md#pushsub)
- [tagged](README.md#tagged)
- [taggedFactory](README.md#taggedfactory)
- [toasync](README.md#toasync)
- [totaggedFn](README.md#totaggedfn)
- [trycatch](README.md#trycatch)
- [trycatchAsync](README.md#trycatchasync)

## Type aliases

### ArgsOf

Ƭ **ArgsOf**<Fn\>: Fn *extends* (...`args`: *infer* U) => *any* ? U : *any*[]

Extracts the arguments types from a function

**`example`** 
```ts
const foo = (a: string, b: number) => a.repeat(b);

type ArgsOfFoo = ArgsOf<typeof foo> // [string, number]
```

#### Type parameters:

Name | Type |
------ | ------ |
`Fn` | [*FnBase*](README.md#fnbase) |

Defined in: [applicative.ts:16](https://github.com/OctoD/tiinvo/blob/65f10a8/src/applicative.ts#L16)

___

### Fn1

Ƭ **Fn1**<FnIn, FnOut\>: (`arg`: FnIn) => FnOut

A function which takes one argument

#### Type parameters:

Name |
------ |
`FnIn` |
`FnOut` |

Defined in: [applicative.ts:28](https://github.com/OctoD/tiinvo/blob/65f10a8/src/applicative.ts#L28)

___

### FnBase

Ƭ **FnBase**: (...`args`: *any*[]) => *any*

A generic function type

Defined in: [applicative.ts:23](https://github.com/OctoD/tiinvo/blob/65f10a8/src/applicative.ts#L23)

___

### IndexableObject

Ƭ **IndexableObject**<T\>: { [index: string]: T;  }

Represents a plain object

#### Type parameters:

Name | Default |
------ | ------ |
`T` | *unknown* |

Defined in: [typeguards.ts:14](https://github.com/OctoD/tiinvo/blob/65f10a8/src/typeguards.ts#L14)

___

### Notify

Ƭ **Notify**<Fn\>: (...`args`: [*ArgsOf*](README.md#argsof)<Fn\>) => *void*

#### Type parameters:

Name | Type |
------ | ------ |
`Fn` | [*FnBase*](README.md#fnbase) |

Defined in: [push-sub.ts:9](https://github.com/OctoD/tiinvo/blob/65f10a8/src/push-sub.ts#L9)

___

### Tagged

Ƭ **Tagged**<T, Tagname\>: { `__tag`: Tagname ; `value`: T  }

A `TaggedType` with a value `T`

#### Type parameters:

Name | Type |
------ | ------ |
`T` | - |
`Tagname` | *string* |

#### Type declaration:

Name | Type |
------ | ------ |
`__tag` | Tagname |
`value` | T |

Defined in: [tagged-type.ts:14](https://github.com/OctoD/tiinvo/blob/65f10a8/src/tagged-type.ts#L14)

___

### TaggedFactory

Ƭ **TaggedFactory**<Tagname\>: <T\>(`arg`: T) => [*Tagged*](README.md#tagged)<T, Tagname\>

A `TaggedType<T, Tagname>` factory.

#### Type parameters:

Name | Type |
------ | ------ |
`Tagname` | *string* |

Defined in: [tagged-type.ts:22](https://github.com/OctoD/tiinvo/blob/65f10a8/src/tagged-type.ts#L22)

___

### TypegardsTuple

Ƭ **TypegardsTuple**<T\>: { [key in keyof T]: T[key] extends Typeguard<infer U\> ? U : never}

#### Type parameters:

Name | Type |
------ | ------ |
`T` | [*Typeguard*](README.md#typeguard)<*any*\>[] |

Defined in: [typeguards.ts:29](https://github.com/OctoD/tiinvo/blob/65f10a8/src/typeguards.ts#L29)

___

### Typeguard

Ƭ **Typeguard**<IsOutput\>: (`arg`: *unknown*) => arg is IsOutput

A typeguard

#### Type parameters:

Name |
------ |
`IsOutput` |

Defined in: [typeguards.ts:9](https://github.com/OctoD/tiinvo/blob/65f10a8/src/typeguards.ts#L9)

___

### TypeguardsFromStruct

Ƭ **TypeguardsFromStruct**<T\>: { [key in keyof T]: Typeguard<T[key]\> \| TypeguardsFromStruct<T[key]\>}

#### Type parameters:

Name |
------ |
`T` |

Defined in: [typeguards.ts:304](https://github.com/OctoD/tiinvo/blob/65f10a8/src/typeguards.ts#L304)

___

### TypeguardsStruct

Ƭ **TypeguardsStruct**<T\>: { [key in keyof T]: T[key] extends Typeguard<infer U\> ? U : T[key] extends IndexableObject<any\> ? TypeguardsStruct<T[key]\> : never}

#### Type parameters:

Name |
------ |
`T` |

Defined in: [typeguards.ts:21](https://github.com/OctoD/tiinvo/blob/65f10a8/src/typeguards.ts#L21)

___

### UnsubscribeFn

Ƭ **UnsubscribeFn**: () => *void*

Defined in: [push-sub.ts:10](https://github.com/OctoD/tiinvo/blob/65f10a8/src/push-sub.ts#L10)

___

### WithLength

Ƭ **WithLength**: { `length`: *number*  }

Represents an object with the `length` property

#### Type declaration:

Name | Type |
------ | ------ |
`length` | *number* |

Defined in: [typeguards.ts:19](https://github.com/OctoD/tiinvo/blob/65f10a8/src/typeguards.ts#L19)

___

### \_

Ƭ **\_**: *undefined*

Shorthand for undefined

Defined in: [applicative.ts:4](https://github.com/OctoD/tiinvo/blob/65f10a8/src/applicative.ts#L4)

## Functions

### anyof

▸ `Const`**anyof**<T\>(...`predicates`: [*Typeguard*](README.md#typeguard)<*unknown*\>[]): [*Typeguard*](README.md#typeguard)<T\>

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`...predicates` | [*Typeguard*](README.md#typeguard)<*unknown*\>[] |

**Returns:** [*Typeguard*](README.md#typeguard)<T\>

Defined in: [typeguards.ts:402](https://github.com/OctoD/tiinvo/blob/65f10a8/src/typeguards.ts#L402)

___

### bind

▸ `Const`**bind**<Fn\>(`fn`: Fn, ...`args`: [*ArgsOf*](README.md#argsof)<Fn\>): *function*

Binds a function to a null `this`, then returns it

**`example`** 
```ts
const myfn = (text: string, repeat: number) => text.repeat(repeat);
const bound = bind(myfn, 'abc', 3);

bound() // 'abcabcabc';
```

#### Type parameters:

Name | Type |
------ | ------ |
`Fn` | [*FnBase*](README.md#fnbase) |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`fn` | Fn |  |
`...args` | [*ArgsOf*](README.md#argsof)<Fn\> |     |

**Returns:** *function*

Defined in: [applicative.ts:44](https://github.com/OctoD/tiinvo/blob/65f10a8/src/applicative.ts#L44)

___

### cast

▸ `Const`**cast**<T, Tagfrom, Tagto\>(`tagged`: T, `totagged`: [*TaggedFactory*](README.md#taggedfactory)<Tagto\>): [*Tagged*](README.md#tagged)<T[*value*], Tagto\>

Cast a TaggetType to another one.

**`example`** 
```ts
const error = err('this is an error');
const someError = cast(error, some);
```

#### Type parameters:

Name | Type |
------ | ------ |
`T` | [*Tagged*](README.md#tagged)<*any*, Tagfrom\> |
`Tagfrom` | *string* |
`Tagto` | *string* |

#### Parameters:

Name | Type |
------ | ------ |
`tagged` | T |
`totagged` | [*TaggedFactory*](README.md#taggedfactory)<Tagto\> |

**Returns:** [*Tagged*](README.md#tagged)<T[*value*], Tagto\>

Defined in: [cast.ts:20](https://github.com/OctoD/tiinvo/blob/65f10a8/src/cast.ts#L20)

___

### check

▸ `Const`**check**(`condition`: *boolean*, `errormessage`: *string*): *function*

Checks if a given condition is true, otherwise throws an error with the given error message

**`example`** 
```ts
check(true, 'does not throw')(10)        // 10
check(true, 'does not throw')('hello')   // 'hello'
check(false, 'this throws')('hello')     // Uncaught Error: this throws
```

#### Parameters:

Name | Type |
------ | ------ |
`condition` | *boolean* |
`errormessage` | *string* |

**Returns:** *function*

Defined in: [applicative.ts:63](https://github.com/OctoD/tiinvo/blob/65f10a8/src/applicative.ts#L63)

___

### combine

▸ `Const`**combine**<T\>(...`args`: [*Typeguard*](README.md#typeguard)<*any*\>[]): [*Typeguard*](README.md#typeguard)<T\>

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`...args` | [*Typeguard*](README.md#typeguard)<*any*\>[] |

**Returns:** [*Typeguard*](README.md#typeguard)<T\>

Defined in: [typeguards.ts:392](https://github.com/OctoD/tiinvo/blob/65f10a8/src/typeguards.ts#L392)

___

### createCast

▸ `Const`**createCast**<Tagto\>(`totagged`: [*TaggedFactory*](README.md#taggedfactory)<Tagto\>): *function*

Creates a cast to function

**`example`** 
```ts

const toOption = createCast(option);

toOption(just('hello')); // Some<'hello'>;
```

#### Type parameters:

Name | Type |
------ | ------ |
`Tagto` | *string* |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`totagged` | [*TaggedFactory*](README.md#taggedfactory)<Tagto\> |     |

**Returns:** *function*

Defined in: [cast.ts:43](https://github.com/OctoD/tiinvo/blob/65f10a8/src/cast.ts#L43)

___

### createStructOf

▸ `Const`**createStructOf**<TG\>(`typeguard`: [*TypeguardsFromStruct*](README.md#typeguardsfromstruct)<TG\>): *function*

cle * Creates a typeguard representing a complex data structure. It is useful
for object validation.

**`example`** 
```ts

interface User {
   name: string;
   mail: string;
   age: number;
   status?: string;
}

const isUser = createStructOf<User>({
   name: isstring,
   mail: isstring,
   age: isnumber,
   status: optional(isstring),
});

isUser({}) // false
isUser({ age: 100 }) // false
isUser({ age: 100, name: 'foo' }) // false
isUser({ age: 100, name: 'foo', mail: 'hello_at_world.com' }) // true
isUser({ age: '100', name: 'foo', mail: 'hello_at_world.com' }) // false
```

#### Type parameters:

Name | Type |
------ | ------ |
`TG` | *unknown* |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`typeguard` | [*TypeguardsFromStruct*](README.md#typeguardsfromstruct)<TG\> |     |

**Returns:** *function*

Defined in: [typeguards.ts:339](https://github.com/OctoD/tiinvo/blob/65f10a8/src/typeguards.ts#L339)

___

### createTupleOf

▸ `Const`**createTupleOf**<TG\>(...`typeguards`: TG): *function*

#### Type parameters:

Name | Type |
------ | ------ |
`TG` | [*Typeguard*](README.md#typeguard)<*any*\>[] |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`...typeguards` | TG |     |

**Returns:** *function*

Defined in: [typeguards.ts:372](https://github.com/OctoD/tiinvo/blob/65f10a8/src/typeguards.ts#L372)

___

### fallback

▸ `Const`**fallback**<T\>(`arg`: T): *function*

Creates a function which returns a fallback function

**`example`** 
```ts
either.unwrapLeftOrElse(fallback(10))(right(20)) // 10
```

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`arg` | T |     |

**Returns:** *function*

Defined in: [applicative.ts:77](https://github.com/OctoD/tiinvo/blob/65f10a8/src/applicative.ts#L77)

___

### fi

▸ `Const`**fi**<T, F\>(`condition`: *boolean*, `truthyresult`: T, `falsyresult`: F): T \| F

Given a condition, returns T or F if the condition is true or false

**`example`** 
```ts

const printEvenOrOdd = (arg: number) => fi(arg % 2 === 0, 'Even', 'Odd');

printEvenOrOdd(1) // 'Odd'
printEvenOrOdd(2) // 'Even'
printEvenOrOdd(4) // 'Even'

```

#### Type parameters:

Name |
------ |
`T` |
`F` |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`condition` | *boolean* |  |
`truthyresult` | T |  |
`falsyresult` | F |     |

**Returns:** T \| F

Defined in: [conditionals.ts:21](https://github.com/OctoD/tiinvo/blob/65f10a8/src/conditionals.ts#L21)

___

### fifn

▸ `Const`**fifn**<T, F, A, B\>(`condition`: *boolean*, `truthyfn`: T, `falsyfn`: F): A \| B

The same of `fi`, but accepts two functions `A` and `B` with zero parameters and calls.
Calls `A` if the condition is `true` or `B` if false.

**`example`** 
```ts
const printeven = () => 'Even';
const printodd = () => 'Odd'
const printEvenOrOdd = (arg: number) => fifn(arg % 2 === 0, printeven, printodd);

printEvenOrOdd(1) // 'Odd'
printEvenOrOdd(2) // 'Even'
printEvenOrOdd(4) // 'Even'
```

#### Type parameters:

Name | Type |
------ | ------ |
`T` | () => A |
`F` | () => B |
`A` | - |
`B` | - |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`condition` | *boolean* |  |
`truthyfn` | T |  |
`falsyfn` | F |     |

**Returns:** A \| B

Defined in: [conditionals.ts:47](https://github.com/OctoD/tiinvo/blob/65f10a8/src/conditionals.ts#L47)

___

### haskey

▸ `Const`**haskey**<Key\>(`key`: Key): *function*

Checks if a value is indexable and has a key

#### Type parameters:

Name | Type |
------ | ------ |
`Key` | *string* \| *number* |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`key` | Key |     |

**Returns:** *function*

Defined in: [typeguards.ts:222](https://github.com/OctoD/tiinvo/blob/65f10a8/src/typeguards.ts#L222)

___

### haskeyWithValue

▸ `Const`**haskeyWithValue**<Key, Value\>(`key`: Key, `value`: Value): *function*

Checks if a value is indexable, has a key and that key has a precise value

**`example`** 
```ts
haskeyWithValue('foo', 100)({ foo: 100 }) // true
haskeyWithValue('foo', 100)({ foo: '1' }) // false
```

#### Type parameters:

Name | Type |
------ | ------ |
`Key` | *string* \| *number* |
`Value` | - |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`key` | Key |  |
`value` | Value |     |

**Returns:** *function*

Defined in: [typeguards.ts:260](https://github.com/OctoD/tiinvo/blob/65f10a8/src/typeguards.ts#L260)

___

### haskeyoftype

▸ `Const`**haskeyoftype**<Key, T\>(`key`: Key, `typeguard`: [*Typeguard*](README.md#typeguard)<T\>): *function*

Checks if a value is indexable, has a key and that key has a given type

**`example`** 
```ts
haskeyoftype('foo', isstring)({ foo: 100 }) // false
haskeyoftype('foo', isstring)({ foo: '1' }) // true
```

#### Type parameters:

Name | Type |
------ | ------ |
`Key` | *string* \| *number* |
`T` | - |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`key` | Key |  |
`typeguard` | [*Typeguard*](README.md#typeguard)<T\> |     |

**Returns:** *function*

Defined in: [typeguards.ts:240](https://github.com/OctoD/tiinvo/blob/65f10a8/src/typeguards.ts#L240)

___

### haslength

▸ `Const`**haslength**(`arg`: *unknown*): arg is WithLength

Checks if a value is indexable and has the 'length' key

**`example`** 
```ts
haslength([])              // true
haslength({})              // false
haslength({ length: 10 })  // true
```

#### Parameters:

Name | Type |
------ | ------ |
`arg` | *unknown* |

**Returns:** arg is WithLength

Defined in: [typeguards.ts:279](https://github.com/OctoD/tiinvo/blob/65f10a8/src/typeguards.ts#L279)

___

### haslengthof

▸ `Const`**haslengthof**(`length`: *number*): *function*

Checks if a value is indexable, has the 'length' key and that the length is equal to a given one

**`example`** 
```ts
const test = haslengthof(5)

test([1, 2, 3])       // false
test({})              // false
test({ length: 10 })  // true
```

#### Parameters:

Name | Type |
------ | ------ |
`length` | *number* |

**Returns:** *function*

Defined in: [typeguards.ts:296](https://github.com/OctoD/tiinvo/blob/65f10a8/src/typeguards.ts#L296)

___

### isTagged

▸ `Const`**isTagged**(`arg`: *unknown*): arg is Tagged<unknown, string\>

Checks if a variable is a Tagged<unknown, string>

#### Parameters:

Name | Type |
------ | ------ |
`arg` | *unknown* |

**Returns:** arg is Tagged<unknown, string\>

Defined in: [tagged-type.ts:78](https://github.com/OctoD/tiinvo/blob/65f10a8/src/tagged-type.ts#L78)

___

### isTaggedOf

▸ `Const`**isTaggedOf**<Tag, T\>(`tag`: Tag, `typeguard`: [*Typeguard*](README.md#typeguard)<T\>): [*Typeguard*](README.md#typeguard)<[*Tagged*](README.md#tagged)<T, Tag\>\>

#### Type parameters:

Name | Type |
------ | ------ |
`Tag` | *string* |
`T` | - |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`tag` | Tag |  |
`typeguard` | [*Typeguard*](README.md#typeguard)<T\> |     |

**Returns:** [*Typeguard*](README.md#typeguard)<[*Tagged*](README.md#tagged)<T, Tag\>\>

Defined in: [tagged-type.ts:106](https://github.com/OctoD/tiinvo/blob/65f10a8/src/tagged-type.ts#L106)

___

### isTaggedWith

▸ `Const`**isTaggedWith**<Tag\>(`tag`: Tag): [*Typeguard*](README.md#typeguard)<[*Tagged*](README.md#tagged)<*unknown*, Tag\>\>

#### Type parameters:

Name | Type |
------ | ------ |
`Tag` | *string* |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`tag` | Tag |     |

**Returns:** [*Typeguard*](README.md#typeguard)<[*Tagged*](README.md#tagged)<*unknown*, Tag\>\>

Defined in: [tagged-type.ts:90](https://github.com/OctoD/tiinvo/blob/65f10a8/src/tagged-type.ts#L90)

___

### isarray

▸ `Const`**isarray**(`arg`: *unknown*): arg is unknown[]

Checks if a value is an array

**`example`** 
```ts
isarray(10)  // false
isarray('a') // false
isarray(!0)  // false
isarray([])  // true

#### Parameters:

Name | Type |
------ | ------ |
`arg` | *unknown* |

**Returns:** arg is unknown[]

Defined in: [typeguards.ts:47](https://github.com/OctoD/tiinvo/blob/65f10a8/src/typeguards.ts#L47)

___

### isarrayof

▸ `Const`**isarrayof**<T\>(`typeguard`: [*Typeguard*](README.md#typeguard)<T\>): *function*

Checks if a variable is an array of a given type.

**`example`** 
```ts
const isarrayofStrings = isarrayof(isstring);

isarrayofStrings([10, 20, 'hello', 'world']) // false
isarrayofStrings([10, 20])                   // false
isarrayofStrings(['hello', 'world'])         // true
```

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`typeguard` | [*Typeguard*](README.md#typeguard)<T\> |     |

**Returns:** *function*

Defined in: [typeguards.ts:446](https://github.com/OctoD/tiinvo/blob/65f10a8/src/typeguards.ts#L446)

___

### isbigint

▸ `Const`**isbigint**(`arg`: *unknown*): arg is bigint

Checks if a value is a bigint

**`example`** 
```ts
isbigint(10)  // false
isbigint('a') // false
isbigint(!0)  // false
isbigint(10n) // true

#### Parameters:

Name | Type |
------ | ------ |
`arg` | *unknown* |

**Returns:** arg is bigint

Defined in: [typeguards.ts:59](https://github.com/OctoD/tiinvo/blob/65f10a8/src/typeguards.ts#L59)

___

### isboolean

▸ `Const`**isboolean**(`arg`: *unknown*): arg is boolean

Checks if a value is a boolean

**`example`** 
```ts
isboolean(10)  // false
isboolean('a') // false
isboolean(!0)  // true
isboolean(10n) // false

#### Parameters:

Name | Type |
------ | ------ |
`arg` | *unknown* |

**Returns:** arg is boolean

Defined in: [typeguards.ts:71](https://github.com/OctoD/tiinvo/blob/65f10a8/src/typeguards.ts#L71)

___

### isdefined

▸ `Const`**isdefined**(`arg`: *unknown*): arg is object

Checks if a value is not undefined

**`example`** 
```ts
isdefined(undefined)   // false
isdefined(10)          // true
isdefined('a')         // true
isdefined(!0)          // true
isdefined(10n)         // true

#### Parameters:

Name | Type |
------ | ------ |
`arg` | *unknown* |

**Returns:** arg is object

Defined in: [typeguards.ts:85](https://github.com/OctoD/tiinvo/blob/65f10a8/src/typeguards.ts#L85)

___

### iserror

▸ `Const`**iserror**(`arg`: *unknown*): arg is Error

Checks if a value is an Error

#### Parameters:

Name | Type |
------ | ------ |
`arg` | *unknown* |

**Returns:** arg is Error

Defined in: [typeguards.ts:210](https://github.com/OctoD/tiinvo/blob/65f10a8/src/typeguards.ts#L210)

___

### isexact

▸ `Const`**isexact**<T\>(`value`: T): *function*

Creates a typeguard which matches a specific value by type and value equality.

**`example`** 
```ts
const is10 = isexact(10);

is10(2);     // false
is10('10');  // false
is10(10);    // true
```

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`value` | T |     |

**Returns:** *function*

Defined in: [typeguards.ts:502](https://github.com/OctoD/tiinvo/blob/65f10a8/src/typeguards.ts#L502)

___

### isfunction

▸ `Const`**isfunction**(`arg`: *unknown*): arg is FnBase

Checks if a value is a function

**`example`** 
```ts
isfunction(undefined)   // false
isfunction(10)          // false
isfunction('a')         // false
isfunction(!0)          // false
isfunction(() => void 0)// true

#### Parameters:

Name | Type |
------ | ------ |
`arg` | *unknown* |

**Returns:** arg is FnBase

Defined in: [typeguards.ts:99](https://github.com/OctoD/tiinvo/blob/65f10a8/src/typeguards.ts#L99)

___

### isindexable

▸ `Const`**isindexable**(`arg`: *unknown*): arg is object

Checks if a value is an object (so that the `key` in can be used)

**`example`** 
```ts
isindexable(10)          // false
isindexable('a')         // false
isindexable({})          // true
isindexable(null)        // false
isindexable(undefined)   // false
```

#### Parameters:

Name | Type |
------ | ------ |
`arg` | *unknown* |

**Returns:** arg is object

Defined in: [typeguards.ts:201](https://github.com/OctoD/tiinvo/blob/65f10a8/src/typeguards.ts#L201)

___

### isnotNullOrUndefined

▸ `Const`**isnotNullOrUndefined**(`arg`: *unknown*): arg is object

Checks if a variable is not null or undefined

**`example`** 
```ts
isnotNullOrUndefined(null)      // false
isnotNullOrUndefined(undefined) // false
isnotNullOrUndefined('foo')     // true
isnotNullOrUndefined([])        // true
```

#### Parameters:

Name | Type |
------ | ------ |
`arg` | *unknown* |

**Returns:** arg is object

Defined in: [typeguards.ts:429](https://github.com/OctoD/tiinvo/blob/65f10a8/src/typeguards.ts#L429)

___

### isnotnull

▸ `Const`**isnotnull**(`arg`: *unknown*): arg is object

Checks if a value is not null

**`example`** 
```ts
isnotnull(10)          // true
isnotnull('a')         // true
isnotnull({})          // true
isnotnull(null)        // false
isnotnull(undefined)   // true
```

#### Parameters:

Name | Type |
------ | ------ |
`arg` | *unknown* |

**Returns:** arg is object

Defined in: [typeguards.ts:183](https://github.com/OctoD/tiinvo/blob/65f10a8/src/typeguards.ts#L183)

___

### isnull

▸ `Const`**isnull**(`arg`: *unknown*): arg is null

Checks if a value is null

**`example`** 
```ts
isnull(10)          // false
isnull('a')         // false
isnull({})          // false
isnull(null)        // true
isnull(undefined)   // false
```

#### Parameters:

Name | Type |
------ | ------ |
`arg` | *unknown* |

**Returns:** arg is null

Defined in: [typeguards.ts:169](https://github.com/OctoD/tiinvo/blob/65f10a8/src/typeguards.ts#L169)

___

### isnullOrUndefined

▸ `Const`**isnullOrUndefined**(`arg`: *unknown*): arg is undefined \| null

Checks if a variable is null or undefined

**`example`** 
```ts
isnullOrUndefined(null)      // true
isnullOrUndefined(undefined) // true
isnullOrUndefined('foo')     // false
isnullOrUndefined([])        // false
```

#### Parameters:

Name | Type |
------ | ------ |
`arg` | *unknown* |

**Returns:** arg is undefined \| null

Defined in: [typeguards.ts:416](https://github.com/OctoD/tiinvo/blob/65f10a8/src/typeguards.ts#L416)

___

### isnumber

▸ `Const`**isnumber**(`arg`: *unknown*): arg is number

Checks if a value is a number

**`example`** 
```ts
isnumber(10)  // true
isnumber('a') // false
isnumber(!0)  // false
isnumber(10n) // false

#### Parameters:

Name | Type |
------ | ------ |
`arg` | *unknown* |

**Returns:** arg is number

Defined in: [typeguards.ts:112](https://github.com/OctoD/tiinvo/blob/65f10a8/src/typeguards.ts#L112)

___

### isobject

▸ `Const`**isobject**(`arg`: *unknown*): arg is object

Checks if a value is an object

**`example`** 
```ts
isobject(10)   // false
isobject('a')  // false
isobject({})   // true
isobject(null) // true
isobject([])   // true
```

#### Parameters:

Name | Type |
------ | ------ |
`arg` | *unknown* |

**Returns:** arg is object

Defined in: [typeguards.ts:126](https://github.com/OctoD/tiinvo/blob/65f10a8/src/typeguards.ts#L126)

___

### isstring

▸ `Const`**isstring**(`arg`: *unknown*): arg is string

Checks if a value is a string

**`example`** 
```ts
isstring(10)   // false
isstring('a')  // true
isstring({})   // false
isstring(null) // false
isstring([])   // false
```

#### Parameters:

Name | Type |
------ | ------ |
`arg` | *unknown* |

**Returns:** arg is string

Defined in: [typeguards.ts:140](https://github.com/OctoD/tiinvo/blob/65f10a8/src/typeguards.ts#L140)

___

### isundefined

▸ `Const`**isundefined**(`arg`: *unknown*): arg is undefined

Checks if a value is undefined

**`example`** 
```ts
isundefined(10)          // false
isundefined('a')         // false
isundefined({})          // false
isundefined(null)        // false
isundefined(undefined)   // true
```

#### Parameters:

Name | Type |
------ | ------ |
`arg` | *unknown* |

**Returns:** arg is undefined

Defined in: [typeguards.ts:154](https://github.com/OctoD/tiinvo/blob/65f10a8/src/typeguards.ts#L154)

___

### mediator

▸ `Const`**mediator**(): [*Mediator*](interfaces/mediator.md)

A mediator pattern helps you to decouple code by mediating parts.

**`example`** 

```ts
import { bind, mediator } from 'tiinvo';

let counter = 0;
let evennumber = true;
let changeset = 0;

const mm = mediator();
const incrementchangeset = () => changeset++;
const incrementcounter = (value: number) => counter += value;
const iseven = (value: number) => evennumber = value % 2 === 0;

const applychangeset = bind(mm.publish, 'changeset');

mm.subscribe('counter', incrementcounter);
mm.subscribe('counter', iseven);
mm.subscribe('counter', applychangeset);
mm.subscribe('changeset', incrementchangeset);

mm.publish('counter', 20);
mm.publish('counter', 1);

console.log(counter, evennumber, changeset) // logs 21, false, 2

mm.publish('changeset');

console.log(counter, evennumber, changeset) // logs 21, false, 3
```

**Returns:** [*Mediator*](interfaces/mediator.md)

Defined in: [mediator.ts:47](https://github.com/OctoD/tiinvo/blob/65f10a8/src/mediator.ts#L47)

___

### nullable

▸ `Const`**nullable**<T\>(`typeguard`: [*Typeguard*](README.md#typeguard)<T\>): [*Typeguard*](README.md#typeguard)<*null* \| T\>

Makes a Typeguard<T> nullable

**`example`** 
```ts
const isnullablenumber = nullable(isnumber);

isnullablenumber(null) // true
isnullablenumber(1000) // true
isnullablenumber('10') // false
```

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`typeguard` | [*Typeguard*](README.md#typeguard)<T\> |     |

**Returns:** [*Typeguard*](README.md#typeguard)<*null* \| T\>

Defined in: [typeguards.ts:465](https://github.com/OctoD/tiinvo/blob/65f10a8/src/typeguards.ts#L465)

___

### optional

▸ `Const`**optional**<T\>(`typeguard`: [*Typeguard*](README.md#typeguard)<T\>): [*Typeguard*](README.md#typeguard)<*undefined* \| T\>

Makes a Typeguard<T> optional

**`example`** 
```ts
const isoptionalnumber = optional(isnumber);

isoptionalnumber(undefined)  // true
isoptionalnumber(1000)       // true
isoptionalnumber('10')       // false
isoptionalnumber(null)       // false
```

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`typeguard` | [*Typeguard*](README.md#typeguard)<T\> |     |

**Returns:** [*Typeguard*](README.md#typeguard)<*undefined* \| T\>

Defined in: [typeguards.ts:484](https://github.com/OctoD/tiinvo/blob/65f10a8/src/typeguards.ts#L484)

___

### panic

▸ `Const`**panic**<E\>(`message`: *string*, `ctor?`: E): *never*

Throws an error with the given message

#### Type parameters:

Name | Type |
------ | ------ |
`E` | ErrorConstructor |

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`message` | *string* | - |
`ctor` | E | ... |

**Returns:** *never*

Defined in: [applicative.ts:87](https://github.com/OctoD/tiinvo/blob/65f10a8/src/applicative.ts#L87)

___

### pipe

▸ `Const`**pipe**<F\>(...`f`: F & *AsChain*<F, *Tail*<F\>\>): *function*

Creates a pipeline of synchronous functions

**`example`** 
```ts
const add = (toadd: number) => (arg: number) => arg + toadd;
const multiply = (multiplier: number) => (arg: number) => arg * multiplier;
const printiseven = (arg: number) => arg % 2 === 0 ? 'even' : 'odd';

pipe(add(10), multiply(2), printiseven)(2); // 24
```

#### Type parameters:

Name | Type |
------ | ------ |
`F` | [(`arg`: *any*) => *any*, ...function[]] |

#### Parameters:

Name | Type |
------ | ------ |
`...f` | F & *AsChain*<F, *Tail*<F\>\> |

**Returns:** *function*

Defined in: [pipe.ts:49](https://github.com/OctoD/tiinvo/blob/65f10a8/src/pipe.ts#L49)

___

### pipeasync

▸ `Const`**pipeasync**<F\>(...`f`: F & *AsChain*<F, *Tail*<F\>\>): *function*

Creates a pipeline of asynchronous functions.

**`example`** 
```ts
import { array, createStructOf, pipe, pipeasync, toasync } from 'tiinvo'

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

#### Type parameters:

Name | Type |
------ | ------ |
`F` | [(`arg`: *any*) => *Promise*<*any*\>, ...function[]] |

#### Parameters:

Name | Type |
------ | ------ |
`...f` | F & *AsChain*<F, *Tail*<F\>\> |

**Returns:** *function*

Defined in: [pipe-async.ts:74](https://github.com/OctoD/tiinvo/blob/65f10a8/src/pipe-async.ts#L74)

___

### pushsub

▸ `Const`**pushsub**<Fn\>(`fn`: Fn): [*PushSub*](interfaces/pushsub.md)<Fn\>

A subscription/notify type. You can subscribe any function and notify it later.

**`example`** 
```ts
import { pushsub } from 'tiinvo';

let counter = 0;

const increment = (value: number) => counter += value;
const subscribed = pushsub(increment);

subscribed(20)

console.log(counter) // 20

subscribed(1)

console.log(counter) // 21

subscribed.unsubscribe()

subscribed(1) // throws error
```

#### Type parameters:

Name | Type |
------ | ------ |
`Fn` | [*FnBase*](README.md#fnbase) |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`fn` | Fn |     |

**Returns:** [*PushSub*](interfaces/pushsub.md)<Fn\>

Defined in: [push-sub.ts:39](https://github.com/OctoD/tiinvo/blob/65f10a8/src/push-sub.ts#L39)

___

### tagged

▸ `Const`**tagged**<T, Tagname\>(`value`: T, `tagname`: Tagname): [*Tagged*](README.md#tagged)<T, Tagname\>

Creates a TaggedType<T, Tagname>.

**`example`** 
```ts

tagged('hello world', 'foobarbaz'); // Tagged<'hello world', 'foobarbaz'>;
```

#### Type parameters:

Name | Type |
------ | ------ |
`T` | - |
`Tagname` | *string* |

#### Parameters:

Name | Type |
------ | ------ |
`value` | T |
`tagname` | Tagname |

**Returns:** [*Tagged*](README.md#tagged)<T, Tagname\>

Defined in: [tagged-type.ts:44](https://github.com/OctoD/tiinvo/blob/65f10a8/src/tagged-type.ts#L44)

___

### taggedFactory

▸ `Const`**taggedFactory**<T\>(`tagname`: T): [*TaggedFactory*](README.md#taggedfactory)<T\>

Creates a factory which returns a `Tagged<K, T>`

**`example`** 
```ts
const mytype = taggedFactory('foo');

mytype(10) // Tagged<10, 'foo'>
```

#### Type parameters:

Name | Type |
------ | ------ |
`T` | *string* |

#### Parameters:

Name | Type |
------ | ------ |
`tagname` | T |

**Returns:** [*TaggedFactory*](README.md#taggedfactory)<T\>

Defined in: [tagged-type.ts:63](https://github.com/OctoD/tiinvo/blob/65f10a8/src/tagged-type.ts#L63)

___

### toasync

▸ `Const`**toasync**<Fn\>(`fn`: Fn): *function*

Converts a sync function to an async one

#### Type parameters:

Name | Type |
------ | ------ |
`Fn` | [*FnBase*](README.md#fnbase) |

#### Parameters:

Name | Type |
------ | ------ |
`fn` | Fn |

**Returns:** *function*

Defined in: [applicative.ts:101](https://github.com/OctoD/tiinvo/blob/65f10a8/src/applicative.ts#L101)

___

### totaggedFn

▸ `Const`**totaggedFn**<Tagname\>(`factory`: [*TaggedFactory*](README.md#taggedfactory)<Tagname\>): *function*

Takes a tagged factory function.
Every function which takes a single argument will return a Tagged type

```ts

import { totaggedFn, taggedFactory } from 'tiinvo'

const mytagged = taggedFactory('mytagged');
const tomytagged = totaggedFn(mytagged)
const double = (arg: number) => arg * 2;
const mytaggeddouble = tomytagged(double)

double(10)           // 20
mytaggeddouble(10)   // { __tag: 'mytagged', value: 20 }

```

#### Type parameters:

Name | Type |
------ | ------ |
`Tagname` | *string* |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`factory` | [*TaggedFactory*](README.md#taggedfactory)<Tagname\> |     |

**Returns:** *function*

Defined in: [cast.ts:70](https://github.com/OctoD/tiinvo/blob/65f10a8/src/cast.ts#L70)

___

### trycatch

▸ `Const`**trycatch**<FnTry, K\>(`fn`: FnTry, ...`args`: K): [*Result*](modules/result.md#result)<*ReturnType*<FnTry\>\>

#### Type parameters:

Name | Type |
------ | ------ |
`FnTry` | (...`args`: K) => *any* |
`K` | *any*[] |

#### Parameters:

Name | Type |
------ | ------ |
`fn` | FnTry |
`...args` | K |

**Returns:** [*Result*](modules/result.md#result)<*ReturnType*<FnTry\>\>

Defined in: [trycatch.ts:12](https://github.com/OctoD/tiinvo/blob/65f10a8/src/trycatch.ts#L12)

___

### trycatchAsync

▸ `Const`**trycatchAsync**<FnTry, K\>(`fn`: FnTry, ...`args`: K): *Promise*<*ReturnType*<FnTry\> *extends* *Promise*<U\> ? [*Result*](modules/result.md#result)<U\> : *never*\>

#### Type parameters:

Name | Type |
------ | ------ |
`FnTry` | (...`args`: K) => *Promise*<*any*\> |
`K` | *any*[] |

#### Parameters:

Name | Type |
------ | ------ |
`fn` | FnTry |
`...args` | K |

**Returns:** *Promise*<*ReturnType*<FnTry\> *extends* *Promise*<U\> ? [*Result*](modules/result.md#result)<U\> : *never*\>

Defined in: [trycatch.ts:32](https://github.com/OctoD/tiinvo/blob/65f10a8/src/trycatch.ts#L32)
