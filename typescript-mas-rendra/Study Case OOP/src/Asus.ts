import BaseLaptop from "./module/BaseLaptop"

class Asus<T> extends BaseLaptop<T> {
   constructor(public type: T, public numeric: boolean, public touchButton: boolean) {
      super("Asus", type, numeric, touchButton)
   }
}

export default Asus
