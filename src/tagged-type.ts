import {
  combine,
  haskey,
  haskeyoftype,
  haskeyWithValue,
  isindexable,
  isstring,
  Typeguard,
} from "./typeguards";

/**
 * A `TaggedType` with a value `T`
 */
export type Tagged<T, Tagname extends string> = {
  readonly __tag: Tagname;
  readonly value: T;
};

/**
 * A `TaggedType<T, Tagname>` factory.
 */
export type TaggedFactory<Tagname extends string> = <T>(
  arg: T
) => Tagged<T, Tagname>;

const hastag = haskey("__tag");
const hasvalue = haskey("value");

/**
 * Creates a TaggedType<T, Tagname>.
 *
 * @example
 *
 * tagged('hello world', 'foobarbaz'); // Tagged<'hello world', 'foobarbaz'>;
 *
 * @template T
 * @template Tagname
 * @param {T} value
 * @param {Tagname} tagname
 * @returns {Tagged<T, Tagname>}
 */
export const tagged = <T, Tagname extends string>(
  value: T,
  tagname: Tagname
): Tagged<T, Tagname> => ({ __tag: tagname, value });

/**
 * Creates a factory which returns a `Tagged<K, T>`
 *
 * @example
 * const mytype = taggedFactory('foo');
 *
 * mytype(10) // Tagged<10, 'foo'>
 *
 * @template T
 * @param {T} tagname
 * @returns {TaggedFactory<T>}
 */
export const taggedFactory = <T extends string>(
  tagname: T
): TaggedFactory<T> => <K>(arg: K) =>
  (tagged(arg, tagname) as unknown) as Tagged<K, T>;

const _isTagged = combine<Tagged<unknown, string>>(
  hastag,
  haskeyoftype("__tag", isstring)
);

/**
 * Checks if a variable is a Tagged<unknown, string>
 *
 * @type {Typeguard<Tagged<unknown, string>>}
 */
export const isTagged = combine<Tagged<unknown, string>>(
  isindexable,
  hasvalue,
  _isTagged
);

/**
 *
 *
 * @template Tag
 * @param {Tag} tag
 */
export const isTaggedWith = <Tag extends string>(tag: Tag) =>
  combine<Tagged<unknown, Tag>>(
    isindexable,
    hasvalue,
    _isTagged,
    haskeyWithValue("__tag", tag)
  );

/**
 *
 *
 * @template Tag
 * @template T
 * @param {Tag} tag
 * @param {Typeguard<T>} typeguard
 */
export const isTaggedOf = <Tag extends string, T>(
  tag: Tag,
  typeguard: Typeguard<T>
) =>
  combine<Tagged<T, Tag>>(
    isindexable,
    hasvalue,
    _isTagged,
    haskeyWithValue("__tag", tag),
    haskeyoftype("value", typeguard)
  );
