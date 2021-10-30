import { redisDelete } from "../redis/store";
import { redisMapKey } from "./constants";

export default async function resetMap(): Promise<void> {
  await redisDelete(redisMapKey);
}
