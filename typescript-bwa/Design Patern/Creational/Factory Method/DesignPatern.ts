// TODO: create factory method
namespace factorySolution {
  interface Logistic {
    qty: number;
    deliver(): void;
  }

  class Truck implements Logistic {
    public qty: number;

    constructor(qty: number) {
      this.qty = qty;
    }

    deliver(): void {
      console.log(`kirim ${this.qty} menggunakan truk`);
    }
  }

  class Ship implements Logistic {
    public qty: number;

    constructor(qty: number) {
      this.qty = qty;
    }

    deliver(): void {
      console.log(`kirim ${this.qty} menggunakan Ship`);
    }
  }

  type logisticType = {
    type: string;
    qty: number;
  };

  interface Factory {
    create(option: logisticType): Logistic;
  }

  // TODO: create class implement factory
  class LogisticFactory implements Factory {
    public create(option: logisticType): Logistic {
      if (option.type === "deliver_by_land") {
        return new Truck(option.qty);
      } else if (option.type === "deliver_by_sea") {
        return new Ship(option.qty);
      }

      throw new Error("Class tidak ditemukan");
    }
  }

  const logistic = new LogisticFactory();

  const bySea = logistic.create({ type: "deliver_by_sea", qty: 100 });
  console.log(bySea.deliver());

  const byLand = logistic.create({ type: "deliver_by_land", qty: 20 });
  console.log(byLand.deliver());
}
