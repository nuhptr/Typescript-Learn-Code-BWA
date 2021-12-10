// TODO: static method and static property
class People {
    constructor() { }

    static getRoleName: string = "Admin";
}

export let people = People.getRoleName;
console.log(people); // Admin