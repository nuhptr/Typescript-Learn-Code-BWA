// Regular Func
function addOne(num: number) {
   return num + 1
}

const result = addOne(1)
console.log(result)

// Arrow Func Annotation
const double = (num1: number, num2: number) => num1 * num2
const res = double(2, 3)
console.info(res)
