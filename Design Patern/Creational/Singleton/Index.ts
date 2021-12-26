class Me {
  private fristName: string = "";
  private lastName: String = "";

  getFullName(): string {
    //   akses DB, Select user ......
    this.fristName = "Firstname";
    this.lastName = "LastName";

    return `${this.fristName} ${this.lastName}`;
  }
}

const fullName = new Me();
console.log(fullName.getFullName());

const fullName2 = new Me();
console.log(fullName.getFullName());

console.log(fullName === fullName2); // false, karena dua object yang berbeda dan tidak sama
