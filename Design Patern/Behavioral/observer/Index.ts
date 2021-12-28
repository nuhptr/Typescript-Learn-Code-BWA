namespace Observer {
  interface Subject {
    attach(observer: Observer): void;
    detach(observer: Observer): void;
    notify(): void;
  }

  interface Observer {
    name: string;
    update(subject: Subject): void;
  }

  class PromoSubject implements Subject {
    public isPromo: boolean = false;
    private observers: Observer[] = [];

    // TODO: menambahkan observer
    attach(observer: Observer): void {
      const isExist: boolean = this.observers.includes(observer);

      if (isExist) {
        return console.log(`observer ${observer.name} sudah ada`);
      }

      this.observers.push(observer);
      console.log(`observer ${observer.name} berhasil didaftarkan`);
    }

    // TODO: menghapus observer
    detach(observer: Observer): void {
      const observerIndex = this.observers.indexOf(observer);
      if (observerIndex === -1) {
        return console.log(`observer ${observer.name} tidak ditemukan`);
      }

      this.observers.splice(observerIndex, 1);
      console.log(`observer ${observer.name} berhasil di hapus`);
    }

    // TODO: set promo
    setPromo(status: boolean): void {
      this.isPromo = status;
      this.notify();
    }

    // TODO: mengupdate observer kelas ini
    notify(): void {
      for (const observer of this.observers) {
        observer.update(this);
      }
    }
  }

  class Product implements Observer {
    name: string;

    constructor(name: string) {
      this.name = name;
    }

    update(subject: Subject): void {
      if (subject instanceof PromoSubject && subject.isPromo) {
        console.log(
          `product ${this.name} telah ditayangkkan ke toko online sebagai promo`
        );
      }
    }
  }

  const promo = new PromoSubject();

  const baju = new Product("baju");
  const celana = new Product("celana");
  const topi = new Product("topi");

  promo.attach(baju);
  promo.attach(celana);
  // promo.attach(topi);

  promo.setPromo(true);
  promo.detach(topi);

  console.log(promo);

  /**
   * observer baju berhasil didaftarkan
   * observer celana berhasil didaftarkan
   * product baju telah ditayangkkan ke toko online sebagai promo
   * product celana telah ditayangkkan ke toko online sebagai promo
   * observer topi tidak ditemukan
   * PromoSubject {
   *   isPromo: true,
   *   observers: [ Product { name: "baju" }, Product { name: "celana" } ]
   * }
   */
}
