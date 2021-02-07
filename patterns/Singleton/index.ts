export class Singleton {
  static instance?: Singleton;
  data: unknown;
  constructor(data: unknown) {
    if (typeof Singleton.instance === "object") {
      return Singleton.instance;
    }
    this.data = data;
    Singleton.instance = this;
    return this;
  }
}
