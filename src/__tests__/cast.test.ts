import { taggedFactory, tagged } from "../tagged-type";
import { cast, createCast } from "../cast";

const testvalue = tagged(100, "hello");
const testfactory = taggedFactory("helloworld");

describe("cast", () => {
  it("cast", () => {
    expect(cast(testvalue, testfactory)).toEqual(testfactory(testvalue.value));
  });

  it("createCast", () => {
    const created = createCast(testfactory);
    expect(created(testvalue)).toEqual(testfactory(testvalue.value));
  });
});
