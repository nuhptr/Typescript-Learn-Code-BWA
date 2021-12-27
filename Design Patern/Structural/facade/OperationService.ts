// Logic File
const operation = (num1: number, num2: number): number => {
  const operation1 = num1 + num2;
  const operation2 = operation1 / 100;
  const operation3 = operation2 * 25;

  return operation3;
};

export default operation;
