import Table from "./models/Table";
import generateEmptyRow from "./generateEmptyRow";
import { maxY } from "./constants";

export default function generateEmptyTable(): Table {
  return Array.from({ length: maxY }, (_) => generateEmptyRow());
}
