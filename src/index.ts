import express, { Application } from "express";

import cors from "cors";

const port: number = 3500;

const app: Application = express()

app.listen(port, () =>{
    console.log("");
    console.log("Server is running")
})