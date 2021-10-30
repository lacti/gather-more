import "source-map-support/register";

import { APIGatewayProxyHandlerV2 } from "aws-lambda";
import createOrLoadMap from "../../map/createOrLoadMap";

export const main: APIGatewayProxyHandlerV2 = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify(await createOrLoadMap()),
  };
};
