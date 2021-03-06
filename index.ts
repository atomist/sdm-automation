/*
 * Copyright © 2020 Atomist, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {
    Configuration,
    GraphQL,
} from "@atomist/automation-client";
import { configureBadgeRoute } from "./lib/web/badge";
import { configureProgressBarRoute } from "./lib/web/progress";
import { configureProgressBarRouteV2 } from "./lib/web/progressV2";

/**
 * Automation Client that registers the global SDM types
 */
export const configuration: Configuration = {
    ingesters: [
        GraphQL.ingester({ path: "./lib/graphql/ingester/commitIssueRelationship" }),
        GraphQL.ingester({ path: "./lib/graphql/ingester/deployment" }),
        GraphQL.ingester({ path: "./lib/graphql/ingester/issueRelationship" }),

        GraphQL.ingester({ path: "./lib/graphql/ingester/sdmGoal" }),
        GraphQL.ingester({ path: "./lib/graphql/ingester/sdmGoalSet" }),
        GraphQL.ingester({ path: "./lib/graphql/ingester/sdmGoalDisplay" }),
        GraphQL.ingester({ path: "./lib/graphql/ingester/sdmBuildIdentifier" }),
        GraphQL.ingester({ path: "./lib/graphql/ingester/sdmDeployEnablement" }),
        GraphQL.ingester({ path: "./lib/graphql/ingester/sdmVersion" }),
        GraphQL.ingester({ path: "./lib/graphql/ingester/sdmGoalSetBadge" }),
        GraphQL.ingester({ path: "./lib/graphql/ingester/sdmPreference" }),
        GraphQL.ingester({ path: "./lib/graphql/ingester/sdmRepoProvenance" }),

        GraphQL.ingester({ path: "./lib/graphql/ingester/policyLog" }),
        GraphQL.ingester({ path: "./lib/graphql/ingester/policyCompliance" }),
        GraphQL.ingester({ path: "./lib/graphql/ingester/policyTargetStream" }),
        GraphQL.ingester({ path: "./lib/graphql/ingester/policyTarget" }),

        GraphQL.ingester({ path: "./lib/graphql/ingester/lifecycleAttachment.graphql" }),

    ],
    postProcessors: [
        configureProgressBarRoute,
        configureProgressBarRouteV2,
        configureBadgeRoute,
    ],
};
