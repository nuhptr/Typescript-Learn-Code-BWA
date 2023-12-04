type Employees = { id: number; name: string }
type Managers = { department: string; role: string }

type ManagerWithEmployee = Employees & Managers

const manager: ManagerWithEmployee = {
   id: 1,
   name: "John",
   department: "Sales",
   role: "Manager",
}

console.log(manager.id)
console.log(manager.name)
console.log(manager.department)
console.log(manager.role)
