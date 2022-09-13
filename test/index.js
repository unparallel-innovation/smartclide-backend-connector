import SmartCLIDEBackendConnector from "../src/index.js";

let connector = await new SmartCLIDEBackendConnector("swaggerURL");

let token = "token";

let result = await connector.call(
    {
        operationID: "operationID",
        parameters: { userId: "userID" },
        requestBody: {
            id: "id",
            email: "email@email.com",
            team_id: "team_id"
        },
        token: token
    }
);

let exists = await connector.exists("entity", "id", token);

console.log(exists);
