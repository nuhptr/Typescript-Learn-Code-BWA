// TODO: Kontrak bahwa suatu kelas harus punya ketiga ini
interface Laptop{
    name: string;
    on(): void;
    off(): void;
}

class Asus implements Laptop{
    name: string = "Asus ROG";
    isGaming: boolean = true;

    constructor(name: string, isGaming: boolean) {
        this.name = name;
        this.isGaming = isGaming;
    }

    on(): void {
        console.log("nyala")
    }
    off(): void {
        console.log("mati");
    }
}

class Macbook implements Laptop {
    name: string = "Macbook M1";
    keyboardLight: boolean = true;

    constructor(name: string, keyboardLight: boolean) {
        this.name = name;
        this.keyboardLight = keyboardLight;
    }
    
    on(): void {
        console.log("nyala");
    }
    off(): void {
        console.log("mati");
    } 
}

export let asus = new Asus("ROG", true);
console.log(asus.on());
