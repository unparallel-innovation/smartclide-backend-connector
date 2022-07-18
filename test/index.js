import SmartCLIDEBackendConnector from "../src/index.js";

let connector = await new SmartCLIDEBackendConnector("swaggerURL");

let token = "token";

let result = await connector.call(
    {
        operationId: "operationId",
        parameters: { userId: "userId" },
        requestBody: {
            id: "id",
            email: "email@email.com",
            team_id: "team_id"
        },
        token: token
    }
);

console.log(result);
