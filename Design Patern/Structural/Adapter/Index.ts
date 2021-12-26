/**
 * name     |   brand
 * ------------------
 * mobil    |   Delorean
 * besi     |   -
 * roda     |   -
 */

// TODO: contract super
interface BaseData {
  getData(): {
    name: string;
    brand: string;
  };
}

interface IProduct extends BaseData {
  name: string;
  brand: string;
}

// TODO: contract material
interface IMaterial {
  name: string;
  qty: number;
}

class Product implements IProduct {
  name: string;
  brand: string;

  constructor(name: string, brand: string) {
    this.name = name;
    this.brand = brand;
  }

  getData(): { name: string; brand: string } {
    return {
      name: this.name,
      brand: this.brand,
    };
  }
}

// TODO: focus class
class Material implements IMaterial {
  name: string;
  qty: number;

  constructor(name: string, qty: number) {
    this.name = name;
    this.qty = qty;
  }

  getData() {
    return {
      name: this.name,
      qty: this.qty,
    };
  }
}

let list: any[] = [];

const product = new Product("mobile", "DeLoraan");
list.push(product.getData());

const material1 = new Material("besi", 10);
list.push(material1.getData());

const material2 = new Material("pasir", 3);
list.push(material1.getData());

console.log(list);
