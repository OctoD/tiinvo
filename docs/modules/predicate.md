[tiinvo](../README.md) / predicate

# Namespace: predicate

## Table of contents

### Type aliases

- [Predicate](predicate.md#predicate)

### Functions

- [and](predicate.md#and)
- [fromvalue](predicate.md#fromvalue)
- [fromvalues](predicate.md#fromvalues)
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

Defined in: [predicate.ts:5](https://github.com/OctoD/tiinvo/blob/63ad268/src/predicate.ts#L5)

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

Defined in: [predicate.ts:28](https://github.com/OctoD/tiinvo/blob/63ad268/src/predicate.ts#L28)

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

Defined in: [predicate.ts:52](https://github.com/OctoD/tiinvo/blob/63ad268/src/predicate.ts#L52)

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

Defined in: [predicate.ts:71](https://github.com/OctoD/tiinvo/blob/63ad268/src/predicate.ts#L71)

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

Defined in: [predicate.ts:97](https://github.com/OctoD/tiinvo/blob/63ad268/src/predicate.ts#L97)

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

Defined in: [predicate.ts:123](https://github.com/OctoD/tiinvo/blob/63ad268/src/predicate.ts#L123)

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

Defined in: [predicate.ts:144](https://github.com/OctoD/tiinvo/blob/63ad268/src/predicate.ts#L144)

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

Defined in: [predicate.ts:164](https://github.com/OctoD/tiinvo/blob/63ad268/src/predicate.ts#L164)

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

Defined in: [predicate.ts:185](https://github.com/OctoD/tiinvo/blob/63ad268/src/predicate.ts#L185)
