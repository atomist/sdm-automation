/*
 * Copyright © 2018 Atomist, Inc.
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
    automationClientInstance,
    Configuration,
} from "@atomist/automation-client";
import { ApolloGraphClient } from "@atomist/automation-client/graph/ApolloGraphClient";
import {
    RegistrationConfirmation,
} from "@atomist/automation-client/internal/transport/websocket/WebSocketRequestProcessor";
import * as exp from "express";
import * as _ from "lodash";
import {
    SdmGoals,
    SdmGoalSet,
    SdmGoalSetBadge,
} from "../typings/types";

// tslint:disable:max-line-length
const Logo = "data:image/png;base64,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";

export async function configureBadgeRoute(config: Configuration): Promise<Configuration> {
    config.http.customizers = [(express: exp.Express) => {
        express.get("/:team/:owner/:repo/:token", async (req, res, next) => {
            const team = req.params.team;
            const token = req.params.token;

            const graphClient = new ApolloGraphClient(
                `${config.endpoints.graphql}/${team}`,
                // tslint:disable:max-line-length
                { Authorization: `Bearer ${((automationClientInstance().webSocketHandler as any).registration as RegistrationConfirmation).jwt}`});

            const badge = await graphClient.query<SdmGoalSetBadge.Query, SdmGoalSetBadge.Variables>({
                name: "sdmGoalSetBadge",
                variables: {
                    token: [token],
                },
            });

            if (badge && badge.SdmGoalSetBadge && badge.SdmGoalSetBadge.length > 0) {
                const repo = badge.SdmGoalSetBadge[0].repo;
                const goalSet = await graphClient.query<SdmGoalSet.Query, SdmGoalSet.Variables>({
                    name: "sdmGoalSet",
                    variables: {
                        owner: [repo.owner],
                        repo: [repo.name],
                        providerId: [repo.providerId],
                    },
                });

                if (goalSet && goalSet.SdmGoal && goalSet.SdmGoal.length > 0) {
                    const goalSetId = goalSet.SdmGoal[0].goalSetId;
                    const goals = (await graphClient.query<SdmGoals.Query, SdmGoals.Variables>({
                        name: "sdmGoals",
                        variables: {
                            goalSetId: [goalSetId],
                        },
                    })).SdmGoal;

                    const filteredGoals = [];
                    _.forEach(_.groupBy(goals,
                        g => `${g.environment}-${g.name}`), v => {
                        // using the ts property might not be good enough but let's see
                        filteredGoals.push(_.maxBy(v, "ts"));
                    });

                    let state;
                    let color;
                    if (filteredGoals.some(g => g.state === "failure")) {
                        state = "failure";
                        color = "red";
                    } else if (filteredGoals.some(g => g.state === "waiting_for_approval")) {
                        state = "waiting for approval";
                        color = "yellowgreen";
                    } else if (filteredGoals.some(g => g.state === "in_process")) {
                        state = "in process";
                        color = "yellow";
                    } else if (filteredGoals.some(g => g.state === "requested")) {
                        state = "requested";
                        color = "lightgrey";
                    } else if (filteredGoals.some(g => g.state === "planned")) {
                        state = "planned";
                        color = "lightgrey";
                    } else if (filteredGoals.some(g => g.state === "success")) {
                        state = "success";
                        color = "brightgreen";
                    }

                    const fu =
                        `https://img.shields.io/badge/goals-${state}-${color}.svg?link=https://atomist.com&logo=${Logo}`;
                    res.status(302).redirect(fu);
                    return next();
                }
                res.sendStatus(404);
                return next();
            } else {
                res.sendStatus(404);
                return next();
            }
        });
    }];
    return config;
}
