import { GetSet } from "../GetSet";

describe("GetSet", () => {
  it("Gets and sets", () => {
    const getset = GetSet(10);

    expect(getset.get()).toBe(10);

    getset.set(11);

    expect(getset.get()).toBe(11);
  });
});
