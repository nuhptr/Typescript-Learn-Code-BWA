// TODO: static method and static property
class People {
    constructor() { }

    static getRoleName: string = "Admin";

    static getNameRole() {
        return "hei";
    }
}

// call the static property
let people = People.getRoleName;
console.log(people); // Admin

// call the static method
let names = People.getNameRole();
console.log(names); // hei