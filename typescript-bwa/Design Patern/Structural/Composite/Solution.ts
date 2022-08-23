namespace CompositeSolution {
  // TODO: buat contract class menggunakan dirinya sendiri
  abstract class Category {
    children: Category[] = [];
    parent: Category | null = null;
    name: string;

    constructor(name: string) {
      this.name = name;
    }

    setParent(parent: Category | null) {
      this.parent = parent;
    }

    getParent(): Category | null {
      return this.parent;
    }

    //   check composite (barang akhir atau masih ada lagi)
    isComposite(): boolean {
      return false;
    }

    abstract getName(): string;
  }

  class Product extends Category {
    getName(): string {
      return this.name;
    }
  }

  class CategoryComposite extends Category {
    constructor(name: string) {
      super(name);
    }

    add(category: Category): void {
      this.children.push(category);
      category.setParent(category);
    }

    remove(category: Category): void {
      const categoryIndex = this.children.indexOf(category);
      this.children.splice(categoryIndex, 1);

      category.setParent(null);
    }

    isComposite(): boolean {
      return true;
    }

    getName(): string {
      return this.name;
    }
  }

  const category = new CategoryComposite("category");

  const computer = new CategoryComposite("Computer");
  const fashion = new CategoryComposite("fashion");

  const pc = new CategoryComposite("pc");
  const laptop = new CategoryComposite("laptop");
  const casing = new CategoryComposite("casing");

  const motherboard = new CategoryComposite("Motherboard");
  const peripheral = new CategoryComposite("peripheral");

  const hdd = new CategoryComposite("HDD");

  category.add(computer);
  category.add(fashion);

  computer.add(pc);
  computer.add(laptop);
  computer.add(peripheral);

  pc.add(casing);
  pc.add(motherboard);

  peripheral.add(hdd);

  console.log(category);

  const print = (composite: Category): void => {
    console.log("Kategori " + composite.name);

    composite.children.forEach((element) => {
      if (element.isComposite() && element.children.length) {
        print(element);
      } else {
        console.log("Product " + element.getName());
      }
    });
  };

  print(category);
}
