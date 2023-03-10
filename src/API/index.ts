import { Router } from "express";

import homeroutes from "../Routes/homeroutes";

const router = Router()

router.get("/", homeroutes)

export default router