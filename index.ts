import { Coordinates, getCoordinates } from './functions';

const nonCalculatedCoordinates: Coordinates = {
  x: 20,
  y: 21,
  z: 11,
};

const calculatedCoordinates = getCoordinates(nonCalculatedCoordinates);

console.log(calculatedCoordinates);
