class List<T> {
    private data: T[];

    constructor(...element: T[]) {
        this.data = element;
    }

    add(element: T) : void {
        this.data.push(element);
    }

    addMultipleElement(...elements: T[]): void {
        this.data.push(...elements);
    }

    public get getAllArray() : T[] {
        return this.data;
    }
}

export let number = new List<number>(1, 2, 3, 4, 5, 6, 7);
number.add(5);
number.addMultipleElement(7, 8, 9);
console.log(number.getAllArray); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

// passing duoble value
let random = new List<number | string>(1, 2, "adi");