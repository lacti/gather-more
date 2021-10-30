import "source-map-support/register";

import { APIGatewayProxyHandlerV2 } from "aws-lambda";
import resetMap from "../../map/resetMap";

export const main: APIGatewayProxyHandlerV2 = async () => {
  await resetMap();
  return {
    statusCode: 200,
    body: JSON.stringify(true),
  };
};
