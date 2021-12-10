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
}

export let admin = new Admin("089674135843", "Adi", 20);
console.log(`umur admin ${admin.getName()} adalah ${admin.getAge()}`);
console.log(admin.getRole());
console.log(admin.phone);