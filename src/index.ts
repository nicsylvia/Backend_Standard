import express, { Application } from "express";

import  AppConfig  from "./app";
import DBconfig from "./Config/DB";

import { environmentVariables } from "./Config/environmentVariables";

const port = environmentVariables.port;

const app: Application = express()
AppConfig(app)
DBconfig();

app.listen(port, () =>{
    console.log("");
    console.log("Server is up and running on port", port)
})