import ILaptop from "./ILaptop";
import * as keyboard from "./Keyboard";

abstract class BaseLaptop<T> implements ILaptop<T> {
    constructor(
        public name: string,
        public type: T,
        public withNumeric: boolean,
        public withTouchButton: boolean,
    ) { 
        this.name = name;
        this.type = type;
        this.withNumeric = withNumeric;
        this.withTouchButton = withTouchButton
    }

    a() : void {
        console.log(keyboard.a());
    }

    b() : void { 
        console.log(keyboard.b());
    }
}

export default BaseLaptop;