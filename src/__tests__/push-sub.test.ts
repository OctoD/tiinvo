import { pushsub } from "../push-sub";

describe(`pushsub`, () => {
  test(`example`, () => {
    let counter = 0;

    const increment = (value: number) => (counter += value);
    const subscribed = pushsub(increment);

    subscribed(20);

    expect(counter).toBe(20);

    subscribed(1);

    expect(counter).toBe(21);

    subscribed.unsubscribe();

    expect(() => subscribed(10)).toThrow();
  });
});
