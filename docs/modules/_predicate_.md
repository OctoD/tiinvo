[tiinvo](../README.md) › ["predicate"](_predicate_.md)

# Module: "predicate"

## Index

### Type aliases

* [Predicate](_predicate_.md#predicate)

### Functions

* [and](_predicate_.md#const-and)
* [fromvalue](_predicate_.md#const-fromvalue)
* [fromvalues](_predicate_.md#const-fromvalues)
* [noneof](_predicate_.md#const-noneof)
* [or](_predicate_.md#const-or)
* [reverse](_predicate_.md#const-reverse)
* [withdifferentvalue](_predicate_.md#const-withdifferentvalue)
* [withsamevalue](_predicate_.md#const-withsamevalue)

## Type aliases

###  Predicate

Ƭ **Predicate**: *function*

*Defined in [predicate.ts:5](https://github.com/OctoD/tiinvo/blob/9536b4d/src/predicate.ts#L5)*

#### Type declaration:

▸ (`arg`: T): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`arg` | T |

## Functions

### `Const` and

▸ **and**‹**T**›(...`predicates`: [Predicate](_predicate_.md#predicate)‹T›[]): *[Predicate](_predicate_.md#predicate)‹T›*

*Defined in [predicate.ts:26](https://github.com/OctoD/tiinvo/blob/9536b4d/src/predicate.ts#L26)*

Combines two or more predicates in one. The resulting predicate will return true if
all predicates are satisfied

**`example`** 
const isString = (arg: unknown): arg is string => typeof arg === 'string';
const hasLength = (length: number) => (arg: unknown): boolean => isString(arg) && arg.length >= length;
const contains = (str: string) => (arg: unknown): boolean => isString(arg) && arg.contains(str);

const combined = and(isString, hasLength(4), contains('foo'))

combined('foobarbaz'); // true
combined('helloworld'); // false
combined('foo'); // false

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`...predicates` | [Predicate](_predicate_.md#predicate)‹T›[] | a list of predicates to combine with AND rule (&&) |

**Returns:** *[Predicate](_predicate_.md#predicate)‹T›*

___

### `Const` fromvalue

▸ **fromvalue**‹**T**›(`value`: T): *(Anonymous function)*

*Defined in [predicate.ts:48](https://github.com/OctoD/tiinvo/blob/9536b4d/src/predicate.ts#L48)*

Creates a new function which accepts a predicate. This predicate will check
the given value

**`example`** 
const iseven = (arg: number) => arg % 2 === 0;
const isodd  = revers(iseven);
const check1 = fromvalue(1);
const check2 = fromvalue(2);

check1(iseven)   // false
check1(isodd)    // true
check2(iseven)   // true
check2(isodd)    // false

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | T | the value to check  |

**Returns:** *(Anonymous function)*

___

### `Const` fromvalues

▸ **fromvalues**‹**T**›(...`values`: T[]): *(Anonymous function)*

*Defined in [predicate.ts:65](https://github.com/OctoD/tiinvo/blob/9536b4d/src/predicate.ts#L65)*

Returns a function which checks if every value T passes a given predicate

**`example`** 
const test1 = fromvalues(1, 2, 3, 4, 5);
const test2 = fromvalues(2, 4, 6, 8);
const iseven = (arg: number) => arg % 2 === 0;

test1(iseven); // false
test2(iseven); // true

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`...values` | T[] |   |

**Returns:** *(Anonymous function)*

___

### `Const` noneof

▸ **noneof**‹**T**›(...`predicates`: [Predicate](_predicate_.md#predicate)‹T›[]): *[Predicate](_predicate_.md#predicate)‹T›*

*Defined in [predicate.ts:89](https://github.com/OctoD/tiinvo/blob/9536b4d/src/predicate.ts#L89)*

Combines two or more predicates into one. The returned predicate
will check if no conditions are met.

**`example`** 
const isnumber = (arg: unknown): arg is number => typeof arg === 'number';
const isstring = (arg: unknown): arg is string => typeof arg === 'string';
const isnull = (arg: unknown): arg is null => typeof arg === 'null';
const isundefined = (arg: unknown): arg is undefined => typeof arg === 'null';

const noneOfTheAbove = noneof(isnumber, isstring, isnull, isundefined);

noneOfTheAbove(10)             // false
noneOfTheAbove('hello world')  // false
noneOfTheAbove(null)           // false
noneOfTheAbove(undefined)      // false

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`...predicates` | [Predicate](_predicate_.md#predicate)‹T›[] |

**Returns:** *[Predicate](_predicate_.md#predicate)‹T›*

___

### `Const` or

▸ **or**‹**T**›(...`predicates`: [Predicate](_predicate_.md#predicate)‹T›[]): *[Predicate](_predicate_.md#predicate)‹T›*

*Defined in [predicate.ts:113](https://github.com/OctoD/tiinvo/blob/9536b4d/src/predicate.ts#L113)*

Combines two or more predicates in one. The returned predicate will
check if at least one condition passes.

**`example`** 
const isester = fromvalue('Ester');
const isjoe = fromvalue('Joe');
const islisa = fromvalue('Lisa');

const orfn = or(isester, isjoe, islisa);

orfn('Ester');       // true
orfn('Lisa');        // true
orfn('Joe');         // true
orfn('Alexander');   // false

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`...predicates` | [Predicate](_predicate_.md#predicate)‹T›[] |

**Returns:** *[Predicate](_predicate_.md#predicate)‹T›*

___

### `Const` reverse

▸ **reverse**‹**T**›(`arg`: [Predicate](_predicate_.md#predicate)‹T›): *[Predicate](_predicate_.md#predicate)‹T›*

*Defined in [predicate.ts:132](https://github.com/OctoD/tiinvo/blob/9536b4d/src/predicate.ts#L132)*

Reverses the result of a predicate.

**`example`** 
const iseven = (arg: number) => arg % 2 === 0;
const isodd = reverse(iseven);

iseven(2)  // true
isodd(2)   // false
isodd(1)   // true

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`arg` | [Predicate](_predicate_.md#predicate)‹T› |

**Returns:** *[Predicate](_predicate_.md#predicate)‹T›*

___

### `Const` withdifferentvalue

▸ **withdifferentvalue**‹**T**›(`unexpectedvalue`: T): *[Predicate](_predicate_.md#predicate)‹T›*

*Defined in [predicate.ts:150](https://github.com/OctoD/tiinvo/blob/9536b4d/src/predicate.ts#L150)*

Creates a new Predicate<T> which checks if the given argument is not the same as the
one passed to the predicate.

**`example`** 
const isnotjoe = withdifferentvalue('Joe');

isnotjoe('John');  // true
isnotjoe('Lisa');  // true
isnotjoe('Joe');   // false

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`unexpectedvalue` | T | the value you expect not to be there |

**Returns:** *[Predicate](_predicate_.md#predicate)‹T›*

___

### `Const` withsamevalue

▸ **withsamevalue**‹**T**›(`expectedvalue`: T): *[Predicate](_predicate_.md#predicate)‹T›*

*Defined in [predicate.ts:169](https://github.com/OctoD/tiinvo/blob/9536b4d/src/predicate.ts#L169)*

Creates a new Predicate<T> which checks if the given argument is the same as the
one passed to the predicate.

**`example`** 
const isnotjoe = withsamevalue('Joe');

isnotjoe('John');  // false
isnotjoe('Lisa');  // false
isnotjoe('Joe');   // true

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`expectedvalue` | T | the value you expect not to be there |

**Returns:** *[Predicate](_predicate_.md#predicate)‹T›*
