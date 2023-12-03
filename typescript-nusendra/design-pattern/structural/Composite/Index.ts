/*
 
Computer
    PC 
        Case
        Motherboard
        Processor Fan
    Laptop
        Asus ROG
        Lenovo Thinkpad TSeries
    Peripheral
        HDD
            Seagate 1TB
            WD 1TB
        SSD
        Memory RAM
            DDR2
            DDR3
        Keyboard
            Mechanical
                Keychron
                Tecware
            Standard
                Logitech
 */

// TODO: yang ribet untuk dikerjakan
class Category {
   name: string
   children: any[] = []

   constructor(name: string) {
      this.name = name
   }
}

const computer = new Category("Computer")
console.log(computer)

computer.children = [(new Category("PC").children = [new Category("case"), new Category("Motherboard")])]

console.log(computer)
