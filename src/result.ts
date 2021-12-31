import type * as f from './functors';

export type ok<a> = a;

export type err = Error;

export type result<a> = ok<a> | err;

export const iserr = <a>(value: result<a>): value is err => typeof value === 'object' && 'message' in value && 'stack' in value;

export const isok = <a>(value: result<a>): value is ok<a> => !iserr(value);

export const cmp: f.comparable = <a, b>(a: a, b: b): -1 | 0 | 1 => iserr(a) && iserr(b) ? 0 : a as any > b ? 1 : a as any < b ? -1 : 0;

export const filter = <a>(predicate: f.predicateE<a>) => (value: result<a>) => isok(value) && predicate(value) ? value : new Error(`${value} is not ok`);

export const eq: f.equatable = <a>(a1: a, a2: a) => iserr(a1) && iserr(a2) ? true : a1 === a2;

export const map = <a, b>(map: f.map<a, b>) => (value: result<a>): result<b> => iserr(value) ? value : map(value);

export const mapOr = <a, b>(or: b, map: f.map<a, b>) => (value: result<a>): result<b> => iserr(value) ? or : map(value);

export const mapOrElse = <a, b>(or: f.map<void, b>, map: f.map<a, b>) => (value: result<a>): result<b> => iserr(value) ? or() : map(value);

export const unwrap: f.unwrappable = value => iserr(value) ? (() => {throw value})() : value;

export const unwrapOr: f.unwrappableOr = or => value => iserr(value) ? or : value;

export const unwrapOrElse: f.unwrappableOrElse = or => value => iserr(value) ? or() : value;
