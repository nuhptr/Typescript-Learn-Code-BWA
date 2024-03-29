class MyClass {
    private _myProperty: number = 0

    get myProperty(): number {
        return this._myProperty
    }

    set myProperty(value: number) {
        if (value < 0) throw new Error("myProperty cannot be negative")
        this._myProperty = value
    }
}

const myInstance = new MyClass()
myInstance.myProperty = 10
console.log(myInstance.myProperty) // 10
