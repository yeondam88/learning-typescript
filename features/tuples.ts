// Tuple - Array-like structure where each element represents some property of a record
const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40
};

// Type alias
type Drink = [string, boolean, number];

const pepsi: Drink = ['brown', true, 40];
const sprite: Drink = ['clear', true, 50];
const tea: Drink = ['brown', false, 0];

// Tuple is barely used in typescript. (it is maybe good fit when you work with csv file)

// Tuple example
const carSpecs: [number, number] = [400, 3354];

// Object example
const carStats = {
  horsepower: 400,
  weight: 3354
};
