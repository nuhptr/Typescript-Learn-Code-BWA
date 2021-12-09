// tipe data pada balikan function

// TODO: Kembalian string () : string
function getName(name: string) : string {
    return `Hello, my name is ${name}`
}

export let nama = getName("Dendi");
console.log(nama);

// TODO: Kembalian Number () : number
function getAge(age:number) : number{
    return age;
}

export let age = getAge(10);
console.log(age);

// TODO: Argument -> val1: number
function multiply(val1:number, val2:number) : number {
    return val1 * val2;
}

export let result = multiply(2, 10);
console.log(result);

// TODO: function as type
type Tambah = (val1: number, val2: number) => number;

const Add: Tambah = (val1: number, val2: number) => {
    return val1 + val2;
}