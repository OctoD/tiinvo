import type * as f from './functors';

export type some<a = unknown> = a extends null | undefined ? none : a;

export type none = null | undefined;

export type option<a = unknown> = some<a> | none;

export const isNone = (value: unknown): value is none => value === null || value === undefined;

export const isSome = (value: unknown): value is some<unknown> => value !== null && value !== undefined;

export const cmp: f.comparable = <a, b>(a: a, b: b): -1 | 0 | 1 => ((a === null || a === undefined) && (b === null || b === undefined)) ? 0 : a as any > b as any ? 1 : a as any < b as any ? -1 : 0;

export const eq: f.equatable = <a>(a: a, b: a): boolean => isNone(a) && isNone(b) ? true : a === b;

export const filter = <a>(f: f.predicateE<a>) => (value: a) => (isSome(value) && f(value)) ? value : null;

export const map = <a, b>(map: f.map<a, b>) => (value: option<a>) => isSome(value) ? map(value as any) : value;

export const mapOr = <a, b>(or: option<b>, map: f.map<a, b>) => (value: option<a>) => isSome(value) ? map(value as any) : or;

export const mapOrElse = <a, b>(or: f.map<void, b>, map: f.map<a, b>) => (value: option<a>) => isSome(value) ? map(value as any) : or();

export const unwrap: f.unwrappable = value => isSome(value) ? value as any : (() => { throw new Error('unwrappable: value is none'); })();

export const unwrapOr: f.unwrappableOr = or => value => isSome(value) ? value : or;

export const unwrapOrElse: f.unwrappableOrElse = (or) => (value) => isSome(value) ? value : or();
