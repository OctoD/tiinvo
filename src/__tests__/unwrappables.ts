import { fallback } from "../applicative";
import { unwrap, unwrapOr, unwrapOrElse, some, none } from "../option";

describe("unwrappables", () => {
  it("createUnwrap", () => {
    expect(() => unwrap(none())).toThrow();
    expect(() => unwrap(some(1))).not.toThrow();
  });

  it("createUnwrapOr", () => {
    const test = unwrapOr(0);
    expect(test(none())).toBe(0);
    expect(test(some(1))).toBe(1);
  });

  it("createUnwrapOrElse", () => {
    const fr = fallback(0);
    const test = unwrapOrElse(fr);

    expect(test(none())).toBe(0);
    expect(test(some(10))).toBe(10);
  });
});
