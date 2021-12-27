/**
 * Programing yang buruk adalah programing yang selalu
 * mengulangi kode yang sama ditempat manapun
 * ada code yang logic yang complex dipisahkan ke file sendiri (service misal)
 */

import Operation from "./OperationService.ts";

const calculate = () => {
  let num1: number = 20;
  let num2: number = 30;

  // call other file
  return Operation(num1, num2);
};

const calculate2 = () => {
  let num1: number = 10;
  let num2: number = 5;

  return Operation(num1, num2);
};

console.log(calculate()); // 12.5
console.log(calculate2()); // 3.75
