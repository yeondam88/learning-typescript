/**
 *  Typescript Type Annotation for
 *  functions
 */

const add = (a: number, b: number): number => {
  return a + b;
};

const subtract = (a: number, b: number): number => {
  return a - b;
};

function divide(a: number, b: number): number {
  return a / b;
}

const multiply = function(a: number, b: number): number {
  return a * b;
};

const logger = (message: string): void => {
  console.log(message);
};

// never type if the function is never never ever return a value.
const throwError = (message: string): never => {
  throw new Error(message);
};
