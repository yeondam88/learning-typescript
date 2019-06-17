interface Vehicle {
  name: string;
  year: Date;
  broken: boolean;
  summary(): string;
}

const oldCivic = {
  name: 'Civic',
  year: new Date(),
  broken: true,
  summary(): string {
    return `This vehicle name is ${this.name} and ${this.year} year.`;
  }
};

// Perfect example to use interface to avoid that having too long type annotations
const printVehicle = (vehicle: {
  name: string;
  year: number;
  broken: boolean;
}): void => {
  console.log(`Name: ${vehicle.name}`);
  console.log(`Year: ${vehicle.year}`);
  console.log(`Broken?: ${vehicle.broken}`);
};

// With interface
const printVehicle_with_interface = (vehicle: Vehicle): void => {
  console.log(vehicle.summary());
};

printVehicle_with_interface(oldCivic);
