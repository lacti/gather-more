import Position from "./models/Position";
import Table from "./models/Table";
import isValidPosition from "./isValidPosition";

export default function moveCharacterIfYouCan(
  map: Table,
  currentPos: Position,
  nextPos: Position
): boolean {
  if (!isValidPosition(nextPos)) {
    return false;
  }
  if (map[nextPos.y][nextPos.x].length > 0) {
    // TODO treasure
    return false;
  }
  map[nextPos.y][nextPos.x] = map[currentPos.y][currentPos.x];
  map[currentPos.y][currentPos.x] = "";
  return true;
}
