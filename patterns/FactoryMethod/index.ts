export interface AbstractProduct {
  operation(): number;
}

export abstract class AbstractCreator {
  public abstract factoryMethod(): AbstractProduct;

  public someOperation(): string {
    const product = this.factoryMethod();
    return `creator call ProductExample${product.operation()}`;
  }
}

class Product1 implements AbstractProduct {
  public operation(): number {
    return 1;
  }
}

class Product2 implements AbstractProduct {
  public operation(): number {
    return 2;
  }
}

class Creator1 extends AbstractCreator {
  public factoryMethod(): AbstractProduct {
    return new Product1();
  }
}

class Creator2 extends AbstractCreator {
  public factoryMethod(): AbstractProduct {
    return new Product2();
  }
}
