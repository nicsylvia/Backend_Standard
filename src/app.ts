import express, { Application, NextFunction, Request, Response } from "express";

import cors from "cors";

import morgan from "morgan"
import { ErrorHandler } from "./Middlewares/ErrorHandler";
import { AppError, HTTPCODES } from "./Utils/AppError";

import api from "./API/index"

const AppConfig = (app: Application) =>{
    app.use(express.json())
    app.use(cors())
    app.use(morgan("dev"))

    // Routes in app:
    app.use("/api", api)

    // Routes that does not exist
    app.all("*", (req: Request, res: Response, next: NextFunction) =>{
        next(
            new AppError({
                message: `This route, ${req.originalUrl} is not found`,
                httpcode: HTTPCODES.NOT_FOUND
            })
        )
    })

    // Error Handler
    app.use(ErrorHandler)
}

export default AppConfig;

// Use is what express has given you to construct a middleware.