import { Singleton } from "./index";

test("Singleton constructor returns same instance", () => {
  const instance1 = new Singleton(1);
  const instance2 = new Singleton(2);

  const instance3 = new Singleton(3);

  expect(instance1.data).toEqual(instance2.data);
  expect(instance2.data).toEqual(instance3.data)
});
