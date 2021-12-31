import type { predicateA, predicateE } from './functors';

export const and = (... predicates: predicateA[]) => <a>(value: a) => predicates.every(p => p(value));

export const eq = <a>(value: a) => (value2: a) => value === value2;

export const invert = <a>(predicate: predicateE<a>) => (value: a) => !predicate(value);

export const neq = <a>(value: a) => (value2: a) => value !== value2;

export const noneof = (... predicates: predicateA[]) => <a>(value: a) => predicates.every(p => !p(value));

export const or = (... predicates: predicateA[]) => <a>(value: a) => predicates.some(p => p(value));
