type Forest = {
    name: string
    mount: number
    readonly location?: string // optional property and read-only
    trees?: string[] // optional property
}

const forest: Forest = {
    name: "Amazon",
    mount: 1000,
    trees: ["Oak", "Pine"],
}

console.log(forest.name, forest.mount, forest.trees ?? ["No trees"])
