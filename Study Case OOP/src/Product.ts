import Asus from "./Asus";
import Macbook from "./Macbook"

let asus = new Asus("ROG", true, true);
console.log(asus);

let macbook = new Macbook("Pro Retina 2019", false, false);
console.log(macbook);
macbook.a();
macbook.b();