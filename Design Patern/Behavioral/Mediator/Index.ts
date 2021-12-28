/**
 * Ojek1    Ojek2     Ojek3    Ojek4
 *
 *              app
 *
 *    penumpang1   penumpang2
 */
namespace Mediator {
  interface IProduct {
    name: string;
    sell(): void;
  }

  interface IMediator {
    registerProduct(product: Product): void;
    setAvailableStatus(status: boolean): void;
    isAvailable(): boolean;
  }

  class Product implements IProduct {
    name: string;
    Mediator: IMediator;

    constructor(name: string, mediator: IMediator) {
      this.name = name;
      this.Mediator = mediator;
    }

    sell(): void {
      if (this.Mediator.isAvailable()) {
        this.Mediator.setAvailableStatus(false);
        console.log(`product ${this.name} berhasil dijual`);
      } else {
        console.log(
          `product ini belum dijual, harus didaftarkan terlebih dahulu`
        );
      }
    }
  }

  class ProductMediator implements IMediator {
    product?: Product;
    status: boolean = false;

    registeredProduct(): void {
      if (this.status) {
        console.log(this.product);
      } else {
        console.log(`tidak ada product yang dijual`);
      }
    }

    registerProduct(product: Product): void {
      if (this.status) {
        console.log(
          "tidak bisa mendaftarkan product, karena masih ada product yang belum terjual"
        );
      } else {
        this.status = true;
        this.product = product;
        console.log("product berhasil di daftarkkan");
      }
    }

    setAvailableStatus(status: boolean): void {
      this.status = status;
    }

    isAvailable(): boolean {
      return this.status;
    }
  }
  // execute
  const mediator = new ProductMediator();

  const product1 = new Product("sabun", mediator);
  const product2 = new Product("sampo", mediator);

  mediator.registerProduct(product1);
  mediator.registerProduct(product2);

  product1.sell();
  product2.sell();

  mediator.registeredProduct();

  mediator.registerProduct(product2);
  mediator.registeredProduct();
  product2.sell();
  mediator.registeredProduct();
}
