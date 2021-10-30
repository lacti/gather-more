import "source-map-support/register";

import { APIGatewayProxyHandlerV2 } from "aws-lambda";
import findCharacterPosition from "../../map/findCharacterPosition";
import handleError from "../../api/handleError";
import moveCharacterIfYouCan from "../../map/moveCharacterIfYouCan";
import movePosition from "../../map/movePosition";
import readCharacter from "../../user/readCharacter";
import updateMap from "../../map/updateMap";

export const main: APIGatewayProxyHandlerV2 = async (event) => {
  try {
    const character = readCharacter(event);
    updateMap((map) => {
      const pos = findCharacterPosition(map, character);
      const nextPos = movePosition(pos, "left");
      moveCharacterIfYouCan(map, pos, nextPos);
    });
    return {
      statusCode: 200,
      body: JSON.stringify(true),
    };
  } catch (error) {
    return handleError(error);
  }
};
