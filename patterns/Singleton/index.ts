export class Singleton {
  private static instance?: Singleton;
  data: unknown;
  constructor(data: unknown) {
    if (typeof Singleton.instance === "object") {
      return Singleton.instance;
    }
    this.data = data;
    Singleton.instance = this;
    return this;
  }

  public static getInstance(): Singleton | undefined {
    return Singleton.instance;
  }
}
