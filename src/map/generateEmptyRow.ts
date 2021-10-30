import Row from "./models/Row";
import { maxX } from "./constants";

export default function generateEmptyRow(): Row {
  const putOrNot = () => Math.random() < 0.2;
  const row: Row = {};
  for (let x = 0; x < maxX; ++x) {
    row[x] = putOrNot() ? "🎃" : "";
  }
  return row;
}
