class Truck {
  private qty: number;

  constructor(qty: number) {
    this.qty = qty;
  }

  deliver(): void {
    console.log(`kirim ${this.qty} menggunakan truk`);
  }
}

class Ship {
  private qty: number;

  constructor(qty: number) {
    this.qty = qty;
  }

  deliver(): void {
    console.log(`kirim ${this.qty} menggunakan Ship`);
  }
}

/** yang jadi masalah adalah yang awalnya truck harus kita rubah kodingan kita
 * jadi setiap ada pengiriman baru akan menduplikat kodingan yang sudah ada
 * dan di banyak tempat akan tidak efektif dan harus rubah dibanyak tempat
 * tidak maintable
 */

let type = "deliver_by_land";
if (type === "deliver_by_land") {
  new Truck(100);
} else if (type === "deliver_by_sea") {
  new Ship(100);
}
// dan seterusnya sampai banyaknya method
