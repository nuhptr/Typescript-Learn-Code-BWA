// TODO: optional parameter using -> ? front of argument
// number + number => number (possibility to undifined)
export const getUmur = (val1: number, val2?: number): string => {
    return val1 + " " + val2;
}

console.log(getUmur(10, 10))