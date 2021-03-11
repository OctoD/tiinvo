import * as str from '../str'

const teststr = `abcda`;

describe(`str`, () =>{
  test(`charAt`, () => {
    expect(str.charAt(2)(teststr)).toBe(teststr.charAt(2));
  })
  test(`charCodeAt`, () => {
    expect(str.charCodeAt(2)(teststr)).toBe(teststr.charCodeAt(2));
  })
  test(`concat`, () => {
    expect(str.concat(`b`, `c`, `d`, `a`)(`a`)).toBe(teststr);
  })
  test(`endsWith`, () => {
    expect(str.endsWith(`a`)(teststr)).toBe(true);
    expect(str.endsWith(`h`)(teststr)).toBe(false);
  })
  test(`includes`, () => {
    expect(str.includes('a')(teststr)).toBe(true);
    expect(str.includes('f')(teststr)).toBe(false);
  })
  test(`indexOf`, () => {
    expect(str.indexOf('b')(teststr)).toBe(1);
  })
  test(`lastIndexOf`, () => {
    expect(str.lastIndexOf('a')(teststr)).toBe(4);
  })
  test(`match`, () => {
    expect(str.match(/a/)(teststr).length).toBe(1);
  })
  test(`padEnd`, () => {
    expect(str.padEnd(6, 'x')(teststr)).toBe(teststr + `x`);
  })
  test(`padStart`, () => {
    expect(str.padStart(6, 'y')(teststr)).toBe(`y${teststr}`);
  })
  test(`repeat`, () => {
    expect(str.repeat(3)(teststr)).toBe(teststr+teststr+teststr);
  })
  test(`replace`, () => {
    expect(str.replace('a', '1')(teststr)).toBe(`1bcda`);
  })
  test(`search`, () => {
    expect(str.search(/a/)(teststr)).toBe(0);
  })
  test(`slice`, () => {
    expect(str.slice(2)(teststr)).toBe(teststr.slice(2));
  })
  test(`split`, () => {
    expect(str.split('')(teststr)[2]).toBe(`c`);
  })
  test(`substring`, () => {
    expect(str.substring(1, 2)(teststr)).toBe(`b`);
  })
  test(`trim`, () => {
    expect(str.trim(`  ${teststr}   `)).toBe(teststr);
  })
  test(`trimEnd`, () => {
    expect(str.trimEnd(`   ${teststr}   `)).toBe(`   ${teststr}`);
  })
  test(`trimStart`, () => {
    expect(str.trimStart(`   ${teststr}   `)).toBe(`${teststr}   `);
  })
  test(`fromCharCode`, () => {
    expect(str.fromCharCode(200)).toBe(`È`);
  })
  test(`isempty`, () => {
    expect(str.isempty('')).toBe(true);
    expect(str.isempty('1')).toBe(false);
  })
  test(`length`, () => {
    expect(str.length(teststr)).toBe(teststr.length);
  })
  test(`lowercase`, () => {
    expect(str.lowercase('LOWER')).toBe(`lower`);
  })
  test(`uppercase`, () => {
    expect(str.uppercase('uppercase')).toBe(`UPPERCASE`);
  })
})