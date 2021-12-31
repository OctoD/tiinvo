export type comparable = <a, b>(a: a, b: b) => -1 | 0 | 1;

export type equatable = <a>(a: a, b: a) => boolean;

export type predicate = <a>(value: a) => boolean;

export type predicateA = (value: any) => boolean;

export type predicateE<a> = (value: a) => boolean;

export type map<a, b> = (a: a) => b;

export type unwrappable = <a>(value: a) => a | never;

export type unwrappableOr = <a>(or: a) => (value: a) => a;

export type unwrappableOrElse = <a>(or: map<void, a>) => (value: a) => a;
