import { Configuration } from "@atomist/automation-client";
import { ingester } from "@atomist/automation-client/graph/graphQL";

export const configuration: Configuration = {
    ingesters: [
        ingester("sdmGoal"),
        ingester("sdmBuildIdentifier"),
        ingester("sdmDeployEnablement"),
        ingester("sdmVersion"),
    ],
};
