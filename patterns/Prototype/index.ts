export class Client {
  public prototype;

  constructor(prototype: Prototype) {
    this.prototype = prototype;
  }
}

export class Prototype {
  public primitive: any;
  public component: object;
  public circularReference: Client;

  constructor(
    component: object,
    primitive: any,
    circularReference: Client
  ) {
    this.component = component;
    this.primitive = primitive;
    this.circularReference = circularReference;
  }

  public clone(): this {
    const clone = Object.create(this);

    clone.component = Object.create(this.component);

    clone.circularReference = {
      ...this.circularReference,
      prototype: { ...this },
    };

    return clone;
  }
}
