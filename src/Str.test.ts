import { describe, expect, test } from 'vitest';
import * as Str from './Str.js';

describe("Str", () => {
  test(Str.guard.name, () => {
    expect(Str.guard('')).toEqual(true);
    expect(Str.guard(1)).toEqual(false);
  });
  test(Str.cmp.name, () => {
    expect(Str.cmp('a', 'a')).toEqual(0);
    expect(Str.cmp('a', 'b')).toEqual(-1);
    expect(Str.cmp('b', 'a')).toEqual(1);
    expect(Str.cmp('a')('a')).toEqual(0);
    expect(Str.cmp('a')('b')).toEqual(1);
    expect(Str.cmp('b')('a')).toEqual(-1);
  });
  test(Str.eq.name, () => {
    expect(Str.eq('a', 'a')).toEqual(true);
    expect(Str.eq('a', 'b')).toEqual(false);
    expect(Str.eq('b', 'a')).toEqual(false);
    expect(Str.eq('a')('a')).toEqual(true);
    expect(Str.eq('a')('b')).toEqual(false);
    expect(Str.eq('b')('a')).toEqual(false);
  });
  test(Str.asc.name, () => {
    const collection = ['a', 'd', 'c', 'e', 'F', 'A'];

    expect(collection.sort(Str.asc)).toEqual(["A", "F", "a", "c", "d", "e"]);
    expect(Str.asc("a")("b")).toEqual(1);
  });
  test(Str.desc.name, () => {
    const collection = ['a', 'd', 'c', 'e', 'F', 'A'];

    expect(collection.sort(Str.desc)).toEqual(["e", "d", "c", "a", "F", "A"]);
    expect(Str.desc("a")("b")).toEqual(-1);
  });
  test(Str.camel.name, () => {
    expect(Str.camel('hello world')).toEqual('helloWorld');
  });
  test(Str.charAt.name, () => {
    expect(Str.charAt("hello", 0)).toEqual("h");
    expect(Str.charAt("hello", 10)).toEqual(null);
    expect(Str.charAt(0)("hello")).toEqual("h");
    expect(Str.charAt({} as any)("hello")).toEqual(null);
    expect(Str.charAt(9)("hello")).toEqual(null);
  });
  test(Str.charCodeAt.name, () => {
    expect(Str.charCodeAt("hello", 0)).toEqual(104);
    expect(Str.charCodeAt("hello", 10)).toEqual(null);
    expect(Str.charCodeAt(0)("hello")).toEqual(104);
    expect(Str.charCodeAt({} as any)("hello")).toEqual(null);
    expect(Str.charCodeAt(9)("hello")).toEqual(null);
  });
  test(Str.chars.name, () => {
    expect(Str.chars('hello')).toEqual(['h', 'e', 'l', 'l', 'o']);
  });
  test(Str.concat.name, () => {
    expect(Str.concat("hello", "world")).toEqual("helloworld");
    expect(Str.concat("world")("hello")).toEqual("helloworld");
  });
  test(Str.endsWith.name, () => {
    expect(Str.endsWith("hello", "o")).toEqual(true);
    expect(Str.endsWith("o")("hello")).toEqual(true);
  });
  test(Str.includes.name, () => {
    expect(Str.includes("hello", "o")).toEqual(true);
    expect(Str.includes("o")("hello")).toEqual(true);
  });
  test(Str.indexOf.name, () => {
    expect(Str.indexOf("hello", "l")).toEqual(2);
    expect(Str.indexOf("hello", "l", 3)).toEqual(3);
    expect(Str.indexOf("l")("hello")).toEqual(2);
    expect(Str.indexOf("l")("hello", 3)).toEqual(3);
  });
  test(Str.lastIndexOf.name, () => {
    expect(Str.lastIndexOf("hello", "l")).toEqual(3);
    expect(Str.lastIndexOf("l")("hello")).toEqual(3);
  });
  test(Str.length.name, () => {
    expect(Str.length('hello')).toEqual(5);
  });
  test(Str.lines.name, () => {
    expect(Str.lines('hello\nworld')).toEqual(['hello', 'world']);
  });
  test(Str.lower.name, () => {
    expect(Str.lower('HELLO')).toEqual("hello");
  });
  test(Str.match.name, () => {
    expect(Str.match("hello", "o")?.[0]).oneOf(['o']);
    expect(Str.match("o")("hello")?.[0]).oneOf(['o']);
  });
  test(Str.padEnd.name, () => {
    expect(Str.padEnd("a", 5)).toEqual("a    ");
    expect(Str.padEnd("a", 5, "b")).toEqual("abbbb");
    expect(Str.padEnd(5)("a")).toEqual("a    ");
    expect(Str.padEnd(5, "b")("a")).toEqual("abbbb");
    expect(Str.padEnd(5)("a", "b")).toEqual("abbbb");
  });
  test(Str.pascal.name, () => {
    expect(Str.pascal('hello world')).toEqual('HelloWorld');
  });
  test(Str.padStart.name, () => {
    expect(Str.padStart("a", 5)).toEqual("    a");
    expect(Str.padStart("a", 5, "b")).toEqual("bbbba");
    expect(Str.padStart(5)("a")).toEqual("    a");
    expect(Str.padStart(5, "b")("a")).toEqual("bbbba");
    expect(Str.padStart(5)("a", "b")).toEqual("bbbba");
  });
  test(Str.repeat.name, () => {
    expect(Str.repeat("a", 5)).toEqual("aaaaa");
    expect(Str.repeat(5)("a")).toEqual("aaaaa");
  });
  test(Str.replace.name, () => {
    expect(Str.replace("hello", "l", "e")).toEqual("heelo");
    expect(Str.replace("l", "e")("hello")).toEqual("heelo");
  });
  test(Str.reverse.name, () => {
    expect(Str.reverse('hello')).toEqual('olleh');
  });
  test(Str.search.name, () => {
    expect(Str.search("hello", "l")).toEqual(2);
    expect(Str.search("l")("hello")).toEqual(2);
    expect(Str.search("x")("hello")).toEqual(null);
    expect(Str.search("hello", "x")).toEqual(null);
  });
  test(Str.slice.name, () => {
    expect(Str.slice("hello", 1)).toEqual("ello");
    expect(Str.slice("hello", 1, 3)).toEqual("el");
    expect(Str.slice(1)("hello")).toEqual("ello");
    expect(Str.slice(1, 3)("hello")).toEqual("el");
  });
  test(Str.split.name, () => {
    const x = (arg: string) => {
      return {
        [Symbol.split](str: string) {
          return str.split(arg);
        }
      };
    };

    expect(Str.split("hello world", " ")).toEqual(["hello", "world"]);
    expect(Str.split("hello world", /\s/)).toEqual(["hello", "world"]);
    expect(Str.split("hello world", x(" "))).toEqual(["hello", "world"]);
    expect(Str.split(" ")("hello world")).toEqual(["hello", "world"]);
    expect(Str.split(" ", 1)("hello world")).toEqual(["hello"]);
  });
  test(Str.trim.name, () => {
    expect(Str.trim('    hello world    ')).toEqual('hello world');
  });
  test(Str.trimEnd.name, () => {
    expect(Str.trimEnd('    hello world    ')).toEqual('    hello world');
  });
  test(Str.trimStart.name, () => {
    expect(Str.trimStart('    hello world    ')).toEqual('hello world    ');
  });
  test(Str.upper.name, () => {
    expect(Str.upper('hello')).toEqual("HELLO");
  });
  test(Str.words.name, () => {
    expect(Str.words('hello world')).toEqual(['hello', 'world']);
  });
});