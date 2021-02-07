import { Client, Prototype } from "./index";

const p1 = new Prototype(new Date(), 22, new Client(p1));
const p2 = p1.clone();

test("Primitive field values have been carried over to a clone", () => {
  expect(p1.primitive).toStrictEqual(p2.primitive);
});
test("Simple component has been cloned", () => {
  expect(p1.component).not.toStrictEqual(p2.component);
});
test("Component with back reference has been cloned", () => {
  expect(p1.circularReference).not.toStrictEqual(p2.circularReference);
});

