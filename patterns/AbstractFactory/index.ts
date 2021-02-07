
export interface AbstractFactory {
  createProductA(): AbstractProductA;

  createProductB(): AbstractProductB;
}


class Factory1 implements AbstractFactory {
  public createProductA(): AbstractProductA {
    return new ProductA1();
  }

  public createProductB(): AbstractProductB {
    return new ProductB1();
  }
}

class Factory2 implements AbstractFactory {
  public createProductA(): AbstractProductA {
    return new ProductA2();
  }

  public createProductB(): AbstractProductB {
    return new ProductB2();
  }
}

interface AbstractProductA {
  usefulFunctionA(): string;
}

class ProductA1 implements AbstractProductA {
  public usefulFunctionA(): string {
    return "The result of the product A1.";
  }
}

class ProductA2 implements AbstractProductA {
  public usefulFunctionA(): string {
    return "The result of the product A2.";
  }
}

interface AbstractProductB {
  usefulFunctionB(): string;

}


class ProductB1 implements AbstractProductB {
  public usefulFunctionB(): string {
    return "The result of the product B1.";
  }
}

class ProductB2 implements AbstractProductB {
  public usefulFunctionB(): string {
    return "The result of the product B2.";
  }
}
