import { invalidPosition, maxX, maxY } from "./constants";

import Position from "./models/Position";
import Table from "./models/Table";

export default function findCharacterPosition(
  map: Table,
  character: string
): Position {
  for (let y = 0; y < maxY; y++) {
    for (let x = 0; x < maxX; x++) {
      if (map[y][x] === character) {
        return { y, x };
      }
    }
  }
  return invalidPosition;
}
