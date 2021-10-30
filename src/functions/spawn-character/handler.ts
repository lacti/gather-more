import "source-map-support/register";

import { APIGatewayProxyHandlerV2 } from "aws-lambda";
import ApiError from "../../api/ApiError";
import findCharacterPosition from "../../map/findCharacterPosition";
import handleError from "../../api/handleError";
import isValidPosition from "../../map/isValidPosition";
import randomEmptyXY from "../../map/randomEmptyXY";
import readCharacter from "../../user/readCharacter";
import updateMap from "../../map/updateMap";

export const main: APIGatewayProxyHandlerV2 = async (event) => {
  try {
    const character = readCharacter(event);
    updateMap((map) => {
      const maybe = findCharacterPosition(map, character);
      if (isValidPosition(maybe)) {
        throw new ApiError(400, `Try to login with another character`);
      }
      const pos = randomEmptyXY(map);
      map[pos.y][pos.x] = character;
    });
    return {
      statusCode: 200,
      body: JSON.stringify(true),
    };
  } catch (error) {
    return handleError(error);
  }
};
