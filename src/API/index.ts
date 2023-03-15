import { Router } from "express";

import homeroutes from "../Routes/homeroutes";

import Authroutes from "../Routes/AuthRoutes"

const router = Router()

// router.get("/", homeroutes)

router.use("/", Authroutes)

export default router