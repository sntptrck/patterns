export interface Product {
  operation(): number;
}

export abstract class Creator {
  public abstract factoryMethod(): Product;

  public someOperation(): string {
    const product = this.factoryMethod();
    return `creator call ProductExample${product.operation()}`;
  }
}

class ProductExample1 implements Product {
  public operation(): number {
    return 1;
  }
}

class ProductExample2 implements Product {
  public operation(): number {
    return 2;
  }
}

class ConcreteCreator1 extends Creator {
  public factoryMethod(): Product {
    return new ProductExample1();
  }
}

class ConcreteCreator2 extends Creator {
  public factoryMethod(): Product {
    return new ProductExample2();
  }
}
