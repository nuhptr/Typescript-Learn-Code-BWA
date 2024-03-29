function printInfo<Type>(x: Type): string {
    return `value of x is ${x} and type of x is ${typeof x}`
}

// ------

const str = printInfo<string>("hello")
const num = printInfo<number>(10)
const bool = printInfo<boolean>(true)
const obj = printInfo<object>({ name: "john" })
const arr = printInfo<string[]>(["john", "doe"])

console.log(str) // value of x is hello and type of x is string
console.log(num) // value of x is 10 and type of x is number
console.log(bool) // value of x is true and type of x is boolean

// ------

function uniqueDataTypes<Type>(x: Type, y: Type): [Type, Type] {
    return [x, y]
}

const [str1, str2] = uniqueDataTypes<string>("hello", "world")
console.log(str1, str2) // hello world

// ------

function getRandomKeyValuePair<T>(obj: { [key: string]: T }): {
    key: string
    value: T
} {
    const keys = Object.keys(obj)
    const randomIndex = Math.floor(Math.random() * keys.length)
    const randomKey = keys[randomIndex]

    return { key: randomKey, value: obj[randomKey] }
}

const obj1 = { name: "john", age: 20, country: "india" }
const { key, value } = getRandomKeyValuePair(obj1)
console.log(key, value)

function filterArray<T>(array: T[], condition: (item: T) => boolean) {
    return array.filter((item) => condition(item))
}

// ------

const numbers = [1, 2, 3, 4, 5]
const filteredNumbers = filterArray(numbers, (item) => item > 3)
const evenNumbers = filterArray(numbers, (item) => item % 2 === 0)

console.log(filteredNumbers) // [4, 5]
console.log(evenNumbers) // [2, 4]

// ------

// Generics interface
interface Fruits {
    name: string
    color: string
}

const fruits: Fruits[] = [
    { name: "apple", color: "red" },
    { name: "banana", color: "yellow" },
    { name: "grapes", color: "green" },
]

const redFruits = filterArray<Fruits>(fruits, (item) => item.color === "red")
console.log(redFruits) // [{ name: "apple", color: "red" }]
