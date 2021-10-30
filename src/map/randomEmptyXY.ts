import { invalidPosition, maxX, maxY } from "./constants";

import Position from "./models/Position";
import Table from "./models/Table";

const maxSearchCount = 500;

export default function randomEmptyXY(map: Table): Position {
  const randomX = () => Math.floor(Math.random() * maxX);
  const randomY = () => Math.floor(Math.random() * maxY);

  for (let i = 0; i < maxSearchCount; ++i) {
    const y = randomY();
    const x = randomX();
    if (map[y][x].length === 0) {
      return { x, y };
    }
  }
  return invalidPosition;
}
