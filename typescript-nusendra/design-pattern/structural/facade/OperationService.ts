// Logic File
export default function Operation(num1: number, num2: number, operation: string): number {
   let result: number = 0

   switch (operation) {
      case "addition":
         result = num1 + num2
         break
      case "subtraction":
         result = num1 - num2
         break
      case "multiply":
         result = num1 * num2
         break
      case "divide":
         result = num1 / num2
         break
      default:
         console.log("Operation not found")
         break
   }

   return result
}
