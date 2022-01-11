import * as s from '../str';

describe(`str`, () => {
  test(s.asc.name, () => {
    const array = ["c", "b", "a"];

    expect(expect.arrayContaining(array.sort(s.asc))).toEqual(["a", "b", "c"]);
  });

  test(s.bconcat.name, () => {
    expect(s.bconcat('a', 'b')).toBe('ab');
  })

  test(s.bincludes.name, () => {
    expect(s.bincludes('hello', 'll')).toBe(true);
    expect(s.bincludes('hello', 'x')).toBe(false);
  })

  test(s.bindexOf.name, () => {
    expect(s.bindexOf('hello', 'l')).toBe(2);
    expect(s.bindexOf('hello', 'x')).toBe(-1);
  })

  test(s.blastIndexOf.name, () => {
    expect(s.blastIndexOf('hello', 'l')).toBe(3);
    expect(s.blastIndexOf('hello', 'x')).toBe(-1);
  })

  test(s.bmatch.name, () => {
    expect(expect.arrayContaining(s.bmatch('hello', /l/)!)).toEqual(["l"]);
    expect(s.bmatch('hello', /x/)).toBe(null);
  })

  test(s.bpadend.name, () => {
    expect(s.bpadend('1', 5)).toBe('1    ');
    expect(s.bpadend('1', 5, 'x')).toBe('1xxxx');
  })

  test(s.bpadstart.name, () => {
    expect(s.bpadstart('1', 5)).toBe('    1');
    expect(s.bpadstart('1', 5, 'x')).toBe('xxxx1');
  })

  test(s.brepeat.name, () => {
    expect(s.brepeat('1', 5)).toBe('11111');
  })

  test(s.breplace.name, () => {
    expect(s.breplace('hello', 'l', 'x')).toBe('hexlo');
    expect(s.breplace('hello', 'x', 'l')).toBe('hello');
  })

  test(s.bsearch.name, () => {
    expect(s.bsearch('hello', 'll')).toBe(2);
  })

  test(s.bslice.name, () => {
    expect(s.bslice('hello')).toBe('hello');
    expect(s.bslice('hello', 2)).toBe('llo');
    expect(s.bslice('hello', 1, 3)).toBe('el');
  })

  test(s.bsplit.name, () => {
    expect(s.bsplit('hello', 'l')).toEqual(['he', '', 'o']);
  })

  test(s.camel.name, () => {
    expect(s.camel('hello world')).toBe('helloWorld');
  })

  test(s.ucharAt.name, () => {
    expect(s.ucharAt(-1)('hello')).toBe('');
    expect(s.ucharAt(200)('hello')).toBe('');
    expect(s.ucharAt(0)('hello')).toBe('h');
    expect(s.ucharAt(1)('hello')).toBe('e');
    expect(s.ucharAt(2)('hello')).toBe('l');
    expect(s.ucharAt(3)('hello')).toBe('l');
    expect(s.ucharAt(4)('hello')).toBe('o');
    expect(s.ucharAt(5)('hello')).toBe('');
  })

  test(s.cmp.name, () => {
    expect(s.cmp('a', 'b')).toBe(-1);
    expect(s.cmp('a', 'a')).toBe(0);
    expect(s.cmp('b', 'a')).toBe(1);
  })

  test(s.desc.name, () => {
    const array = ['a', 'b', 'c'];

    expect(expect.arrayContaining(array.sort(s.desc))).toEqual(['c', 'b', 'a']);
  })

  test(s.empty.name, () => {
    expect(s.empty('')).toBe(true);
    expect(s.empty(' ')).toBe(false);
  })

  test(s.uendsWith.name, () => {
    expect(s.uendsWith('lo')('hello')).toBe(true);
    expect(s.uendsWith('x')('hello')).toBe(false);
  })

  test(s.eq.name, () => {
    expect(s.eq('a', 'a')).toBe(true);
    expect(s.eq('a', 'b')).toBe(false);
  })

  test(s.fromCharCode.name, () => {
    expect(s.fromCharCode(97)).toBe('a');
    expect(s.fromCharCode(98)).toBe('b');
  })

  test(s.guard.name, () => {
    expect(s.guard('hello')).toBe(true);
    expect(s.guard(null)).toBe(false);
  })

  test(s.kebab.name, () => {
    expect(s.kebab('helloWorld')).toBe('hello-world');
  })

  test(s.lower.name, () => {
    expect(s.lower('HELLO')).toBe('hello');
  })

  test(s.pascal.name, () => {
    expect(s.pascal('helloWorld')).toBe('HelloWorld');
    expect(s.pascal('hello world')).toBe('HelloWorld');
  })

  test(s.snake.name, () => {
    expect(s.snake('helloWorld')).toBe('hello_world');
  })

  test(s.trim.name, () => {
    expect(s.trim(' hello ')).toBe('hello');
  })

  test(s.trimend.name, () => {
    expect(s.trimend(' hello ')).toBe(' hello');
  })

  test(s.trimstart.name, () => {
    expect(s.trimstart(' hello ')).toBe('hello ');
  })

  test(s.uconcat.name, () => {
    expect(s.uconcat('world')('hello')).toBe('helloworld');
  })

  test(s.uincludes.name, () => {
    expect(s.uincludes('ll')('hello')).toBe(true);
    expect(s.uincludes('x')('hello')).toBe(false);
  })

  test(s.uindexOf.name, () => {
    expect(s.uindexOf('l')('hello')).toBe(2);
    expect(s.uindexOf('x')('hello')).toBe(-1);
  })

  test(s.ulastIndexOf.name, () => {
    expect(s.ulastIndexOf('l')('hello')).toBe(3);
    expect(s.ulastIndexOf('x')('hello')).toBe(-1);
  })

  test(s.umatch.name, () => {
    expect(expect.arrayContaining(s.umatch(/l/)('hello')!)).toEqual(["l"]);
    expect(s.umatch(/x/)('hello')).toBe(null);
  })

  test(s.upadend.name, () => {
    expect(s.upadend(5)('1')).toBe('1    ');
    expect(s.upadend(5, 'x')('1')).toBe('1xxxx');
  })

  test(s.upadstart.name, () => {
    expect(s.upadstart(5)('1')).toBe('    1');
    expect(s.upadstart(5, 'x')('1')).toBe('xxxx1');
  })

  test(s.upper.name, () => {
    expect(s.upper('hello')).toBe('HELLO');
  })

  test(s.urepeat.name, () => {
    expect(s.urepeat(5)('1')).toBe('11111');
  })

  test(s.ureplace.name, () => {
    expect(s.ureplace('l', 'x')('hello')).toBe('hexlo');
  })

  test(s.usearch.name, () => {
    expect(s.usearch('ll')('hello')).toBe(2);
    expect(s.usearch('x')('hello')).toBe(-1);
  })

  test(s.uslice.name, () => {
    expect(s.uslice()('hello')).toBe('hello');
    expect(s.uslice(1)('hello')).toBe('ello');
    expect(s.uslice(undefined, 4)('hello')).toBe('hell');
    expect(s.uslice(1, 3)('hello')).toBe('el');
  })

  test(s.usplit.name, () => {
    expect(s.usplit('l')('hello')).toEqual(['he', '', 'o']);
  })

  test(s.ucharCodeAt.name, () => {
    expect(s.ucharCodeAt(0)('hello')).toBe(104);
    expect(s.ucharCodeAt(1)('hello')).toBe(101);
    expect(s.ucharCodeAt(2)('hello')).toBe(108);
    expect(s.ucharCodeAt(3)('hello')).toBe(108);
    expect(s.ucharCodeAt(4)('hello')).toBe(111);
    expect(s.ucharCodeAt(5)('hello')).toBe(null);
  })

  test(s.ucharAt.name, () => {
    expect(s.ucharAt(0)('hello')).toBe('h');
    expect(s.ucharAt(1)('hello')).toBe('e');
    expect(s.ucharAt(2)('hello')).toBe('l');
    expect(s.ucharAt(3)('hello')).toBe('l');
    expect(s.ucharAt(4)('hello')).toBe('o');
    expect(s.ucharAt(5)('hello')).toBe(``);
  })

  test(s.length.name, () => {
    expect(s.length('hello')).toBe(5);
  })
})