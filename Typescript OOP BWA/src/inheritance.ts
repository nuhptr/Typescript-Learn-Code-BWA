// TODO: Inheritance
// public =  bisa diakses semua kelas
// protected = hanya bisa diakses kelas turunannya saja
// private = hanya di akses dari class itu sendiri

export class Users {
    constructor(public name: string, public age: number) {}

    setName(value: string): void {
        this.name = value;
    }

    getName = (): string => {
        return this.name
    };

    getAge = (): number => { 
        return this.age;
    }
}

export class Admin extends Users{
    read: boolean = true;
    write: boolean = true;
    phone: string;

    // private property to getter setter
    private _email: string = "";

    constructor(phone: string, name: string, age: number) {
        super(name, age);
        this.phone = phone;
    }

    getRole(): { read: boolean, write: boolean } {
        return {
            read: this.read,
            write: this.write,
        }
    }

    // TODO: getter setter
    set email(value: string) {
        if (value.length < 5) {
            this._email = "Email salah"
        } else {
            this._email = value;
        }
    }

    get email(): string {
        return this._email;
    }
}

let admin = new Admin("089674135843", "Adi", 20);
console.log(`nama admin ${admin.getName()} dan umurnya ${admin.getAge()}`); // nama admin adi dan umurnya 20
console.log(admin.getRole()); // {read: true, write: true}
console.log(admin.phone); // 089674135843

admin.email = "nugrahaadi733@gmail.com";
console.log(admin.email); // nugrahaadi733@gmail.com