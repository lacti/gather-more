import Position from "./models/Position";
import { invalidPosition } from "./constants";
import isValidPosition from "./isValidPosition";

export default function movePosition(
  { x, y }: Position,
  dir: "left" | "right" | "up" | "down"
): Position {
  let nx = x;
  let ny = y;
  switch (dir) {
    case "left":
      --nx;
      break;
    case "right":
      ++nx;
      break;
    case "up":
      --ny;
      break;
    case "down":
      ++ny;
      break;
  }
  const next: Position = {
    y: ny,
    x: nx,
  };
  return isValidPosition(next) ? next : invalidPosition;
}
