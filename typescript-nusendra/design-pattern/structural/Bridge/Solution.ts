/**
 *                                   Store
 *
 *           Product Type                             Price
 *
 * Fashion(price)     Computer(price)            Cheap   Expensive
 */

interface Price {
   name: string
   sellPrice(): string
}

class Cheap implements Price {
   name: string = "Murah"

   sellPrice(): string {
      return `${this.name}`
   }
}

class Expensive implements Price {
   name: string = "Mahal"

   sellPrice(): string {
      return `${this.name}`
   }
}

interface InterfaceProduct {
   name: string
}

abstract class SellProduct implements InterfaceProduct {
   name: string
   price: Price

   constructor(name: string, price: Price) {
      this.name = name
      this.price = price
   }

   abstract sell(): void
}

class Computer extends SellProduct {
   sell(): void {
      console.log(`jual ${this.name} dengan harga ${this.price.sellPrice()}`)
   }
}

class Fashion extends SellProduct {
   sell(): void {
      console.log(`jual ${this.name} dengan harga ${this.price.sellPrice()}`)
   }
}

// ---
const fashionMurah = new Fashion("baju lengan panjang", new Cheap())
console.log(fashionMurah.sell())

const computerMahal = new Computer("macbook pro 2020", new Expensive())
console.log(computerMahal.sell())
