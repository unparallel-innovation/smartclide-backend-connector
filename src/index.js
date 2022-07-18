import SwaggerClient from "swagger-client";

export default class SmartCLIDEBackendConnector{
    constructor(swaggerURL){
        return (
            async () => {
                this.swagger = await this.getSwagger(swaggerURL);
                return this;
            }
        )();
    }

    async getSwagger(swaggerURL){
        let response = await SwaggerClient.resolve( { url: swaggerURL });
        return response.spec;
    }

    async call(input){
        let config = {
            spec: this.swagger,
            operationId: input.operationId,
            parameters: input.parameters,
            requestBody: input.requestBody,
            securities: {
                authorized: {
                    BearerAuth: input.token
                }
            }
        };

        return await SwaggerClient.execute(config);
    }
}
