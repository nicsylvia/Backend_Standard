import express, { Application } from "express";

import cors from "cors";

export const AppConfig = (app: Application) =>{
    app.use(express.json())
    app.use(cors())
}