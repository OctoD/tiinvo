[tiinvo](../README.md) / predicate

# Namespace: predicate

## Table of contents

### Type aliases

- [Predicate](predicate.md#predicate)

### Functions

- [and](predicate.md#and)
- [fromvalue](predicate.md#fromvalue)
- [fromvalues](predicate.md#fromvalues)
- [greaterorequalthan](predicate.md#greaterorequalthan)
- [greaterthan](predicate.md#greaterthan)
- [lessorequalthan](predicate.md#lessorequalthan)
- [lessthan](predicate.md#lessthan)
- [noneof](predicate.md#noneof)
- [or](predicate.md#or)
- [reverse](predicate.md#reverse)
- [withdifferentvalue](predicate.md#withdifferentvalue)
- [withsamevalue](predicate.md#withsamevalue)

## Type aliases

### Predicate

Ƭ **Predicate**<T\>: (`arg`: T) => *boolean*

#### Type parameters:

Name |
------ |
`T` |

Defined in: [src/predicate.ts:5](https://github.com/OctoD/tiinvo/blob/1d01ad1/src/predicate.ts#L5)

## Functions

### and

▸ `Const`**and**<T\>(...`predicates`: [*Predicate*](predicate.md#predicate)<T\>[]): [*Predicate*](predicate.md#predicate)<T\>

Combines two or more predicates in one. The resulting predicate will return true if
all predicates are satisfied

**`example`** 
```ts
const isString = (arg: unknown): arg is string => typeof arg === 'string';
const hasLength = (length: number) => (arg: unknown): boolean => isString(arg) && arg.length >= length;
const contains = (str: string) => (arg: unknown): boolean => isString(arg) && arg.contains(str);

const combined = and(isString, hasLength(4), contains('foo'))

combined('foobarbaz'); // true
combined('helloworld'); // false
combined('foo'); // false
```

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`...predicates` | [*Predicate*](predicate.md#predicate)<T\>[] | a list of predicates to combine with AND rule (&&)   |

**Returns:** [*Predicate*](predicate.md#predicate)<T\>

Defined in: [src/predicate.ts:28](https://github.com/OctoD/tiinvo/blob/1d01ad1/src/predicate.ts#L28)

___

### fromvalue

▸ `Const`**fromvalue**<T\>(`value`: T): *function*

Creates a new function which accepts a predicate. This predicate will check
the given value

**`example`** 
```ts
const iseven = (arg: number) => arg % 2 === 0;
const isodd  = reverse(iseven);
const check1 = fromvalue(1);
const check2 = fromvalue(2);

check1(iseven)   // false
check1(isodd)    // true
check2(iseven)   // true
check2(isodd)    // false
```

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`value` | T | the value to check    |

**Returns:** *function*

Defined in: [src/predicate.ts:52](https://github.com/OctoD/tiinvo/blob/1d01ad1/src/predicate.ts#L52)

___

### fromvalues

▸ `Const`**fromvalues**<T\>(...`values`: T[]): *function*

Returns a function which checks if every value T passes a given predicate

**`example`** 
```ts
const test1 = fromvalues(1, 2, 3, 4, 5);
const test2 = fromvalues(2, 4, 6, 8);
const iseven = (arg: number) => arg % 2 === 0;

test1(iseven); // false
test2(iseven); // true
```

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`...values` | T[] |     |

**Returns:** *function*

Defined in: [src/predicate.ts:143](https://github.com/OctoD/tiinvo/blob/1d01ad1/src/predicate.ts#L143)

___

### greaterorequalthan

▸ `Const`**greaterorequalthan**<T\>(`comparisonvalue`: T): *function*

Returns a comparison function

**`example`** 
```ts
import { predicate } from 'tiinvo';

const greaterequalthan0 = predicate.greaterorequalthan(0);
greaterequalthan0(10) // true
greaterequalthan0(0)  // true
greaterequalthan0(-1) // false
```

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`comparisonvalue` | T |     |

**Returns:** *function*

Defined in: [src/predicate.ts:88](https://github.com/OctoD/tiinvo/blob/1d01ad1/src/predicate.ts#L88)

___

### greaterthan

▸ `Const`**greaterthan**<T\>(`comparisonvalue`: T): *function*

Returns a comparison function

**`example`** 
```ts
import { predicate } from 'tiinvo';

const greaterthan0 = predicate.greaterthan(0);
greaterthan0(10) // true
greaterthan0(0)  // false
greaterthan0(-1) // false
```

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`comparisonvalue` | T |     |

**Returns:** *function*

Defined in: [src/predicate.ts:70](https://github.com/OctoD/tiinvo/blob/1d01ad1/src/predicate.ts#L70)

___

### lessorequalthan

▸ `Const`**lessorequalthan**<T\>(`comparisonvalue`: T): *function*

Returns a comparison function

**`example`** 
```ts
import { predicate } from 'tiinvo';

const lessequalthan0 = predicate.lessorequalthan(0);
lessequalthan0(10) // false
lessequalthan0(0)  // true
lessequalthan0(-1) // true
```

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`comparisonvalue` | T |     |

**Returns:** *function*

Defined in: [src/predicate.ts:124](https://github.com/OctoD/tiinvo/blob/1d01ad1/src/predicate.ts#L124)

___

### lessthan

▸ `Const`**lessthan**<T\>(`comparisonvalue`: T): *function*

Returns a comparison function

**`example`** 
```ts
import { predicate } from 'tiinvo';

const lessthan0 = predicate.lessthan(0);
lessthan0(10) // false
lessthan0(0)  // false
lessthan0(-1) // true
```

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`comparisonvalue` | T |     |

**Returns:** *function*

Defined in: [src/predicate.ts:106](https://github.com/OctoD/tiinvo/blob/1d01ad1/src/predicate.ts#L106)

___

### noneof

▸ `Const`**noneof**<T\>(...`predicates`: [*Predicate*](predicate.md#predicate)<T\>[]): [*Predicate*](predicate.md#predicate)<T\>

Combines two or more predicates into one. The returned predicate
will check if no conditions are met.

**`example`** 
```ts
const isnumber = (arg: unknown): arg is number => typeof arg === 'number';
const isstring = (arg: unknown): arg is string => typeof arg === 'string';
const isnull = (arg: unknown): arg is null => typeof arg === 'null';
const isundefined = (arg: unknown): arg is undefined => typeof arg === 'null';

const noneOfTheAbove = noneof(isnumber, isstring, isnull, isundefined);

noneOfTheAbove(10)             // false
noneOfTheAbove('hello world')  // false
noneOfTheAbove(null)           // false
noneOfTheAbove(undefined)      // false
```

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`...predicates` | [*Predicate*](predicate.md#predicate)<T\>[] |

**Returns:** [*Predicate*](predicate.md#predicate)<T\>

Defined in: [src/predicate.ts:169](https://github.com/OctoD/tiinvo/blob/1d01ad1/src/predicate.ts#L169)

___

### or

▸ `Const`**or**<T\>(...`predicates`: [*Predicate*](predicate.md#predicate)<T\>[]): [*Predicate*](predicate.md#predicate)<T\>

Combines two or more predicates in one. The returned predicate will
check if at least one condition passes.

**`example`** 
```ts
const isester = fromvalue('Ester');
const isjoe = fromvalue('Joe');
const islisa = fromvalue('Lisa');

const orfn = or(isester, isjoe, islisa);

orfn('Ester');       // true
orfn('Lisa');        // true
orfn('Joe');         // true
orfn('Alexander');   // false
```

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`...predicates` | [*Predicate*](predicate.md#predicate)<T\>[] |

**Returns:** [*Predicate*](predicate.md#predicate)<T\>

Defined in: [src/predicate.ts:195](https://github.com/OctoD/tiinvo/blob/1d01ad1/src/predicate.ts#L195)

___

### reverse

▸ `Const`**reverse**<T\>(`arg`: [*Predicate*](predicate.md#predicate)<T\>): [*Predicate*](predicate.md#predicate)<T\>

Reverses the result of a predicate.

**`example`** 
```ts
const iseven = (arg: number) => arg % 2 === 0;
const isodd = reverse(iseven);

iseven(2)  // true
isodd(2)   // false
isodd(1)   // true
```

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`arg` | [*Predicate*](predicate.md#predicate)<T\> |

**Returns:** [*Predicate*](predicate.md#predicate)<T\>

Defined in: [src/predicate.ts:216](https://github.com/OctoD/tiinvo/blob/1d01ad1/src/predicate.ts#L216)

___

### withdifferentvalue

▸ `Const`**withdifferentvalue**<T\>(`unexpectedvalue`: T): [*Predicate*](predicate.md#predicate)<T\>

Creates a new Predicate<T> which checks if the given argument is not the same as the
one passed to the predicate.

**`example`** 
```ts
const isnotjoe = withdifferentvalue('Joe');

isnotjoe('John');  // true
isnotjoe('Lisa');  // true
isnotjoe('Joe');   // false
```

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`unexpectedvalue` | T | the value you expect not to be there   |

**Returns:** [*Predicate*](predicate.md#predicate)<T\>

Defined in: [src/predicate.ts:236](https://github.com/OctoD/tiinvo/blob/1d01ad1/src/predicate.ts#L236)

___

### withsamevalue

▸ `Const`**withsamevalue**<T\>(`expectedvalue`: T): [*Predicate*](predicate.md#predicate)<T\>

Creates a new Predicate<T> which checks if the given argument is the same as the
one passed to the predicate.

**`example`** 
```ts
const isnotjoe = withsamevalue('Joe');

isnotjoe('John');  // false
isnotjoe('Lisa');  // false
isnotjoe('Joe');   // true
```

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`expectedvalue` | T | the value you expect not to be there   |

**Returns:** [*Predicate*](predicate.md#predicate)<T\>

Defined in: [src/predicate.ts:257](https://github.com/OctoD/tiinvo/blob/1d01ad1/src/predicate.ts#L257)
