import { createFilter, createFilterOr } from "../filterables";
import {
  isTagged,
  isTaggedOf,
  isTaggedWith,
  tagged,
  taggedFactory,
} from "../tagged-type";

const footag = "foo";
const bartag = "bar";
const foofactory = taggedFactory(footag);
const barfactory = taggedFactory(bartag);
const filter = createFilter(isTaggedWith(footag), foofactory, barfactory);
const filterOr = createFilterOr(isTaggedWith(footag), foofactory);
const predicate = (arg: number) => arg > 5;
const fallback = foofactory(10);

describe("filterables", () => {
  it("createFilter", () => {
    expect(filter(predicate)(foofactory(5)).__tag).toBe(bartag);
    expect(filter(predicate)(foofactory(6)).__tag).toBe(footag);
    expect(filter(predicate)(123 as any).__tag).toBe(bartag);
  });

  it("createFilterOr", () => {
    expect(filterOr(fallback, predicate)(foofactory(6)).__tag).toBe(footag);
    expect(filterOr(fallback, predicate)(foofactory(4)).__tag).toBe(footag);
    expect(filterOr(fallback, predicate)(foofactory(4)).value).toBe(
      fallback.value
    );
    expect(filterOr(fallback, predicate)(123 as any).value).toBe(
      fallback.value
    );
  });
});
