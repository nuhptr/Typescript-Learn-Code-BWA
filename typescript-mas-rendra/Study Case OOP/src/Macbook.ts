import BaseLaptop from "./module/BaseLaptop";

class Macbook<T> extends BaseLaptop<T> {
    constructor(
        public type: T,
        public numeric: boolean,
        public touchButton: boolean) {
        super("Macbook", type, numeric, touchButton);
    }
}

export default Macbook;