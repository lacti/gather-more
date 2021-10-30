import ApiError from "../api/ApiError";
import Authorization from "./models/Authorization";
import { decode } from "jsonwebtoken";

export default function readCharacter({ body }: { body?: string }): string {
  const { jwt } = JSON.parse(body ?? "{}");
  if (!jwt) {
    throw new ApiError(400, "Bad Request");
  }
  const authorization = decode(jwt) as Authorization;
  console.info(authorization);
  if (!authorization.name) {
    throw new ApiError(400, "Bad Request");
  }
  return authorization.name.substring(0, 3);
}
