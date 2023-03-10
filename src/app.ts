import express, { Application } from "express";

import cors from "cors";

import morgan from "morgan"

const AppConfig = (app: Application) =>{
    app.use(express.json())
    app.use(cors())
    app.use(morgan("dev"))
}

export default AppConfig