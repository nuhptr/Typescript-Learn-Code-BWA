// TODO: default parameter
export const fullName = (firstName: string = "Adi", lastName: string = "Nugraha") => {
    return firstName + " " + lastName;
}

console.log(fullName("Abdi")) // => Putra Nugraha returnnya