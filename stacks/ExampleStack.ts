import { Api, StackContext } from "sst/constructs";

export function ExampleStack({ stack }: StackContext) {
  // Add your first construct
  // Create the HTTP API
  const api = new Api(stack, "Api", {
    routes: {
      "GET /": "packages/functions/src/lambda.handler",
    },
  });

  // Show the URLs in the output
  stack.addOutputs({
    ApiEndpoint: api.url,
  });
}
