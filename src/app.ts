import express, { Application } from "express";

import cors from "cors";

import morgan from "morgan"

const AppConfig = (app: Application) =>{
    app.use(express.json())
    app.use(cors())
    app.use(morgan("dev"))

    // Error Handler
}

export default AppConfig;

// Use is what express has given you to construct a middleware.