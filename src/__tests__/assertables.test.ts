import { createExpect } from "../assertables";

describe("assertables", () => {
  it("createExpect", () => {
    const ex = createExpect((arg: number) => arg > 5);

    expect(() => ex("is ok")(41)).not.toThrow();
    expect(() => ex("is ko")(4)).toThrow();
  });
});
