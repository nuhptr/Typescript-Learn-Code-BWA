// TODO: static method and static property
class People {
    constructor() { }

    static getRoleName: string = "Admin";

    static getNameRole() {
        return "hei";
    }
}

export let people = People.getRoleName;
console.log(people); // Admin

export let name = People.getNameRole();
console.log(name); // hei