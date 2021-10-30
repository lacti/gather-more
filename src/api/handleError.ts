import { APIGatewayProxyResultV2 } from "aws-lambda";
import ApiError from "./ApiError";

export default function handleError(error: Error): APIGatewayProxyResultV2 {
  if (error instanceof ApiError) {
    return {
      statusCode: error.statusCode,
      body: error.body,
    };
  }
  console.error({ error }, "Error occurred in API");
  return {
    statusCode: 500,
    body: error.message,
  };
}
