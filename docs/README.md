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
- [num](modules/num.md)
- [obj](modules/obj.md)
- [option](modules/option.md)
- [predicate](modules/predicate.md)
- [result](modules/result.md)
- [str](modules/str.md)
- [unwrappables](modules/unwrappables.md)

### Interfaces

- [Mediator](interfaces/mediator.md)
- [PushSub](interfaces/pushsub.md)

### Type aliases

- [ArgsOf](README.md#argsof)
- [Fn1](README.md#fn1)
- [FnBase](README.md#fnbase)
- [FnBinary](README.md#fnbinary)
- [FnNary](README.md#fnnary)
- [FnNullary](README.md#fnnullary)
- [FnTernary](README.md#fnternary)
- [FnUnary](README.md#fnunary)
- [IndexableObject](README.md#indexableobject)
- [Notify](README.md#notify)
- [PrimitiveMethodMapper](README.md#primitivemethodmapper)
- [Primitives](README.md#primitives)
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
- [branch](README.md#branch)
- [callfnwith](README.md#callfnwith)
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
- [implementing](README.md#implementing)
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
- [istuple](README.md#istuple)
- [isundefined](README.md#isundefined)
- [mediator](README.md#mediator)
- [multi](README.md#multi)
- [nullable](README.md#nullable)
- [optional](README.md#optional)
- [panic](README.md#panic)
- [pass](README.md#pass)
- [pipe](README.md#pipe)
- [pipeasync](README.md#pipeasync)
- [pushsub](README.md#pushsub)
- [tagged](README.md#tagged)
- [taggedFactory](README.md#taggedfactory)
- [toasync](README.md#toasync)
- [totaggedFn](README.md#totaggedfn)
- [trycatch](README.md#trycatch)
- [trycatchAsync](README.md#trycatchasync)
- [wait](README.md#wait)

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

Defined in: [src/applicative.ts:16](https://github.com/OctoD/tiinvo/blob/5dcae37/src/applicative.ts#L16)

___

### Fn1

Ƭ **Fn1**<FnIn, FnOut\>: (`arg`: FnIn) => FnOut

A function which takes one argument

**`deprecated`** use FnUnary

#### Type parameters:

Name |
------ |
`FnIn` |
`FnOut` |

Defined in: [src/applicative.ts:29](https://github.com/OctoD/tiinvo/blob/5dcae37/src/applicative.ts#L29)

___

### FnBase

Ƭ **FnBase**: (...`args`: *any*[]) => *any*

A generic function type

Defined in: [src/applicative.ts:23](https://github.com/OctoD/tiinvo/blob/5dcae37/src/applicative.ts#L23)

___

### FnBinary

Ƭ **FnBinary**<T, U, W\>: (`arg1`: T, `arg2`: U) => W

#### Type parameters:

Name |
------ |
`T` |
`U` |
`W` |

Defined in: [src/applicative.ts:45](https://github.com/OctoD/tiinvo/blob/5dcae37/src/applicative.ts#L45)

___

### FnNary

Ƭ **FnNary**<T, U\>: (...`args`: T) => U

#### Type parameters:

Name | Type |
------ | ------ |
`T` | *any*[] |
`U` | - |

Defined in: [src/applicative.ts:47](https://github.com/OctoD/tiinvo/blob/5dcae37/src/applicative.ts#L47)

___

### FnNullary

Ƭ **FnNullary**<T\>: () => T

#### Type parameters:

Name |
------ |
`T` |

Defined in: [src/applicative.ts:43](https://github.com/OctoD/tiinvo/blob/5dcae37/src/applicative.ts#L43)

___

### FnTernary

Ƭ **FnTernary**<T, U, W, Z\>: (`arg1`: T, `arg2`: U, `arg3`: W) => Z

#### Type parameters:

Name |
------ |
`T` |
`U` |
`W` |
`Z` |

Defined in: [src/applicative.ts:46](https://github.com/OctoD/tiinvo/blob/5dcae37/src/applicative.ts#L46)

___

### FnUnary

Ƭ **FnUnary**<T, U\>: (`arg`: T) => U

#### Type parameters:

Name |
------ |
`T` |
`U` |

Defined in: [src/applicative.ts:44](https://github.com/OctoD/tiinvo/blob/5dcae37/src/applicative.ts#L44)

___

### IndexableObject

Ƭ **IndexableObject**<T\>: { [index: string]: T;  }

Represents a plain object

#### Type parameters:

Name | Default |
------ | ------ |
`T` | *unknown* |

Defined in: [src/typeguards.ts:14](https://github.com/OctoD/tiinvo/blob/5dcae37/src/typeguards.ts#L14)

___

### Notify

Ƭ **Notify**<Fn\>: (...`args`: [*ArgsOf*](README.md#argsof)<Fn\>) => *void*

#### Type parameters:

Name | Type |
------ | ------ |
`Fn` | [*FnBase*](README.md#fnbase) |

Defined in: [src/push-sub.ts:9](https://github.com/OctoD/tiinvo/blob/5dcae37/src/push-sub.ts#L9)

___

### PrimitiveMethodMapper

Ƭ **PrimitiveMethodMapper**<T\>: <key\>(`key`: *key*) => (...`args`: T[*key*] *extends* (...`args`: *infer* Args) => *any* ? Args : *never*) => (`arg`: T) => T[*key*] *extends* (...`args`: *any*) => *infer* U ? U : *never*

Maps a primitive type method

#### Type parameters:

Name | Type |
------ | ------ |
`T` | [*Primitives*](README.md#primitives) |

Defined in: [src/applicative.ts:39](https://github.com/OctoD/tiinvo/blob/5dcae37/src/applicative.ts#L39)

___

### Primitives

Ƭ **Primitives**: *string* \| *number* \| *object* \| *symbol*

Primitives

Defined in: [src/applicative.ts:34](https://github.com/OctoD/tiinvo/blob/5dcae37/src/applicative.ts#L34)

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

Defined in: [src/tagged-type.ts:14](https://github.com/OctoD/tiinvo/blob/5dcae37/src/tagged-type.ts#L14)

___

### TaggedFactory

Ƭ **TaggedFactory**<Tagname\>: <T\>(`arg`: T) => [*Tagged*](README.md#tagged)<T, Tagname\>

A `TaggedType<T, Tagname>` factory.

#### Type parameters:

Name | Type |
------ | ------ |
`Tagname` | *string* |

Defined in: [src/tagged-type.ts:22](https://github.com/OctoD/tiinvo/blob/5dcae37/src/tagged-type.ts#L22)

___

### TypegardsTuple

Ƭ **TypegardsTuple**<T\>: { [key in keyof T]: T[key] extends Typeguard<infer U\> ? U : never}

#### Type parameters:

Name | Type |
------ | ------ |
`T` | [*Typeguard*](README.md#typeguard)<*any*\>[] |

Defined in: [src/typeguards.ts:29](https://github.com/OctoD/tiinvo/blob/5dcae37/src/typeguards.ts#L29)

___

### Typeguard

Ƭ **Typeguard**<IsOutput\>: (`arg`: *unknown*) => arg is IsOutput

A typeguard

#### Type parameters:

Name |
------ |
`IsOutput` |

Defined in: [src/typeguards.ts:9](https://github.com/OctoD/tiinvo/blob/5dcae37/src/typeguards.ts#L9)

___

### TypeguardsFromStruct

Ƭ **TypeguardsFromStruct**<T\>: { [key in keyof T]: Typeguard<T[key]\> \| TypeguardsFromStruct<T[key]\>}

#### Type parameters:

Name |
------ |
`T` |

Defined in: [src/typeguards.ts:310](https://github.com/OctoD/tiinvo/blob/5dcae37/src/typeguards.ts#L310)

___

### TypeguardsStruct

Ƭ **TypeguardsStruct**<T\>: { [key in keyof T]: T[key] extends Typeguard<infer U\> ? U : T[key] extends IndexableObject<any\> ? TypeguardsStruct<T[key]\> : never}

#### Type parameters:

Name |
------ |
`T` |

Defined in: [src/typeguards.ts:21](https://github.com/OctoD/tiinvo/blob/5dcae37/src/typeguards.ts#L21)

___

### UnsubscribeFn

Ƭ **UnsubscribeFn**: () => *void*

Defined in: [src/push-sub.ts:10](https://github.com/OctoD/tiinvo/blob/5dcae37/src/push-sub.ts#L10)

___

### WithLength

Ƭ **WithLength**: { `length`: *number*  }

Represents an object with the `length` property

#### Type declaration:

Name | Type |
------ | ------ |
`length` | *number* |

Defined in: [src/typeguards.ts:19](https://github.com/OctoD/tiinvo/blob/5dcae37/src/typeguards.ts#L19)

___

### \_

Ƭ **\_**: *undefined*

Shorthand for undefined

Defined in: [src/applicative.ts:4](https://github.com/OctoD/tiinvo/blob/5dcae37/src/applicative.ts#L4)

## Functions

### anyof

▸ `Const`**anyof**<T\>(...`predicates`: [*Typeguard*](README.md#typeguard)<*unknown*\>[]): [*Typeguard*](README.md#typeguard)<T\>

Determines if one or more typeguards are satisfied by the given value.
Ideal for typechecking enums, variadic enums, constants etc.

**`since`** 2.0.0

```ts
import { anyof, isstring, isnumber, isbool, Typeguard, predicate } from 'tiinvo';

export const Variadic1 = `hello`;
export const Variadic2 = 10000000;
export const Variadic3 = false;

export type Variadic1 = typeof Variadic1;
export type Variadic2 = typeof Variadic2;
export type Variadic3 = typeof Variadic3;

export type MyVariadicEnum = Variadic1 | Variadic2 | Variadic3;

export const isVariadic1 = predicate.withsamevalue(Variadic1) as Typeguard<Variadic1>;
export const isVariadic2 = predicate.withsamevalue(Variadic2) as Typeguard<Variadic2>;
export const isVariadic3 = predicate.withsamevalue(Variadic3) as Typeguard<Variadic3>;
export const isMyVariadicEnum = anyof<MyVariadicEnum>(
   isVariadic1,
   isVariadic2,
   isVariadic3,
);

isMyVariadicEnum(123)      // false
isMyVariadicEnum(true)     // false
isMyVariadicEnum('aa')     // false
isMyVariadicEnum('hello')  // true
isMyVariadicEnum(false)    // true
isMyVariadicEnum(10000000) // true
```

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`...predicates` | [*Typeguard*](README.md#typeguard)<*unknown*\>[] |

**Returns:** [*Typeguard*](README.md#typeguard)<T\>

Defined in: [src/typeguards.ts:523](https://github.com/OctoD/tiinvo/blob/5dcae37/src/typeguards.ts#L523)

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

Defined in: [src/applicative.ts:65](https://github.com/OctoD/tiinvo/blob/5dcae37/src/applicative.ts#L65)

___

### branch

▸ `Const`**branch**<U, R\>(`condition`: [*Predicate*](modules/predicate.md#predicate)<U\>, `positive`: [*FnUnary*](README.md#fnunary)<U, R\>, `negative`: [*FnUnary*](README.md#fnunary)<U, R\>): *function*

Creates a branching function. If the predicate is satisfied, calls Positive fn, otherwise calls Negative fn.
Note: Both Predicate, Positive and Negative fns are unaries.

**`since`** 2.12.0

**`example`** 
```ts
import { branch, num } from 'tiinvo';

const tostring = (label: 'even' | 'odd') => (arg: number) => `${arg} is ${label}`
const evenstostring = tostring('even');
const oddstostring = tostring('odd');

const dosomething = const dosomething = branch(num.iseven, evenstostring, oddstostring);

dosomething(10) // "10 is even"
dosomething(11) // "11 is odd"

```

#### Type parameters:

Name |
------ |
`U` |
`R` |

#### Parameters:

Name | Type |
------ | ------ |
`condition` | [*Predicate*](modules/predicate.md#predicate)<U\> |
`positive` | [*FnUnary*](README.md#fnunary)<U, R\> |
`negative` | [*FnUnary*](README.md#fnunary)<U, R\> |

**Returns:** *function*

Defined in: [src/conditionals.ts:82](https://github.com/OctoD/tiinvo/blob/5dcae37/src/conditionals.ts#L82)

___

### callfnwith

▸ `Const`**callfnwith**<Args\>(...`args`: Args): *function*

Given some arguments, returns a function which accepts another function.
This function will be called with the given arguments.

**`since`** 2.13.0

**`example`** 

```ts
import { callfnwith, num, pipe } from 'tiinvo';

const piped = pipe(
    num.umultiply(2),
    num.uadd,
);

callfnwith(10)(piped)(2) // 22
callfnwith(4)(piped)(2)  // 10

```

#### Type parameters:

Name | Type |
------ | ------ |
`Args` | *any*[] |

#### Parameters:

Name | Type |
------ | ------ |
`...args` | Args |

**Returns:** *function*

Defined in: [src/applicative.ts:93](https://github.com/OctoD/tiinvo/blob/5dcae37/src/applicative.ts#L93)

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

Defined in: [src/cast.ts:20](https://github.com/OctoD/tiinvo/blob/5dcae37/src/cast.ts#L20)

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

Defined in: [src/applicative.ts:109](https://github.com/OctoD/tiinvo/blob/5dcae37/src/applicative.ts#L109)

___

### combine

▸ `Const`**combine**<T\>(...`args`: [*Typeguard*](README.md#typeguard)<*any*\>[]): [*Typeguard*](README.md#typeguard)<T\>

Combines two or more typeguards in one.
If every typeguard passes, the argument will be of type `T`.

**`since`** 2.0.0

**`example`** 

```ts
import { combine, isstring, Typeguard, num, str, pipe } from 'tiinvo'

const haslengthof5 = pipe(
   str.length,
   num.greaterequalthan(5),
) as Typeguard<string>;

const isstringwithminlengthof5 = combine<string>(
   isstring,
   haslengthof5,
);

isstringwithminlengthof5(`a`)      // false
isstringwithminlengthof5(`abcde`)  // true

```

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`...args` | [*Typeguard*](README.md#typeguard)<*any*\>[] |

**Returns:** [*Typeguard*](README.md#typeguard)<T\>

Defined in: [src/typeguards.ts:480](https://github.com/OctoD/tiinvo/blob/5dcae37/src/typeguards.ts#L480)

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

Defined in: [src/cast.ts:43](https://github.com/OctoD/tiinvo/blob/5dcae37/src/cast.ts#L43)

___

### createStructOf

▸ `Const`**createStructOf**<TG\>(`typeguard`: [*TypeguardsFromStruct*](README.md#typeguardsfromstruct)<TG\>): *function*

Creates a typeguard representing a complex data structure. It is useful
for object validation.

**`deprecated`** use `implementing` instead

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

Defined in: [src/typeguards.ts:406](https://github.com/OctoD/tiinvo/blob/5dcae37/src/typeguards.ts#L406)

___

### createTupleOf

▸ `Const`**createTupleOf**<TG\>(...`typeguards`: TG): *function*

**`deprecated`** use `istuple` instead

**`example`** 

#### Type parameters:

Name | Type |
------ | ------ |
`TG` | [*Typeguard*](README.md#typeguard)<*any*\>[] |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`...typeguards` | TG |     |

**Returns:** *function*

Defined in: [src/typeguards.ts:446](https://github.com/OctoD/tiinvo/blob/5dcae37/src/typeguards.ts#L446)

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

Defined in: [src/applicative.ts:123](https://github.com/OctoD/tiinvo/blob/5dcae37/src/applicative.ts#L123)

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

Defined in: [src/conditionals.ts:24](https://github.com/OctoD/tiinvo/blob/5dcae37/src/conditionals.ts#L24)

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

Defined in: [src/conditionals.ts:50](https://github.com/OctoD/tiinvo/blob/5dcae37/src/conditionals.ts#L50)

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

Defined in: [src/typeguards.ts:228](https://github.com/OctoD/tiinvo/blob/5dcae37/src/typeguards.ts#L228)

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

Defined in: [src/typeguards.ts:266](https://github.com/OctoD/tiinvo/blob/5dcae37/src/typeguards.ts#L266)

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

Defined in: [src/typeguards.ts:246](https://github.com/OctoD/tiinvo/blob/5dcae37/src/typeguards.ts#L246)

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

Defined in: [src/typeguards.ts:285](https://github.com/OctoD/tiinvo/blob/5dcae37/src/typeguards.ts#L285)

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

Defined in: [src/typeguards.ts:302](https://github.com/OctoD/tiinvo/blob/5dcae37/src/typeguards.ts#L302)

___

### implementing

▸ `Const`**implementing**<TG\>(`typeguard`: [*TypeguardsFromStruct*](README.md#typeguardsfromstruct)<TG\>): *function*

Creates a Typeguard which checks if a given object is implementing a given interface.

**`since`** 2.10.0

**`example`** 

```ts
import { implementing } from 'tiinvo';

interface User {
   name: string;
   mail: string;
   age: number;
   status?: string;
}

const isUser = implementing<User>({
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

Name | Type |
------ | ------ |
`typeguard` | [*TypeguardsFromStruct*](README.md#typeguardsfromstruct)<TG\> |

**Returns:** *function*

Defined in: [src/typeguards.ts:346](https://github.com/OctoD/tiinvo/blob/5dcae37/src/typeguards.ts#L346)

___

### isTagged

▸ `Const`**isTagged**(`arg`: *unknown*): arg is Tagged<unknown, string\>

Checks if a variable is a Tagged<unknown, string>

#### Parameters:

Name | Type |
------ | ------ |
`arg` | *unknown* |

**Returns:** arg is Tagged<unknown, string\>

Defined in: [src/tagged-type.ts:78](https://github.com/OctoD/tiinvo/blob/5dcae37/src/tagged-type.ts#L78)

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

Defined in: [src/tagged-type.ts:106](https://github.com/OctoD/tiinvo/blob/5dcae37/src/tagged-type.ts#L106)

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

Defined in: [src/tagged-type.ts:90](https://github.com/OctoD/tiinvo/blob/5dcae37/src/tagged-type.ts#L90)

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
```

#### Parameters:

Name | Type |
------ | ------ |
`arg` | *unknown* |

**Returns:** arg is unknown[]

Defined in: [src/typeguards.ts:48](https://github.com/OctoD/tiinvo/blob/5dcae37/src/typeguards.ts#L48)

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

Defined in: [src/typeguards.ts:567](https://github.com/OctoD/tiinvo/blob/5dcae37/src/typeguards.ts#L567)

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
```

#### Parameters:

Name | Type |
------ | ------ |
`arg` | *unknown* |

**Returns:** arg is bigint

Defined in: [src/typeguards.ts:61](https://github.com/OctoD/tiinvo/blob/5dcae37/src/typeguards.ts#L61)

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
```

#### Parameters:

Name | Type |
------ | ------ |
`arg` | *unknown* |

**Returns:** arg is boolean

Defined in: [src/typeguards.ts:74](https://github.com/OctoD/tiinvo/blob/5dcae37/src/typeguards.ts#L74)

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
```

#### Parameters:

Name | Type |
------ | ------ |
`arg` | *unknown* |

**Returns:** arg is object

Defined in: [src/typeguards.ts:89](https://github.com/OctoD/tiinvo/blob/5dcae37/src/typeguards.ts#L89)

___

### iserror

▸ `Const`**iserror**(`arg`: *unknown*): arg is Error

Checks if a value is an Error

#### Parameters:

Name | Type |
------ | ------ |
`arg` | *unknown* |

**Returns:** arg is Error

Defined in: [src/typeguards.ts:216](https://github.com/OctoD/tiinvo/blob/5dcae37/src/typeguards.ts#L216)

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

Defined in: [src/typeguards.ts:623](https://github.com/OctoD/tiinvo/blob/5dcae37/src/typeguards.ts#L623)

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
```

#### Parameters:

Name | Type |
------ | ------ |
`arg` | *unknown* |

**Returns:** arg is FnBase

Defined in: [src/typeguards.ts:104](https://github.com/OctoD/tiinvo/blob/5dcae37/src/typeguards.ts#L104)

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

Defined in: [src/typeguards.ts:207](https://github.com/OctoD/tiinvo/blob/5dcae37/src/typeguards.ts#L207)

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

Defined in: [src/typeguards.ts:550](https://github.com/OctoD/tiinvo/blob/5dcae37/src/typeguards.ts#L550)

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

Defined in: [src/typeguards.ts:189](https://github.com/OctoD/tiinvo/blob/5dcae37/src/typeguards.ts#L189)

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

Defined in: [src/typeguards.ts:175](https://github.com/OctoD/tiinvo/blob/5dcae37/src/typeguards.ts#L175)

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

Defined in: [src/typeguards.ts:537](https://github.com/OctoD/tiinvo/blob/5dcae37/src/typeguards.ts#L537)

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
```

#### Parameters:

Name | Type |
------ | ------ |
`arg` | *unknown* |

**Returns:** arg is number

Defined in: [src/typeguards.ts:118](https://github.com/OctoD/tiinvo/blob/5dcae37/src/typeguards.ts#L118)

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

Defined in: [src/typeguards.ts:132](https://github.com/OctoD/tiinvo/blob/5dcae37/src/typeguards.ts#L132)

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

Defined in: [src/typeguards.ts:146](https://github.com/OctoD/tiinvo/blob/5dcae37/src/typeguards.ts#L146)

___

### istuple

▸ `Const`**istuple**<TG\>(...`typeguards`: TG): *function*

Creates a typeguard which checks if an array is a tuple
corresponding the given types

**`example`** 

```ts
import { istuple, isstring, isnumber } from 'tiinvo';

const tg = istuple(isstring, isstring, isnumber);

tg([10, 20, 30])         // false
tg(['10', 20, 30])       // false
tg(['10', '20', 30])     // true
tg(['10', '20', 30, 50]) // false

```

#### Type parameters:

Name | Type |
------ | ------ |
`TG` | [*Typeguard*](README.md#typeguard)<*any*\>[] |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`...typeguards` | TG |     |

**Returns:** *function*

Defined in: [src/typeguards.ts:429](https://github.com/OctoD/tiinvo/blob/5dcae37/src/typeguards.ts#L429)

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

Defined in: [src/typeguards.ts:160](https://github.com/OctoD/tiinvo/blob/5dcae37/src/typeguards.ts#L160)

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

Defined in: [src/mediator.ts:47](https://github.com/OctoD/tiinvo/blob/5dcae37/src/mediator.ts#L47)

___

### multi

▸ `Const`**multi**<U, R\>(`defaultcase`: [*FnNullary*](README.md#fnnullary)<R\>, ...`cases`: [[*Predicate*](modules/predicate.md#predicate)<U\>, [*FnNullary*](README.md#fnnullary)<R\>][]): *function*

Like a Switch statement, but made with functions

**`since`** 2.13.0

**`example`** 

```ts
import { multi, fallback, num, pipe, str } from 'tiinvo';

const switchcase = pipe(
   str.length,
   multi(
     fallback(`Not valid`),
     [num.equals(0), fallback(`Required`)],
     [num.lessthan(10), fallback(`Too short`)],
     [num.greaterthan(20), fallback(`Too long`)],
     [num.greaterthan(8), fallback(`Valid`)],
   )
);

switchcase('hello world')                    // `Valid`
switchcase('foo')                            // `Too short`
switchcase('123456789012345678901234567890') // `Too long`
switchcase('')                               // `Required`
switchcase(11 as any)                        // `Not valid`
```

#### Type parameters:

Name |
------ |
`U` |
`R` |

#### Parameters:

Name | Type |
------ | ------ |
`defaultcase` | [*FnNullary*](README.md#fnnullary)<R\> |
`...cases` | [[*Predicate*](modules/predicate.md#predicate)<U\>, [*FnNullary*](README.md#fnnullary)<R\>][] |

**Returns:** *function*

Defined in: [src/conditionals.ts:118](https://github.com/OctoD/tiinvo/blob/5dcae37/src/conditionals.ts#L118)

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

Defined in: [src/typeguards.ts:586](https://github.com/OctoD/tiinvo/blob/5dcae37/src/typeguards.ts#L586)

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

Defined in: [src/typeguards.ts:605](https://github.com/OctoD/tiinvo/blob/5dcae37/src/typeguards.ts#L605)

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

Defined in: [src/applicative.ts:141](https://github.com/OctoD/tiinvo/blob/5dcae37/src/applicative.ts#L141)

___

### pass

▸ `Const`**pass**<T\>(`arg`: T): T

A function which passes the given argument.

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`arg` | T |

**Returns:** T

Defined in: [src/applicative.ts:131](https://github.com/OctoD/tiinvo/blob/5dcae37/src/applicative.ts#L131)

___

### pipe

▸ `Const`**pipe**<F\>(...`f`: F & *AsChain*<F, *Tail*<F\>\>): F[*0*] *extends* () => *any* ? () => *ReturnType*<F[*LastIndexOf*<F\>]\> : F[*0*] *extends* (`arg`: U) => *any* ? (`arg`: U) => *ReturnType*<F[*LastIndexOf*<F\>]\> : *never*

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

**Returns:** F[*0*] *extends* () => *any* ? () => *ReturnType*<F[*LastIndexOf*<F\>]\> : F[*0*] *extends* (`arg`: U) => *any* ? (`arg`: U) => *ReturnType*<F[*LastIndexOf*<F\>]\> : *never*

Defined in: [src/pipe.ts:52](https://github.com/OctoD/tiinvo/blob/5dcae37/src/pipe.ts#L52)

___

### pipeasync

▸ `Const`**pipeasync**<F\>(...`f`: F & *AsChain*<F, *Tail*<F\>\>): F[*0*] *extends* () => *any* ? () => *ReturnType*<F[*LastIndexOf*<F\>]\> : F[*0*] *extends* (`arg`: U) => *any* ? (`arg`: U) => *ReturnType*<F[*LastIndexOf*<F\>]\> : *never*

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
`F` | [(`arg`: *any*) => *Promise*<*any*\> \| () => *Promise*<*any*\>, ...function[]] |

#### Parameters:

Name | Type |
------ | ------ |
`...f` | F & *AsChain*<F, *Tail*<F\>\> |

**Returns:** F[*0*] *extends* () => *any* ? () => *ReturnType*<F[*LastIndexOf*<F\>]\> : F[*0*] *extends* (`arg`: U) => *any* ? (`arg`: U) => *ReturnType*<F[*LastIndexOf*<F\>]\> : *never*

Defined in: [src/pipe-async.ts:75](https://github.com/OctoD/tiinvo/blob/5dcae37/src/pipe-async.ts#L75)

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

Defined in: [src/push-sub.ts:39](https://github.com/OctoD/tiinvo/blob/5dcae37/src/push-sub.ts#L39)

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

Defined in: [src/tagged-type.ts:44](https://github.com/OctoD/tiinvo/blob/5dcae37/src/tagged-type.ts#L44)

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

Defined in: [src/tagged-type.ts:63](https://github.com/OctoD/tiinvo/blob/5dcae37/src/tagged-type.ts#L63)

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

Defined in: [src/applicative.ts:155](https://github.com/OctoD/tiinvo/blob/5dcae37/src/applicative.ts#L155)

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

Defined in: [src/cast.ts:70](https://github.com/OctoD/tiinvo/blob/5dcae37/src/cast.ts#L70)

___

### trycatch

▸ `Const`**trycatch**<FnTry, K\>(`fn`: FnTry, ...`args`: K): [*Result*](modules/result.md#result)<*ReturnType*<FnTry\>\>

Calls a function safely and returns a `Result<T>` where `T` is the return type of that function.

**`since`** 2.0.0

**`example`** 

```ts
import { trycatch, result } from 'tiinvo';

const thisthrows = () => { throw new Error(`This is Sparta`) }
const thisisok = (what: string) => `we love ${what}`

const test1 = trycatch(thisthrows);
const test2 = trycatch(thisisok, 'kittens');

result.isErr(test1)  // true
result.isOk(test2)   // true

```

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

Defined in: [src/trycatch.ts:28](https://github.com/OctoD/tiinvo/blob/5dcae37/src/trycatch.ts#L28)

___

### trycatchAsync

▸ `Const`**trycatchAsync**<FnTry, K\>(`fn`: FnTry, ...`args`: K): *Promise*<*ReturnType*<FnTry\> *extends* *Promise*<U\> ? [*Result*](modules/result.md#result)<U\> : *never*\>

Calls a function safely and returns a `Promise<Result<T>>` where `T` is the return type of that function.

**`since`** 2.0.0

```ts
import { trycatchAsync, result } from 'tiinvo';

const fail = async () => { throw new Error('oops I did it again') }
const success = async (num: number) => num;

trycatchAsync(fail).then(result.isErr)       // Promise<true>
trycatchAsync(success, 10).then(result.isOk) // Promise<true>

```

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

Defined in: [src/trycatch.ts:60](https://github.com/OctoD/tiinvo/blob/5dcae37/src/trycatch.ts#L60)

___

### wait

▸ `Const`**wait**(`milliseconds`: *number*): *Promise*<*unknown*\>

Waits for a given amount of time (milliseconds), then resolves the promise.

**`since`** 2.13.0

**`example`** 

```ts
import { pipeasync, wait } from 'tiinvo';

const logasync = async (message: string) => () => console.log(message);

pipeasync(
   logasync('The next part of the message will be logged in one second'),
   wait(1000),
   logasync('waited one second'),
)
```

#### Parameters:

Name | Type |
------ | ------ |
`milliseconds` | *number* |

**Returns:** *Promise*<*unknown*\>

Defined in: [src/applicative.ts:181](https://github.com/OctoD/tiinvo/blob/5dcae37/src/applicative.ts#L181)
