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
      name: string
      brand: string
   }
}

interface IProduct extends BaseData {
   name: string
   brand: string
}

class Product implements IProduct {
   name: string
   brand: string

   constructor(name: string, brand: string) {
      this.name = name
      this.brand = brand
   }

   getData(): { name: string; brand: string } {
      return {
         name: this.name,
         brand: this.brand,
      }
   }
}

// TODO: contract material
interface IMaterial {
   name: string
   qty: number
}

// TODO: focus class
class Material implements IMaterial {
   name: string
   qty: number

   constructor(name: string, qty: number) {
      this.name = name
      this.qty = qty
   }

   getData() {
      return {
         name: this.name,
         qty: this.qty,
      }
   }
}

let list: any[] = []

const product = new Product("mobile", "DeLoraan")
list.push(product.getData())

const material1 = new Material("besi", 10)
list.push(material1.getData())

const material2 = new Material("pasir", 3)
list.push(material1.getData())

console.log(list)
/** [
  { name: "mobile", brand: "DeLoraan" },
  { name: "besi", qty: 10 },
  { name: "besi", qty: 10 }
]
*/

// TODO: ------------------- Solution
class MaterialAdapter implements BaseData {
   private adaptee: Material

   constructor(adaptee: Material) {
      this.adaptee = adaptee
   }

   getData(): { name: string; brand: string } {
      return {
         name: this.adaptee.name,
         brand: "",
      }
   }
}

let list2: any[] = []

const product2 = new Product("mobil", "Deloran")
list2.push(product2.getData())

const material3 = new MaterialAdapter(new Material("Besi", 100))
list2.push(material3.getData())

const material4 = new MaterialAdapter(new Material("Roda", 4))
list2.push(material4.getData())

console.log(list2)
/** [
  { name: "mobil", brand: "Deloran" },
  { name: "Besi", brand: "" },
  { name: "Roda", brand: "" }
]
 */

// TODO: cara 2 (lebih recomended)
enum AdapterType {
   PRODUCT,
   MATERIAL,
}

class DataAdapter implements BaseData {
   public name: string
   public brand: string
   public qty: number
   public type: AdapterType

   constructor({ name = "", brand = "", qty = 0 } = {}, type: AdapterType) {
      this.name = name
      this.brand = brand
      this.qty = qty
      this.type = type
   }

   getData() {
      if (this.type === AdapterType.PRODUCT) {
         const product = new Product(this.name, this.brand)
         return {
            name: product.name,
            brand: product.brand,
         }
      } else if (this.type === AdapterType.MATERIAL) {
         const material = new Material(this.name, this.qty)
         return {
            name: material.name,
            qty: material.qty,
            brand: "",
         }
      }

      return {
         name: "",
         brand: "",
      }
   }
}

let list3: any[] = []

const data1 = new DataAdapter({ name: "mobil", brand: "Deeloran" }, AdapterType.PRODUCT)
list3.push(data1.getData())

const data2 = new DataAdapter({ name: "roda", brand: "DeLorean", qty: 10 }, AdapterType.MATERIAL)
list3.push(data2.getData())

console.log(list3)
/** [ 
 * { name: "mobil", brand: "Deeloran" },
 * { name: "roda", qty: 10, brand: "" } 
]
 */
