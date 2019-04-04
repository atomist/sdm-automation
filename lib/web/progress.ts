import { Configuration } from "@atomist/automation-client";
import * as Canvas from "canvas";
import * as exp from "express";

export async function configureProgressBarRoute(config: Configuration): Promise<Configuration> {
    config.http.customizers = [(express: exp.Express) => {
        express.get("/progress/:state/:tick", progressRequestHandler(config));
    }];
    return config;
}

function progressRequestHandler(config: Configuration): exp.RequestHandler {
    return async (req, res, next) => {
        const state = req.params.state;
        const tick = req.params.tick;

        const canvas = Canvas.createCanvas(75, 75);
        const ctx = canvas.getContext("2d");

        let color;
        switch (state) {
            case "canceled":
                color = "#9d9d9d";
                break;
            case "pending":
                color = "#cccc00";
                break;
            case "error":
                color = "#D94649";
                break;
            default:
                color = "#45B254";
                break;
        }

        ctx.fillStyle = "#9d9d9d";
        ctx.fillRect(0, 10, 75, 1);
        ctx.fillRect(0, 23, 75, 1);
        ctx.fillRect(0, 10, 1, 14);
        ctx.fillRect(74, 10, 1, 14);

        ctx.fillStyle = color;
        // ctx.fillRect(2, 12, Math.round(71 * tick), 10);
        roundRectangle(ctx, 2, 12, Math.round(71 * tick), 10, 2);
        ctx.fill();
        
        const stream = canvas.createPNGStream();
        res.contentType("image/png");
        res.type("png");
        stream.pipe(res);
    };
}

function roundRectangle(ctx, x, y, w, h, r) {
    if (w < 2 * r) r = w / 2;
    if (h < 2 * r) r = h / 2;
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.arcTo(x + w, y, x + w, y + h, r);
    ctx.arcTo(x + w, y + h, x, y + h, r);
    ctx.arcTo(x, y + h, x, y, r);
    ctx.arcTo(x, y, x + w, y, r);
    ctx.closePath();
    return ctx;
}
