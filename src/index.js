import SwaggerClient from "swagger-client";

export default class SmartCLIDEBackendConnector{
    constructor(swaggerURL){
        return (
            async () => {
                this.swagger = await this.getSwagger(swaggerURL);
                this.operationIDs = {
                    "users": this.swagger.paths["/users/{userId}"].get.operationId,
                    "teams": this.swagger.paths["/teams/{teamId}"].get.operationId,
                    "ciManagers": this.swagger.paths["/ci_managers/{ciManagerId}"].get.operationId,
                    "deploymentPlatforms": this.swagger.paths["/deployment_platforms/{deploymentPlatformId}"].get.operationId,
                    "serviceRegistries": this.swagger.paths["/service_registries/{serviceRegistryId}"].get.operationId,
                    "gitCredentials": this.swagger.paths["/git_credentials/{gitCredentialsId}"].get.operationId,
                    "services": this.swagger.paths["/services/{serviceId}"].get.operationId,
                    "workflows": this.swagger.paths["/workflows/{workflowId}"].get.operationId,
                    "deployments": this.swagger.paths["/deployments/{deploymentId}"].get.operationId
                };
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
            operationId: input.operationID,
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

    async exists(entity, id, token){
        let input = {
            operationID: this.operationIDs[entity],
            parameters: { userId: id },
            token: token
        };

        let response = await this.call(input);

        return response.body?.id === id;
    }
}
