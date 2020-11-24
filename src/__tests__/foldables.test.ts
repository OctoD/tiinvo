import { isLeft, isRight, left, right } from "../either";
import { createfold, createSwap } from "../foldables";

describe("foldables", () => {
  it("createSwap", () => {
    const swap = createSwap(isLeft, left, right);

    expect(isLeft(swap(right(10)))).toBeTruthy();
    expect(isRight(swap(left(10)))).toBeTruthy();
  });

  it("createFold", () => {
    const fold = createfold(isLeft);
    const lfn = jest.fn().mockReturnValue(10);
    const rfn = jest.fn().mockReturnValue(20);
    const folded = fold(lfn, rfn);

    expect(folded(left("aaa"))).toBe(10);
    expect(folded(right("bb"))).toBe(20);
  });
});
