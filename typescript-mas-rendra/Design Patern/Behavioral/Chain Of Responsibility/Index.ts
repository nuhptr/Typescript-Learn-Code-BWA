/**
 * rule :
 * 1. nama < 20
 * 2. harga < 1jt
 * 3. berat < 5kg
 */

namespace COR {
   class Product {
      name: string
      price: number
      weight: number

      constructor(name: string, price: number, weight: number) {
         this.name = name
         this.price = price
         this.weight = weight
      }

      // TODO: mengulang kode yang sama dan akan banyak sekali kodenya
      validate() {
         if (this.name.length > 20) {
            return "nama harus dibawah 20 karakter"
         }

         if (this.price > 1000000) {
            return "harga harus dibawah 1 jt"
         }

         if (this.weight > 5) {
            return "berat product harus dibawah 5kg"
         }

         return this
      }
   }

   const product = new Product("Sabun", 2500000, 7)
   console.log(product.validate())
}
