const nums: number[] = [1, 2, 3]
const strings: string[] = ["a", "b", "c"]

const getNums = nums.map((num) => num * 2) // [2, 4, 6]

console.log(nums)
console.log(getNums)

// Empty Array
const items: string[] = []
items.push("Motorola")
items.push("Nokia")
items.push("Samsung")
items.push("Apple")

console.log(items)

// Array Generic
const items2: Array<string> = ["Motorola", "Nokia", "Samsung", "Apple"]
console.log(items2)
