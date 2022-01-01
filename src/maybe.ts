import type * as f from './functors'

export type just<a> = a;

export type nothing = null | undefined;

export type maybe<a> = just<a> | nothing;

export const isjust = <a>(value: maybe<a>): value is just<a> => !!value;

export const isnothing = <a>(value: maybe<a>): value is nothing => !value;

export const isMaybeOf = <a>(guard: f.guard<a>) => (value: unknown): value is maybe<a> => isjust(value) ? guard(value) : true;

export const cmp: f.comparable = <a, b>(value: maybe<a>, value2: maybe<b>) => isnothing(value) && isnothing(value2) ? 0 : isnothing(value) ? -1 : isnothing(value2) ? 1 : value as any === value2 ? 0 : value as any < value2 ? -1 : 1;

export const eq: f.equatable = <a>(value: maybe<a>, value2: maybe<a>) => isjust(value) && isjust(value2) ? value as any === value2 : isnothing(value) && isnothing(value2);

export const filter = <a>(predicate: f.predicateE<a>) => (value: maybe<a>): maybe<a> => isjust(value) && predicate(value) ? value : null as nothing;

export const map = <a, b>(map: f.map<a, b>) => (value: maybe<a>) => isjust(value) ? map(value) : null;

export const mapOr = <a, b>(or: b, map: f.map<a, b>) => (value: maybe<a>) => isjust(value) ? map(value) : or;

export const mapOrElse = <a, b>(or: f.map<void, b>, map: f.map<a, b>) => (value: maybe<a>) => isjust(value) ? map(value) : or();

export const unwrap: f.unwrappable = value => isjust(value) ? value : (() => {throw new Error('cannot unwrap nothing')})();

export const unwrapOr: f.unwrappableOr = or => value => isjust(value) ? value : or;

export const unwrapOrElse: f.unwrappableOrElse = orElse => value => isjust(value) ? value : orElse();
