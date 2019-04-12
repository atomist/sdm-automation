/*
 * Copyright © 2019 Atomist, Inc.
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

import { Configuration } from "@atomist/automation-client";
import * as Canvas from "canvas";
import * as exp from "express";
import * as path from "path";

const Images = {
    canceled: undefined,
    stopped: undefined,
    inProcess: undefined,
    requested: undefined,
    failed: undefined,
    approval: undefined,
    preApproval: undefined,
    success: undefined,
}

export async function configureProgressBarRouteV2(config: Configuration): Promise<Configuration> {

    Canvas.registerFont(path.join(__dirname, "fonts", "Lato-Regular.ttf"), { family: "Lato" });
    Canvas.registerFont(path.join(__dirname, "fonts", "Lato-Bold.ttf"), { family: "Lato", weight: "bold" });

    Images.canceled = await Canvas.loadImage(path.join(__dirname, "images", "v2", "atomist_build_canceled.png"));
    Images.stopped = await Canvas.loadImage(path.join(__dirname, "images", "v2", "atomist_build_stopped.png"));
    Images.inProcess = await Canvas.loadImage(path.join(__dirname, "images", "v2", "atomist_build_started.png"));
    Images.requested = await Canvas.loadImage(path.join(__dirname, "images", "v2", "atomist_build_requested.png"));
    Images.failed = await Canvas.loadImage(path.join(__dirname, "images", "v2", "atomist_build_failed.png"));
    Images.approval = await Canvas.loadImage(path.join(__dirname, "images", "v2", "atomist_build_approval.png"));
    Images.preApproval = await Canvas.loadImage(path.join(__dirname, "images", "v2", "atomist_build_preapproval.png"));
    Images.success = await Canvas.loadImage(path.join(__dirname, "images", "v2", "atomist_build_passed.png"));

    config.http.customizers.push((express: exp.Express) => {
        express.get("/v2/progress/:state/:current/:total", progressRequestHandler(config));
    });

    return config;
}

function progressRequestHandler(config: Configuration): exp.RequestHandler {
    return async (req, res) => {
        const state = req.params.state;
        const current = req.params.current;
        const total = req.params.total;

        const canvas = Canvas.createCanvas(75, 75);
        const ctx = canvas.getContext("2d");

        let color;
        let image;
        let label;
        switch (state) {
            case "canceled":
                color = "#B5B5B5";
                label = "Canceled";
                image = Images.canceled;
                break;
            case "stopped":
                color = "#D7B958";
                label = "Stopped";
                image = Images.stopped;
                break;
            case "in_process":
                color = "#2A7D7D";
                label = "Running";
                image = Images.inProcess;
                break;
            case "requested":
            case "planned":
                color = "#D7B958";
                label = "Planning";
                image = Images.requested;
                break;
            case "failure":
                color = "#BC3D33";
                label = "Failed";
                image = Images.failed;
                break;
            case "waiting_for_approval":
            case "approved":
                color = "#D7B958";
                label = "Waiting";
                image = Images.approval;
                break;
            case "waiting_for_pre_approval":
            case "pre_approved":
                color = "#D7B958";
                label = "Waiting";
                image = Images.preApproval
                break;
            default:
                color = "#37A745";
                label = "Completed";
                image = Images.success;
                break;
        }

        ctx.drawImage(image, (75 - 18) / 2, 12, 18, 18);

        ctx.strokeStyle = "#9d9d9d";
        ctx.beginPath();
        ctx.arc(37.5, 30, 28, 0 * Math.PI, 2 * Math.PI);
        ctx.stroke();

        const rate = +(current / total).toFixed(2) * 2;
        let start = 1.5;
        let angle = rate - 0.5;
        if (angle < 0) {
            angle = 2 + angle;
        } else if (angle === 1.5) {
            start = 0;
            angle = 2;
        }

        ctx.strokeStyle = color;
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.arc(37.5, 30, 28, start * Math.PI, angle * Math.PI);
        ctx.stroke();

        const tick = `${current}/${total}`;
        ctx.fillStyle = "#767676";
        ctx.font = `10px "Lato" bold`;
        let text = ctx.measureText(tick);
        let w = text.width;
        ctx.fillText(tick, (75 - w) / 2, 43);

        ctx.font = `10px "Lato"`;
        text = ctx.measureText(label);
        w = text.width;
        ctx.fillText(label, (75 - w) / 2, 71);

        const stream = canvas.createPNGStream({
            compressionLevel: 0,
            resolution: 300,
        });
        res.contentType("image/png");
        res.type("png");
        stream.pipe(res);
    };
}