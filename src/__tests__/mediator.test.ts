import { count } from "console";
import { bind } from "../applicative";
import { mediator } from "../mediator";

describe(`mediator`, () => {
  test(`example`, () => {
    let counter = 0;
    let evennumber = true;
    let changeset = 0;

    const mm = mediator();
    const incrementchangeset = () => changeset++;
    const incrementcounter = (value: number) => (counter += value);
    const iseven = (value: number) => (evennumber = value % 2 === 0);

    const applychangeset = bind(mm.publish, "changeset");

    mm.subscribe("counter", incrementcounter);
    mm.subscribe("counter", iseven);
    mm.subscribe("counter", applychangeset);
    mm.subscribe("changeset", incrementchangeset);

    mm.publish("counter", 20);
    mm.publish("counter", 1);

    expect(counter).toBe(21);
    expect(evennumber).toBeFalsy();
    expect(changeset).toBe(2);

    mm.publish("changeset");

    expect(counter).toBe(21);
    expect(evennumber).toBeFalsy();
    expect(changeset).toBe(3);

    mm.unsubscribe("changeset");
    mm.unsubscribe("counter");

    expect(bind(mm.publish, "counter")).toThrow();
    expect(bind(mm.publish, "changeset")).toThrow();
  });
});
