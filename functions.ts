export type Coordinates = {
  x: number;
  y: number;
  z: number;
};

export function getCoordinates({ x, y, z }: Coordinates): Coordinates {
  return {
    x: 2 * x + 11,
    y: 2 * z + y - 5,
    z: y + z - x,
  };
}
