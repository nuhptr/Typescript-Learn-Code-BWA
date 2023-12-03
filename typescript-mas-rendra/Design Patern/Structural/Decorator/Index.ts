class ProductDetail {
   name: string
   price: number

   constructor(name: string, price: number) {
      this.name = name
      this.price = price
   }

   getProduct() {
      return {
         name: this.name,
         price: this.price,
      }
   }
}

const productA = new ProductDetail("Product A", 500000)
console.log(productA.getProduct())

// TODO: jika masih 1/2 code gamasalah tetapi jika sudah tersebar di seluruh
// file maka akan merepotkan

const productAFromImport = Object.assign(productA.getProduct(), { tax: 10000 })
productAFromImport.price += 20000
console.log(productAFromImport)
