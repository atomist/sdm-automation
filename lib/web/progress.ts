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

export async function configureProgressBarRoute(config: Configuration): Promise<Configuration> {
    config.http.customizers.push((express: exp.Express) => {
        express.get("/progress/:state/:tick", progressRequestHandler(config));
    });
    return config;
}

function progressRequestHandler(config: Configuration): exp.RequestHandler {
    return async (req, res, next) => {
        const state = req.params.state;
        const tick = req.params.tick;

        const canvas = Canvas.createCanvas(75, 75);
        const ctx = canvas.getContext("2d");

        let color;
        let image;
        switch (state) {
            case "canceled":
                color = "#9d9d9d";
                image = await Canvas.loadImage(path.join(__dirname, "images", "atomist_build_canceled.png"));
                break;
            case "stopped":
                color = "#D0BB3A";
                image = await Canvas.loadImage(path.join(__dirname, "images", "atomist_build_stopped.png"));
                break;
            case "in_process":
                color = "#D0BB3A";
                image = await Canvas.loadImage(path.join(__dirname, "images", "atomist_build_started.png"));
                break;
            case "requested":
            case "planned":
                color = "#D0BB3A";
                image = await Canvas.loadImage(path.join(__dirname, "images", "atomist_build_requested.png"));
                break;
            case "failure":
                color = "#D94649";
                image = await Canvas.loadImage(path.join(__dirname, "images", "atomist_build_failed.png"));
                break;
            case "waiting_for_approval":
            case "approved":
                color = "#45B254";
                image = await Canvas.loadImage(path.join(__dirname, "images", "atomist_build_approval.png"));
                break;
            case "waiting_for_pre_approval":
            case "pre_approved":
                color = "#D0BB3A";
                image = await Canvas.loadImage(path.join(__dirname, "images", "atomist_build_preapproval.png"));
                break;
            default:
                color = "#45B254";
                image = await Canvas.loadImage(path.join(__dirname, "images", "atomist_build_passed.png"));
                break;
        }

        ctx.fillStyle = color;
        roundRectangle(ctx, 61, 10, 12, 12, 2);
        ctx.fill();
        
        ctx.drawImage(image, 58, 7, 18, 18);

        ctx.fillStyle = "#dfdfdf";
        ctx.fillRect(0, 10, 58, 1);
        ctx.fillRect(0, 21, 58, 1);
        ctx.fillRect(0, 10, 1, 12);
        ctx.fillRect(58, 10, 1, 12);

        ctx.fillStyle = color;
        roundRectangle(ctx, 2, 12, Math.round(55 * tick), 8, 2);
        ctx.fill();

        const stream = canvas.createPNGStream();
        res.contentType("image/png");
        res.type("png");
        stream.pipe(res);
    };
}

function roundRectangle(ctx, x, y, w, h, r) {
    if (w < 2 * r) {
        r = w / 2;
    }
    if (h < 2 * r) {
        r = h / 2;
    }
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.arcTo(x + w, y, x + w, y + h, r);
    ctx.arcTo(x + w, y + h, x, y + h, r);
    ctx.arcTo(x, y + h, x, y, r);
    ctx.arcTo(x, y, x + w, y, r);
    ctx.closePath();
    return ctx;
}
