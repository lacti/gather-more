import { maxX, maxY } from "./constants";

import Position from "./models/Position";

export default function isValidPosition({ x, y }: Position): boolean {
  return x >= 0 && y >= 0 && x < maxX && y < maxY;
}
