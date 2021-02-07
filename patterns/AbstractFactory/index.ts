/**
 * Интерфейс Абстрактной Фабрики объявляет набор методов, которые возвращают
 * различные абстрактные продукты. Эти продукты называются семейством и связаны
 * темой или концепцией высокого уровня. Продукты одного семейства обычно могут
 * взаимодействовать между собой. Семейство продуктов может иметь несколько
 * вариаций, но продукты одной вариации несовместимы с продуктами другой.
 */
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

  anotherUsefulFunctionB(collaborator: AbstractProductA): string;
}


class ProductB1 implements AbstractProductB {
  public usefulFunctionB(): string {
    return "The result of the product B1.";
  }

  public anotherUsefulFunctionB(collaborator: AbstractProductA): string {
    const result = collaborator.usefulFunctionA();
    return `The result of the B1 collaborating with the (${result})`;
  }
}

class ProductB2 implements AbstractProductB {
  public usefulFunctionB(): string {
    return "The result of the product B2.";
  }

  public anotherUsefulFunctionB(collaborator: AbstractProductA): string {
    const result = collaborator.usefulFunctionA();
    return `The result of the B2 collaborating with the (${result})`;
  }
}
